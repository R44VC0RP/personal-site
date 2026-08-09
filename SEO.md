# Ryan Vogel search visibility program

Primary target: own the `Ryan Vogel` entity query with `https://ryan.ceo` as the canonical source. Treat the broader `Ryan` and `Vogel` queries as long-term brand goals, not near-term promises.

## Daily loop (15–30 minutes)

1. Check Google Search Console for `ryan vogel`, branded impressions, average position, indexed pages, and crawl errors.
2. Pick one evidence-backed improvement from the queue below.
3. Publish one genuinely useful first-hand update, improve an existing page, or earn one accurate third-party profile link.
4. Record the change and the metric it should affect in the log.
5. Recheck after Google has had time to crawl; do not change course based on one day of rank noise.

## Completed on 2026-08-09

- Set `ryan.ceo` as the canonical site identity.
- Added permanent application redirects from the old `theryanvogel.com` host.
- Added Person, ProfilePage, WebSite, and BlogPosting structured data.
- Added unique metadata, crawl rules, sitemap generation, social cards, and internal navigation.
- Replaced nonexistent blog links with the real Markdown posts.
- Removed the Google-hosted Inter build dependency and standardized the site on self-hosted Geist.

## Next queue

1. Fix TLS for `www.theryanvogel.com`, then verify every old-domain URL permanently redirects to the matching `ryan.ceo` path.
2. Verify `ryan.ceo` in Google Search Console, submit `/sitemap.xml`, and capture a baseline for the exact-name query.
3. Add consistent `https://ryan.ceo` links to authoritative profiles and bios you control: GitHub, X, conference speaker pages, company author pages, and LinkedIn.
4. Publish a first-hand case study with evidence: Inbound architecture and growth, an OpenCode contribution deep dive, or the Mandarin 3D instant-quote system.
5. Add a crawlable local portrait in 1:1, 4:3, and 16:9 formats, then reference it in Person/ProfilePage structured data.

## Change log

| Date | Change | Expected signal | Result after recrawl |
| --- | --- | --- | --- |
| 2026-08-09 | Technical entity and crawl foundation | Consolidated branded relevance and cleaner indexing | Pending |
| 2026-08-09 | Replaced Google Inter with self-hosted Geist | More reliable builds and no third-party font request | Verified locally |

## Guardrails

- No bought links, keyword stuffing, doorway pages, fake reviews, hidden text, or mass-generated articles.
- Keep dates truthful; only update `dateModified` after meaningful human edits.
- Prefer a small number of original, attributable pages over daily filler.
