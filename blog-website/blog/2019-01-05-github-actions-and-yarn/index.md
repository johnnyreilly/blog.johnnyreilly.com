---
slug: github-actions-and-yarn
title: 'GitHub Actions and Yarn'
authors: johnnyreilly
tags: [github actions, node.js]
hide_table_of_contents: false
description: 'Automate npm publishing using GitHub Actions; use `npm` GitHub Action with yarn or any Docker container with Node/npm installed.'
---

I'd been meaning to automate the npm publishing of [`ts-loader`](https://github.com/TypeStrong/ts-loader) for the longest time. I had attempted to use Travis to do this in the same way as [`fork-ts-checker-webpack-plugin`](https://github.com/Realytics/fork-ts-checker-webpack-plugin). Alas using secure environment variables in Travis has unfortunate implications for ts-loader's test pack.

<!--truncate-->

Be not afeard. I've heard there's a new shiny thing from GitHub that I could use instead... It's a sign; I must use it!

GitHub Actions are still in beta. Technically Actions are [code run in Docker containers](https://developer.github.com/actions/creating-github-actions/) in response to events. This didn't mean a great deal to me until I started thinking about what I wanted to do with `ts-loader`'s publishing flow.

## Automate What?

Each time I publish a release of `ts-loader` I execute the following node commands by hand:

1. `yarn install` \- to install `ts-loader`'s dependencies
2. `yarn build` \- to build `ts-loader`
3. `yarn test` \- to run `ts-loader`'s test packs
4. `npm publish` \- to publish the release of `ts-loader` to npm

Having read up on GitHub Actions it seemed like they were born to handle this sort of task.

## GitHub Action for `npm`

I quickly discovered that someone out there <s>loves me</s>

had [already written a GitHub Action for `npm`](https://github.com/actions/npm).

The example in the `README/index.md` could be easily tweaked to meet my needs with one caveat: I had to use `npm` in place of `yarn`. I didn't want to switch from `yarn`. What to do?

Well, remember when I said actions are code run in Docker containers? Another way to phrase that is to say: GitHub Actions are Docker images. Let's look under the covers of the `npm` GitHub Action. As we peer inside the [`Dockerfile`](https://github.com/actions/npm/blob/e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437/Dockerfile#L1) what do we find?

```
FROM node:10-slim
```

Hmmmm.... Interesting. The base image of the `npm` GitHub Action is `node:10-slim`. Looking it up, it seems the `-slim` Docker images come with [`yarn` included](https://github.com/nodejs/docker-node/blob/master/Dockerfile-slim.template). Which means we should be able to use `yarn` inside the `npm` GitHub Action. Nice!

## GitHub Action for `npm` for `yarn`

Using `yarn` from the GitHub Action for `npm` is delightfully simple. Here's what running `npm install` looks like:

```
# install with npm
action "install" {
  uses = "actions/npm@1.0.0"
  args = "install"
}
```

Pivoting to use `yarn install` instead of `npm install` is as simple as:

```
# install with yarn
action "install" {
  uses = "actions/npm@1.0.0"
  runs = "yarn"
  args = "install"
}
```

You can see we've introduced the `runs = "yarn"` and after that the `args` are whatever you need them to be.

## Going With The Workflow

A GitHub Workflow that implements the steps I need would look like this:

```
workflow "build, test and publish on release" {
  on = "push"
  resolves = "publish"
}

# install with yarn
action "install" {
  uses = "actions/npm@1.0.0"
  runs = "yarn"
  args = "install"
}

# build with yarn
action "build" {
  needs = "install"
  uses = "actions/npm@1.0.0"
  runs = "yarn"
  args = "build"
}

# test with yarn
action "test" {
  needs = "build"
  uses = "actions/npm@1.0.0"
  runs = "yarn"
  args = "test"
}

# filter for a new tag
action "check for new tag" {
  needs = "Test"
  uses = "actions/bin/filter@master"
  args = "tag"
}

# publish with npm
action "publish" {
  needs = "check for new tag"
  uses = "actions/npm@1.0.0"
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}
```

As you can see, this is a direct automation of steps 1-4 I listed earlier. Since all these actions are executed in the same container, we can skip from `yarn` to `npm` with gay abandon.

What's absolutely amazing is, when I got access to GitHub Actions [my hand crafted workflow](https://github.com/TypeStrong/ts-loader/blob/master/.github/main.workflow) looked like it should work first time! I know, right? Don't you love it when that happens? [Alas there's presently a problem with filters in GitHub Actions](https://github.com/actions/bin/issues/13). But that's by the by, if you're just looking to use a GitHub Action with yarn instead of npm then you are home free.

## You Don't Actually Need the npm GitHub Action

You heard me right. Docker containers be Docker containers. You don't actually need to use this:

```
uses = "actions/npm@1.0.0"
```

You can use _any_ Docker container which has node / npm installed! So if you'd like to use say node 11 instead you could just do this:

```
uses = "docker://node:11"
```

Which would use the node 11 image on [docker hub](https://hub.docker.com/_/node).

Which is pretty cool. You know what's even more incredible? Inside a workflow you can switch `uses` mid-workflow and keep the output. That's right; you can have a work flow with say three actions running `uses = "docker://node:11"` and then a fourth running `uses = "actions/npm@1.0.0"`. That's _so_ flexible and powerful!

Thanks to [Matt Colyer](https://github.com/mcolyer) and [Landon Schropp](https://github.com/LandonSchropp) for [schooling me on the intricicies of GitHub Actions](https://github.com/actions/npm/issues/9). Much ❤
