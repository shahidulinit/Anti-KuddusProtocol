# Anti-Kuddus Protocol

A classroom case file dashboard for Section B. Anti-Kuddus Protocol brings class tools into one playful, investigation themed website: track reports, check classroom rules, find your seat, review syllabus topics, and access quick classroom utilities.

> **Project status:** This is a front-end web app and prototype. It does not provide a server-side account system or shared database. Data saved by the app is stored in the current browser.

## What you can do

- **Dashboard** - View the case-file overview and navigate to the app’s tools.
- **Strike Portal** - Record classroom reports and review the strike log.
- **Seating** - View the classroom seating section.
- **Syllabus Digest** - Paste syllabus text and extract a short list of topics. The app attempts an AI powered summary and falls back to a local text extractor if that request fails.
- **Ledger** - Access the classroom ledger tools.
- **SOS** - Open the classroom alert area.
- **Fact Checker** - Check information against the classroom rulebook.
- **Light and dark themes** - Switch between the app’s available visual themes.

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React icons
- Recharts

## Run locally

You’ll need [Node.js](https://nodejs.org/) and npm installed.

```bash
cd anti-kuddus-protocol
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

To create and preview a production build:

```bash
npm run build
npm run preview
```

The repository root also provides convenience scripts that delegate to the app in `anti-kuddus-protocol/`:

```bash
npm run dev
npm run build
npm run preview
```

Install dependencies in `anti-kuddus-protocol/` before using those root-level scripts.

## Project layout

```text
.
├── index.html                    Root entry page
├── package.json                  Root convenience scripts
├── App.jsx                       Root-level app copy
└── anti-kuddus-protocol/
    ├── index.html                Vite app entry
    ├── package.json              App dependencies and scripts
    ├── vite.config.js            Vite configuration
    └── src/
        ├── main.jsx              React entry point
        ├── App.jsx               App state and page selection
        ├── theme.js              Theme tokens and context
        ├── hooks/                Browser persistence hooks
        ├── data/                 App data and constants
        └── components/           Screens and reusable UI
```

## Data, privacy, and AI

- Session, theme, and strike state are persisted in the browser’s `localStorage`. They are not synchronized across browsers or devices, and clearing site data removes them.
- The roll number entry is a client-side app flow, not secure authentication. Do not enter sensitive personal information or treat reports as confidential records.
- The Syllabus Digest sends pasted text to the Anthropic Messages API when the AI request succeeds. The request is made directly from the browser in the current implementation; a production deployment should route it through a backend that securely manages API credentials. If the AI request fails, the app uses a local text-extraction fallback.

## Typography

The interface prefers Proxima Nova and falls back to system fonts. Proxima Nova is commercially licensed; to use the typeface, provide a valid licensed web-font source. The app remains usable with the fallback fonts.

## Deployment

The Vite configuration sets the production base path from the `GITHUB_REPOSITORY` environment variable when available. For GitHub Pages, ensure the build environment exposes the repository name or configure the appropriate base path for your hosting location, then deploy the generated `dist/` directory.

## Contributing

Contributions and suggestions are welcome. For changes, please describe the user-facing behavior and include steps to verify it locally.
