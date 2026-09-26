# Clipzo Template Clone (Instatic Site Import bundle)

Static mirror of the Clipzo Webflow template (https://clipzo-template.webflow.io/),
scraped as the starting point for the Instatic-hosted Valerie Skyler site.

Instatic (https://github.com/CoreBunch/Instatic) is **not** a flat-file/theme-based
CMS — it's a visual-editor CMS with its own database. It has two separate ways to
bring outside HTML in, and they are not interchangeable:

- **Paste HTML** (Spotlight "Import HTML" / right-click "Paste HTML here…") only
  reads inline `style="…"` and literal `<style>` blocks. It does **not** follow
  `<link rel="stylesheet">` files. Since this whole template's CSS lives in linked
  `.css` files (like any Webflow export), pasting a page's raw HTML this way drops
  100% of the styling — that's the "looks REALLY bad" result.
- **Site Import** (the site-wide import wizard, opened from Spotlight or the admin
  shell) accepts a folder or `.zip` of HTML + CSS + JS + media together, follows the
  `<link rel="stylesheet">` tags, and converts the CSS into real editable style
  rules. This is the correct path for this bundle.

## Structure

This folder is laid out flat specifically so it can be handed to Site Import as-is —
every HTML page and the asset folder are direct siblings, so relative links resolve
correctly no matter whether the whole folder or just its contents get dropped in:

```
clipzo-clone/
  index.html, about.html, contact.html, project.html, post.html, ...
  project/*.html
  post/*.html
  cdn.prod.website-files.com/    # CSS, JS (Webflow runtime + GSAP), fonts, images, video
```

Open `index.html` directly in a browser to preview — all asset paths are relative and
resolve against the sibling `cdn.prod.website-files.com/` folder, so no build step
or server is required.

## Getting this live on Instatic

1. Pull this branch (or download the repo ZIP from GitHub) so you have this folder
   locally.
2. In the Instatic admin (valerieskyler.com/admin), open **Spotlight** and run
   **Import** (Site Import) — or use the "Import" action in the admin shell.
3. Drop the contents of this `clipzo-clone/` folder (all the `.html` files, `project/`,
   `post/`, and `cdn.prod.website-files.com/`) into the wizard.
4. Work through **Review** (pages, style rules, media, fonts, scripts — everything
   should be checked by default) → **Conflicts** (only shown if something collides
   with the existing site) → **Import**.
5. Once imported, replace the placeholder Clipzo copy/images with real Valerie
   Skyler content directly in the visual editor.

## Source

Scraped 2026-09-26 from https://clipzo-template.webflow.io/ via `wget --mirror`
(including Webflow's CDN asset host) for reverse-engineering purposes, per the
`clone-website` workflow in `clairk11/CloningWebsitesILY`.
