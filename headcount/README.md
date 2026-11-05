# Headcount

Live projections of how many animals are killed for food worldwide, calculated in the browser from annual FAOSTAT and research estimates.

The numbers are not real-time data. Each counter divides a published yearly total by the number of seconds in a year and multiplies by elapsed time.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically. Leave the defaults (build command `npm run build`, output directory `dist`) and deploy.
4. To use your domain, add `headcount.farm` under **Project → Settings → Domains** and update your DNS records as Vercel instructs.

## Editing the data

All figures live in `src/data.js`. Each entry has an annual total, a short description, and a source link. Add a land animal to `LAND` and it gets its own section with a shackle line automatically (give it one of the shapes in `src/components/Animals.jsx`).

## Before you launch

Open `src/config.js` and set:

- `SITE_NAME` and `SITE_DOMAIN` if you choose a different name. The page title and description in `index.html` also mention the name.

- `PAYPAL_URL` to your PayPal.Me link or a PayPal Donate button link (create one at paypal.com/donate/buttons).
- `AMAZON_TAG` to your Amazon Associates tracking ID, so the book links earn commission. Leave it empty to link without a tag.

Optional: for analytics, `npm i @vercel/analytics` and add `<Analytics />` from `@vercel/analytics/react` to `App.jsx`. For AdSense, paste its script tag into `index.html`.

## Reading list

Books are in `src/books.js`, covers in `public/covers/`. To add one, drop a cover JPG into `public/covers/` and add an entry with its title, author, category, description, Amazon link and cover path.

## Structure

```
index.html                 page shell and fonts
src/data.js                annual totals and sources
src/books.js               reading list
src/config.js              PayPal link and Amazon tag
src/App.jsx                page sections and counters
src/hooks.js               timers, scroll progress, number formatting
src/components/Animals.jsx SVG silhouettes
src/components/ShackleLine.jsx  the scroll-driven slaughter line
src/components/BloodEdge.jsx    the drip band at the top of the page
src/styles.css             all styling
```

## How the scrolling works

Each animal is a three-part scene in `SpeciesSection` (`src/App.jsx`): the photo pins to the screen with `position: sticky`, the text scrolls up over it while the colour drains out, then the tiled kill floor slides up and covers it. The hook `useScrollVar` in `src/hooks.js` writes scroll progress into CSS variables (`--p`, `--f`), and the CSS uses those for scale, saturation and movement, so scrolling never re-renders React.

Sections blend into each other with gradients instead of hard edges: the tile wall fades down into the sea for the fish section and back up again, and the documentaries sit over a pinned landscape that fades in from the tile above.

The page respects `prefers-reduced-motion` (movement and zooms turn off) and the system light/dark setting.

## Photos

The animal photos in `public/photos/` come from Wikimedia Commons under Creative Commons licences (mostly CC BY-SA). Each one is credited on the page next to the photo, with a link to its licence. Keep those credits if you swap or crop the images. Photographer names and links are in `src/data.js`.
