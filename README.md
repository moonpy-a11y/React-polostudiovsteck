[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in%20-CodeSandbox-000000?style=for-the-badge&logo=codesandbox&logoColor=white)](https://codesandbox.io/s/github/moonpy-a11y/React-polostudiovsteck)

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="120" align="right" alt="React logo" style="background:#ffffff;padding:8px;border-radius:8px">

## Table of Contents

- [Interactive preview](#interactive-preview)
- [Demo](#demo)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Get started (run locally)](#get-started-run-locally)
- [Build](#build)
- [Contributing](#contributing)
- [Files shown](#files-shown)


## POLO CLASSIC RULES

## Interactive preview <a id="interactive-preview"></a>

- Open the project in an online editor: [Open in CodeSandbox](https://codesandbox.io/s/github/moonpy-a11y/React-polostudiovsteck) — this imports the GitHub repo and runs it in the browser for quick edits and testing.

### Card interactive demo preview

Below is a lightweight inline SVG preview demonstrating seven card color variants: red, blue, pink, black, white, yellow, and a flowers pattern. The SVG is static so it renders directly in this README. For the live interactive demo (clickable swatches / animated transitions), open the CodeSandbox link above — the app contains the full interactive component.

<!-- Inline SVG preview: shows seven cards with different color treatments -->
<svg width="100%" height="260" viewBox="0 0 1040 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Card color variants preview">
  <defs>
    <pattern id="flowers" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect width="40" height="40" fill="#fff4f9" />
      <g transform="translate(6,6) scale(0.9)">
        <circle cx="8" cy="8" r="6" fill="#ff8da1" />
        <circle cx="24" cy="8" r="6" fill="#ffd166" />
        <circle cx="16" cy="24" r="6" fill="#90e0ef" />
      </g>
    </pattern>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.12"/>
    </filter>
    <style>
      .card-rect { rx:14; ry:14; stroke:transparent; }
      .label { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-size:14px; fill:#333; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="transparent" />

  <!-- Card 1: Red -->
  <g transform="translate(20,20)">
    <rect class="card-rect" width="140" height="180" fill="#e53935" filter="url(#shadow)" />
    <text class="label" x="70" y="205" text-anchor="middle">Red</text>
  </g>

  <!-- Card 2: Blue -->
  <g transform="translate(180,20)">
    <rect class="card-rect" width="140" height="180" fill="#1976d2" filter="url(#shadow)" />
    <text class="label" x="70" y="205" text-anchor="middle" fill="#fff">Blue</text>
  </g>

  <!-- Card 3: Pink -->
  <g transform="translate(340,20)">
    <rect class="card-rect" width="140" height="180" fill="#ff69b4" filter="url(#shadow)" />
    <text class="label" x="70" y="205" text-anchor="middle">Pink</text>
  </g>

  <!-- Card 4: Black -->
  <g transform="translate(500,20)">
    <rect class="card-rect" width="140" height="180" fill="#000000" filter="url(#shadow)" />
    <text class="label" x="70" y="205" text-anchor="middle" fill="#ffffff">Black</text>
  </g>

  <!-- Card 5: White -->
  <g transform="translate(660,20)">
    <rect class="card-rect" width="140" height="180" fill="#ffffff" stroke="#e6e6e6" stroke-width="1" filter="url(#shadow)" />
    <text class="label" x="70" y="205" text-anchor="middle">White</text>
  </g>

  <!-- Card 6: Yellow -->
  <g transform="translate(820,20)">
    <rect class="card-rect" width="140" height="180" fill="#ffeb3b" filter="url(#shadow)" />
    <text class="label" x="70" y="205" text-anchor="middle">Yellow</text>
  </g>

  <!-- Card 7: Flowers pattern -->
  <g transform="translate(980,20)">
    <rect class="card-rect" width="140" height="180" fill="url(#flowers)" filter="url(#shadow)" />
    <text class="label" x="70" y="205" text-anchor="middle">Flowers</text>
  </g>
</svg>

---

## Demo <a id="demo"></a>

Click the animated demo to view full size:

[![Animated demo](https://raw.githubusercontent.com/moonpy-a11y/React-polostudiovsteck/main/assets/demo.svg)](https://raw.githubusercontent.com/moonpy-a11y/React-polostudiovsteck/main/assets/demo.svg)

- Click the screenshot in the Interactive preview section to view the real UI screenshot.

---

## Features

- Simple React UI built with JavaScript, CSS and HTML.
- Responsive layout (see screenshot above).
- Fast to run locally and easy to edit in CodeSandbox.

---

## Tech stack

- React (JavaScript)
- CSS
- HTML

---

## Get started (run locally)

1. Clone the repository

```bash
git clone https://github.com/moonpy-a11y/React-polostudiovsteck.git
cd React-polostudiovsteck
```

2. Install dependencies

```bash
npm install
# or
# yarn install
```

3. Run the development server

```bash
npm start
# or
# yarn start
```

Open http://localhost:5173 (Vite default) or http://localhost:3000 in your browser.

---

## Build

```bash
npm run build
# or
# yarn build
```

---

## Contributing

Contributions are welcome. Please open an issue first if you plan to make larger changes. For small fixes, open a pull request and describe the change.

---

## Files shown

- public/logo.png — project logo used in this README header
- Screenshot 2026-07-28 170909.png — UI screenshot included above
- assets/banner.svg — image-based header banner
- assets/demo.svg — lightweight animated demo (SVG)

---

_No license specified in the repository. Add a LICENSE file if you want to specify one._
