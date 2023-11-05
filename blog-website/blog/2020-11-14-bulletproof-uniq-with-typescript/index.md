---
slug: bulletproof-uniq-with-typescript
title: 'Bulletproof uniq with TypeScript generics (yay code reviews!)'
authors: johnnyreilly
tags: [typescript]
hide_table_of_contents: false
description: 'Code reviews provide opportunities for improvement. A developer shares how their colleagues comment led to the creation of a better “uniq” function.'
---

Never neglect the possibilities of a code review. There are times when you raise a PR and all you want is for everyone to hit approve so you can merge, merge and ship, ship! This can be a missed opportunity. For as much as I'd like to imagine my code is perfect, it's patently not. There's always scope for improvement.

<!--truncate-->

## "What's this?"

This week afforded me that opportunity. I was walking through a somewhat complicated PR on a call and someone said "what's this?". They'd spotted an expression much like this in my code:

```ts
const myValues = [...new Set(allTheValuesSupplied)];
```

What is that? Well, it's a number of things:

1. [It's a way to get the unique values in a collection.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Remove_duplicate_elements_from_the_array)
2. It's a pro-tip and a coding BMX trick.

What do I mean? Well, this is indeed a technique for getting the unique values in a collection. But it relies upon you knowing a bunch of things:

- [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) contains unique values. If you add multiple identical values, only a single value will be stored.
- The [`Set` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set) takes [iterable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol). This means we can `new` up a `Set` with an array that we want to "unique-ify" and we will have a `Set` that contains those unique values.
- If you want to go on to do filtering / mapping etc on your unique values, you'll need to get them out of the `Set`. This is because (regrettably) ECMAScript iterables don't implicitly support these operations and neither are methods such as these part of the `Set` API. The easiest way to do that is to [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) into a new array which you can then operate upon.

I have this knowledge. Lots of people have this knowledge. But whilst this may be the case, using this technique goes against what I would generally consider to be a good tenet of programming: comprehensibility. When you read this code above, it doesn't immediately tell you what it's doing. This is a strike against it.

Further to that, it's "noisy". Even if the reader does have this knowledge, as they digest the code, they have to mentally unravel it. "Oh it's a `Set`, we're passing in values, then spreading it out, it's probably intended to get the unique values.... Right, cool, cool.... Continue!"

 <iframe src="https://giphy.com/embed/4NnSe87mg3h25JYIDh" width="100%" height="100%" frameBorder="0" allowFullScreen=""></iframe>

[Margarida Pereira](https://twitter.com/margaridagp) explicitly called this out and I found myself agreeing. Let's make a `uniq` function!

## `uniq` v1

I wrote a very simple `uniq` function which looked like this:

```ts
/**
 * Return the unique values found in the passed iterable
 */
function uniq<TElement>(iterableToGetUniqueValuesOf: Iterable<TElement>) {
  return [...new Set(iterableToGetUniqueValuesOf)];
}
```

Usage of this was simple:

```ts
uniq([1, 1, 1, 3, 1, 1, 2]); // produces [1, 3, 2]
uniq(['John', 'Guida', 'Ollie', 'Divya', 'John']); // produces ["John", "Guida", "Ollie", "Divya"]
```

And I thought this was tremendous. I committed and pushed. I assumed there was no more to be done. Guida (Margarida) then made this very helpful comment:

> BTW, I found a big bold warning that `new Set()` compares objects by reference (unless they're primitives) so it might be worth adding a comment to warn people that uniq/distinct compares objects by reference: [https://codeburst.io/javascript-array-distinct-5edc93501dc4](https://codeburst.io/javascript-array-distinct-5edc93501dc4)

She was right! If a caller was to, say, pass a collection of objects to `uniq` then they'd end up highly disappointed. Consider:

```ts
uniq([{ name: 'John' }, { name: 'John' }]); // produces [{ name: "John" }, { name: "John" }]
```

We can do better!

## `uniq` v2

I like compilers shouting at me. Or more accurately, I like compilers telling me when something isn't valid / supported / correct. I wanted `uniq` to mirror the behaviour of `Set` \- to only support primitives such as `string`, `number` etc. So I made a new version of `uniq` that hardened up the generic contraints:

```ts
/**
 * Return the unique values found in the passed iterable
 */
function uniq<TElement extends string | number | bigint | boolean | symbol>(
  iterableToGetUniqueValuesOf: Iterable<TElement>,
) {
  return [...new Set(iterableToGetUniqueValuesOf)];
}
```

With this in place, the compiler started shouting in the most helpful way. When I re-attemped `[{ name: "John" }, { name: "John" }]` the compiler hit me with:

`Argument of type '{ name: string; }[]' is not assignable to parameter of type 'Iterable&lt;string | number | bigint | boolean | symbol&gt;'.`

[Take a look.](https://www.typescriptlang.org/play?#code/FAYw9gdgzmA2CmA6WYDmAKArhAlgR3QG0BvAAggEMBbeALlICIApMACwgdIF8AaUsyjXrM2HbgF0AlJNCQYCZGiy4ChEewZ91HKTOAB6AFSHgpQ6QBK8AC6YAThFLXW8UtnyZXANwqxPUUgAzMGwAE1IcR2dXAAcKKCh4cJxreDsKACMEU0N9YEDsEGscSDcVAB4AFQBRBBoIa1J4AA9UiFCAqGs7SNRSAB9yTCoMtIHSDJxUSMbBjLA4eApHQagATxG4AD50U1J9lLTMhEqwAHEbAFUVTwA1X38AeUD6AElU9Kz4Ktr4eustsBJPw9vs7DZ7I5CIgYRB4AB3UgAZRs6EOnxO5yuN3g9z88Cgz0k4gA3MAuMAgA)

This is good. This is descriptive code that only allows legitimate inputs. It should lead to less confusion and a reduced likelihood of issues in Production. It's also a nice example of how code review can result in demonstrably better code. Thanks Guida!
