# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is John Reilly's personal blog (johnnyreilly.com), built with Docusaurus and hosted on Azure Static Web Apps. The blog has been running since 2012 (originally on Blogger) and contains hundreds of posts about TypeScript, Azure, React, Node.js, and .NET.

## Repository Structure

- **blog-website/**: Main Docusaurus site
  - `blog/`: Blog posts organized by date (e.g., `2025-11-12-ai-assisted-coding/index.md`)
  - `src/`: Custom React components, CSS, and theme overrides
  - `api/`: Azure Functions backend (TypeScript)
  - `docusaurus.config.js`: Main configuration including SEO structured data, navigation, footer
- **blog-website-tests/**: Playwright end-to-end tests
- **pre-post-processing/**: Bun scripts that run before/after build
  - `pre-processing.ts`: Generates `recently-updated-posts.json` from git history
  - `post-processing.ts`: Post-build sitemap/feed processing
- **infra/**: Azure Bicep infrastructure-as-code
- **.github/workflows/**: CI/CD pipelines for Azure Static Web Apps deployment

## Common Commands

All commands should be run from the repository root unless otherwise specified.

### Development

```bash
cd blog-website && npm install && npm start
```

### Build

```bash
cd blog-website && npm run build
```

Note: Build runs pre-processing (Bun) → Docusaurus build → post-processing (Bun) automatically.

### Serve production build locally

```bash
cd blog-website && npm run serve
```

### Run with Azure Functions locally

```bash
cd blog-website && npm run dev
```

This uses Azure SWA CLI to run both the Docusaurus site and the Azure Functions API.

### Linting

```bash
cd blog-website && npm run lint           # ESLint for Docusaurus
cd blog-website/api && npm run lint       # ESLint for API
```

### Type checking

```bash
cd blog-website && npm run typecheck
```

### API tests

```bash
cd blog-website/api && npm test
```

### Playwright tests

```bash
cd blog-website-tests && npx playwright test
```

### Format code

```bash
npm run format    # Runs Prettier on entire repo
```

## Blog Post Structure

Blog posts live in `blog-website/blog/YYYY-MM-DD-slug-name/index.md` with frontmatter:

```yaml
---
slug: my-post-slug
title: 'Post Title'
authors: johnnyreilly
tags: [typescript, azure] # Must match tags in blog-website/blog/tags.yml
image: ./title-image.png # Optional hero image
description: 'SEO description'
hide_table_of_contents: false
---
```

- Tags must be defined in `blog-website/blog/tags.yml`
- Author info is in `blog-website/blog/authors.yml`
- Images are co-located with the post in the same directory

## Architecture Notes

### Azure Functions API

Located in `blog-website/api/src/functions/`, includes:

- `fallback/`: Handles 404s and redirects
- `redirect-report/`: Analytics for redirects

### Pre/Post Processing

Uses Bun runtime (`pre-post-processing/`):

- Pre-build: Queries git history to populate "Recently Updated" posts in footer
- Post-build: Enriches sitemap with lastmod dates, processes feeds

### Image Handling

- Production uses Cloudinary for image optimization via `rehype-cloudinary-docusaurus`
- Local development serves images directly
- Controlled by `IS_LIVE_SITE` environment variable

### Custom Theme Components

Swizzled Docusaurus components in `blog-website/src/theme/`:

- `BlogArchivePage/`: Custom archive layout
- `BlogPostPage/`: Custom post layout
- `MDXComponents/`: Custom MDX component overrides

### Deployment

- Hosted on Azure Static Web Apps
- CI/CD via GitHub Actions (`.github/workflows/build-and-deploy-static-web-app.yml`)
- Infrastructure managed with Bicep (`infra/`)
- Uses OIDC authentication between GitHub and Azure
