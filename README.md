# Kiran Enterprise

Marketing site for Kiran Enterprise: laptop buyback and e-waste disposal in Bengaluru.

Vite + React 19 + Tailwind v4 + react-router-dom. No backend; the quote and pickup forms open WhatsApp with the details filled in.

```
npm install
npm run dev
```

Business details (phone, WhatsApp number, email, address, hours, service areas) live in `src/shared/data/site.js`.

Photos are in `src/assets/photos/`. Four are CC BY / CC BY-SA and are credited in the footer via `photoCredits` in `src/shared/data/photos.js`; the rest are CC0.

## Deploying

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yaml`.

The repo is named `kiran-enterprise.github.io`, so Pages serves it at the root of https://kiran-enterprise.github.io. The workflow sets `BASE_PATH=/` and `VITE_SITE_URL=https://kiran-enterprise.github.io`. When a custom domain is attached, add a `public/CNAME` file with the domain and change `VITE_SITE_URL` to the full domain URL. If the site ever moves under a sub-path, set `BASE_PATH` to that path with a trailing slash.
