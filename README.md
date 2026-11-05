# Innovative Print House

React + TypeScript + Vite, styled with Tailwind CSS. This app runs entirely in the browser.

## Run locally

Use Node.js 22.12+ (or Node.js 24).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. The home page is `/`; the portfolio is `/works`.
No environment variables or backend are required. Quote requests open WhatsApp.

## Check and build

```sh
npm run typecheck
npm run build
npm run preview
```

Deploy the `dist` directory to a static host. Configure an SPA fallback to `index.html` so direct visits to `/works` work.
Portfolio images are in `public/works`.
