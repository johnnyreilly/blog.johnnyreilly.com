---
title: 'TypeScript 4.7 and ECMAScript Module Support'
authors: johnnyreilly
tags: [TypeScript, ECMAScript Modules]
image: ./title-image.png
hide_table_of_contents: false
---

As part of the TypeScript 4.7 release comes a major upgrade to ECMAScript Module Support for Node.js. This post takes a look at what that means.

![title image reading "Upgrading to React 18 with TypeScript" with the React, TypeScript and Definitely Typed logos`](title-image.png)

## A short history of ECMAScript modules

When ES6 shipped back in 2015, with it came the concept of modules for JavaScript. Back then it was known as "ES6 modules". These days they are called ECMAScript modules.

Whilst writing code using ECMAScript module semantics came quickly for front end, for the back end (which is generally Node.js) that has not the case. There's a number of reasons for this:

1. There was already an established module system used in Node.js called [CommonJS](https://en.wikipedia.org/wiki/CommonJS)
2. Node.js itself did not initially offer support for ECMAScript modules; in large part because of the problems associated with being able to support CommonJS _as well_ as ECMAScript modules.

However, with the release Node.js 14 support for ECMAScript modules (AKA "ESM") landed. If you're interested in the details of that module support then it's worth [reading this post on ECMAScript modules](https://blog.logrocket.com/es-modules-in-node-today/).

## TypeScript support

The TypeScript team have been experimenting with ways to offer support for ECMAScript modules from a Node.js perspective, and with TypeScript 4.7 support is being released.

In this post we'll test drive that support by attempting to build a simple module in TypeScript using the new ECMAScript modules support. As we do this, we'll discuss what it looks like to author ECMAScript modules for Node.js in TypeScript.

Let's go!

## Making a module

We're going to make a module named `greeter` - let's initialise it:

```shell
mkdir greeter
cd greeter
npm init --yes
```

We now have a `package.json` that looks something like this:

```json
{
  "name": "greeter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Node.js supports a new setting in `package.json` called `type`. [This can be set to either "module" or "commonjs"](https://nodejs.org/api/packages.html#type). To quote the docs:

> Files ending with `.js` are loaded as ES modules when the nearest parent package.json file contains a top-level field `"type"` with a value of `"module"`.

With that in mind, we'll add a `"type": "module"` to our `package.json`.

We're now ECMAScript module support compliant, let's start adding some TypeScript.

## Adding TypeScript 4.7

In order that we can make use of TypeScript ECMAScript modules support we're going to install TypeScript 4.7 (currently in beta):

```
npm install typescript@4.7.0-beta --save
```

With this in place we'll initialise a TypeScript project:

```
npx tsc --init
```

This will create a `tsconfig.json` file which contains many options. We will tweak the `module` option to be `nodenext` to opt into ECMAScript module support:

```json
{
  "compilerOptions": {
    // ...
    "module": "nodenext",
    "outDir": "./lib"
    // ...
  }
}
```

We've also set the `outDir` option, such that compiled JavaScript will go into that directory. We'll also update the `"scripts"` section of our `package.json` to include `build` and `start` scripts:

```json
  "scripts": {
    "build": "tsc",
    "start": "node lib/index.js"
  },
```

## Writing TypeScript ECMAScript modules

index.ts
greeter.ts

```
npm run build && npm start
```
