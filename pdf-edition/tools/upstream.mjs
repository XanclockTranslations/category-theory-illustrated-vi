import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { editionDir, repoDir, config, collectSource, hash, normalizedSource, sourceConfig } from './source.mjs';

const git = (...args) => execFileSync('git', args, { cwd: repoDir, encoding: 'utf8' }).trim();
const mode = process.argv[2] ?? 'compare';
const ref = process.argv[3] ?? 'upstream/master';
if (mode === 'compare') {
  const candidate = git('rev-parse', ref);
  console.log(`Accepted source: ${config.upstreamRef}\nCandidate source: ${candidate}`);
  console.log(git('log', '--format=%h %aI %s', `${config.upstreamRef}..${candidate}`) || 'No newer commits in this local ref. Run git fetch upstream to refresh it.');
  const scope = ['_chapters', ...config.sourceNoticeFiles, ...(config.referenceEpubFile ? [config.referenceEpubFile] : [])];
  console.log(git('diff', '--stat', config.upstreamRef, candidate, '--', ...scope) || 'No changes to published content, notices, or the reference EPUB.');
  console.log(`\nReview full changes with:\ngit diff ${config.upstreamRef} ${candidate} -- _chapters ${config.sourceNoticeFiles.join(' ')}${config.referenceEpubFile ? ` "${config.referenceEpubFile}"` : ''}\n\nThis command does not fetch, merge, change the lock, or rebuild.`);
} else if (mode === 'accept') {
  const candidate = git('rev-parse', process.argv[3] ?? config.upstreamRef);
  const source = collectSource();
  // Ref acceptance must match the actual working files; local edits are not
  // mislabeled as an upstream revision.
  for (const [file, actual] of Object.entries(source.hashes)) {
    const committed = execFileSync('git', ['show', `${candidate}:${file}`], { cwd: repoDir });
    // All selected inputs are UTF-8 text (Markdown, SVG, HTML, YAML).
    // Canonical LF hashes make the lock portable across Git's CRLF checkouts.
    if (hash(normalizedSource(committed)) !== actual) throw new Error(`Working source does not match ${candidate}: ${file}`);
  }
  for (const [file, actual] of Object.entries(source.referenceHashes)) {
    const committed = execFileSync('git', ['show', `${candidate}:${file}`], { cwd: repoDir, maxBuffer: 64 * 1024 * 1024 });
    if (hash(committed) !== actual) throw new Error(`Working reference binary does not match ${candidate}: ${file}`);
  }
  const updated = { ...config, upstreamRef: candidate };
  fs.writeFileSync(path.join(editionDir, 'edition.json'), JSON.stringify(updated, null, 2) + '\n');
  const lock = {
    upstreamRef: candidate,
    upstreamDate: git('show', '-s', '--format=%aI', candidate),
    distribution: config.distribution,
    sourceConfig: sourceConfig(),
    sourceConfigHash: source.sourceConfigHash,
    hashMethod: 'SHA-256 of UTF-8 source with CRLF normalized to LF',
    license: config.licenseIdentifier ?? 'CC BY-NC 4.0',
    originalLicenseNotice: config.originalLicenseNotice ?? null,
    licenseEvidence: config.distribution === 'fuller' ? ['epub/title.txt', config.referenceEpubFile] : ['_layouts/default.html'],
    chapterCount: source.chapters.length,
    imageReferenceCount: source.imageRefs.length,
    uniqueImageCount: new Set(source.imageRefs.map(r => r.file)).size,
    fileHashes: source.hashes,
    referenceHashMethod: 'SHA-256 of raw reference file bytes, without text normalization',
    referenceFileHashes: source.referenceHashes
  };
  fs.writeFileSync(path.join(editionDir, 'source-lock.json'), JSON.stringify(lock, null, 2) + '\n');
  console.log(`Accepted ${candidate}; ${lock.chapterCount} chapters, ${lock.imageReferenceCount} image references, ${lock.uniqueImageCount} unique images.`);
} else {
  throw new Error('Usage: node tools/upstream.mjs compare [ref] | accept [reviewed-ref]');
}
