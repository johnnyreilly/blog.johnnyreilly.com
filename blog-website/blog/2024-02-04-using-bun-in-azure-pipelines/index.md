---
slug: using-bun-in-azure-pipelines
title: 'Using Bun in Azure Pipelines'
authors: johnnyreilly
tags: [bun, azure pipelines, azure devops]
image: ./title-image.png
description: Bun is a fast JavaScript runtime which can be used to speed up the TypeScript / JavaScript you have. This post shows you how to use it in Azure Pipelines.
hide_table_of_contents: false
---

I'm a keen user of [Bun](https://bun.sh/). Bun is a fast TypeScript / JavaScript runtime which can be used to speed up the TypeScript / JavaScript you have. It's a drop-in replacement for Node.js, and it's compatible with the vast majority of the Node.js ecosystem. (There are still rough edges that have issues.) In this post we'll look at how to use it in Azure Pipelines.

![title image reading "Using Bun in Azure Pipelines" with the Bun and Azure Pipelines logos](title-image.png)

<!--truncate-->

## How to install Bun

I use Azure Pipelines for much of my day to day work. However, my OSS work is (unsurprisingly) all GitHub oriented. Using Bun in GitHub Actions is straightforward; you just make use of the [Setup Bun GitHub Action](https://github.com/marketplace/actions/setup-bun) to install Bun and you're off to the races. There isn't an equivalent for Azure Pipelines **but that doesn't matter**.

It turns out there's a great variety of [ways to install Bun](https://bun.sh/docs/installation). However the simplest of the lot is to install it via npm, like so:

```bash
npm install -g bun
```

This installs the `bun` command globally from the [`bun` package](https://www.npmjs.com/package/bun). You can then use it to run your TypeScript / JavaScript. This is the approach we'll use in Azure Pipelines.

## Using Bun in Azure Pipelines

Since there's already a [dedicated Azure Pipelines task for npm](https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/npm-v1?view=azure-pipelines), we can use that to install Bun. Here's an example of how to do that:

```yml
- task: Npm@1
  displayName: setup bun
  inputs:
    command: 'custom'
    customCommand: 'install -g bun'
    verbose: true
```

Now we're able to use Bun in our Azure Pipelines. Here's an example of how to use it to install dependencies and run a build:

```yaml
- bash: bun install
  displayName: 'install'

- bash: bun run build
  displayName: 'build'
```

## Summary

We're able to use Bun in Azure Pipelines by installing it via npm and then using it as we would Node.js. This is a great way to speed up your TypeScript / JavaScript builds. I hope you find it useful!
