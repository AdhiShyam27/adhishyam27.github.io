---
name: Jekyll preview watcher
description: Replit-local state files can trigger repeated Jekyll preview rebuilds.
---

Keep Replit-generated folders such as `.local`, `.cache`, and `.agents` excluded from the Jekyll site. Replit updates its hidden state and workflow logs during normal use; Jekyll's watcher otherwise rebuilds repeatedly and competes with the preview.

**Why:** the preview log showed near-continuous rebuilds from Replit state changes until these folders were excluded.

**How to apply:** preserve these exclusions in `_config.yml` when maintaining the Jekyll preview. They do not affect published portfolio content.
