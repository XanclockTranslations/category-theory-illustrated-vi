import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

export const editionDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const repoDir = path.resolve(editionDir, '..');
export const config = JSON.parse(fs.readFileSync(path.join(editionDir, 'edition.json'), 'utf8'));
export const hash = data => crypto.createHash('sha256').update(data).digest('hex');
export const normalizedSource = data => new TextDecoder('utf-8', { fatal: true }).decode(data instanceof Uint8Array ? data : Buffer.from(data, 'utf8')).replace(/\r\n/g, '\n');

// Jekyll executes Liquid even inside HTML comments. Evaluate it first, then
// discard comments. Unknown conditions fail rather than leak extra content.
export function sourceProjection(source, distribution = config.distribution) {
  if (!['web', 'print', 'fuller'].includes(distribution)) throw new Error(`Unsupported source distribution: ${distribution}`);
  source = normalizedSource(source).replace(/^\uFEFF/, '').replace(/^---\n[\s\S]*?\n---\n/, '');
  const stack = [true];
  let result = '';
  let cursor = 0;
  const tags = /\{%\s*([\s\S]*?)\s*%\}/g;
  for (const match of source.matchAll(tags)) {
    if (stack.at(-1)) result += source.slice(cursor, match.index);
    const expression = match[1].trim();
    const condition = expression.match(/^if\s+site\.distribution\s*(==|!=)\s*['"](\w+)['"]$/);
    if (condition) {
      if (condition[2] !== 'print') throw new Error(`Unsupported edition condition: ${expression}`);
      // The author EPUB retains the union of both published edition branches.
      // Its Pandoc export removes the commented Liquid tags without executing
      // them. Fuller therefore retains both branches, not just print mode.
      const equal = distribution === condition[2];
      const selected = distribution === 'fuller' || (condition[1] === '==' ? equal : !equal);
      stack.push(stack.at(-1) && selected);
    } else if (expression === 'endif') {
      if (stack.length === 1) throw new Error('Unmatched Liquid endif');
      stack.pop();
    } else {
      throw new Error(`Unsupported Liquid expression: ${expression}`);
    }
    cursor = match.index + match[0].length;
  }
  if (stack.length !== 1) throw new Error('Unclosed Liquid condition');
  result += source.slice(cursor);
  result = result.replace(/<!--[\s\S]*?-->/g, '');
  if (/\{%|\{\{/.test(result)) throw new Error('Unresolved template expression');
  return result;
}

export const webProjection = source => sourceProjection(source, 'web');

export function sourceConfig() {
  return {
    distribution: config.distribution,
    chapterFiles: config.chapterFiles,
    sourceNoticeFiles: config.sourceNoticeFiles,
    referenceEpubFile: config.referenceEpubFile ?? null,
    licenseUrl: config.licenseUrl,
    licenseIdentifier: config.licenseIdentifier ?? 'CC BY-NC 4.0',
    originalLicenseNotice: config.originalLicenseNotice ?? null
  };
}

export function assetPath(url) {
  if (/^(https?:|data:)/i.test(url)) throw new Error(`Remote image is not part of the locked source: ${url}`);
  const clean = decodeURIComponent(url.split(/[?#]/)[0]);
  // Each web chapter has its own URL directory; its ../ links point into
  // _chapters. Never resolve these against the eventual output directory.
  const target = path.posix.normalize(path.posix.join('_chapters', clean.replace(/^\.\.\//, '')));
  if (!target.startsWith('_chapters/')) throw new Error(`Image escapes chapter assets: ${url}`);
  if (!fs.existsSync(path.join(repoDir, target))) throw new Error(`Missing source image: ${target}`);
  return target;
}

export function collectSource() {
  const chapters = config.chapterFiles.map(file => ({ file, raw: fs.readFileSync(path.join(repoDir, file), 'utf8') }));
  for (const c of chapters) c.content = sourceProjection(c.raw);
  const imageRefs = chapters.flatMap(c => [...c.content.matchAll(/!\[[\s\S]*?\]\(([^)]+)\)/g)].map(m => ({ chapter: c.file, url: m[1], file: assetPath(m[1]) })));
  const files = [...new Set([...config.chapterFiles, ...config.sourceNoticeFiles, ...imageRefs.map(r => r.file)])].sort();
  const hashes = Object.fromEntries(files.map(file => [file, hash(normalizedSource(fs.readFileSync(path.join(repoDir, file))))]));
  const referenceHashes = {};
  if (config.referenceEpubFile) {
    const target = path.resolve(repoDir, config.referenceEpubFile);
    if (!target.startsWith(repoDir + path.sep)) throw new Error('Reference EPUB escapes repository.');
    referenceHashes[config.referenceEpubFile] = hash(fs.readFileSync(target));
  }
  return { chapters, imageRefs, hashes, referenceHashes, sourceConfigHash: hash(JSON.stringify(sourceConfig())) };
}

export function verifyLock(source) {
  const lockPath = path.join(editionDir, 'source-lock.json');
  if (!fs.existsSync(lockPath)) throw new Error('Missing source-lock.json. Review the selected upstream revision and run upstream:accept.');
  const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
  if (lock.upstreamRef !== config.upstreamRef || lock.distribution !== config.distribution || lock.sourceConfigHash !== source.sourceConfigHash) throw new Error('Edition source configuration differs from its source lock. Review and accept it intentionally.');
  if (JSON.stringify(lock.referenceFileHashes ?? {}) !== JSON.stringify(source.referenceHashes)) throw new Error('Reference EPUB changed since acceptance; its raw binary hash must be reviewed.');
  if (JSON.stringify(lock.fileHashes) !== JSON.stringify(source.hashes)) {
    const changed = [...new Set([...Object.keys(lock.fileHashes), ...Object.keys(source.hashes)])].filter(f => lock.fileHashes[f] !== source.hashes[f]);
    throw new Error(`Source changed since acceptance. Review and accept intentionally before rebuilding: ${changed.join(', ')}`);
  }
  return lock;
}
