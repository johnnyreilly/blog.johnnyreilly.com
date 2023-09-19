---
slug: typescript-instance-methods
title: 'TypeScript this is what I want! (the unfortunate neglect of Instance Methods / callback functions)'
authors: johnnyreilly
tags: [typescript]
hide_table_of_contents: false
description: 'TypeScripts "Instance Methods" feature solves the `this` keyword issues in classes, unlike prototype methods. It suggests using a combination of the two.'
---

I was recently reading [Jeff Walker's blog post "Why TypeScript Isn't the Answer"](http://www.walkercoderanger.com/blog/2014/02/typescript-isnt-the-answer/). This is part of series in which Jeff goes through various compile-to-JavaScript technologies including TypeScript, CoffeeScript and Dart and explains his view of why he feels they don't quite hit the mark.

<!--truncate-->

As a user (and big fan) of TypeScript I read the post with interest and picked up on one particular issue that Jeff mentions:

> Classes make the unchanged behaviour of the `this` keyword more confusing. For example, in a class like `Greeter` from the [TypeScript playground](http://www.typescriptlang.org/Playground), the use of `this` is confusing:
>
> ```ts
> class Greeter {
>   greeting: string;
>   constructor(message: string) {
>     this.greeting = message;
>   }
>   greet() {
>     return 'Hello, ' + this.greeting;
>   }
> }
> ```
>
> One can’t help but feel the `this` keyword in the methods of `Greeter` should always reference a `Greeter` instance. However, the semantics of this are unchanged from JavaScript:
>
> ```js
> var greeter = new Greeter('world');
> var unbound = greeter.greet;
> alert(unbound());
> ```
>
> The above code displays “Hello, undefined” instead of the naively expected “Hello, world”.

Now Jeff is quite correct in everything he says above. However, he's also missing a trick. Or rather, he's missing out on a very useful feature of TypeScript.

## Instance Methods to the Rescue!

Still in the early days of TypeScript, the issue Jeff raises had already been identified. (And for what it's worth, this issue wasn't there by mistake - remember TypeScript is quite deliberately a "superset of JavaScript".) Happily with the [release of TypeScript 0.9.1](https://blogs.msdn.com/b/typescript/archive/2013/08/06/announcing-0-9-1.aspx) a nice remedy was included in the language in the form of "Instance Methods".

Instance Methods are lexically scoped; bound to a specific instance of a JavaScript object. i.e. These methods are \***not**\* vulnerable to the “Hello, undefined” issue Jeff raises. To quote the blog post:

> We've relaxed the restrictions on field initializers to now allow `'this'`. This means that classes can now contain both methods on the prototype, and **callback functions on the instance**. The latter are particularly useful when you want to use a member on the class as a callback function, as in the code above. This lets you mix-n-match between ‘closure’ style and ‘prototype’ style class member patterns easily.

## `Greeter` with Instance Methods

So, if we take the `Greeter` example, how do we apply Instance Methods to it? Well, like this:

```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet = () => {
    return 'Hello, ' + this.greeting;
  };
}
```

Can you tell the difference? It's subtle. That's right; the mere swapping out of `()` with `= () =&gt;` on the `greet` method takes us from a `prototype` method to an Instance Method.

Observant readers will have noticed that we are using TypeScript / [ES6's Arrow Function syntax](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/arrow_functions). In fact with that in mind I could actually have gone super-terse if I was so inclined:

```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet = () => 'Hello, ' + this.greeting;
}
```

But either way, both of the above class declarations compile down to the following JavaScript:

```js
var Greeter = (function () {
  function Greeter(message) {
    var _this = this;
    this.greet = function () {
      return 'Hello, ' + _this.greeting;
    };
    this.greeting = message;
  }
  return Greeter;
})();
```

Which differs from the pre-Instance Methods generated JavaScript:

```js
var Greeter = (function () {
  function Greeter(message) {
    this.greeting = message;
  }
  Greeter.prototype.greet = function () {
    return 'Hello, ' + this.greeting;
  };
  return Greeter;
})();
```

As you can see the Instance Methods approach does \***not**\* make use of the `prototype` on `Greeter` to add the method. (As the pre-Instance Methods `greet()` declaration did.) Instead it creates a function directly on the created object and internally uses the `_this` variable inside the Instance Methods. (`_this` being a previously captured instance of `this`.)

So with Instance Methods we can repeat Jeff's experiment from earlier:

```js
var greeter = new Greeter('world');
var bound = greeter.greet;
alert(bound());
```

But this time round the code displays “Hello, world” and no longer “Hello, undefined”.

## Updated 02/04/2014 - mixing and matching `prototype` and Instance Methods

[Bart Verkoeijen](https://twitter.com/bgever) made an excellent comment concerning the extra memory that Instance Methods require as opposed to `prototype` methods. Not everyone reads the comments and so I thought I'd add a little suffix to my post.

What I’ve come to realise is that it comes down to problem that you’re trying to solve. Instance methods are bulletproof in terms of relying on a specific instance of `this` regardless of how a method is invoked. But for many of my use cases that’s overkill. Let’s take the original (`prototype` methods) `Greeter` example:

```js
var Greeter = (function () {
  function Greeter(message) {
    this.greeting = message;
  }
  Greeter.prototype.greet = function () {
    return 'Hello, ' + this.greeting;
  };
  return Greeter;
})();

var greeter = new Greeter('world');
var greeter2 = new Greeter('universe');

console.log(greeter.greet()); // Logs "Hello, world"
console.log(greeter2.greet()); // Logs "Hello, universe"
```

As you can see above, provided I invoke my `greet` method in the context of my created object then I can rely on `this` being what I would hope.

That being the case my general practice has not been to use exclusively Instance methods \***or**\* `prototype` methods. What I tend to do is start out only with `prototype` methods on my classes and switch them over to be an Instance method if there is an actual need to ensure context. So my TypeScript classes tend to be a combination of `prototype` methods and Instance methods.

More often than not the `prototype` methods are just fine. It tends to be where an object is interacting with some kind of presentation framework (Knockout / Angular etc) or being invoked as part of a callback (eg AJAX scenarios) where I need Instance methods.
