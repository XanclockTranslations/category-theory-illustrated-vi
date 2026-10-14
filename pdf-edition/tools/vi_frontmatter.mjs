import fs from 'node:fs';
import path from 'node:path';
import { editionDir, hash, normalizedSource, sourceProjection } from './source.mjs';

export function loadVietnameseFrontmatter(acceptedSource, md, lock) {
  const inputHashes = {};
  const read = relative => {
    const target = path.resolve(editionDir, relative);
    if (!target.startsWith(editionDir + path.sep)) throw new Error('Translation input escapes pdf-edition.');
    const content = normalizedSource(fs.readFileSync(target));
    inputHashes[relative] = hash(content);
    return content;
  };
  const config = JSON.parse(read('translations/vi/frontmatter.json'));
  if (config.sourceRevision !== lock.upstreamRef || config.language !== 'vi' ||
      config.stopBefore !== '_chapters/01_set.md' ||
      JSON.stringify(Object.keys(config.chapterSources)) !== '["_chapters/00_about.md"]') {
    throw new Error('This review build must translate only the material before Chapter 1 from the accepted source.');
  }
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
  const chapters = acceptedSource.chapters.filter(chapter => config.chapterSources[chapter.file]).map(chapter => ({
    ...chapter, translationFile: config.chapterSources[chapter.file],
    content: sourceProjection(read(config.chapterSources[chapter.file]))
  }));
  const aboutHeadings = md.parse(chapters[0].content, {}).filter(token => token.type === 'heading_open');
  const sourceAboutHeadings = outline.filter(heading => heading.chapterIndex === 0);
  if (aboutHeadings.length !== sourceAboutHeadings.length || aboutHeadings.some((token, i) => Number(token.tag.slice(1)) !== sourceAboutHeadings[i].level)) {
    throw new Error('Translated introduction headings differ in number or level from the accepted source.');
  }
  const publicationTokens = md.parse(read(config.publicationFile), {});
  const publicationHeadings = publicationTokens.filter(token => token.type === 'heading_open');
  if (publicationHeadings.length !== 1) throw new Error('The edition notice must have one title.');
  publicationHeadings[0].attrSet('id', 'edition-notice');
  const publication = md.renderer.render(publicationTokens, md.options, {});
  return {
    config, publication, inputHashes,
    source: { ...acceptedSource, chapters, imageRefs: [] },
    tocHeadings: expected.map(heading => ({ ...heading, title: entries.get(heading.id).title })),
    review: { scope: 'cover-through-introduction', stopBefore: config.stopBefore,
      status: config.status, translatedSources: chapters.map(chapter => chapter.file),
      contentsEntryCount: expected.length, futureContentsEntryCount: expected.filter(heading => heading.chapterIndex > 0).length,
      acceptedSourceRevision: lock.upstreamRef, acceptedSourceHashes: Object.fromEntries(chapters.map(chapter => [chapter.file, acceptedSource.hashes[chapter.file]])),
      translationInputHashes: inputHashes }
  };
}
