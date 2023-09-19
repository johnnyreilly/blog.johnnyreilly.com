---
slug: typescript-definitions-webpack-and-module-types
title: 'TypeScript Definitions, webpack and Module Types'
authors: johnnyreilly
tags: [definitely typed, webpack, typescript]
hide_table_of_contents: false
description: 'Inconsistent module exports cause confusion while using the npm package big.js, leading to `one definition to rule them all.`'
---

A funny thing happened on the way to the registry the other day. Something changed in an npm package I was using and confusion arose. You can read my unfiltered confusion [here](https://github.com/Microsoft/TypeScript/issues/18791) but here's the slightly clearer explanation.

<!--truncate-->

## The TL;DR

When modules are imported, your loader will decide which module format it wants to use. CommonJS / AMD etc. The loader decides. It's important that the export is of the same "shape" regardless of the module format. For 2 reasons:

1. You want to be able to reliably use the module regardless of the choice that your loader has made for which export to use.
2. Because when it comes to writing type definition files for modules, there is support for a _single_ external definition. Not one for each module format.

![](one-definition-to-rule-them-all.webp)

## The DR

Once upon a time we decided to use [big.js](https://github.com/MikeMcl/big.js/) in our project. It's popular and my old friend [Steve Ognibene](https://twitter.com/nycdotnet) apparently originally wrote the type definitions which can be found [here](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js). Then the definitions were updated by [Miika Hänninen](https://github.com/googol). And then there was pain.

## UMD / CommonJS \*\*and\*\* Global exports oh my!

My usage code was as simple as this:

```js
import * as BigJs from 'big.js';
const lookABigJs = new BigJs(1);
```

If you execute it in a browser it works. It makes me a `Big`. However the TypeScript compiler is \*\*not\*\* happy. No siree. Nope. It's bellowing at me:

```ts
[ts] Cannot use 'new' with an expression whose type lacks a call or construct signature.
```

So I think: "Huh! I guess Miika just missed something off when he updated the definition files. No bother. I'll fix it." I take a look at how `big.js` exposes itself to the outside world. At the time, thusly:

```js
//AMD.
if (typeof define === 'function' && define.amd) {
  define(function () {
    return Big;
  });

  // Node and other CommonJS-like environments that support module.exports.
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = Big;
  module.exports.Big = Big;
  //Browser.
} else {
  global.Big = Big;
}
```

Now, we were using webpack as our script bundler / loader. webpack is supersmart; it can take all kinds of module formats. So although it's more famous for supporting CommonJS, it can roll with AMD. That's exactly what's happening here. When webpack encounters the above code, it goes with the AMD export. So at runtime, `import * as BigJs from 'big.js';` lands up resolving to the `return Big;` above.

Now this turns out to be super-relevant. I took a look at the relevant portion of the definition file and found this:

```js
export const Big: BigConstructor;
```

Which tells me that `Big` is being exported as a subproperty of the module. That makes sense; that lines up with the `module.exports.Big = Big;` statement in the the big.js source code. There's a "gotcha" coming; can you guess what it is?

The problem is that our type definition is not exposing `Big` as a default export. So even though it's there; TypeScript won't let us use it. What's killing us further is that webpack is loading the AMD export which _doesn't_ have `Big` as a subproperty of the module. It only has it as a default.

[Kitson Kelly](https://twitter.com/kitsonk) expressed the problem well when he said:

> there is a different shape depending on which loader is being used and I am not sure that makes a huge amount of sense. The AMD shape is different than the CommonJS shape. While that is technically possible, that feels like that is an issue.

## One Definition to Rule Them All

He's right; it is an issue. From a TypeScript perspective there is no way to write a definition file that allows for different module "shapes" depending upon the module type. If you really wanted to do that you're reduced to writing multiple definition files. That's blind alley anyway; what you want is a module to expose itself with the same "shape" regardless of the module type. What you want is this:

`AMD === CommonJS === Global`

And that's what we now have! Thanks to [Michael McLaughlin](https://github.com/mikemcl), author of big.js, [version 4.0 unified the export shape of the package](https://github.com/MikeMcl/big.js/pull/87#issuecomment-332663587). Miika Hänninen submitted another [PR](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/20096) which fixed up the type definitions. And once again the world is a beautiful place!
