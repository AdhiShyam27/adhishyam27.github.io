# Change 2: Interactive project route map on the Work page

Branch: `add-project-route-map`

## Goal

My 14 planning projects span six countries, but the Work page only shows them as a grid of cards. As a transport planner, I want visitors to see that spread at a glance, drawn the way I think about cities: as a metro map. Add an interactive "route map" where each country is a line and each project is a station.

## What changes

1. New include `_includes/work/route-map.html`, added to `work.md` directly under the "Planning projects" heading and above the country filter chips.
2. The map is an inline SVG (no images, no libraries) built with Liquid from `site.projects`, so it updates automatically when a project is added:
   - One horizontal line per country, in this order: UAE, Singapore, Vietnam, Cambodia, Indonesia, China, with the country name as the line label (mono, uppercase).
   - One station (a circle) per project on its country's line, in the projects' `order`, with the project's `short_title` as the station label.
   - Lines use ink (`#0d0d0d`) on the paper background; stations are white circles with an ink outline.
3. Each station is a link (`<a href>` inside the SVG) to that project's page, with an accessible name (`<title>` with the full project title), so it works by mouse, keyboard and screen reader.
4. Interaction: hovering or focusing a station fills it with ink, enlarges it slightly and shows a small label card with the project title, location and year. Hovering a line label highlights the whole line and dims the others. Clicking a country chip in the existing filter also highlights that country's line (small addition to the existing filter code in `assets/js/main.js`).
5. The line draws itself once when the map scrolls into view (CSS stroke-dashoffset animation, triggered by the existing `rv` reveal), and stays static with `prefers-reduced-motion`.
6. On phones (under 700 px) the SVG scrolls sideways inside its own box, with a "Scroll sideways" hint, so the page itself never scrolls horizontally.
7. A short line under the map: "Six countries, fourteen projects. Select a station to open the project."

## Out of scope

No map tiles or geographic data, no new libraries or fonts, no changes to the project pages or other pages.

## Done when

- The route map appears on `/work/` at 375 px and 1280 px with no horizontal page scroll.
- Every station opens the right project page, by click and by keyboard (Tab, then Enter).
- Hover and focus states work, and the line-draw animation runs once.
- Lighthouse Accessibility stays at 100 on `/work/`.
- After the pull request is merged, the map is live on https://adhishyam27.github.io/work/.
