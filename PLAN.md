# Portfolio site plan

## Goal

Publish Adhi Shyam Sunder’s personal portfolio as a static Jekyll GitHub user site at `adhishyam27.github.io`, served from the `main` branch and repository root. The supplied archive is the source for portfolio copy, project case studies, and images; no personal information will be fetched from URLs.

## Pages and design

- Keep Home, About, Work Experience, and Contact, with shared navigation and footer.
- Preserve the supplied Work index and project case studies as additional portfolio pages.
- Use a light paper, ink, and gray palette; Inter Tight, Instrument Serif italic accents, and JetBrains Mono labels.
- Carry through the requested visual details: numbered section tags, lanyard ID card, skills periodic table, expanding work gallery, honours list, and a scroll-drawn timeline. Keep project renders in color.
- Use semantic, responsive HTML with accessible contrast and reduced-motion support. Keep any JavaScript minimal and progressive.
- No backend, form service, framework, blog, or trackers.

## Implementation and checks

- Put Jekyll files, layouts, includes, content, and assets directly in the repository root.
- Configure the user-site URL, empty `baseurl`, and `relative_url` for internal links.
- Retain GitHub Pages-compatible SEO metadata, sitemap, favicon, and an update/preview/Lighthouse README.
- Remove the unrelated app/monorepo scaffold so the repository contains only the static site.
- Verify GitHub Pages root publishing, navigation, 375px and 1280px layouts, and Lighthouse targets of 90+ in Performance, Accessibility, Best Practices, and SEO.

## Assumptions

- `adhishyam27` is the intended GitHub username, matching the requested domain.
- Supplied résumé and portfolio content, metrics, and project images may be published; no unsupplied achievements or claims will be added.
- The public `mailto` address is `shyams.adhi@berkeley.edu`, as approved.
