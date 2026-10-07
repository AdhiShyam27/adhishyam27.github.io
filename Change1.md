# Change 1: Add a "How I design" process section to the Work page

Branch: `add-design-process-section`

## Goal

Recruiters see my finished renders but not how I get there. Add a section to the Work page that shows my design process, from hand sketches to digital sketches to working sessions at the desk, using images from my portfolio that are already in the repository (`assets/img/process/01.webp` to `15.webp`, with small `-sm.webp` versions).

## What changes

1. New include `_includes/work/process.html`, added to `work.md` directly after the "Planning projects" section, with the section tag `A2 / Design process` and the heading "How I *design.*" (one italic serif accent word, like every other heading).
2. A short intro line: "Every master plan starts on paper. The stages I work through, from my RSP portfolio."
3. A row of stage chips taken from my portfolio's methodology: Vision development, Urban spatial structure, Refinement, Urban design, Massing, Green and blue structure, Rendering.
4. Three image groups, each with a mono label and a one-line caption:
   - **Hand sketches: Hangzhou Expo Town, China (Design Lead)**: images `01`, `02`, `03`, `04`, `05`, `15`
   - **Digital sketches: Kampot Master Plan, Cambodia (Overall Project Lead)**: images `06`, `07`, `08`, `09`, `10`, `11`
   - **At the desk**: images `12`, `13`, `14`
5. Images use the small version in the grid, open the large version in the existing lightbox (`data-lightbox-src` and `data-caption` on the link), have descriptive `alt` text, `loading="lazy"`, and width and height attributes.
6. Layout: a horizontal scroll-snap strip on phones, a 3-column grid on desktop. Reuse the existing tokens and classes (`.section`, `.section__head`, `.tag`, `.h2`, `.rv`, `.chips`) and add only the CSS the new grid needs, at the end of `assets/css/main.css`.

## Out of scope

No new JavaScript, no new fonts, no changes to other pages.

## Done when

- The section appears on `/work/` between Planning projects and AI products, at 375 px and 1280 px with no horizontal page scroll.
- Clicking any process image opens it in the lightbox.
- The navigation and all existing links still work.
- After the pull request is merged, the section is live on https://adhishyam27.github.io/work/.
