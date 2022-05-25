# [blog.johnnyreilly.com](https://blog.johnnyreilly.com)

[![Build and Deploy](https://github.com/johnnyreilly/blog.johnnyreilly.com/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/johnnyreilly/blog.johnnyreilly.com/actions/workflows/build-and-deploy.yml)

This repo contains the source code for John Reilly's blog. The blog can be found here: https://blog.johnnyreilly.com

The blog is hosted on Azure Static Web Apps. [Learn how we migrated there from GitHub Pages here.](https://blog.johnnyreilly.com/2022/02/01/migrating-from-github-pages-to-azure-static-web-apps) It is built with [Docusaurus](https://v2.docusaurus.io/). [GitHub Actions do the publication.](.github/workflows/build-and-deploy.yml)

Auth between GitHub and Azure is handled by https://github.com/jongio/github-azure-oidc

Historically this lived on Blogger; from 2012-2021. It only exists there for reference at this point: https://icanmakethiswork.blogspot.com
