# Cappen Local Mirror

## Scripts

- `npm install`
- `npm run mirror`
- `npm run dev`
- `npm run build`
- `npm run preview`

The mirror script downloads the public Cappen pages and required theme assets into this workspace so the site can be inspected locally.

`npm run build` creates a static `dist/` copy of the mirrored site. This project keeps the original non-module theme scripts as-is, so production builds are copied instead of rebundled by Vite.
