import {
  PDFDocument, PDFName, PDFDict, PDFArray, PDFHexString,
  PDFString, PDFNumber,
} from 'pdf-lib';

const name = value => PDFName.of(value);

// Chromium currently writes /Dests directly in the catalog. Accept a PDF
// name tree too, so a browser implementation change does not break navigation.
function namedDestinations(document) {
  const result = new Map();
  const direct = document.catalog.lookupMaybe(name('Dests'), PDFDict);
  if (direct) {
    for (const [key, value] of direct.entries()) {
      result.set(key.decodeText(), document.context.lookup(value));
    }
  }
  const names = document.catalog.lookupMaybe(name('Names'), PDFDict);
  const tree = names?.lookupMaybe(name('Dests'), PDFDict);
  const visited = new Set();
  const visit = node => {
    if (!node || visited.has(node)) return;
    visited.add(node);
    const entries = node.lookupMaybe(name('Names'), PDFArray);
    if (entries) {
      for (let index = 0; index + 1 < entries.size(); index += 2) {
        const key = entries.lookup(index);
        if (!(key instanceof PDFString || key instanceof PDFHexString)) {
          throw new Error('PDF destination name tree contains a non-string key.');
        }
        result.set(key.decodeText(), entries.lookup(index + 1));
      }
    }
    const kids = node.lookupMaybe(name('Kids'), PDFArray);
    if (kids) for (let index = 0; index < kids.size(); index++) visit(kids.lookup(index, PDFDict));
  };
  visit(tree);
  return result;
}

function destinationArray(value) {
  if (value instanceof PDFArray) return value;
  if (value instanceof PDFDict) return value.lookupMaybe(name('D'), PDFArray);
  return undefined;
}

