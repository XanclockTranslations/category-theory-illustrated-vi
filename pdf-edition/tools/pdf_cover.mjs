import { createHash } from 'node:crypto';
import {
  PDFDocument, PDFName, PDFArray, PDFRef, PDFRawStream, decodePDFRawStream,
} from 'pdf-lib';

const name = value => PDFName.of(value);
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const number = '[+-]?(?:\\d+\\.?\\d*|\\.\\d+)(?:[Ee][+-]?\\d+)?';
const textSetup = new RegExp(`^BT\\s+(/[^\\s/<>\\[\\](){}%]+)\\s+(${number})\\s+Tf\\s+(${number})\\s+(${number})\\s+(${number})\\s+(${number})\\s+(${number})\\s+(${number})\\s+Tm\\s+`);
const textBody = new RegExp(`^(?:(?:${number}\\s+${number}\\s+Td\\s+)?<[\\da-fA-F\\s]+>\\s+Tj\\s+)+ET$`);
const whitespace = character => /[\x00\t\n\f\r ]/.test(character);
const delimiter = character => whitespace(character) || /[()[\]<>/%{}]/.test(character);

// Scan PDF tokens rather than searching inside arbitrary bytes. Parentheses,
// comments, names and hex strings cannot accidentally introduce a BT/ET token.
function textBlocks(content) {
  const blocks = [];
  let position = 0;
  let start = null;
  while (position < content.length) {
    const character = content[position];
    if (whitespace(character)) { position++; continue; }
    if (character === '%') {
      while (position < content.length && !/[\r\n]/.test(content[position])) position++;
      continue;
    }
    if (character === '(') {
      let depth = 1;
      position++;
      while (position < content.length && depth) {
        if (content[position] === '\\') { position += 2; continue; }
        if (content[position] === '(') depth++;
        if (content[position] === ')') depth--;
        position++;
      }
      if (depth) throw new Error('Unterminated literal string in PDF cover content.');
      continue;
    }
    if (character === '<' && content[position + 1] !== '<') {
      const end = content.indexOf('>', position + 1);
      if (end < 0) throw new Error('Unterminated hex string in PDF cover content.');
      position = end + 1;
      continue;
    }
    if (character === '/') {
      position++;
      while (position < content.length && !delimiter(content[position])) position++;
      continue;
    }
    if (delimiter(character)) { position++; continue; }
    const tokenStart = position;
    while (position < content.length && !delimiter(content[position])) position++;
    const token = content.slice(tokenStart, position);
    if (token === 'BI') throw new Error('Inline PDF images are unsupported by the narrow cover-furniture filter.');
    if (token === 'BT') {
      if (start !== null) throw new Error('Nested BT operators in PDF cover content.');
      start = tokenStart;
    } else if (token === 'ET') {
      if (start === null) throw new Error('ET without BT in PDF cover content.');
      blocks.push({ start, end: position, content: content.slice(start, position) });
      start = null;
    }
  }
  if (start !== null) throw new Error('Unterminated text object in PDF cover content.');
  return blocks;
}

function contentReferences(page) {
  const contents = page.node.get(name('Contents'));
  if (!contents) return [];
  if (contents instanceof PDFRef) return [contents];
  if (contents instanceof PDFArray) {
    return Array.from({ length: contents.size() }, (_, index) => {
      const reference = contents.get(index);
      if (!(reference instanceof PDFRef)) throw new Error('PDF cover content streams must be indirect objects.');
      return reference;
    });
  }
  throw new Error('Unsupported PDF page Contents representation.');
}

function protectedSnapshot(document) {
  const pages = document.getPages();
  const keys = ['Dests', 'Names', 'StructTreeRoot', 'MarkInfo', 'Outlines', 'Lang'];
  return {
    pageReferences: pages.map(page => page.ref.toString()),
    pageContentsReferences: pages.map(page => page.node.get(name('Contents'))?.toString() ?? null),
    pageAnnotations: pages.map(page => page.node.get(name('Annots'))?.toString() ?? null),
    catalog: Object.fromEntries(keys.map(key => {
      const object = document.catalog.get(name(key));
      return [key, object ? document.context.lookup(object).toString() : null];
    })),
    otherPageStreams: pages.slice(1).map(page => contentReferences(page).map(reference => {
      const stream = document.context.lookup(reference);
      if (!(stream instanceof PDFRawStream)) throw new Error('Expected original raw content stream.');
      return { reference: reference.toString(), dictionary: stream.dict.toString(), sha256: digest(stream.contents) };
    })),
  };
}

