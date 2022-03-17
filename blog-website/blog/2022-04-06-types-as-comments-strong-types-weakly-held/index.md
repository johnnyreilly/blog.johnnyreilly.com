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

I don't use `enum`s, `namespace`s, `decorator`s etc. This is significant as each of those features steps has an emit aspect; using one of these will require transpilation to create special JavaScript to represent a custom TypeScript implemented feature. All other TypeScript features are _erased_ by transpilation; there's no execution characteristics.

So by subsetting the features of TypeScript, we can choose to use only those features that do not have an emit aspect. By making that choice, it's possible to use just JavaScript, if we're willing to commit to using JSDoc syntax in favour of TypeScript. There's many in the community who are doing this on sizeable projects like [webpack](https://github.com/webpack/webpack) already.

JSDoc is great, but it's undeniably more verbose than writing TypeScript. If types as comments was to be adopted, we'd able to write TypeScript in our JavaScript files. We'd be able to use TypeScript to type check that **if we wanted to**. But we wouldn't need to transpile our code prior to running. We could run our source code directly. Brilliant!

## Generic invocations - TypeScript... a change is coming?

Up until now as we've looked at the proposal, the story has been one of JavaScript becoming "types tolerant" and the likes of Flow / TypeScript syntax in future being considered valid JavaScript. In actual fact, this is a two way street; to comply with types become JavaScript native, TypeScript would have to make changes to make to its own world. There's a few cases which apply, the one that seems most significant is that of generic invocation. [To quote the proposal](https://github.com/giltayar/proposal-types-as-comments#generic-invocations):

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
