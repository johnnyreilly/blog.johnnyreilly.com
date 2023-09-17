---
slug: the-ternary-operator-meets-destructuring
title: 'The Ternary Operator <3 Destructuring'
authors: johnnyreilly
tags: [typescript, javascript]
hide_table_of_contents: false
description: 'ES2015 destructuring allows setting multiple variables using the ternary operator. Change the return type of each branch to an object for this to work.'
---

I'm addicted to the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). For reasons I can't explain, I cannot get enough of:

<!--truncate-->

```js
const thisOrThat = someCondition ? 'this' : 'or that';
```

The occasion regularly arises where I need to turn my lovely terse code into an if statement in order to set 2 variables instead of 1. I've been heartbroken; I hate doing:

```ts
let legWear: string, coat: boolean;
if (weather === 'good') {
  legWear = 'shorts';
  coat = false;
} else {
  legWear = 'jeans';
  coat = true;
}
```

Just going from setting one variable to setting two has been really traumatic:

- I've had do stop using `const` and moved to `let`. This has made my code less "truthful" in the sense that I never intend to reassign these variables again; they are intended to be immutable.
- I've gone from 1 line of code to _9 lines of code_. That's 9x the code for increasing the number of variables in play by 1. That's... heavy.
- This third point only applies if you're using TypeScript (and I am): I have to specify the types of my variables up front if I want type safety.

ES2015 gives us another option. We can move back to the ternary operator if we change the return type of each branch to be an object sharing the same signature. Then, using destructuring, we can pull out those object properties into `const`s:

```ts
const { legWear, coat } =
  weather === 'good'
    ? { legWear: 'shorts', coat: false }
    : { legWear: 'jeans', coat: true };
```

With this approach we're keeping usage of `const` instead of `let` and we're only marginally increasing the amount of code we're writing. If you're using TypeScript you're back to being able to rely on the compiler correctly inferring your types; you don't need to specify. Awesome.

## Crowdfund You A Tuple

I thought I was done and then I saw this:

> [@johnny_reilly](https://twitter.com/johnny_reilly) even neater with tuples: const [str, num] = test ? ["yes", 100] : ["no", 50];
>
> — Illustrated Pamphlet (@Rickenhacker) [August 20, 2016](https://twitter.com/Rickenhacker/status/766913766323781632)

<script async="" src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>

[Daniel](https://twitter.com/Rickenhacker) helpfully points out that there's an even terser syntax available to us:

```ts
const [legWear, coat] =
  weather === 'good' ? ['shorts', false] : ['jeans', true];
```

The above is ES2015 array destructuring. We get exactly the same effect but it's a little terser as we don't have to repeat the prop names as we do when using object destructuring. From a TypeScript perspective the assignment side of the above is a [Tuple](https://github.com/Microsoft/TypeScript/pull/428) which allows our type inference to flow through in the manner we'd hope.

Lovely. Thanks!
