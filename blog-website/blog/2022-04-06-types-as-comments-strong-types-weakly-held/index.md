---
title: 'Types as comments: strong types, weakly held'
authors: johnnyreilly
tags: [types-as-comments, JSDoc, ECMAScript, types, proposal]
image: ./title-image.png
hide_table_of_contents: false
---

Recently, a new ECMAScript proposal called ["Types as Comments"](https://github.com/giltayar/proposal-types-as-comments) was revealed. The purpose is to allow type annotations to be valid JavaScript syntax. Albeit syntax that is ignored by JavaScript engines. The proposal is being worked on by Gil Tayar, Daniel Rosenwasser, Romulo Cintra, Rob Palmer, and others. Many of these people are from TypeScript community - however this proposal intentionally does not exist to benefit TypeScript alone.

It's a contentious topic. As a regular (and longtime) TypeScript user, here's a description of the proposal and some thoughts.

## What is the proposal?

Types as comments (or "tomments" as some have dubbed it) is a proposal which would allow for the inclusion of types in JavaScript code. Consider the following piece of TypeScript:

```ts
const theAnswer: number = 42;
```

At present, this is not valid JavaScript. If you try and run the above in a JavaScript engine you'll get an error. Types are not part of JavaScript syntax.

![screenshot of `const theAnswer: number = 42;` entered into the Chrome devtools and responding with an error that says `Uncaught SyntaxError: Missing initializer in const declaration`](screenshot-types-in-the-chrome-console.png)

Interestingly, it's already possible to store types within JavaScript through a standard known as JSDoc. [I've written about how TypeScript and JSDoc connect before.](https://blog.logrocket.com/typescript-vs-jsdoc-javascript/), essentially the thing to note is that JSDoc amounts to storing type declarations in the context of JavaScript comments.

It's already possible to write our code sample in valid JavaScript expressing the types within JSDoc. It looks like this:

```ts
/** @type {number} */
const theAnswer = 42;
```

This works, but it took two lines of code instead of one. The proposal allows for types to be directly expressed; not written as comments. So rather than writing the JSDoc equivalent, imagine if JavaScript was happy with the following instead:

```ts
const theAnswer: number = 42;
```

That's what the proposal amounts to.

## What isn't it?

Now that we understand what the proposal is, let's consider what it isn't.

Types as comments isn't an endorsement of a particular type system. Furthermore, it is not type checking in the browser or type checking in Node.js.

Let's consider each of these. There's a number of languages which allow us to type check JavaScript. TypeScript, Flow, Hegel and others all play in this space. They are all similar, but different. They have different syntax and they do different things.

What they have in common, is the space where types live in their syntax or grammar. The proposal essentially says "hey we might not have different approaches to describing types, but we agree about where the types ought to live - let's standardise that".

This is why the name "types as comments" is key; these types would be ignored by JavaScript runtimes. The fact they would be ignored is an indication that no existing type system would be "anointed" by this proposal.

Consider the following:

```ts
const theAnswer: gibberish = 42;
```

This is neither TypeScript or Flow. Both would complain about the above. JavaScript, if this proposal were adopted, would be entirely untroubled.

To reiterate: the proposal is not an endorsement of any given type system and it follows that there is no runtime type checking being introduced to JavaScript.

## "It's the JSDoc I always wanted!"

I really like JSDoc. Let me articulate why.

What I wanted, way back before TypeScript existed, was JavaScript with static typing. TypeScript _mostly_ is that. At least in the way I choose to use it.

I don't use enums, namespaces, generators etc. Generally this means I'm writing TypeScript, or quite possibly TSX if I'm working with React (more on this later)

Just write JS

Jsx

Enums etc

https://github.com/giltayar/proposal-types-as-comments#generic-invocations
