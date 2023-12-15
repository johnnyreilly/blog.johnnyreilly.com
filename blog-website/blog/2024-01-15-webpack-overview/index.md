---
slug: webpack-overview
title: 'Overview of webpack, a JavaScript bundler'
authors:
  - johnnyreilly
  - name: Megan Lee
    title: Content Marketing Manager
    url: https://www.linkedin.com/in/leemeganj/
    image_url: https://media.licdn.com/dms/image/C4D03AQFSGZ5WM0U3MQ/profile-displayphoto-shrink_800_800/0/1516959703212?e=1705536000&v=beta&t=3JcqFyOGoIFse9XyBD3KZCPb3Z4hEPgbj-8dgcDfxWQ
tags: [webpack]
image: ./title-image.png
description: webpack is a JavaScript bundler that helps you bundle your code into a single file. It's a great tool for optimizing your code and improving performance.
hide_table_of_contents: false
---

If you're a JavaScript developer, you've probably heard of webpack. It's a JavaScript bundler that helps you bundle your code into a single file. It's a great tool for optimizing your code and improving performance. This article will give you an overview of webpack, its history and how it works.

It'll be a little different than your typical "what is webpack?" article, in that I write this as the maintainer of [`ts-loader`](https://github.com/TypeStrong/ts-loader), a loader used for integrating TypeScript with webpack. I've worked in the webpack ecosystem for some years now and I'll share some of my experiences with you. I'm go through a little history around bundling, and try to understand why webpack came to be such a popular choice.

![title image reading "Overview of webpack, a JavaScript bundler" with the webpack logo](title-image.png)

## A short history of web development

To answer the question "what is webpack?", we need to understand what a bundler is. To grasp that, we first need a little history lesson.

### The early days of JavaScript

If you started web development after 2016, you might not realise that bundling is a relatively new concept.

Let's roll back the clock to the late 2000's. This was when JavaScript development started to become mainstream. Around that time, jQuery was becoming popular and the web was a very different place. We didn't have the same tools we have today. We didn't have npm, we didn't have webpack, we didn't have React, we didn't have TypeScript. We didn't even have ES2015. We were still writing JavaScript in ES5.

So what did building a front end application look like back then? Well, I was a web developer back then, and I can tell you that it was a lot of work. To make a simple app you would have to:

- Go to the websites of libraries you wanted to use, usually jQuery and jQuery UI.
- Download the library files you needed (both `jquery-1.4.4.js` and the minified `jquery-1.4.4.min.js` because there weren't minification tools back then)
- Include the library files in your HTML file, and significantly **before** other JavaScript files that would depend upon jQuery.
- For bonus points, you would also download the jQuery UI CSS files and include them in your HTML file.
- For extra bonus points, you would figure out a way to serve up non-minified versions of your JavaScript files in development, and minified versions in production.

What I'm hoping you can see from this is that it was a lot of work. And it was very error prone. If you forgot to include a library, or included it in the wrong order, or included the wrong version, or forgot to minify your files, or forgot to include the CSS files, your app would break. And it would be very difficult to debug.

### Rise of the task runners

As web development became more popular, people started to realise that there was a lot of repetition in the process. So they started to automate it. Around 2012 we started to see the birth of the task runner. There were two main task runners that became popular: [Grunt](https://gruntjs.com/) and [Gulp](https://gulpjs.com/).

These task runners allowed you to automate the process of combining and minifying JavaScript and CSS files, and including them in your HTML file. They also allowed you to automate other tasks, like running tests, linting your code, and deploying your app. They did improve the web development experience, but they didn't solve all the problems.

It was still very easy to make mistakes. You could still forget to include a library, or include it in the wrong order, or get a path wrong, or forget to minify your files, or forget to include the CSS files. And it was still very difficult to debug.

But it was **so much better** than what we had before. So it became very popular.

### The rise of the module bundler

Around 2014, a new tool started to become popular: the module bundler. The first module bundler to become popular was [Browserify](http://browserify.org/). It was followed by [webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org/guide/en/), and [Parcel](https://parceljs.org/).

But what is a module bundler? Well, it's a tool that allows you to write your code in modules, and then bundle those modules into a single file. It also allows you to use other tools, like TypeScript, and CSS preprocessors like Sass and Less.

npm

import / require

## What is webpack?

By the way, it's definitely not "Webpack" or "WebPack". It's "webpack".

Tobias Koppers

https://github.com/sokra
