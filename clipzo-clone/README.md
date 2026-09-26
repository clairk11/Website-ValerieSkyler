# Clipzo Template Clone (Instatic base)

Raw static mirror of the Clipzo Webflow template (https://clipzo-template.webflow.io/),
scraped as the starting point for a future Instatic CMS build. This is intentionally
kept as a straight copy of the exported site before any conversion work — a clean
reference to diff against once pages get ported into Instatic's theme/template system.

## Why this template

Compared to Framer-based templates, Webflow exports are close to what Instatic (a
flat-file, git-based CMS) needs: semantic HTML, a single readable CSS bundle, and
vanilla JS interactions (Webflow's runtime + GSAP) rather than a React/Framer runtime
with hashed class names. That means porting is mostly "wire up Instatic's templating
around this markup" rather than rebuilding the UI from scratch.

## Structure

```
clipzo-clone/
  site/                          # HTML pages (relative links, ready to open directly)
    index.html
    about.html
    contact.html
    project.html / project/*.html
    post.html / post/*.html
    ...
  cdn.prod.website-files.com/    # CSS, JS (Webflow runtime + GSAP), fonts, images, video
```

Open `site/index.html` directly in a browser — all asset paths are relative and
resolve against the sibling `cdn.prod.website-files.com/` folder, so no build step
or server is required to preview it as-is.

## Next steps for Instatic conversion

1. Set up Instatic (https://github.com/CoreBunch/Instatic) locally per its docs.
2. Move `cdn.prod.website-files.com/css/*.css` and the image/font/video assets into
   Instatic's `assets/` (or theme-equivalent) directory.
3. Convert `site/index.html` and the other top-level pages into Instatic templates,
   replacing static/repeated markup (post list, project list, nav, footer) with
   Instatic's templating tags so post/project content comes from its flat-file
   content store instead of being hardcoded per page.
4. Re-point asset URLs from the scraped relative paths to Instatic's asset structure.
5. Drop in real Valerie Skyler copy/media in place of the placeholder Clipzo content.

## Source

Scraped 2026-09-26 from https://clipzo-template.webflow.io/ via `wget --mirror`
(including Webflow's CDN asset host) for reverse-engineering purposes, per the
`clone-website` workflow in `clairk11/CloningWebsitesILY`.
