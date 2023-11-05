---
slug: strongly-typing-react-query-s-usequeries
title: 'react-query: strongly typing useQueries'
authors: johnnyreilly
image: ./strongly-typing-usequeries.webp
tags: [react]
hide_table_of_contents: false
description: 'Learn how to strongly type `useQueries` in `react-query` with `useQueriesTyped`. A wrapper function provides the strongly-typed API.'
---

`react-query` has a weakly typed hook named `useQueries`. It's possible to turn that into a strong typed hook; this post shows you how.

![title image that says "react-query: strongly typings useQueries"](strongly-typing-usequeries.webp)

<!--truncate-->

## Updated April 2022

You don't need this blog post! Just use a `react-query@3.28.0` or greater; [artysidorenko](https://github.com/artysidorenko) [contributed a PR that moved this behaviour into the package](https://github.com/tannerlinsley/react-query/pull/2634).

## What is `useQueries`?

If you haven't used [`react-query`](https://react-query.tanstack.com/) then I heartily recommend it. It provides (to quote the docs):

> Hooks for fetching, caching and updating asynchronous data in React

With version 3 of `react-query`, a new hook was added: [`useQueries`](https://react-query.tanstack.com/reference/useQueries). This hook allows you fetch a variable number of queries at the same time. An example of what usage looks like is this ([borrowed from the excellent docs](https://react-query.tanstack.com/guides/parallel-queries#dynamic-parallel-queries-with-usequeries)):

```tsx
function App({ users }) {
  const userQueries = useQueries(
    users.map((user) => {
      return {
        queryKey: ['user', user.id],
        queryFn: () => fetchUserById(user.id),
      };
    }),
  );
}
```

Whilst `react-query` is written in TypeScript, the way that `useQueries` is presently written strips the types that are supplied to it. Consider [the signature of the `useQueries`](https://github.com/tannerlinsley/react-query/blob/d25ab3ef8260ea1c02b52b7082c3ce4120596b31/src/react/useQueries.ts#L8):

```ts
export function useQueries(queries: UseQueryOptions[]): UseQueryResult[] {
```

This returns an array of [`UseQueryResult`](https://github.com/tannerlinsley/react-query/blob/d25ab3ef8260ea1c02b52b7082c3ce4120596b31/src/react/types.ts#L42):

```ts
export type UseQueryResult<
  TData = unknown,
  TError = unknown,
> = UseBaseQueryResult<TData, TError>;
```

As you can see, no type parameters are passed to `UseQueryResult` in the `useQueries` signature and so it takes the default types of `unknown`. This forces the consumer to either assert the type that they believe to be there, or to use type narrowing to ensure the type. The former approach exposes a possibility of errors (the user can specify incorrect types) and the latter approach requires our code to perform type narrowing operations which are essentially unnecessary (the type hasn't changed since it was returned; it's simply been discarded).

What if there was a way to strongly type `useQueries` so we neither risked specifying incorrect types, nor wasted precious lines of code and CPU cycles performing type narrowing? There is my friends, read on!

## `useQueriesTyped` - a strongly typed wrapper for `useQueries`

It's possible to wrap the `useQueries` hook with our own `useQueriesTyped` hook which exposes a strongly typed API. It looks like this:

```ts
import { useQueries, UseQueryOptions, UseQueryResult } from 'react-query';

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

export function useQueriesTyped<TQueries extends readonly UseQueryOptions[]>(
  queries: [...TQueries],
): {
  [ArrayElement in keyof TQueries]: UseQueryResult<
    TQueries[ArrayElement] extends { select: infer TSelect }
      ? TSelect extends (data: any) => any
        ? ReturnType<TSelect>
        : never
      : Awaited<
          ReturnType<
            NonNullable<
              Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']
            >
          >
        >
  >;
} {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useQueries(
    queries as UseQueryOptions<unknown, unknown, unknown>[],
  ) as any;
}
```

Let's unpack this. The first and most significant thing to note here is that `queries` moves from being `UseQueryOptions[]` to being `TQueries extends readonly UseQueryOptions[]` \- far more fancy! The reason for this change is we want the type parameters to flow through on an element by element basis in the supplied array. [TypeScript 4's variadic tuple types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types) should allow us to support this. So the new array signature looks like this:

```ts
queries: [...TQueries];
```

Where `TQueries` is

```ts
TQueries extends readonly UseQueryOptions[]
```

What this means is, that each element of the rest parameters array must have a type of `readonly UseQueryOptions`. Otherwise the compiler will shout at us (and rightly so).

So that's what's coming in.... What's going out? Well the return type of `useQueriesTyped` is the tremendously verbose:

```ts
{
  [ArrayElement in keyof TQueries]: UseQueryResult<
    TQueries[ArrayElement] extends { select: infer TSelect }
      ? TSelect extends (data: any) => any
        ? ReturnType<TSelect>
        : never
      : Awaited<
          ReturnType<
            NonNullable<
              Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']
            >
          >
        >
  >
}
```

Let's walk this through. First of all we'll look at this bit:

```ts
{ [ArrayElement in keyof TQueries]: /* the type has been stripped to protect your eyes */ }
```

On the face of it, it looks like we're returning an `Object`, not an `Array`. There's nuance here; [JavaScript `Array`s are `Object`s](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

More specifically, by approaching the signature this way, we can acquire the `ArrayElement` type which represents each of the keys of the array. Consider this array:

```ts
[1, 'two', new Date()];
```

For the above, `ArrayElement` would take the values `0`, `1` and `2`. And this is going to prove useful in a moment as we're going to index into our `TQueries` object to surface up the return types for each element of our return array from there.

Now let's look at the return type for each element. The signature of that looks like this:

```ts
UseQueryResult<
  TQueries[ArrayElement] extends { select: infer TSelect }
    ? TSelect extends (data: any) => any
      ? ReturnType<TSelect>
      : never
    : Awaited<
        ReturnType<
          NonNullable<
            Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']
          >
        >
      >
>;
```

Gosh... Well there's a lot going on here. Let's start in the middle and work our way out.

```ts
TQueries[ArrayElement];
```

The above code indexes into our `TQueries` array for each element of our strongly typed indexer `ArrayElement`. So it might resolve the first element of an array to `{ queryKey: 'key1', queryFn: () =&gt; 1 }`, for example. Next:

```ts
Extract < TQueries[ArrayElement], UseQueryOptions > ['queryFn'];
```

We're now taking the type of each element provided, and grabbing the type of the `queryFn` property. It's this type which contains the type of the data that will be passed back, that we want to make use of. So for an examples of `[{ queryKey: 'key1', queryFn: () =&gt; 1 }, { queryKey: 'key2', queryFn: () =&gt; 'two' }, { queryKey: 'key3', queryFn: () =&gt; new Date() }]` we'd have the type: `const result: [() =&gt; number, () =&gt; string, () =&gt; Date]`.

```ts
NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>;
```

The next stage is using `NonNullable` on our `queryFn`, given that on `UseQueryOptions` it's an optional type. In our use case it is not optional / nullable and so we need to enforce that.

```ts
ReturnType<
  NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>
>;
```

Now we want to get the return type of our `queryFn` \- as that's the data type we're interested. So we use TypeScript's `ReturnType` for that.

```ts
ReturnType<
  NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>
>;
```

Here we're using [TypeScript 4.1's recursive conditional types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#recursive-conditional-types) to unwrap a `Promise` (or not) to the relevant type. This allows us to get the actual type we're interested in, as opposed to the `Promise` of that type. Finally we have the type we need! So we can do this:

```ts
type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

Awaited<
  ReturnType<
    NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>
  >
>;
```

It's at this point where we reach a conditional type in our type definition. Essentially, we have two different typing behaviours in play:

1. Where we're inferring the return type of the query
2. Where we're inferring the return type of a `select`. A `select` option can be used to transform or select a part of the data returned by the query function. It has the signature: `select: (data: TData) => TSelect`

We've been unpacking the first of these so far. Now we encounter the conditional type that chooses between them:

```ts
TQueries[ArrayElement] extends { select: infer TSelect }
      ? TSelect extends (data: any) => any
        ? ReturnType<TSelect>
        : never
      : Awaited< /*...*/ >
  >
```

What's happening here is:

- if a query includes a `select` option, we infer what that is and then subsequently extract the return type of the `select`.
- otherwise we use the query return type (as we we've previously examined)

Finally, whichever type we end up with, we supply that type as a parameter to `UseQueryResult`. And that is what is going to surface up our types to our users.

## Usage

So what does using our `useQueriesTyped` hook look like?

Well, supplying `queryFn`s with different signatures looks like this:

```ts
const result = useQueriesTyped(
  { queryKey: 'key1', queryFn: () => 1 },
  { queryKey: 'key2', queryFn: () => 'two' },
);
// const result: [QueryObserverResult<number, unknown>, QueryObserverResult<string, unknown>]

if (result[0].data) {
  // number
}
if (result[1].data) {
  // string
}
```

As you can see, we're being returned a `Tuple` and the exact types are flowing through.

Next let's look at a `.map` example with identical types in our supplied array:

```ts
const resultWithAllTheSameTypes = useQueriesTyped(
  ...[1, 2].map((x) => ({ queryKey: `${x}`, queryFn: () => x })),
);
// const resultWithAllTheSameTypes: QueryObserverResult<number, unknown>[]

if (resultWithAllTheSameTypes[0].data) {
  // number
}
```

The return type of `number` is flowing through for each element.

Finally let's look at how `.map` handles arrays with different types of elements:

```ts
const resultWithDifferentTypes = useQueriesTyped(
  ...[1, 'two', new Date()].map((x) => ({
    queryKey: `${x}`,
    queryFn: () => x,
  })),
);
//const resultWithDifferentTypes: QueryObserverResult<string | number | Date, unknown>[]

if (resultWithDifferentTypes[0].data) {
  // string | number | Date
}

if (resultWithDifferentTypes[1].data) {
  // string | number | Date
}

if (resultWithDifferentTypes[2].data) {
  // string | number | Date
}
```

Admittedly this last example is a somewhat unlikely scenario. But again we can see the types flowing through - though further narrowing would be required here to get to the exact type.

## In the box?

It's great that we can wrap `useQueries` to get a strongly typed experience. It would be tremendous if this functionality was available by default. [There's a discussion going on around this](https://github.com/tannerlinsley/react-query/pull/1527). It's possible that this wrapper may no longer need to exist, and that would be amazing. In the meantime; enjoy!
