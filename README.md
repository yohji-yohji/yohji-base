# Cappen Local Mirror

## Scripts

- `npm install`
- `npm run mirror`
- `npm run dev`
- `npm run build`
- `npm run preview`

The mirror script downloads the public Cappen pages and required theme assets into this workspace so the site can be inspected locally.

`npm run build` creates a static `dist/` copy of the mirrored site. This project keeps the original non-module theme scripts as-is, so production builds are copied instead of rebundled by Vite.

## Server Cache Busting

Static assets are served with long-lived immutable caching. To force browsers to fetch fresh local images, CSS, and JS without renaming files, bump `ASSET_VERSION` and restart PM2 with updated env:

```bash
ASSET_VERSION=$(date +%s) pm2 restart yojo-portfolio --update-env
```

The server will append `?v=$ASSET_VERSION` to local asset URLs in HTML and CSS responses.
