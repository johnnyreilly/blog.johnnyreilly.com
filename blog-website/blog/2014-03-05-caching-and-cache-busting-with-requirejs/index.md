---
slug: caching-and-cache-busting-with-requirejs
title: 'Caching and cache-busting with RequireJS'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'Learn how to use "urlArgs" in RequireJS to manage caching and offer a reusable solution for both development and production environments.'
---

Having put together a demo of using TypeScript with RequireJS my attention turned quickly to caching. Or rather, IE forced me to think about caching.

<!--truncate-->

Everyone has their own workflow, their own tools. The things they like to use as they put things together. And for me I’m a Visual Studio man – it’s not everyone’s bag but I really like it. I find the JavaScript tooling is now really solid combined with IE and it (generally) makes me more productive. I want to use it. But, as you know, nothing is perfect...

So there I was, delighted with the TypeScript / RequireJS demo. It was working just lovely. I started investigating the debugging story. What would happen if I change a script file on the fly? When I refresh IE does it pick up the tweaks?

Let’s find out. I'll open up alerter.ts and change this:

```ts
var name = 'John';
```

to this:

```js
var name = 'Bobby';
```

And \***boom**\*! Nothing. I’ve refreshed IE and I’m expecting to see “Welcome to Code Camp, Bobby”. But I’m still reading “Welcome to Code Camp, John”... I bet Chrome wouldn’t do this to me... And I’m right! It doesn’t. I don’t want to get too much into the details of this but it looks like it comes down to Chrome sending an "If-Modified-Since" request header where IE does not. I’m pretty sure that IE could be configured to behave likewise but I’d rather not have to remember that. (And furthermore I don’t want to have to remind every person that works on the app to do that as well.)

This raises a number of issues but essentially it gets me to think about the sort of caching I want. Like most of you I have 2 significant use cases:

1. Development
2. Production

For Development I want any changes to JavaScript files to be picked up – I do \***not**\* want caching. For Production I want caching in order that users have better performance / faster loading. If I ship a new version of the app to Production I also want users to pick up the new versions of a file and cache those.

## Research