// Build normally supplies plainTitle from the parsed Markdown inline tokens.
// This fallback also makes the API useful for simple canonical heading lists.
// Keep mathematical notation readable rather than repeating MathJax's text,
// accessibility, and rendering layers in the bookmark label.
function plainHeading(heading) {
  if (heading.plainTitle != null) {
    const title = String(heading.plainTitle).replace(/\s+/g, ' ').trim();
    if (!title) throw new Error(`Empty PDF bookmark title for ${heading.id}.`);
    return title;
  }
  const title = String(heading.title ?? '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/\$+/g, '')
    .replace(/\\\((.*?)\\\)/g, '$1')
    .replace(/\\\[(.*?)\\\]/g, '$1')
    .replace(/\*\*|__|`/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
  if (!title) throw new Error(`Empty PDF bookmark title for ${heading.id}.`);
  return title;
}

function linkAnnotationCount(document) {
  let count = 0;
  for (const page of document.getPages()) {
    const annotations = page.node.lookupMaybe(name('Annots'), PDFArray);
    if (!annotations) continue;
    for (let index = 0; index < annotations.size(); index++) {
      const annotation = annotations.lookup(index, PDFDict);
      if (annotation.lookupMaybe(name('Subtype'), PDFName)?.decodeText() === 'Link') count++;
    }
  }
  return count;
}

function invariantSnapshot(document) {
  return {
    pageReferences: document.getPages().map(page => page.ref.toString()),
    destinations: [...namedDestinations(document)].map(([id, value]) => [id, value.toString()]),
    structureTree: document.catalog.get(name('StructTreeRoot'))?.toString() ?? null,
    markInfo: document.catalog.get(name('MarkInfo'))?.toString() ?? null,
    linkCount: linkAnnotationCount(document),
  };
}

/**
 * Replace Chromium's generated outline with the canonical source headings.
 *
 * No pages, named destinations, annotations, or tagged PDF structures change.
 * Every level 1–4 heading must resolve to an existing named destination: a
 * missing target fails the build instead of silently dropping a bookmark.
 * Metadata accepts title, author, subject, keywords, creator, producer, and
 * language. PDF strings use UTF-16 so Vietnamese and mathematical symbols can
 * be used by a later edition without a different navigation implementation.
 *
 * @param {Uint8Array|ArrayBuffer} bytes Browser-generated PDF bytes.
 * @param {{id:string,title?:string,plainTitle?:string,level:number}[]} headings
 * @param {object} metadata Optional PDF information dictionary fields.
 * @returns {Promise<{bytes:Uint8Array,bookmarkCount:number,pageCount:number,normalizationReport:object}>}
 */
export async function normalizePdfNavigation(bytes, headings, metadata = {}) {
  if (!Array.isArray(headings)) throw new TypeError('PDF headings must be an array.');
  const document = await PDFDocument.load(bytes, { updateMetadata: false });
  const original = invariantSnapshot(document);
  const destinations = namedDestinations(document);
  const pageReferences = new Set(original.pageReferences);
  const root = { children: [], dictionary: document.context.obj({ Type: name('Outlines') }) };
  root.reference = document.context.register(root.dictionary);
  const stack = [];
  const items = [];
  const ids = new Set();
  const omitted = [];

  for (const heading of headings) {
    const level = Number(heading.level);
    if (!Number.isInteger(level) || level < 1 || level > 4) {
      omitted.push({ id: heading.id, level: heading.level, reason: 'Outside outline levels 1–4' });
      continue;
    }
    const id = String(heading.id ?? '');
    if (!id || ids.has(id)) throw new Error(`Missing or duplicate PDF bookmark ID: ${id}.`);
    ids.add(id);
    const destination = destinationArray(destinations.get(id));
    if (!destination || !pageReferences.has(destination.get(0)?.toString())) {
      throw new Error(`Unresolved PDF bookmark destination: ${id}.`);
    }
    while (stack.length && stack.at(-1).level >= level) stack.pop();
    const parent = stack.at(-1) ?? root;
    const title = plainHeading(heading);
    const item = {
      id, level, title, children: [], parent,
      dictionary: document.context.obj({
        Title: PDFHexString.fromText(title),
        // Preserve the exact target array resolved by the canonical anchor.
        // Explicit destinations work with both catalog /Dests and /Names
        // trees, avoiding reader differences between name/string lookups.
        Dest: destination,
        Parent: parent.reference,
      }),
    };
    item.reference = document.context.register(item.dictionary);
    parent.children.push(item);
    stack.push(item);
    items.push(item);
  }

  const wire = parent => {
    if (!parent.children.length) return 0;
    parent.dictionary.set(name('First'), parent.children[0].reference);
    parent.dictionary.set(name('Last'), parent.children.at(-1).reference);
    let descendants = parent.children.length;
    parent.children.forEach((item, index) => {
      if (index > 0) item.dictionary.set(name('Prev'), parent.children[index - 1].reference);
      if (index + 1 < parent.children.length) item.dictionary.set(name('Next'), parent.children[index + 1].reference);
      descendants += wire(item);
    });
    // Positive counts expand all subsections on initial opening. A PDF reader
    // can collapse any chapter interactively without losing those bookmarks.
    parent.dictionary.set(name('Count'), PDFNumber.of(descendants));
    return descendants;
  };
  wire(root);
  if (items.length) document.catalog.set(name('Outlines'), root.reference);
  else document.catalog.delete(name('Outlines'));

  if (metadata.title != null) document.setTitle(String(metadata.title), { showInWindowTitleBar: true });
  if (metadata.author != null) document.setAuthor(String(metadata.author));
  if (metadata.subject != null) document.setSubject(String(metadata.subject));
  if (metadata.keywords != null) document.setKeywords(Array.isArray(metadata.keywords) ? metadata.keywords.map(String) : [String(metadata.keywords)]);
  if (metadata.creator != null) document.setCreator(String(metadata.creator));
  if (metadata.producer != null) document.setProducer(String(metadata.producer));
  if (metadata.language != null) document.catalog.set(name('Lang'), PDFString.of(String(metadata.language)));

  const normalizedBytes = await document.save();
  // Check the saved/reloaded PDF, not only the in-memory object graph. This
  // catches any serialization changes to pages, links, or PDF accessibility.
  const normalized = await PDFDocument.load(normalizedBytes, { updateMetadata: false });
  const preserved = invariantSnapshot(normalized);
  const invariantNames = Object.keys(original);
  const invariants = Object.fromEntries(invariantNames.map(key => [key, JSON.stringify(original[key]) === JSON.stringify(preserved[key])]));
  if (Object.values(invariants).some(value => !value)) {
    throw new Error(`PDF navigation normalization changed protected content: ${JSON.stringify(invariants)}.`);
  }

  return {
    bytes: normalizedBytes,
    bookmarkCount: items.length,
    pageCount: normalized.getPageCount(),
    normalizationReport: {
      bookmarkCount: items.length,
      topLevelBookmarkCount: root.children.length,
      namedDestinationCount: destinations.size,
      linkAnnotationCount: preserved.linkCount,
      tagged: preserved.structureTree !== null,
      invariants,
      omitted,
      bookmarks: items.map(item => ({ id: item.id, level: item.level, title: item.title })),
    },
  };
}
