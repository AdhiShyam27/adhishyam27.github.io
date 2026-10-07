# PLAN.md: Adhi Shyam Sunder portfolio

## Summary

A personal portfolio for recruiting, built as a static Jekyll site and published with GitHub Pages as a user site at `https://adhishyam27.github.io` (baseurl empty, every internal link uses the `relative_url` filter). The repository root is the publish-ready site.

## Answers to the setup questions

1. **Reference site and what I like about it:** the "Talking-Video Portfolio" design brief from class. I like the quiet paper, ink and gray palette, one italic serif accent word per heading, numbered mono section tags, a hanging lanyard ID card, a "periodic table" of skills, an expanding accordion gallery for work, an ink-flood list for honours, and a timeline that draws as you scroll. Real project renders are shown in full colour; the interface itself stays black, white and gray.
2. **Theme:** light theme only (warm off-white `#f4f2ee`, ink `#0d0d0d`).
3. **Font feel:** modern grotesk for headings and body (Inter Tight), an elegant italic serif for one accent word per heading (Instrument Serif), and a monospace for small labels and numbers (JetBrains Mono). Loaded from Google Fonts with `display=swap`.
4. **Content source:** my resume, my two PDF portfolios (RSP selected works, and NUS / SPA academic work), and my course projects. Nothing is fetched from a URL.
5. **Email:** I am comfortable showing `shyams.adhi@berkeley.edu` as a public `mailto:` link. Visitors need an email app; the Contact page also has a Copy button. Phone number is not shown.

## Pages

| Page | URL | What is on it |
|---|---|---|
| Home | `/` | Hero with a crossfading slideshow of real project renders, accordion gallery of six planning projects, four AI products, key figures, Berkeley builds, contact call to action |
| About | `/about/` | Intro, hanging ID card (flips on hover, tap or Enter), quick facts, skills periodic table with filter and inspector, honours and memberships |
| Work Experience | `/experience/` | Education and experience as one timeline, newest first |
| Work | `/work/` | 14 planning projects (filter by country), AI products, apps and ventures, academic studio work |
| Product pages | `/work/peggie/`, `/work/aiva/`, `/work/meta-office/` | One page per shipped AI product: photos, facts from RSP's press articles, my role, gallery with lightbox |
| Project pages | `/work/<name>/` | One page per planning project: hero render, facts, description from my portfolio, image gallery with lightbox, previous / next |
| Contact | `/contact/` | Email with copy button, LinkedIn, GitHub |

## Structure

- Content is separate from design: text lives in `_data/*.yml`, `_projects/*.md` and page front matter. Layouts in `_layouts/`, reusable pieces in `_includes/`, styles in `assets/css/main.css`.
- `jekyll-seo-tag` for titles, descriptions and social cards; `jekyll-sitemap` for `sitemap.xml` and `robots.txt`; SVG and PNG favicons.
- Plain HTML and CSS. One small script (`assets/js/main.js`, about 9 KB) for progressive enhancements: nav state, mobile menu, reveal on scroll, accordion, count-up, ID card swing and flip, skills filter, project filter, timeline, lightbox, copy email. Everything still reads without JavaScript.
- No backend, database, blog, CMS, form backend, framework, package.json or trackers.

## Assumptions (please confirm)

- GitHub username is `adhishyam27`. If not, change `github_username` and `url` in `_config.yml` and name the repository `<username>.github.io`.
- Project images are RSP Architects Planners & Engineers renders from my portfolio, credited on each project page.
- Professional memberships (SIP, RTPI, APA, CIP, PIA) are listed as on my 2022 resume.
- The talking intro video and my portrait photo are not in this first version (planned as later improvements).

## Placeholders

- None in the page copy. The ID card shows my initials until a portrait photo is added (`photo:` in `_data/profile.yml`).
