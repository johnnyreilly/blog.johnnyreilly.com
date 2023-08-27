---
slug: typescript-vs-jsdoc-javascript
title: 'TypeScript vs JSDoc JavaScript'
authors: johnnyreilly
tags: [javascript, typescript, JSDoc]
image: ./title-image.png
hide_table_of_contents: false
description: 'JSDoc annotations in JavaScript codebase add a new dynamic to the debate between JavaScript and TypeScript. It allows for type checking of JavaScript code.'
---

There's a debate to be had about whether using JavaScript or TypeScript leads to better outcomes when building a project. The introduction of using JSDoc annotations to type a JavaScript codebase introduces a new dynamic to this discussion. This post will investigate what that looks like, and come to an (opinionated) conclusion.

![title image reading "JSDoc JavaScript vs TypeScript" with a JavaScript logo and TypeScript logo](title-image.png)

<!--truncate-->

## Updated 29th March 2023

This blog evolved to become a talk:

<iframe width="560" height="315" src="https://www.youtube.com/embed/5MZoAcheyE4?start=240" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Slightly surreally, there's an [audiobook version of this post](https://www.youtube.com/watch?v=pj8SoTZbCTE) thanks to ThePrimeagen. Essentially he reads the blog post and says he didn't like it. But it made me laugh 😉:

<iframe width="560" height="315" src="https://www.youtube.com/embed/pj8SoTZbCTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

If you'd talked to me in 2018, I would have solidly recommended using TypeScript, and steering away from JavaScript. The rationale is simple: I'm exceedingly convinced of the value that static typing provides in terms of productivity / avoiding bugs in production. I appreciate this can be a contentious issue, but that is my settled opinion on the subject. Other opinions are available.

TypeScript has long had a good static typing story. JavaScript is dynamically typed and so historically has not. Thanks to TypeScript support for JSDoc, JavaScript can now be statically type checked.

## What is JSDoc JavaScript?

JSDoc itself actually dates way back to 1999. According to the [Wikipedia entry](https://en.wikipedia.org/wiki/JSDoc):

> JSDoc is a markup language used to annotate JavaScript source code files. Using comments containing JSDoc, programmers can add documentation describing the application programming interface of the code they're creating.

The TypeScript team have taken JSDoc support and run with it. You can now use a [variant of JSDoc annotations](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) to provide type information in JavaScript files.

What does this look like? Well, to take a simple example, a TypeScript statement like so:

```ts
let myString: string;
```

Could become the equivalent JavaScript statement with a JSDoc annotation:

```ts
/** @type {string} */
let myString;
```

This is type enhanced JavaScript which the TypeScript compiler can understand and type check.

## Why use JSDoc JavaScript?

Why would you use JSDoc JavaScript instead of TypeScript? Well there's a number of possible use cases.

Perhaps you're writing simple node scripts and you'd like a little type safety to avoid mistakes. Or perhaps you want to dip your project's toe in the waters of static type checking but without fully committing. JSDoc allows for that. Or perhaps your team simply prefers not having a compile step.

That, in fact, was the rationale of the webpack team. A little bit of history: webpack has always been a JavaScript codebase. As the codebase grew and grew, there was often discussion about using static typing. However, having a compilation step wasn't desired.

TypeScript had been quietly adding support for type checking JavaScript with the assistance of JSDoc for some time. Initial support arrived with the `--checkJs` compiler option in [TypeScript 2.3](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#errors-in-js-files-with
