---
slug: create-es2015-map-from-array-in-typescript
title: 'Creating an ES2015 Map from an Array in TypeScript'
authors: johnnyreilly
tags: [typescript, javascript]
hide_table_of_contents: false
description: 'TypeScript `Map` initialization from an `Array` is discussed with a workaround using a type assertion of ` as [string, string]`.'
---

I'm a great lover of ES2015's [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). However, just recently I tumbled over something I find a touch inconvenient about how you initialise a new `Map` from the contents of an `Array` in TypeScript.

<!--truncate-->

## This Doesn't Work

We're going try to something like this: (pilfered from the MDN docs)

```ts
var kvArray = [
  ['key1', 'value1'],
  ['key2', 'value2'],
];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var myMap = new Map(kvArray);
```

Simple enough right? Well I'd rather assumed that I should be able to do something like this in TypeScript:

```ts
const iAmAnArray [
  { value: "value1", text: "hello" }
  { value: "value2", text: "map" }
];

const iAmAMap = new Map<string, string>(
  iAmAnArray.map(x => [x.value, x.text])
);
```

However, to my surprise this errored out with:

```
[ts] Argument of type 'string[][]' is not assignable to parameter of type 'Iterable<[string, string]>'.
  Types of property '[Symbol.iterator]' are incompatible.
    Type '() => IterableIterator<string[]>' is not assignable to type '() => Iterator<[string, string]>'.
      Type 'IterableIterator<string[]>' is not assignable to type 'Iterator<[string, string]>'.
        Types of property 'next' are incompatible.
          Type '(value?: any) => IteratorResult<string[]>' is not assignable to type '(value?: any) => IteratorResult<[string, string]>'.
            Type 'IteratorResult<string[]>' is not assignable to type 'IteratorResult<[string, string]>'.
              Type 'string[]' is not assignable to type '[string, string]'.
                Property '0' is missing in type 'string[]'.
```

Disappointing right? It's expecting `Iterable&lt;[string, string]&gt;` and an `Array` with 2 elements that are strings is _not_ inferred to be that.

## This Does

It emerges that there is a way to do this though; you just need to give the compiler a clue. You need to include a type assertion of ` as [string, string]` which tells the compiler that what you've just declared is a `Tuple` of `string` and `string`. (Please note that `[string, string]` corresponds to the types of the `Key` and `Value` of your `Map` and should be set accordingly.)

So a working version of the code looks like this:

```ts
const iAmAnArray [
  { value: "value1", text: "hello" }
  { value: "value2", text: "map" }
];

const iAmAMap = new Map<string, string>(
  iAmAnArray.map(x => [x.value, x.text] as [string, string])
);
```

Or, to be terser, this:

```ts
const iAmAnArray [
  { value: "value1", text: "hello" }
  { value: "value2", text: "map" }
];

const iAmAMap = new Map( // Look Ma!  No type annotations
  iAmAnArray.map(x => [x.value, x.text] as [string, string])
);
```

I've raised this as an issue with the TypeScript team; you can find details [here](https://github.com/Microsoft/TypeScript/issues/8936).
