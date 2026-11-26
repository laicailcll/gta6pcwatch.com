[GTA 6 PC Watch](https://gta6pcwatch.com/)
### Public, source-linked datasets from an independent GTA 6 PC release tracker.
| File | Contents | Data cutoff | Source rules |
| --- | --- | --- | --- |
| [release-claims.csv](data/release-claims.csv) · [Notes](data/release-claims.md) | Dated launch claims with attribution and official status | 2026-11-25 (latest source date) | Original publisher pages, distinguishing Rockstar announcements from reporting and editorial guides |
| [console-to-pc-release-gaps.csv](data/console-to-pc-release-gaps.csv) · [Notes](data/console-to-pc-release-gaps.md) | First console and Windows release dates with gaps in calendar days | 2019-11-05 (latest release date) | Wikipedia release-date entries, with the region noted where applicable |
| [characters.csv](data/characters.csv) · [Notes](data/characters.md) | Named GTA VI characters with official profiles and available video links | Not stated in CSV | Rockstar character guide and official video pages |
| [cheat-reports.csv](data/cheat-reports.csv) · [Notes](data/cheat-reports.md) | Reported console sequences, source disagreements, and verification status | 2026-11-21 (latest source date) | Original Radio Times and Red Bull guides, with no in-game verification |

The cutoff is the latest applicable date present in each CSV. The 2026-11-26 source review date is documented separately in the [data notes](data/). Each dataset has a ready-to-copy citation linked above.

## Build

Run `npm run build` to generate `dist/`. On Cloudflare Pages use the `main` branch, `npm run build`, and `dist` as the output directory.

Add public HTML pages in `src/pages/` with a `page-lastmod` metadata value in YYYY-MM-DD format. The build generates the sitemap from those pages. Keep the custom 404 in `src/static/` so it stays outside the sitemap.
