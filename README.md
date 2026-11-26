# GTA 6 PC Watch

Independent source tracker for the GTA 6 PC release status.

Run `npm run build` to generate `dist/`. On Cloudflare Pages use the `main` branch, `npm run build`, and `dist` as the output directory.

Add public HTML pages in `src/pages/` with a `page-lastmod` metadata value in YYYY-MM-DD format. The build generates the sitemap from those pages. Keep the custom 404 in `src/static/` so it stays outside the sitemap.