/** Remove exactly the first-page Chromium running header and page number.
 * All cover artwork, page references, destinations, annotations and PDF tags
 * remain unchanged. This deliberately fails if Chromium's expected grammar
 * or furniture positioning changes; it never broadly deletes cover text.
 */
export async function removeCoverFurniture(bytes, metadata = {}) {
  const document = await PDFDocument.load(bytes, { updateMetadata: false });
  const pages = document.getPages();
  if (!pages.length) throw new Error('Cannot remove furniture from an empty PDF.');
  const original = protectedSnapshot(document);
  const cssHeight = pages[0].getHeight() / 0.75;
  const references = contentReferences(pages[0]);
  const otherReferences = new Set(pages.slice(1).flatMap(contentReferences).map(reference => reference.toString()));
  const edits = [];
  const removed = [];
  let retainedTextBlockCount = 0;

  for (const reference of references) {
    if (otherReferences.has(reference.toString())) throw new Error('Cover content stream is shared with another PDF page.');
    const stream = document.context.lookup(reference);
    if (!(stream instanceof PDFRawStream)) throw new Error('Expected Chromium cover content as a raw PDF stream.');
    const content = Buffer.from(decodePDFRawStream(stream).decode()).toString('latin1');
    const removals = [];
    for (const block of textBlocks(content)) {
      const setup = block.content.match(textSetup);
      if (!setup) { retainedTextBlockCount++; continue; }
      const [font, size, a, b, c, d, x, y] = setup.slice(1).map((value, index) => index === 0 ? value : Number(value));
      const header = Math.abs(size - 8) < 0.00001 && y >= 10 && y < 50;
      const footer = Math.abs(size - 9) < 0.00001 && y > cssHeight - 50 && y <= cssHeight;
      if (!(header || footer)) { retainedTextBlockCount++; continue; }
      if (a !== 1 || b !== 0 || c !== 0 || d !== -1 || !textBody.test(block.content.slice(setup[0].length))) {
        throw new Error('Unrecognized Chromium cover-furniture text grammar.');
      }
      const hexGlyphs = [...block.content.matchAll(/<([\da-fA-F\s]+)>\s+Tj/g)].map(match => match[1].replace(/\s/g, '')).join('');
      if ((header && hexGlyphs.length < 20) || (footer && hexGlyphs.length !== 4)) {
        throw new Error('Unexpected cover-furniture glyph count.');
      }
      removals.push(block);
      removed.push({ kind: header ? 'header' : 'footer', font, fontSize: size, x, y, stream: reference.toString() });
    }
    if (removals.length) {
      let cleaned = content;
      for (const block of removals.toReversed()) cleaned = cleaned.slice(0, block.start) + cleaned.slice(block.end);
      edits.push({ reference, stream, cleaned });
    }
  }
  if (removed.length !== 2 || removed.filter(item => item.kind === 'header').length !== 1 || removed.filter(item => item.kind === 'footer').length !== 1) {
    throw new Error(`Expected exactly one cover header and footer, found ${JSON.stringify(removed)}.`);
  }
  if (removed[0].font !== removed[1].font) throw new Error('Expected one shared Chromium furniture font.');

  for (const { reference, stream, cleaned } of edits) {
    const replacement = document.context.flateStream(Buffer.from(cleaned, 'latin1'));
    for (const [key, value] of stream.dict.entries()) {
      if (!['Filter', 'DecodeParms', 'Length'].includes(key.decodeText())) replacement.dict.set(key, value);
    }
    // Replace the stream at its existing reference. Pages and all navigation
    // targets retain their original object identities and numbering.
    document.context.assign(reference, replacement);
  }
  if (metadata.title != null) document.setTitle(String(metadata.title), { showInWindowTitleBar: true });
  if (metadata.author != null) document.setAuthor(String(metadata.author));
  if (metadata.subject != null) document.setSubject(String(metadata.subject));
  const result = await document.save();
  const reopened = await PDFDocument.load(result, { updateMetadata: false });
  const after = protectedSnapshot(reopened);
  const invariants = Object.fromEntries(Object.keys(original).map(key => [key, JSON.stringify(original[key]) === JSON.stringify(after[key])]));
  if (Object.values(invariants).some(value => !value)) throw new Error(`Cover furniture removal changed protected PDF content: ${JSON.stringify(invariants)}.`);
  return { bytes: result, report: { removedTextBlocks: removed, removedCount: 2, retainedCoverTextBlockCount: retainedTextBlockCount, pageCount: pages.length, invariants } };
}
