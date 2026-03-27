# my-portfolio

A personal portfolio webpage built with React + Vite.

## Online URL

- GitHub Pages: https://chuanchuanhu.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Publish to external network (GitHub Pages)

This repo includes a GitHub Actions workflow that automatically deploys to GitHub Pages when code is pushed to `main`.

### One-time setup

1. Go to **GitHub Repo → Settings → Pages**.
2. In **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push this branch and merge it into `main`.

### Release a new version

- Push changes to `main` (or merge PR into `main`).
- Workflow file: `.github/workflows/deploy.yml`
- After Actions completes, your site is publicly accessible at:
  `https://chuanchuanhu.github.io/my-portfolio/`