I did a little digging. The most useful information I found was [a StackOverflow post on RequireJS and caching](http://stackoverflow.com/q/8315088/761388). Actually I’d recommend anyone reading this to head over and read that from top to bottom. Read the question and all of the answers as well – pretty much everything will add to your understanding of RequireJS.

As with any set of answers there are different and conflicting views. [Phil McCull’s (accepted) answer](http://stackoverflow.com/a/8479953/761388) was for my money the most useful. It pointed [back to the RequireJS documentation](http://requirejs.org/docs/api.html#config-urlArgs).

> \*"urlArgs: Extra query string arguments appended to URLs that RequireJS uses to fetch resources. Most useful to cache bust when the browser or server is not configured correctly. Example cache bust setting for urlArgs:
>
> ```js
> urlArgs: 'bust=' + new Date().getTime();
> ```
>
> During development it can be useful to use this, however be sure to remove it before deploying your code."
>
> -

Phil’s answer suggests using urlArgs \***both**\* for Production and for Development in 2 different ways. Using what amounts to a random number in the Development environment (as in the official docs) for cache-busting. For the Production environment he suggests using a specific version number which allows for client-side caching between different build versions.

Full disclosure, this is not the approach favoured by James Burke (author of RequireJS). He doesn’t go into why in the RequireJS docs but has [elsewhere expounded on this](https://groups.google.com/forum/#!msg/requirejs/3E9dP_BSQoY/36ut2Gtko7cJ):

> _For deployed assets, I prefer to put the version or hash for the whole build as a build directory, then just modify the baseUrl config used for the project to use that versioned directory as the baseUrl. Then no other files change, and it helps avoid some proxy issues where they may not cache an URL with a query string on it. _

I’m not so worried about the proxy caching issue. My users tend to be people who use the application repeatedly and so the caching I most care about is their local machine caching. From what I understand urlArgs will work fine in this scenario. Yes the downside of this approach is that some proxy servers may not cache these assets. That’s a shame but it’s not a dealbreaker for me. As I said, I still have client side caching.

If you want to go a little deeper I recommend reading [Steve Souders post](http://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/) on the topic (in case you’re not aware Steve is Google’s Mr Performance). Interestingly, looking at the comments on the post it sounds like the lack of support for proxy caching with querystrings may that may be starting to change.

But either way, I’m happy with this approach. As I always say, if it’s good enough for Stack Overflow then it’s good enough for me.

## Implementation

I’m going to start off using the demo from [my last blog post](../2014-02-27-typescript-and-requirejs-keep-it-simple/index.md) as a basis. Let’s take that and evolve it. As a result my solution is going to work with TypeScript and RequireJS (since the previous demo was about that) but the implementation I’m going to come up with would work as well with vanilla JS as it would with TypeScript compiled JS.

Let’s take a look at our index.html. First we’ll drop our usage of `main.ts` / `main.js` (our bootstrapper file that defines config and kicks off the "app"). We’ll pull out the use of `data-main` and instead, just after the reference to require we’ll add the contents of `main.js` much in [the style of the RequireJS docs](http://requirejs.org/docs/api.html#config). We’ll also include a urlArgs that as a cache-buster that uses the approach outlined [in the RequireJS docs](http://requirejs.org/docs/api.html#config-urlArgs):

```html
<script src="/scripts/require.js"></script>
<script>
  require.config({
    baseUrl: '/scripts',
    paths: {
      jquery: 'jquery-2.1.0',
    },
    urlArgs: 'v=' + new Date().getTime(),
  });

  require(['alerter'], function (alerter) {
    alerter.showMessage();
  });
</script>
```

Spinning up the site all runs as you would expect. The question is: does this work as a cache-buster? Let’s tweak `alerter.ts` / `alerter.js`.

Oh yeah! We’re cache-busting like gangbusters!

So now let’s comment out our existing urlArgs (which represents the Development solution from Phil’s answer) and replace it with a fixed value like this:

```js
//urlArgs: "v=" +  (new Date()).getTime()
urlArgs: 'v=1';
```

This represents the Production solution from Phil’s answer. Now let’s run, refresh a couple of times and ensure that our fixed querystring value results in a 304 status code (indicating “Not Modified” and cached item used).

It does! Now let’s increment the value:

```js
urlArgs: 'v=2';
```

When we refresh the browser this should result in 200 status codes (indicating the cached version has not been used and the client has picked up a new version from the server).

Success! That’s our premise tested – both Development and Production scenarios. Now we want to turn this into a slightly more sophisticated reusable solution like this:

```html
<script src="/scripts/require.js"></script>
<script>
  var inDevelopment = true,
    version = '1';

  require.config({
    baseUrl: '/scripts',
    paths: {
      jquery: 'jquery-2.1.0',
    },
    urlArgs: 'v=' + (inDevelopment ? new Date().getTime() : version),
  });

  require(['alerter'], function (alerter) {
    alerter.showMessage();
  });
</script>
```

In the tweaked script above 2 variables are defined. The first is `inDevelopment` which models whether you are in the Development scenario (true) or the Production scenario (false). The second is `version` which represents the application version number. With this in place I can simply flip between the Development and Production scenario by changing the value of `inDevelopment`. And when a new version ships I can change the version number to force a cache refresh on the users.

What drives the values of `inDevelopment` / `version` is down to you. You could load the `inDevelopment` / `version` values from some application endpoint. You could hardcode them in your screen. The choices are yours. I’m going to finish off with a simple approach that I've found useful.

## Let’s get the server involved!

I want the server to drive my urlArgs value. Why? Well this project happens to be an ASP.NET project which handily has the concept of Development / Production scenarios nicely modelled by the [web.config’s compilation debug flag](<http://msdn.microsoft.com/en-us/library/s10awwz0(v=vs.85).aspx>).

```xml
<configuration>
  <system.web>
    <compilation debug="true" targetFramework="4.5" />
    <httpRuntime targetFramework="4.5" />
  </system.web>
</configuration>
```

If debug is `true` then that reflects the Development scenario. If debug is `false` then that reflects the Production scenario.

So bearing that in mind I want to use the value of debug to drive my `urlArgs`. If I have my debug flag set to `true` I want to cache-bust all the way. Likewise, if debug is set to `false` then I want to serve up the version number so that caching is used until the version number changes. Time to break out the C#:

```cs
namespace RequireJSandCaching
{
    public static class RequireJSHelpers
    {
        private static readonly bool _inDebug;
        private static readonly string _version;

        static RequireJSHelpers()
        {
            _inDebug = System.Web.HttpContext.Current.IsDebuggingEnabled;
            _version = (_inDebug)
                ? "InDebug"
                : System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();
        }

        public static string Version
        {
            get
            {
                return (_inDebug)
                    ? System.DateTime.Now.Ticks.ToString()
                    : _version;
            }
        }
    }
}
```

This is a static helper class called `RequireJSHelpers`. It has a static constructor which initialises 2 fields. `_inDebug` is taken from `System.Web.HttpContext.Current.IsDebuggingEnabled` which exposes the compilation debug value. `_version` is initialised, when debug is `false`, to the version number of the dll (driven by this `AssemblyInfo.cs [assembly: AssemblyVersion("1.0.*")]` attribute)

There’s 1 property on this helper class called version. Depending on whether the app is in debug mode or not this attribute either exposes the application version or effectively the C# equivalent to JavaScript’s `(new Date()).getTime()`. (Well strictly speaking they have a different starting point in history but that’s by-the-by... Both are of equal value as cache-busters.)

You probably see where this is all going.

Let’s clone our `index.html` page and call it `serverUrlArgs.cshtml` (note the suffix). Let’s replace the script section with this:

```html
<script>
  require.config({
    baseUrl: '/scripts',
    paths: {
      jquery: 'jquery-2.1.0',
    },
    urlArgs: 'v=@RequireJSandCaching.RequireJSHelpers.Version',
  });

  require(['alerter'], function (alerter) {
    alerter.showMessage();
  });
</script>
```

Which drives `urlArgs` from the `RequireJSHelpers.Version` property. If we fire it up now (with debug set to true in our web.config) then we see requests like this:

And if we set debug to false in our web.config then (after the initial requests have been cached) we see requests like this:

This leaves us with a simple mechanism to drive our RequireJS caching. If debug is set to `true` in our `web.config` then Require will perform cache-busting. If debug is set to `false` then RequireJS will perform only version-changing cache-busting and will, whilst the version remains constant, support client-side caching.

Finished. In case it helps I’ve put the code for this [up on GitHub](https://github.com/johnnyreilly/RequireJSandCaching).
