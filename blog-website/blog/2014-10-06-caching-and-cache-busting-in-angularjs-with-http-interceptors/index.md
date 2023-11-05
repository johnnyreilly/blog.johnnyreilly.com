---
slug: caching-and-cache-busting-in-angularjs-with-http-interceptors
title: 'Caching and Cache-Busting in AngularJS with HTTP interceptors'
authors: johnnyreilly
tags: [angularjs, typescript]
hide_table_of_contents: false
description: 'Learn how to modify GET request URLs for static resources and AngularJS views with HTTP interceptors using version numbers and unique querystrings.'
---

## Loading On-Demand and Caching

<!--truncate-->

[I've written before about my own needs for caching and cache-busting when using RequireJS.](../2014-03-05-caching-and-cache-busting-with-requirejs/index.md) Long story short, when I'm loading _static_ resources (scripts / views etc) on demand from the server I want to do a little URL fiddling along the way. I want to do that to cater for these 2 scenarios:

1. _In Development_ \- I want my URLs for static resources to have a unique querystring with each request to ensure that resources are loaded afresh each time. (eg so a GET request URL might look like this: "/app/layout/sidebar.html?v=IAmRandomYesRandomRandomIsWhatIAm58965782")
2. _In Production_ \- I want my URLs for static resources to have a querystring with that is driven by the application version number. This means that static resources can potentially be cached with a given querystring - subsequent requests should result in a 304 status code (indicating “Not Modified”) and local cache should be used. But when a new version of the app is rolled out and the app version is incremented then the querystring will change and resources will be loaded anew. (eg a GET request URL might look like this: "/app/layout/sidebar.html?v=1.0.5389.16180")

## Loading Views in AngularJS Using this Approach

I have exactly the same use cases when I'm using AngularJS for views. Out of the box with AngularJS 1.x views are loaded lazily (unlike controllers, services etc). For that reason I want to use the same approach I've outlined above to load my views. Also, I want to prepend my URLs with the root of my application - this allows me to cater for my app being deployed in a virtual folder.

It turns out that's pretty easy thanks to [HTTP interceptors](https://docs.angularjs.org/api/ng/service/$http#interceptors). They allow you to step into the pipeline and access and modify requests and responses made by your application. When AngularJS loads a view it's the HTTP service doing the heavy lifting. So to deal with my own use case, I just need to add in an HTTP interceptor that amends the get request. This is handled in the example that follows in the `configureHttpProvider` function: (The example that follows is TypeScript - though if you just chopped out the interface and the type declarations you'd find this is pretty much idiomatic JavaScript)

```js
interface config {
  appRoot: string; // eg "/"
  inDebug: boolean; // eg true or false
  urlCacheBusterSuffix: string; // if in debug this might look like this: "v=1412608547047",
  // if not in debug this might look like this: "v=1.0.5389.16180"
}

function configureHttpProvider() {
  // This is the name of our HTTP interceptor
  var serviceId = 'urlInterceptor';

  // We're going to create a service factory which will be our HTTP interceptor
  // It will be injected with a config object which is represented by the config interface above
  app.factory(serviceId, [
    '$templateCache',
    'config',
    function ($templateCache: ng.ITemplateCacheService, config: config) {
      // We're returning an object literal with a single function; the "request" function
      var service = {
        request: request,
      };

      return service;

      // Request will be called with a request config object which includes the URL which we will amend
      function request(requestConfig: ng.IRequestConfig) {
        // For the loading of HTML templates we want the appRoot to be prefixed to the path
        // and we want a suffix to either allow caching or prevent caching
        // (depending on whether in debug mode or not)
        if (
          requestConfig.method === 'GET' &&
          endsWith(requestConfig.url, '.html')
        ) {
          // If this has already been placed into a primed template cache then we should leave the URL as is
          // so that the version in templateCache is served.  If we tweak the URL then it will not be found
          var cachedAlready = $templateCache.get(requestConfig.url);
          if (!cachedAlready) {
            // THIS IS THE MAGIC!!!!!!!!!!!!!!!

            requestConfig.url =
              config.appRoot + requestConfig.url + config.urlCacheBusterSuffix;

            // WE NOW HAVE A URL WHICH IS CACHE-FRIENDLY FOR OUR PURPOSES - REJOICE!!!!!!!!!!!
          }
        }

        return requestConfig;
      }

      // <a href="http://stackoverflow.com/a/2548133/761388">a simple JavaScript string "endswith" implementation</a>
      function endsWith(str: string, suffix: string) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
      }
    },
  ]);

  // This adds our service factory interceptor into the pipeline
  app.config([
    '$httpProvider',
    function ($httpProvider: ng.IHttpProvider) {
      $httpProvider.interceptors.push(serviceId);
    },
  ]);
}
```

This interceptor steps in and amends each ajax request when all the following conditions hold true:

1. It's a GET request.
2. It's requesting a file that ends ".html" - a template basically.
3. The template cache does not already contain the template. I left this out at first and got bitten when I found that the contents of the template cache were being ignored for pre-primed templates. Ugly.

## Interesting technique.... How do I apply it?

Isn't it always much more helpful when you can see an example of code in the context of which it is actually used? Course it is! If you want that then take a look at [`app.ts`](https://github.com/johnnyreilly/Proverb/blob/master/Proverb.Web/app/app.ts) on GitHub. And if you'd like the naked JavaScript well [that's there too](https://github.com/johnnyreilly/Proverb/blob/master/Proverb.Web/app/app.js).
