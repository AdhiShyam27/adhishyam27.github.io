# adhishyam27.github.io

Personal portfolio of Adhi Shyam Sunder: urban planner and AI product manager, MBA candidate at UC Berkeley Haas. A static Jekyll site published with GitHub Pages from the `main` branch, `/ (root)` folder.

Live site: https://adhishyam27.github.io

## How to update the site

Most edits are text-only and never touch the design.

| To change | Edit this file |
|---|---|
| Name, headline, intro, email, LinkedIn, quick facts, ID card | `_data/profile.yml` |
| Timeline on the Experience page | `_data/experience.yml` |
| AI products | `_data/products.yml` |
| Apps and ventures | `_data/builds.yml` |
| Skills periodic table | `_data/skills.yml` |
| Honours and memberships | `_data/recognition.yml` |
| Academic studio projects | `_data/academic.yml` |
| A planning project (text, facts, image captions) | `_projects/<name>.md` |
| Home page featured projects, hero images, key figures | front matter at the top of `index.md` |
| Menu | `_data/nav.yml` |
| Colours, fonts, spacing | tokens at the top of `assets/css/main.css` |

**Add a planning project:** create `assets/img/projects/<name>/` with images named `01.webp`, `02.webp`, ... plus small versions `01-sm.webp`, `02-sm.webp`, ... (about 720 px wide), then copy any file in `_projects/`, rename it `<name>.md`, and edit the front matter (`folder: <name>`, one `alts` line per image, and the next `order` number).

**Add your portrait to the ID card:** put a head-to-shirt photo at `assets/img/portrait.webp` (about 480 x 600 px) and add `photo: /assets/img/portrait.webp` to `_data/profile.yml`.

## Preview locally (optional)

GitHub Pages builds the site for you, so this is only for previewing on your own computer.

```bash
# one time
gem install bundler
bundle install

# every time
bundle exec jekyll serve
# open http://localhost:4000
```

On Replit you can use the Preview pane instead.

## Run Lighthouse

1. Open the published site in Chrome.
2. Right-click, choose **Inspect**, open the **Lighthouse** tab.
3. Pick **Mobile**, tick Performance, Accessibility, Best Practices and SEO, and click **Analyze page load**.
4. Repeat with **Desktop**. Target: 90 or higher in all four.

Without Chrome DevTools, paste the URL into https://pagespeed.web.dev.

## Folder structure

```
_config.yml          site settings (title, url, empty baseurl, plugins)
_data/               all text content as YAML
_projects/           one Markdown file per planning project
_layouts/            default, page, project
_includes/           nav, footer, section tag, cards, home/ and about/ sections
assets/css/main.css  the whole design system
assets/js/main.js    small progressive enhancements
assets/img/          project renders (webp), social card
index.md about.md experience.md work.md contact.md 404.md
```

## Technical choices

- **Jekyll with data files** keeps content separate from design, so updating the resume never means touching HTML.
- **GitHub Pages plugins only** (`jekyll-seo-tag`, `jekyll-sitemap`), so the site builds on GitHub with no manual build step.
- **WebP images with two sizes** and `srcset`, lazy-loaded below the fold, to keep Performance high.
- **Light theme only**, with colour contrast checked against WCAG AA (body text 10:1, secondary text 5.4:1).
- **`prefers-reduced-motion`** turns off the slideshow, ticker, swing and reveal animations.

## Credits

Project renders: RSP Architects Planners & Engineers (from my portfolio). Academic images: my NUS studio work. Fonts: Inter Tight, Instrument Serif and JetBrains Mono via Google Fonts.
