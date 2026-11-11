# Digital Wedding Invitation

A responsive, animated wedding invitation built with React, Vite, Tailwind CSS, Framer Motion, and CSS.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Customize the invitation

Edit **`src/config/invitationData.js`** to change:

- Bride and groom names
- Wedding date and display date
- Family names
- Celebration events, dates, times, descriptions, and locations
- Wedding hashtag
- Venue name, address, and Google Maps URL
- Music source and enable/disable setting

The opening envelope, hero names, invitation panel, scratch-to-reveal date hearts, couple introduction, timeline, venue, and countdown read from this configuration wherever applicable.

## Visual assets

The invitation uses the Siyaram-Raghukul artwork hosted by InviteUtsav. Image paths are referenced from the original asset host in the components and CSS. The assets are loaded responsively (desktop/mobile variants where provided).

## Main sections

1. Opening invitation
2. Parallax hero
3. Family invitation and Ganpati prayer
4. Scratch-to-reveal wedding date and couple introduction
5. Celebration timeline
6. Wedding hashtag
7. Venue and live countdown

There is intentionally no logo placeholder and no RSVP section.
