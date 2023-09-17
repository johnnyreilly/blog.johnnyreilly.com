---
slug: things-done-changed
title: 'Things Done Changed'
authors: johnnyreilly
tags: [react, javascript]
hide_table_of_contents: false
description: 'Embracing change is key to being a developer; John discusses some of the tools that have taken his fancy, including React and ES6.'
---

Some people fear change. Most people actually. I'm not immune to that myself, but not in the key area of technology. Any developer that fears change when it comes to the tools and languages that he / she is using is in the _wrong_ business. Because what you're using to cut code today will not last. The language will evolve, the tools and frameworks that you love will die out and be replaced by new ones that are different and strange. In time, the language you feel you write as a native will fall out of favour, replaced by a new upstart.

<!--truncate-->

My first gig was writing telecoms software using Delphi. I haven't touched Delphi (or telecoms for that matter) for over 10 years now. Believe me, I grok that things change.

That is the developer's lot. If you're able to accept that then you'll be just fine. For my part I've always rather relished the new and so I embrace it. However, I've met a surprising number of devs that are outraged when they realise that the language and tools they have used since their first job are not going to last. They do not go gentle into that good dawn. They rage, rage against the death of WebForms. My apologies to Dylan Thomas.

I recently started a new contract. This always brings a certain amount of change. This is part of the fun of contracting. However, the change was more significant in this case. As a result, the tools that I've been using for the last couple of months have been rather different to those that I'm used to. I've been outside my comfort zone. I've loved it. And now I want to reflect upon it. Because, in the words of Socrates, "the unexamined life is not worth living".

## The Shock of the New (Toys)

I'd been brought in to work on a full stack ASP.Net project. However, I've initially been working on a separate project which is _entirely_ different. A web client app which has nothing to do with ASP.Net at all. It's a greenfield app which is built using the following:

1. [React](https://facebook.github.io/react/) / [Flux](https://facebook.github.io/flux/docs/overview.html)
2. [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) / [Protocol Buffers](https://developers.google.com/protocol-buffers/)
3. [Browserify](http://browserify.org/)
4. [ES6 with Babel](http://babeljs.io/)
5. [Karma](https://karma-runner.github.io)
6. [Gulp](http://gulpjs.com/)
7. [Atom](https://atom.io/)

Where to begin? Perhaps at the end - Atom.

## How Does it Feel to be on Your Own?

When all around you, as far as the eye can see, are monitors displaying Visual Studio in all its grey glory whilst I was hammering away on Atom. It felt pretty good actually.

The app I was working on was a React / Flux app. You know what that means? JSX! At the time the project began Visual Studio did not have good editor support for JSX (something that the shipping of VS 2015 may have remedied but I haven't checked). So, rather than endure a life dominated with red squigglies I jumped ship and moved over to using GitHub's Atom to edit code.

I rather like it. Whilst VS is a full blown IDE, Atom is a text editor. A very pretty one. And crucially, one that can be extended by plugins of which there is a rich ecosystem. You want JSX support? [There's a plugin for that](https://atom.io/packages/jshint). You want something that formats JSON nicely for you? [There's a plugin for that too](https://atom.io/packages/pretty-json).

My only criticism of Atom really is that it doesn't handle large files well and it crashes a lot. I'm quite surprised by both of these characteristics given that in contrast to VS it is so small. You'd think the basics would be better covered. Go figure. It still rocks though. It looks so sexy - how could I not like it?

## Someone to watch over me

I've been using Gulp for a while now. It's a great JavaScript task runner and incredibly powerful. Previously though, I've used it as part of a manual build step (even plumbing it into my csproj). With the current project I've moved over to using the watch functionality of gulp. So I'm scrapping triggering gulp tasks manually. Instead we have gulp configured to gaze lovingly at the source files and, when they change, re-run the build steps.

This is nice for a couple of reasons:

- When I want to test out the app the build is already done - I don't have to wait for it to happen.
- When I do bad things I find out faster. So I've got JSHint being triggered by my watch. If I write code that makes JSHint sad (and I haven't noticed the warnings from the [atom plugin](https://atom.io/packages/jshint)) then they'll appear in the console. Likewise, my unit tests are continuously running in response to file changes (in an [ncrunch](http://www.ncrunch.net/)\-y sorta style) and so I know straight away if I'm breaking tests. Rather invaluable in the dynamic world of JavaScript.

## Karma, Karma, Karma, Chameleon

In the past, when using Visual Studio, it made sense to use the mighty [Chutzpah](http://mmanela.github.io/chutzpah/) which allows you to run JS unit tests from within VS itself. I needed a new way to run my Jasmine unit tests. The obvious choice was Karma (built by the Angular team I think?). It's really flexible.

You're using Browserify? [No bother](https://www.npmjs.com/package/karma-browserify). You're writing ES6 and transpiling with Babel? Not a problem. You want code coverage? [That we can do](https://www.npmjs.com/package/karma-coverage). You want an integration for TeamCity? [That too is sorted](https://www.npmjs.com/package/karma-teamcity-reporter)....

Karma is fantastic. Fun fact: originally it was called Testacular. I kind of get why they changed the name but the world is all the duller for it. A side effect of the name change is that due to invalid search results I know a lot more about Buddhism than I used to.

## I cry Babel, Babel, look at me now

Can you not wait for the future? Me neither. Even though it's 2015 and Back to the Future II takes place in [only a month's time](http://www.october212015.com/). So I'm not waiting for a million and one browsers to implement ES6 and IE 8 to finally die dammit. Nope, I have a plan and it's [Babel](http://babeljs.io/). Transpile the tears away, write ES6 and have Babel spit out EStoday.

I've found this pretty addictive. Once you've started using ES6 features it's hard to go back. Take [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) \- I can't get enough of it.

Whilst I love Babel, it has caused me some sadness as well. My beloved TypeScript is currently not in the mix, Babel is instead sat squarely where I want TS to be. I'm without static types and rather bereft. You can certainly live without them but having done so for a while I'm pretty clear now that static typing is a massive productivity win. You don't have to hold the data structures that you're working on in your head so much, code completion gives you what you need there, you can focus more on the problem that you're trying to solve. You also burn less time on silly mistakes. If you accidentally change the return type of a function you're likely to know straight away. Refactoring is so much harder without static types. I could go on.

All this goes to say: I want my static typing back. It wasn't really an option to use TypeScript in the beginning because we were using JSX and TS didn't support it. However! TypeScript is due to add support for JSX in [TS 1.6 (currently in beta)](https://blogs.msdn.com/b/typescript/archive/2015/09/02/announcing-typescript-1-6-beta-react-jsx-better-error-checking-and-more.aspx). I've plans to see if I can get TypeScript to emit ES6 and then keep using Babel to do the transpilation. Whether this will work, I don't know yet. But it seems likely. So I'm hoping for a bright future.

## Browserify (there are no song lyrics that can be crowbarred in)

Emitting scripts in the required order has been a perpetual pain for everyone in the web world for the longest time. I've taken about 5 different approaches to solving this problem over the years. None felt particularly good. So Browserify.

Browserify solves the problem of script ordering for you by allowing you to define an entry point to your application and getting you to write `require` (npm style) or `import` ([ES6 modules](http://exploringjs.com/es6/ch_modules.html)) to bring in the modules that you need. This allows Browserify (which we're using with Babel thanks to the [babelify transform](https://github.com/babel/babelify)) to create a ginormous js file that contains the scripts served as needed. Thanks to the magic of source maps it also allows us to debug our original code (yup, the original ES6!) Browserify has the added bonus of allowing us free reign to pull in npm packages to use in our app without a great deal of ceremony.

Browserify is pretty fab - my only real reservation is that if you step outside the normal use cases you can quickly find yourself in deep water. Take for instance web workers. We were briefly looking into using them as an optimisation (breaking IO onto a separate process from the UI). A prime reason for backing away from this is that [Web Workers don't play particularly well with Browserify](https://github.com/substack/webworkify/issues/14). And when you've got Babel (or [Babelify](https://github.com/babel/babelify)) in the mix the problems just multiply. That apart, I really dig Browserify. I think I'd like to give WebPack a go as well as I understand it fulfills a similar purpose.

## WebSockets / Protocol Buffers

The application I'm working on is plugging into an existing system which uses WebSockets for communication. Since WebSockets are native to the web we've been able to plumb these straight into our app. We're also using Protocol Buffers as another optimisation; a way to save a few extra bytes from going down the wire. I don't have much to say about either, just some observations really:

1. WebSockets is a slightly different way of working - permanently open connections as opposed to the request / response paradigm of classic HTTP
2. WebSockets are wicked fast (due in part to those permanent connections). So performance is _amazing_. Fast like native, type amazing. In our case performance is pretty important and so this has been really great.

## React / Flux

Finally, React and Flux. I was completely new to these when I came onto the project and I quickly came to love them. There was a prejudice for me to overcome and that was JSX. When I first saw it I felt a little sick. "Have we learned _NOTHING_???" I wailed. "Don't we know that embedding strings in our controllers is a _BAD_ thing?" I was wrong. I had an epiphany. I discovered that JSX is not, as I first imagined, embedded HTML strings. Actually it's syntactic sugar for object creation. A simple example:

```jsx
var App;

// Some JSX:
var app = <App version="1.0.0" />;

// What that JSX transpiles into:
var app = React.createElement(App, { version: '1.0.0' });
```

Now that I'm well used to JSX and React I've really got to like it. I keep my views / components as dumb as possible and do all the complex logic in the stores. The stores are just standard JavaScript and so, pretty testable (simple Jasmine gives you all you need - I haven't felt the need for [Jest](https://facebook.github.io/jest/)). The components / views are also completely testable. I'd advise anyone coming to React afresh to make use of the [`ReactShallowRenderer`](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) for these purposes. This means you can test without a DOM - much better all round.

I don't have a great deal to say about Flux; I think my views on it aren't fully formed yet. I do really like predictability that unidirectional data flow gives you. However, I'm mindful that the app that I've been writing is very much about displaying data and doesn't require much user input. I know that I'm living without 2-way data binding and I do wonder if I would come to miss it. Time will tell.

I really want to get back to static typing. That either means TypeScript (which I know and love) or Facebook's Flow. ([A Windows version of Flow is in the works](https://github.com/facebook/flow/issues/6).) I'll be very happy if I get either into the mix... Watch this space.
