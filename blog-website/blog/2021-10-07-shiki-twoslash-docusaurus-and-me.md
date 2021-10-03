---
title: "shiki-twoslash,Docusaurus & me"
authors: johnnyreilly
tags: [shiki twoslash, Docusaurus]
image: blog/2021-10-07-shiki-twoslash-docusaurus-and-me/permissioning-azure-pipelines-with-bicep-and-role-assignments.png
hide_table_of_contents: false
---
With shiki-twoslash you can have type-driven hover information accurate errors and type callouts for TypeScript / JavaScript code samples. This blog looks at adding shiki twoslash to a Docusaurus blog.

![title image reading "Shiki-twoslash, Docusaurus and me" and some Azure logos](../static/blog/2021-10-07-shiki-twoslash-docusaurus-and-me/title-image.png)

## What is shiki-twoslash?

Apart from anything else, [shiki-twoslash](https://shikijs.github.io/twoslash/) is an open source project by the tremendous [Orta Therox](https://twitter.com/orta) with some of the most beautiful documentation (which I totally ripped off for my title image 😉):

![screenshot of the medieval themed shiki-twoslash documentation reading: THE DOCUMENTATION CONCERNING THE NPM MODULES OF SHIKI-TWOSLASH IN WHICH MARKDOWN CODE SAMPLES ARE POWERED BY THE SYNTAX ENGINE OF VISUAL STUDIO CODE MIXED WITH THE TYPESCRIPT COMPILER’S INFORMATION BY ORTA THEROX PURVEYOR OF RENOWNED OPEN SOURCE CODE](../static/blog/2021-10-07-shiki-twoslash-docusaurus-and-me/screenshot-shiki-twoslash-docs.png)

It's worth drawing out that shiki-twoslash is actually two things combined:

- [Shiki](https://github.com/shikijs/shiki) is VS Code's syntax highlighter packaged for running in a web browser and statically via Node.js.
- Twoslash can pile on top of that and enrich TypeScript / JavaScript code blocks using the same compiler APIs as VS Code to provide type-driven hover information, accurate errors and type callouts.

So bringing these things together we can have beautiful code samples, which in the case of TS / JS are super powered! 

## shiki-twoslash meet Docusaurus

The hard work of integrating shiki-twoslash and Docusaurus has been handled by a marvellous npm package named [`docusaurus-preset-shiki-twoslash`](https://www.npmjs.com/package/docusaurus-preset-shiki-twoslash). We're going to use it to migrate my blog to using shiki-twoslash.

First up, we'll add that package to our dependencies:

```
yarn add docusaurus-preset-shiki-twoslash
```

Next we're going to reference that package in our `docusaurus.config.js`, in the `presets` section: 

```js twoslash
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  //...
  presets: [
    //...
    [
      "docusaurus-preset-shiki-twoslash",
      {
        themes: ['min-light', 'nord'],
        defaultCompilerOptions: {
          types: ['node'],
        },
      },
    ],
  ],
}
```
