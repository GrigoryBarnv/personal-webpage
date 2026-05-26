# Personal Portfolio (React + Vite)

A modern, minimal personal portfolio with:
- HashRouter routing (`/`, `/projects`, `/resume`)
- Light/Dark mode with `localStorage`
- Responsive navbar with mobile menu
- Right-side floating widget (desktop)
- Projects grid and Resume preview section
- GitHub Pages-ready static deployment

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Deploy to GitHub Pages (gh-pages package)

1. Push your repo to GitHub.
2. Set the repository `homepage` if needed (optional when using `HashRouter` and relative base).
3. Run:

```bash
npm run deploy
```

This publishes the `dist/` folder to the `gh-pages` branch.

4. In GitHub repo settings:
- Open **Settings > Pages**
- Set source to **Deploy from a branch**
- Select branch **gh-pages** and folder **/(root)**

## Optional: Deploy via GitHub Actions

You can alternatively use a workflow that runs `npm ci`, `npm run build`, and uploads `dist` to Pages.

## Editable content

Update data in:
- `src/data/navLinks.js`
- `src/data/projects.js`
- `src/data/profile.js`

## Structure

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    FloatingWidget.jsx
    Experience.jsx
    ProjectCard.jsx
    ResumePreview.jsx
    Footer.jsx
  pages/
    Home.jsx
    Projects.jsx
    Resume.jsx
  data/
    projects.js
    navLinks.js
    profile.js
  App.jsx
  main.jsx
  index.css
```