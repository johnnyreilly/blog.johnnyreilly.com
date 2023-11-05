---
slug: joy-of-json
title: 'The Joy of JSON'
authors: johnnyreilly
tags: [javascript]
hide_table_of_contents: false
description: 'JSON is a lightweight data format that helps create and read JavaScript objects. This article traces its discovery and explains its usefulness.'
---

So back to JSON. For those of you that don't know JSON stands for JavaScript Object Notation and is lightweight text based data interchange format. Rather than quote other people verbatim you can find thorough explanations of JSON here: - [Introducing JSON](http://www.json.org/)

<!--truncate-->

- [JSON in Javascript](http://www.json.org/js.html)

As mentioned in my previous [post on Ajax](../2012-02-05-potted-history-of-using-ajax-on/index.md) I came upon JSON quite by accident and was actually using it for some time without having any idea. But let's pull back a bit. Let's start with the JavaScript Object Literal. Some years ago I came upon this article by Christan Heilmann about the JavaScript Object Literal which had been published all the way back in 2006: [Show love to the JavaScript Object Literal](http://christianheilmann.com/2006/02/16/show-love-to-the-object-literal/) Now when I read this it was a revelation to me. I hadn't really used JavaScript objects a great deal at this point (yes I am one of those people that started using JavaScript without actually learning the thing) and when I had used them is was through the `var obj = new Object()` pattern (as that's the only approach I knew). So it was wonderful to discover that instead of the needlessly verbose:

```js
var myCar = new Object();
myCar.wheels = 4;
myCar.colour = 'blue';
```

I could simply use the much more concise object literal syntax to declare an object instead:

```js
var myCar = { wheels: 4, colour: 'blue' };
```

Lovely. Henceforth I adopted this approach in my code as I'm generally a believer that brevity is best. It was sometime later that I happened upon JSON (when I started looking into [jqGrid](../2012-01-14-jqgrid-its-just-far-better-grid/index.md)). Basically I was looking to pass complex data structures backward and forward to the server and, as far as I knew, there was no way to achieve this simply in JavaScript. I was expecting that I would have to manually serialise and deserialise (yes dammit I will use the English spellings!) objects when ever I wanted to do this sort of thing. However, I was reading the the fantastic Dave Ward's [Encosia](http://encosia.com/) blog which on this occasion was talking about the [troubles of UpdatePanels](http://encosia.com/why-aspnet-ajax-updatepanels-are-dangerous/) (a subject close to my heart by the way) and more interestingly the use of PageMethods in ASP.NET. This is what he said that made me prick up my ears: _"Page methods allow ASP.NET AJAX pages to directly execute a page’s static methods, using JSON (JavaScript Object Notation). JSON is basically a minimalistic version of SOAP, which is perfectly suited for light weight communication between client and server."_ JSON is a lightweight SOAP eh? I've used SOAP. I wonder if I could use this.... To my complete surprise, and may I say delight, I discovered that a wonderful fellow called Douglas Crockford, he of [JavaScript, The Good Parts](http://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) fame had quietly come up with JSON some time ago. JSON, from my perspective, turned out to be a simple way to turn an object into a string and then from a string back into an object. So simple that it consists of 2 methods on a JSON object: - JSON.stringify(myObject) - take an object and make me a JSON string. (and by the way isn't "stringify" just the loveliest method name ever?)

- JSON.parse(myJSONString) - take a JSON string and make me an object

Let me illustrate the above method names using the myCar example from earlier:

```js
var myCar = { wheels: 4, colour: 'blue' };
// myCar is an object

var myCarJSON = JSON.stringify(myCar);
//myCarJSON will look like this: '{"wheels":4,"colour":"blue"}'

var anotherCarMadeFromMyJSON = JSON.parse(myCarJSON);
//anotherCarMadeFromMyJSON will be a brand new "car" object
```

I've also demonstrated this using the Chrome Console:

![](Using-JSON.webp)

Crockford initially invented/discovered JSON himself and wrote a little helper library which provided a JSON object to be used by all and sundry. This can be found here: [JSON on GitHub](https://github.com/douglascrockford/JSON-js) Because JSON was so clearly wonderful, glorious and useful it ended up becoming a part of the EcmaScript 5 spec (in fact it's worth reading the brilliant [John Resig's blog post](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/) on this). This has lead to JSON being offered [natively in browsers](http://en.wikipedia.org/wiki/JSON#Native_encoding_and_decoding_in_browsers) for quite some time. However, for those of us (and I am one alas) still supporting IE 6 and the like we still have Crockfords JSON2.js to fall back on.

```

```
