---
slug: typescript-using-functions-with-union-types
title: 'TypeScript: In Praise of Union Types'
authors: johnnyreilly
tags: [typescript]
hide_table_of_contents: false
description: 'TypeScript 1.4s Union Types offer a way to specify a value that is of one of many different types and results in a much terser definition file.'
---

## (& How to Express Functions in UTs)

Have you heard the good news my friend? I refer, of course, to the shipping of TypeScript 1.4 and my _favourite_ language feature since generics.... Union Types.

<!--truncate-->

In the [1\.4 announcement](https://blogs.msdn.com/b/typescript/archive/2015/01/16/announcing-typescript-1-4.aspx) Jonathan Turner described Union Types thusly:

> JavaScript functions may take a number of possible argument types. Up to now, we’ve supported this using function overloads. Starting with TypeScript 1.4, we’ve generalized this capability and now allow you to specify that that a value is one of a number of different types using a union type:
>
> ```ts
> function f(x: number | number[]) {
>   if (typeof x === 'number') {
>     return x + 10;
>   } else {
>     // return sum of numbers
>   }
> }
> ```
>
> Once you have a value of a union type, you can use a typeof and instanceof checks to use the value in a type-safe way. You'll notice we use this in the above example and can treat x as a number type inside of the if-block.
>
> Union types are a new kind of type and work any place you specify a type.

Lovely right? But what's missing? Well, to my mind, the most helpful aspect of Union Types. Definition file creation.

## A little history

### That's right - the days before Union Types are now "history" :-)

When creating definition files (`*.d.ts`) in the past there was a problem with TypeScript. A limitation. JavaScript often relies on "option bags" to pass configuration into a method. An "option bag" is essentially a JavaScript object literal which contains properties which are used to perform configuration. A good example of this is the `route` parameter passed into Angular's ngRoute `<a href="https://docs.angularjs.org/api/ngRoute/provider/$routeProvider#when">when</a>` method.

I'd like to draw your attention to 2 of the properties that can be passed in (quoted from the documentation):

> - controller – `{(string|function()=}` – Controller fn that should be associated with newly created scope or the name of a registered controller if passed as a string.
> - template – `{string=|function()=}` – html template as a string or a function that returns an html template as a string which should be used by ngView or ngInclude directives. This property takes precedence over templateUrl.
>
>   If template is a function, it will be called with the following parameters:
>
>   `{Array.&lt;Object&gt;}` \- route parameters extracted from the current $location.path() by applying the current route

Both of these properties can be of more than 1 type.

- `controller` can be a `string`_or_ a `function`.
- `template` can be a `string`_or_ a `function` that returns a `string` and has `$routeParams` as a parameter.

There's the rub. Whilst it was possible to overload functions in TypeScript pre 1.4, it was <u>not</u>

possible to overload interface members. This meant the only way to model these sorts of properties was by seeking out a best common type which would fit all scenarios. This invariably meant using the `any` type. Whilst that worked it didn't lend any consuming code a great deal of type safety. Let's look at a truncated version of [`angular-route.d.ts`](https://github.com/borisyankov/DefinitelyTyped/blob/c71628e0765eb8e240d8eabd2225f64ea2e2fdb8/angularjs/angular-route.d.ts) for these properties prior to union types:

```ts
declare module ng.route {
  // ...

  interface IRoute {
    /**
     * {(string|function()=}
     * Controller fn that should be associated with newly created scope or
     * the name of a registered controller if passed as a string.
     */
    controller?: any;

    /**
     * {string=|function()=}
     * Html template as a string or a function that returns an html template
     * as a string which should be used by ngView or ngInclude directives. This
     * property takes precedence over templateUrl.
     *
     * If template is a function, it will be called with the following parameters:
     *
     * {Array.<Object>} - route parameters extracted from the current
     * $location.path() by applying the current route
     */
    template?: any;

    // ...
  }

  // ...
}
```

It's `any` city... Kind of sticks in the craw doesn't it?

## A new dawn

TypeScript 1.4 has shipped and Union Types are with us. We can do better than `any`. So what does [`angular-route.d.ts`](https://github.com/borisyankov/DefinitelyTyped/blob/30ce45e0e706322f34608ab6fa5de141bba59c90/angularjs/angular-route.d.ts) look like now we have Union Types?

```ts
declare module ng.route {
  // ...

  interface IRoute {
    /**
     * {(string|function()=}
     * Controller fn that should be associated with newly created scope or
     * the name of a registered controller if passed as a string.
     */
    controller?: string | Function;

    /**
     * {string=|function()=}
     * Html template as a string or a function that returns an html template
     * as a string which should be used by ngView or ngInclude directives. This
     * property takes precedence over templateUrl.
     *
     * If template is a function, it will be called with the following parameters:
     *
     * {Array.<Object>} - route parameters extracted from the current
     * $location.path() by applying the current route
     */
    template?:
      | string
      | { ($routeParams?: ng.route.IRouteParamsService): string };

    // ...
  }

  // ...
}
```

With these changes in place we are now accurately modelling the `route` option bags in TypeScript. Hoorah!!!

Let's dig in a little. If you look at the `controller` definition it's pretty straightforward. `string|Function` \- clearly the `controller` can be a `string`_or_ a `Function`. Simple.

Now let's look at the `template` definition by itself:

```ts
template?: string | { ($routeParams?: ng.route.IRouteParamsService) : string; }
```

As with the `controller` the `template` can be a string - that is pretty clear. But what's that hovering on the other side of the "\|"? What could `{ ($routeParams?: ng.route.IRouteParamsService) : string; }` be exactly?

Well, in a word, it's a `Function`. The `controller` would allow any kind of function at all. However the `template` definition is deliberately more restrictive. This defines a function which must return a `string` and which receives an optional parameter of `$routeParams` of type `ng.route.IRouteParamsService`.

## State of the Union

Hopefully you can now see just how useful Union Types are and how you can express specific sorts of function definitions as part of a Union Type.

The thing that prompted me first to write this post was seeing that there don't appear to be any examples out there of how to express functions inside Union Types. I only landed on the syntax myself after a little experimentation in Visual Studio after I'd installed TS 1.4. I've started work on bringing Union Types to the typings inside [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) and so you'll start to see them appearing more and more. But since it's rather "hidden knowledge" at present I wanted to do my bit to make it a little better known.

As [Daniel](https://twitter.com/Rickenhacker) helpfully points out in the comments there is an alternate syntax - lambda style. So instead of this:

```ts
template?: string | { ($routeParams?: ng.route.IRouteParamsService) : string; }
```

You could write this:

```ts
template?: string | (($routeParams?: ng.route.IRouteParamsService) => string);
```

Just remember to place parentheses around the lambda to clearly delineate it.

## Bonfire of the Overloads

Before I sign off I should mention the ability Union Types give you to define a much terser definition file. Basically the "\|" operator makes for a bonfire of the overloads. Where you previously may have had 6 overloads for the same method (each with identical JSDoc) you now only need 1. Which is beautiful (and DRY).

It's surprising just what a difference it makes. This is [`jQuery.d.ts`](https://github.com/borisyankov/DefinitelyTyped/blob/9bd7fe69d98337db56144c3da131d413f5b7e895/jquery/jquery.d.ts) last week (pre TypeScript 1.4). This is [`jQuery.d.ts`](https://github.com/borisyankov/DefinitelyTyped/blob/9f64372a065541fe2b8f6c5c5cd9b55a1d631f19/jquery/jquery.d.ts) now - with Union Types aplenty. Last week it was \~4000 lines of code. This week it's \~3200 lines of code. With the same functionality. Union Types are _FANTASTIC_!
