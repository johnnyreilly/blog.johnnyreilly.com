# [johnnyreilly.com](https://johnnyreilly.com)

[![Static Web App - Build and Deploy 🏗️](https://github.com/johnnyreilly/blog.johnnyreilly.com/actions/workflows/build-and-deploy-static-web-app.yml/badge.svg)](https://github.com/johnnyreilly/blog.johnnyreilly.com/actions/workflows/build-and-deploy-static-web-app.yml)

This repo contains the source code for John Reilly's blog. The blog can be found here: <https://johnnyreilly.com> - it is built with [Docusaurus](https://docusaurus.io/).

## Running locally

```shell
cd blog-website
npm i
npm start
```

## Building locally

```shell
cd blog-website
npm i
npm run build
```

To then run that build:

```shell
npm run serve
```

## Hosting

The blog is hosted on Azure Static Web Apps.

[If you'd like to learn how we migrated to SWAs from GitHub Pages then read this post.](https://johnnyreilly.com/2022/02/01/migrating-from-github-pages-to-azure-static-web-apps)

[We use GitHub Actions to publish.](.github/workflows/build-and-deploy-static-web-app.yml)

## Auth

Auth between GitHub and Azure is handled by https://github.com/jongio/github-azure-oidc

## History

Historically this blog lived on Blogger; from 2012-2021. It only exists there for reference now; it can be found mouldering here: <https://icanmakethiswork.blogspot.com>

If you're interested in how we migrated from Blogger to Docusaurus, then take a look at [our definitive guide to migrating from Blogger to Docusaurus](https://johnnyreilly.com/definitive-guide-to-migrating-from-blogger-to-docusaurus).
