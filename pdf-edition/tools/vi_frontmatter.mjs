import fs from 'node:fs';
import path from 'node:path';
import { editionDir, hash, normalizedSource, sourceProjection, assetPath } from './source.mjs';

export function loadVietnameseFrontmatter(acceptedSource, md, lock, through = null) {
  const inputHashes = {};
  const read = relative => {
    const target = path.resolve(editionDir, relative);
    if (!target.startsWith(editionDir + path.sep)) throw new Error('Translation input escapes pdf-edition.');
    const content = normalizedSource(fs.readFileSync(target));
    inputHashes[relative] = hash(content);
    return content;
  };
  const config = JSON.parse(read('translations/vi/frontmatter.json'));
  const selectedFiles = Object.keys(config.chapterSources);
  const acceptedFiles = acceptedSource.chapters.map(c => c.file);
  if (config.sourceRevision !== lock.upstreamRef || config.language !== 'vi' ||
      !selectedFiles.length || JSON.stringify(selectedFiles) !== JSON.stringify(acceptedFiles.slice(0, selectedFiles.length)))
    throw new Error('Vietnamese chapters must form a consecutive prefix of the locked source.');
  const last = through ?? selectedFiles.length - 1;
  if (!Number.isInteger(last) || last < 0 || last >= selectedFiles.length)
    throw new Error('Requested Vietnamese chapter is not yet accepted in the translation manifest.');
  const outline = [];
  for (const [chapterIndex, chapter] of acceptedSource.chapters.entries()) {
    const tokens = md.parse(chapter.content, {});
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type === 'heading_open') outline.push({
        id: `chapter-${chapterIndex}-heading-${outline.length}`,
        title: tokens[i + 1].content, level: Number(tokens[i].tag.slice(1)), chapterIndex
      });
    }
  }
  const expected = outline.filter(h => h.level <= 2);
  const contents = JSON.parse(read(config.contentsFile));
  if (contents.sourceRevision !== lock.upstreamRef || contents.entries.length !== expected.length) {
    throw new Error('Vietnamese contents do not cover the complete accepted English contents.');
  }
  const entries = new Map(contents.entries.map(entry => [entry.id, entry]));
  if (entries.size !== expected.length) throw new Error('Duplicate Vietnamese contents IDs.');
  for (const heading of expected) {
    const entry = entries.get(heading.id);
    if (!entry || entry.source !== heading.title || typeof entry.title !== 'string' || !entry.title.trim()) {
      throw new Error(`Missing or stale Vietnamese contents translation: ${heading.id}`);
    }
  }
  const chapters = acceptedSource.chapters.slice(0, last + 1).map(chapter => ({
    ...chapter, translationFile: config.chapterSources[chapter.file],
    content: sourceProjection(read(config.chapterSources[chapter.file]))
  }));
  for (const [index, chapter] of chapters.entries()) {
    const actual = md.parse(chapter.content, {}).filter(token => token.type === 'heading_open');
    const original = outline.filter(heading => heading.chapterIndex === index);
    if (actual.length !== original.length || actual.some((token, i) => Number(token.tag.slice(1)) !== original[i].level))
      throw new Error(`Translated heading structure differs: ${chapter.file}`);
    const urls = text => [...text.matchAll(/!\[[\s\S]*?\]\(([^)]+)\)/g)].map(m => m[1]);
    if (JSON.stringify(urls(chapter.content)) !== JSON.stringify(urls(acceptedSource.chapters[index].content)))
      throw new Error(`Translated illustration sequence differs: ${chapter.file}`);
  }
  const imageRefs = chapters.flatMap(c => [...c.content.matchAll(/!\[[\s\S]*?\]\(([^)]+)\)/g)].map(m => ({chapter: c.file, url: m[1], file: assetPath(m[1])})));
  const diagramLabels = chapters.flatMap(c => {
    const file = `translations/vi/diagrams/${path.basename(c.file, '.md')}.json`;
    return fs.existsSync(path.join(editionDir, file)) ? JSON.parse(read(file)) : [];
  });
  const publicationTokens = md.parse(read(config.publicationFile), {});
  const publicationHeadings = publicationTokens.filter(token => token.type === 'heading_open');
  if (publicationHeadings.filter(t => t.tag === 'h1').length !== 1) throw new Error('The edition notice must have one main title.');
  publicationHeadings.forEach((token, i) => token.attrSet('id', i ? `edition-notice-${i}` : 'edition-notice'));
  const publication = md.renderer.render(publicationTokens, md.options, {});
  return {
    config, publication, inputHashes, diagramLabels,
    source: { ...acceptedSource, chapters, imageRefs },
    tocHeadings: expected.map(heading => ({ ...heading, title: entries.get(heading.id).title })),
    review: { scope: last ? `cover-through-chapter-${last}` : 'cover-through-introduction', stopBefore: acceptedFiles[last + 1] ?? null,
      status: config.status, translatedSources: chapters.map(chapter => chapter.file),
      contentsEntryCount: expected.length, futureContentsEntryCount: expected.filter(heading => heading.chapterIndex > last).length,
      acceptedSourceRevision: lock.upstreamRef, acceptedSourceHashes: Object.fromEntries(chapters.map(chapter => [chapter.file, acceptedSource.hashes[chapter.file]])),
      translationInputHashes: inputHashes }
  };
}
