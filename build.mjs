import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const site = 'https://gta6pcwatch.com';
const pages = 'src/pages';
const output = 'dist';

async function collectPages(directory, prefix = '') {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = await Promise.all(entries.map(async (entry) => {
    const relativePath = prefix + entry.name;
    if (entry.isDirectory()) return collectPages(join(directory, entry.name), relativePath + '/');
    return entry.name.endsWith('.html') ? [relativePath] : [];
  }));
  return paths.flat().sort();
}

function xml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

const urls = [];
for (const path of await collectPages(pages)) {
  const html = await readFile(join(pages, path), 'utf8');
  const lastmod = html.match(/<meta name="page-lastmod" content="(\d{4}-\d{2}-\d{2})">/)?.[1];
  if (!lastmod) throw new Error('Missing page-lastmod in ' + path);
  const route = '/' + path.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '').replace(/\/$/, '');
  const url = site + encodeURI(route);
  urls.push('  <url><loc>' + xml(url) + '</loc><lastmod>' + lastmod + '</lastmod></url>');
}

if (!urls.length) throw new Error('No pages found');
await rm(output, { force: true, recursive: true });
await mkdir(output, { recursive: true });
await cp(pages, output, { recursive: true });
await cp('src/static', output, { recursive: true });
await writeFile(join(output, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: ' + site + '/sitemap.xml\n');
await writeFile(join(output, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n'
  + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  + urls.join('\n') + '\n</urlset>\n');
