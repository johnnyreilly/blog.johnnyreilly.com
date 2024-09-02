---
slug: type-annotations-proposal-strong-types-weakly-held
title: 'Type annotations: strong types, weakly held'
authors: johnnyreilly
tags: [typescript, javascript, jsdoc]
image: ./title-image.png
description: 'Type annotations is a proposal which would allow for the inclusion of types in JavaScript code. Here is a description of the proposal and some thoughts.'
hide_table_of_contents: false
---

Recently, a new ECMAScript proposal called ["Type Annotations"](https://github.com/tc39/proposal-type-annotations) (originally named ["Types as Comments"](https://github.com/giltayar/proposal-types-as-comments)) was revealed. The purpose is to allow type annotations to be valid JavaScript syntax. Albeit syntax that is ignored by JavaScript engines. The proposal is being worked on by Gil Tayar, Daniel Rosenwasser, Romulo Cintra, Rob Palmer, and others. Many of these people are from TypeScript community - however this proposal intentionally does not exist to benefit TypeScript alone.

<!--truncate-->

It's a contentious topic. As a regular (and longtime) TypeScript user, here's a description of the proposal and some thoughts.

![title image reading "Type annotations: strong types, weakly held" with the JavaScript logo](title-image.png)

## What is the proposal?

Types annotations is a proposal which would allow for the inclusion of types in JavaScript code. Consider the following piece of TypeScript:

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

Types annotations isn't an endorsement of a particular type system. Furthermore, it is not type checking in the browser or type checking in Node.js.

Let's consider each of these. There's a number of languages which allow us to type check JavaScript. TypeScript, Flow, Hegel and others all play in this space. They are all similar, but different. They have different syntax and they do different things.

What they have in common, is the space where types live in their syntax or grammar. The proposal essentially says "hey we might have different approaches to describing types, but we agree about where the types ought to live - let's standardise that".

This is why the original proposal name of "types as comments" is instructive; these types would be ignored by JavaScript runtimes. The fact they would be ignored is an indication that no existing type system would be "anointed" by this proposal.

Consider the following:

```ts
const theAnswer: gibberish = 42;
```

This is neither TypeScript or Flow. Both would complain about the above. JavaScript, if this proposal were adopted, would be entirely untroubled.

To reiterate: the proposal is not an endorsement of any given type system and it follows that there is no runtime type checking being introduced to JavaScript.

## Why do this at all?

It's worth taking a look at [Daniel Rosenwasser](https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/)'s post where he announces the proposal. Daniel is part of the TypeScript team and one of champions of this proposal, along with [Rob Palmer](https://twitter.com/robpalmer2) at Bloomberg and [Romulo Cintra](https://twitter.com/romulocintra) at Igalia.

He says:

> Today, you can create a .js file in your editor and start sprinkling in types in the form of JSDoc comments.
>
> ```js
> /**
>  * @param a {number}
>  * @param b {number}
>  */
> function add(a, b) {
>   return a + b;
> }
> ```
>
> Because these are just comments, they don’t change how your code runs at all – they’re just a form of documentation, but TypeScript uses them to give you a better JavaScript editing experience ... This feature makes it incredibly convenient to get some of the TypeScript experience without a build step, and you can use it for small scripts, basic web pages, server code in Node.js, etc.
>
> Still, you’ll notice that this is a little verbose – we love how lightweight the inner-loop is for writing JavaScript, but we’re missing how convenient TypeScript makes it to just write types.
>
> _So what if we had both?_
>
> What if we could have something like TypeScript syntax which was totally ignored – sort of like comments – in JavaScript.
>
> ```ts
> function add(a: number, b: number) {
>   return a + b;
> }
> ```

What I take from this, is that JavaScript with types annotations, would be a more developer friendly JSDoc.

## "It's the JSDoc I always wanted!"

This idea really resonates with me. I'm a longtime user of JSDoc. Let me articulate why I find it useful.

What I wanted, way back before TypeScript existed, was JavaScript with static typing. TypeScript _mostly_ is that. At least in the way I choose to use it.

I don't use `enum`s, `namespace`s, `decorator`s etc. This is significant as each of those features steps has an emit aspect; using one of these will require transpilation to create special JavaScript to represent a custom TypeScript implemented feature. All other TypeScript features are _erased_ by transpilation; there's no execution characteristics.

So by subsetting the features of TypeScript, we can choose to use only those features that do not have an emit aspect. By making that choice, it's possible to use just JavaScript, if we're willing to commit to using JSDoc syntax within JavaScript _instead_ of TypeScript. There's many in the community who are doing this on sizeable projects like [webpack](https://github.com/webpack/webpack) already. We don't lose type checking, we don't lose refactoring possibilities thanks to editors like VS Code.

JSDoc is great, but it's undeniably more verbose than writing TypeScript. If types annotations was to be adopted, we'd able to write TypeScript in our JavaScript files. We'd be able to use TypeScript to type check that **if we wanted to**. But we wouldn't need to transpile our code prior to running. We could run our source code directly. Brilliant!

## Controversy and Compromise

Up until now, as we've looked at the proposal, the story has been one of JavaScript becoming "types tolerant". And as a consequence, the syntax of Flow / TypeScript / Hegel et al would in future being considered valid JavaScript.

This paints a picture of JavaScript, a dynamic language, being changed to accomodate the sensibilities of those who favour static typing. If you should glance at the discussions on Hacker News and in the issues of the proposal it's clear there's a very vocal section of JavaScript developers who consider this proposal to be thoroughly unwanted.

Whilst it's unlikely that the most fervent dynamic language advocate will change their mind, it's worth considering the nuance of this proposal. In actual fact, the proposal is a two way street; to comply with types becoming JavaScript native, languages like TypeScript would likely make changes to accomodate.

## Generic invocations and TypeScript

There's a few cases which apply, the one that seems most significant is that of generic invocation. [To quote the proposal](https://github.com/giltayar/proposal-types-as-comments#generic-invocations):

> One can explicitly specify the type arguments of a generic function invocation or generic class instantiation [in TypeScript](https://www.typescriptlang.org/docs/handbook/2/functions.html#specifying-type-arguments).
>
> ```ts
> // TypeScript
> add<number>(4, 5);
> new Point<bigint>(4n, 5n);
> ```
>
> The above syntax is already valid JavaScript that users may rely on, so we cannot use this syntax as-is.

So if this proposal was to land, writing today's style TypeScript in JavaScript would _not_ work in the case of generic invocations.

If we read on in the proposal it says;

> We expect some form of new syntax that could be used to resolve this ambiguity.
> No specific solution is proposed at this point of time, but one example option is to use a syntactic prefix such as `::`
>
> ```ts
> // Types as Comments - example syntax solution
> add::<number>(4, 5)
> new Point::<bigint>(4n, 5n)
> ```
>
> These type arguments (`::<type>`) would be ignored by the JavaScript runtime.
> It would be reasonable for this non-ambiguous syntax to be adopted in TypeScript as well.

This last sentence is significant. Let's read it again:

> It would be reasonable for this non-ambiguous syntax to be adopted in TypeScript as well

Whilst not being an absolute commitment, this certainly suggests that TypeScript would be willing to change its own syntax to align with something that was standardised as typed JavaScript.

Speaking personally, I don't love the proposed new syntax; but I understand the rationale. Certainly a new generic invocation syntax is something I could come to terms with. It's good of the TypeScript team to be open to the idea of making changes to the language to align with the proposal. This is not zero cost to them. This demonstrates that to allow this proposal to land, there will be compromises on many sides. It's likely that Flow will be similarly affected also.

## Conclusion

When you see the various discussions on this topic online, it's clear there are many strong feelings. The proposal hasn't even reached stage 1 (of the potential 4 stages required for adoption). This may be a feature that doesn't make it. Or perhaps takes a long time to land on a mutually agreed design.

Speaking personally I'm hopeful that this does end up being part of the language. Not only do I like running raw JS, I see the benefits of being able to onboard people from JavaScript to TypeScript by allowing types to live directly in JavaScript.

It's said that prediction is very difficult, especially if it's about the future. So it is hard to know for sure what the long term effects on the language and the ecosystem of this proposal might be. It would certainly lower the barrier to entry for using static typing with JavaScript, and as consequence, would likely lead to greater adoption and hence less bugs in userland. Time will tell.

[This post was originally published on LogRocket.](https://blog.logrocket.com/types-as-comments-strong-types-weakly-held/)

<head>
    <link rel="canonical" href="https://blog.logrocket.com/types-as-comments-strong-types-weakly-held/" />
</head>
