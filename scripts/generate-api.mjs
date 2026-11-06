// Generates the SDK API reference as Starlight markdown pages.
//
// 1. Runs TypeDoc (typedoc-plugin-markdown) against the client SDK source,
//    which must be checked out at `../client-sdk-js`.
// 2. Post-processes the output: adds the frontmatter Starlight requires and
//    strips `.md` extensions from internal links.
import { execSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, basename, relative } from 'node:path';

const OUT_DIR = 'src/content/docs/sdk/api';

/** Recursively collect markdown files under a directory. */
function collect(dir, acc = []) {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			collect(full, acc);
		} else if (entry.endsWith('.md')) {
			acc.push(full);
		}
	}
	return acc;
}

/** Derive a page title from the generated file path. */
function titleFor(file) {
	if (basename(file) === 'index.md') return 'API Reference';
	return basename(file, '.md');
}

// 1. Generate markdown from the SDK TypeScript source.
execSync('pnpm typedoc', { stdio: 'inherit' });

// 2. Add Starlight frontmatter and normalize internal links.
for (const file of collect(OUT_DIR)) {
	let content = readFileSync(file, 'utf8');
	// Strip the `.md` extension from internal links (Astro resolves routes
	// without it); `.md)` and `.md#` both need handling.
	content = content.replace(/\.md(\))/g, '$1').replace(/\.md(#)/g, '$1');

	const title = titleFor(file);
	const frontmatter = `---\ntitle: ${JSON.stringify(title)}\n---\n\n`;
	writeFileSync(file, frontmatter + content);
}

console.log(`Generated ${collect(OUT_DIR).length} API pages with frontmatter.`);
