---
slug: bun-overview
title: 'Overview of Bun, a JavaScript runtime: A practical guide'
authors: johnnyreilly
tags: [bun]
description: Get an overview of the JavaScript runtime Bun.
hide_table_of_contents: false
---

Bun is an all-in-one JavaScript runtime and toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager. If you're building front end applications then you can use Bun to have a faster development experience.

## What is Bun?

Bun was created by was designed by Jarred Sumner as a drop-in replacement for Node.js. Bun uses JavaScriptCore as the JavaScript engine, unlike other JavaScript runtimes like Node.js and Deno, which both use V8. The 1.0 release of Bun was [September 8, 2023](https://bun.sh/blog/bun-v1.0). However, long before that, Bun was already widely known and used.

Jarred Sumner even appeared on the [LogRocket podcast; PodRocket on August 5th, 2022](https://podrocket.logrocket.com/bun) discussing Bun - more than a year before 1.0.

The Bun team describe Bun as follows:

> Bun's goal is simple: eliminate slowness and complexity without throwing away everything that's great about JavaScript. Your favorite libraries and frameworks should still work, and you shouldn't need to unlearn the conventions you're familiar with.

Bun is written using the Zig programming language. Zig is a general-purpose programming language and toolchain for maintaining robust, optimal and reusable software. By contrast, Node.js is written in C++ and Deno is written in Rust. One of the reasons that Bun is so fast is that Zig makes it possible to write code that is both fast and safe.

So what does Bun offer? Let's take a look at some of the features.

### Node.js compatibility / npm support

Bun aims for complete Node.js API compatibility. Most npm packages intended for Node.js environments will work with Bun out of the box.

Bun also includes a built-in package manager, `bun install`, which is compatible with npm. You can use it to install packages from npm, or from a Bun registry. Significantly, you still use `package.json` to manage your dependencies; this makes migration from Node.js to Bun very easy and reduces the learning curve.

### Speed!

Bun extends the JavaScriptCore engine — the performance-minded JS engine built for Safari — with native-speed functionality implemented in Zig. It's fast. Really fast. It's way faster than Node.js and faster than Deno in most benchmarks.

You'll hear about speed in almost everything that Bun does. Speed is a feature. Bun runs fast. Bun starts fast. Bun installs fast. Bun hot reloads fast. Bun bundles fast. Bun runs tests fast. Bun is **fast**.

### TypeScript / TSX / JSX support

Bun can directly execute `.ts` and `.tsx` files just like vanilla JavaScript, with no extra configuration. If you import a `.ts` or `.tsx` file (or an npm module that exports these files), Bun internally transpiles it into JavaScript then executes the file. No need to set up a build step or add `ts-node`. It just works. There's a post on [migrating from Node.js to Bun](https://blog.logrocket.com/migrating-typescript-app-node-js-bun/) that looks into this.

Likewise, JSX just works. Bun internally transpiles JSX syntax to vanilla JavaScript. Like TypeScript itself, Bun assumes React by default but respects custom JSX transforms defined in `tsconfig.json`.

### Hot reloading / watch mode

Bun has great support for watch mode and hot reloading. Reloads are fast. The filesystem watchers you're likely used to have several layers of libraries wrapping the native APIs or worse, rely on polling.

Instead, Bun uses operating system native filesystem watcher APIs like `kqueue1` or `inotify` to detect changes to files. Bun also does a number of optimizations to enable it scale to larger projects (such as setting a high rlimit for file descriptors, statically allocated file path buffers, reuse file descriptors when possible, etc).

The Bun team demonstrate the performance of watch mode in their documentation:

![incredibly fast hot reloading in VS Code](https://user-images.githubusercontent.com/709451/228439002-7b9fad11-0db2-4e48-b82d-2b88c8625625.gif)

That is fast.

### Bun takes the pain out of ES modules and CommonJS

The JavaScript ecosystem is currently in the midst of a years-long transition from CommonJS modules to native ES modules. TypeScript enforces its own set of rules around import extensions that aren't compatible with ESM. Different build tools support path re-mapping via disparate non-compatible mechanisms. Node.js for instance, has many gotchas around ESM resolution which make it difficult to use in practice.

Bun aims to provide a consistent and predictable module resolution system that just works. It does this very well indeed. Code that Node.js might struggle with, Bun handles with ease. This is a great example of Bun taking the pain out of using JavaScript. This is saved time and increased happiness.

### Support for web standard APIs

Some Web APIs aren't relevant in the context of a server-first runtime like Bun. For instance, the DOM API or History API. Many others, though, are broadly useful outside of the browser context; when possible, Bun implements these Web-standard APIs instead of introducing new APIs. It doesn't reinvent the wheel; it leans into the ecosystem. A great example is the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API); an API that has been around for a long time in the browser but is relatively new to Node.js. Bun supports Fetch out of the box along with [many others](https://bun.sh/docs/runtime/web-apis).

### Bundling

Bun includes a [built-in bundler](https://bun.sh/docs/bundler#why-bundle); it's still in beta but it's already very good. The bundler is fast and supports many of the features you'd expect from a bundler. It's also possible to [use other bundlers with Bun, such as Vite](https://bun.sh/guides/ecosystem/vite).

### Testing

Bun ships with a fast, built-in, [Jest-compatible test runner](https://bun.sh/docs/cli/test). Tests are executed with the Bun runtime, and support the following features.

- TypeScript and JSX
- Lifecycle hooks
- Snapshot testing
- UI & DOM testing
- Watch mode with `--watch`
- Script pre-loading with `--preload`

### Debugging

All platforms benefit from the ability to debug. Bun supports this two ways presently:

- the [web debugger](https://bun.sh/guides/runtime/web-debugger)
- the [VS Code debugger](https://bun.sh/guides/runtime/vscode-debugger)

Of the two of these, the recommended approach at the time of writing is to use the web debugger. The VS Code debugger is still in beta and has some bugs.

### Additional internal Bun APIs

[Bun implements a set of native APIs](https://bun.sh/docs/runtime/bun-apis) on the Bun global object and through a number of built-in modules. These APIs are heavily optimized and represent the canonical "Bun-native" way to implement some common functionality.

Bun strives to implement standard Web APIs wherever possible. Bun introduces new APIs primarily for server-side tasks where no standard exists, such as file I/O and starting an HTTP server. In these cases, Bun's approach still builds atop standard APIs like `Blob`, `URL`, and `Request`.

## Why use Bun?

JavaScript is a great language, and the npm ecosystem is vast. These combined have powered large numbers of systems and development experiences for years. Given that this is the case, why would you want to use Bun? What are the benefits?

If I was to explain why I've been using Bun, it's because it is like using Node.js but simply a better version of it. Bun is the Node.js I want to use. Let's go through some of the reasons why:

- Performance / speed - Bun is fast. Really fast. That speed really makes a difference in terms of your efficiency when developing software. Bun gives you time back.
- TypeScript support - Bun has great TypeScript support. It's easy to use TypeScript with Bun. You don't need to do anything special to get it to work. It just works.
- Ease of use / DX - Bun is a joy to use; because it targets Node.js compatibility, it means that there isn't much to learn if you were doing Node.js before; you just use Bun.
- Community & ecosystem - Bun has a great community and ecosystem. It's a joy to be a part of it. If you reach out with an issue, you're likely to get a response very quickly indeed. The Bun team are very responsive and helpful.
- Documentation - the documentation for Bun is excellent. It's clear, concise, and easy to follow. It's also very comprehensive. If you're looking for something, you'll likely find it in the docs.

## Use cases for Bun

So where would I use Bun? What are the use cases for Bun? Here are some of the use cases that I've used Bun for:

- Installing npm packages - because Bun is compatible with npm, you can use it to install npm packages. But your install will be faster than with Node.js. The time you can waste sitting looking at a console to install locally / waiting for your CI to install packages is time you can get back.
- Running scripts - I've long used JavaScript and TypeScript to write command line scripts. Bun is a great way to run these bun have them execute much faster.
- Local development - Bun is great for local development. It's fast, it's easy to use, and it's a joy to use. Let me say it again: it's fast!

There are many use cases and the best resource to consider is [Bun's guides](https://bun.sh/guides).

## Bun vs. Node.js and Deno

Bun is a JavaScript runtime. So is Node.js and so is Deno. So what's the difference between them? Why would you use Bun over Node.js or Deno?

It's possible to look at Bun as "Node.js - but better!". By this I mean, it supports the same APIs as Node.js, but it's faster and often easier to use. If you want to write TypeScript with Node.js, you can but you will need to do some work to get it to work. With Bun, you can just write TypeScript. The speed of Bun is also a big selling point. Bun is much faster than Node.js. And not just a little bit faster, but a **lot** faster.

A very similar project to Bun is Deno. It is also a JavaScript runtime; it's also fast and supports TypeScript. However, Bun is faster in many benchmarks than Deno. Even though Deno itself is very fast! Deno is a great project, but at launch it intentionally didn't support npm. The [launch blog of Deno](https://deno.com/blog/v1) stated:

> Unfortunately, many users will find a frustrating lack of compatibility with existing JavaScript tooling. Deno is not compatible, in general, with Node (NPM) packages. There is a nascent compatibility layer being built at https://deno.land/std/node/ but it is far from complete.

This lack of compatibility increased the friction that existed in migrating a Node.js app across to Deno. Times have changed; Deno now supports npm and that friction is lessened. But Bun has supported npm from the start, and always intended to.

There's some great articles on the differences between Node.js, Bun and Deno:

- [Bun: The JavaScript runtime taking on Node.js and Deno](https://blog.logrocket.com/bun-javascript-runtime-taking-node-js-deno/)
- [Migrating a TypeScript app from Node.js to Bun](https://blog.logrocket.com/migrating-typescript-app-node-js-bun/)

## Conclusion

If you love writing JavaScript and TypeScript, then you'll love Bun. It's fast, it's easy to use, and it's a joy to use. Bun is a great project and I'm excited to see where it goes next.

Do take a look at the [Bun website](https://bun.sh/) and the [Bun documentation](https://bun.sh/docs/). Also check out the [Bun guides](https://bun.sh/guides/) and these articles:

- [Getting started with Bun and React](https://blog.logrocket.com/getting-started-bun-react/)
- [Build a fast, Next.js-like app with Bun](https://blog.logrocket.com/build-fast-next-js-like-app-bun/)
