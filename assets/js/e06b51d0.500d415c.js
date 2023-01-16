"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[28511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},h),{},{components:n})):a.createElement(g,o({ref:t},h))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Caching and Cache-Busting in AngularJS with HTTP interceptors",authors:"johnnyreilly",tags:["TypeScript","$http","AngularJS","interceptors","caching"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2014/10/06/caching-and-cache-busting-in-angularjs-with-http-interceptors",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2014-10-06-caching-and-cache-busting-in-angularjs-with-http-interceptors/index.md",source:"@site/blog/2014-10-06-caching-and-cache-busting-in-angularjs-with-http-interceptors/index.md",title:"Caching and Cache-Busting in AngularJS with HTTP interceptors",description:"Loading On-Demand and Caching",date:"2014-10-06T00:00:00.000Z",formattedDate:"October 6, 2014",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"$http",permalink:"/tags/http"},{label:"AngularJS",permalink:"/tags/angular-js"},{label:"interceptors",permalink:"/tags/interceptors"},{label:"caching",permalink:"/tags/caching"}],readingTime:4.07,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Caching and Cache-Busting in AngularJS with HTTP interceptors",authors:"johnnyreilly",tags:["TypeScript","$http","AngularJS","interceptors","caching"],hide_table_of_contents:!1},prevItem:{title:"Using Gulp in Visual Studio instead of Web Optimization",permalink:"/2014/11/04/using-gulp-in-visual-studio-instead-of-web-optimization"},nextItem:{title:"He tasks me; he heaps me.... I will wreak that MOQ upon him.",permalink:"/2014/10/03/he-tasks-me-he-heaps-me-i-will-wreak"}},c={authorsImageUrls:[void 0]},h=[{value:"Loading On-Demand and Caching",id:"loading-on-demand-and-caching",level:2},{value:"Loading Views in AngularJS Using this Approach",id:"loading-views-in-angularjs-using-this-approach",level:2},{value:"Interesting technique.... How do I apply it?",id:"interesting-technique-how-do-i-apply-it",level:2}],p={toc:h};function u(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",r({},{id:"loading-on-demand-and-caching"}),"Loading On-Demand and Caching"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"/2014/03/05/caching-and-cache-busting-with-requirejs"}),"I've written before about my own needs for caching and cache-busting when using RequireJS.")," Long story short, when I'm loading ",(0,a.kt)("em",{parentName:"p"},"static")," resources (scripts / views etc) on demand from the server I want to do a little URL fiddling along the way. I want to do that to cater for these 2 scenarios:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"In Development")," ","-",' I want my URLs for static resources to have a unique querystring with each request to ensure that resources are loaded afresh each time. (eg so a GET request URL might look like this: "/app/layout/sidebar.html?v=IAmRandomYesRandomRandomIsWhatIAm58965782")'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"In Production")," ","-",' I want my URLs for static resources to have a querystring with that is driven by the application version number. This means that static resources can potentially be cached with a given querystring - subsequent requests should result in a 304 status code (indicating \u201cNot Modified\u201d) and local cache should be used. But when a new version of the app is rolled out and the app version is incremented then the querystring will change and resources will be loaded anew. (eg a GET request URL might look like this: "/app/layout/sidebar.html?v=1.0.5389.16180")')),(0,a.kt)("h2",r({},{id:"loading-views-in-angularjs-using-this-approach"}),"Loading Views in AngularJS Using this Approach"),(0,a.kt)("p",null,"I have exactly the same use cases when I'm using AngularJS for views. Out of the box with AngularJS 1.x views are loaded lazily (unlike controllers, services etc). For that reason I want to use the same approach I've outlined above to load my views. Also, I want to prepend my URLs with the root of my application - this allows me to cater for my app being deployed in a virtual folder."),(0,a.kt)("p",null,"It turns out that's pretty easy thanks to ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.angularjs.org/api/ng/service/$http#interceptors"}),"HTTP interceptors"),". They allow you to step into the pipeline and access and modify requests and responses made by your application. When AngularJS loads a view it's the HTTP service doing the heavy lifting. So to deal with my own use case, I just need to add in an HTTP interceptor that amends the get request. This is handled in the example that follows in the ",(0,a.kt)("inlineCode",{parentName:"p"},"configureHttpProvider")," function: (The example that follows is TypeScript - though if you just chopped out the interface and the type declarations you'd find this is pretty much idiomatic JavaScript)"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"interface config {\n  appRoot: string; // eg \"/\"\n  inDebug: boolean; // eg true or false\n  urlCacheBusterSuffix: string; // if in debug this might look like this: \"v=1412608547047\",\n  // if not in debug this might look like this: \"v=1.0.5389.16180\"\n}\n\nfunction configureHttpProvider() {\n  // This is the name of our HTTP interceptor\n  var serviceId = 'urlInterceptor';\n\n  // We're going to create a service factory which will be our HTTP interceptor\n  // It will be injected with a config object which is represented by the config interface above\n  app.factory(serviceId, [\n    '$templateCache',\n    'config',\n    function ($templateCache: ng.ITemplateCacheService, config: config) {\n      // We're returning an object literal with a single function; the \"request\" function\n      var service = {\n        request: request,\n      };\n\n      return service;\n\n      // Request will be called with a request config object which includes the URL which we will amend\n      function request(requestConfig: ng.IRequestConfig) {\n        // For the loading of HTML templates we want the appRoot to be prefixed to the path\n        // and we want a suffix to either allow caching or prevent caching\n        // (depending on whether in debug mode or not)\n        if (\n          requestConfig.method === 'GET' &&\n          endsWith(requestConfig.url, '.html')\n        ) {\n          // If this has already been placed into a primed template cache then we should leave the URL as is\n          // so that the version in templateCache is served.  If we tweak the URL then it will not be found\n          var cachedAlready = $templateCache.get(requestConfig.url);\n          if (!cachedAlready) {\n            // THIS IS THE MAGIC!!!!!!!!!!!!!!!\n\n            requestConfig.url =\n              config.appRoot + requestConfig.url + config.urlCacheBusterSuffix;\n\n            // WE NOW HAVE A URL WHICH IS CACHE-FRIENDLY FOR OUR PURPOSES - REJOICE!!!!!!!!!!!\n          }\n        }\n\n        return requestConfig;\n      }\n\n      // <a href=\"http://stackoverflow.com/a/2548133/761388\">a simple JavaScript string \"endswith\" implementation</a>\n      function endsWith(str: string, suffix: string) {\n        return str.indexOf(suffix, str.length - suffix.length) !== -1;\n      }\n    },\n  ]);\n\n  // This adds our service factory interceptor into the pipeline\n  app.config([\n    '$httpProvider',\n    function ($httpProvider: ng.IHttpProvider) {\n      $httpProvider.interceptors.push(serviceId);\n    },\n  ]);\n}\n")),(0,a.kt)("p",null,"This interceptor steps in and amends each ajax request when all the following conditions hold true:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It's a GET request."),(0,a.kt)("li",{parentName:"ol"},'It\'s requesting a file that ends ".html" - a template basically.'),(0,a.kt)("li",{parentName:"ol"},"The template cache does not already contain the template. I left this out at first and got bitten when I found that the contents of the template cache were being ignored for pre-primed templates. Ugly.")),(0,a.kt)("h2",r({},{id:"interesting-technique-how-do-i-apply-it"}),"Interesting technique.... How do I apply it?"),(0,a.kt)("p",null,"Isn't it always much more helpful when you can see an example of code in the context of which it is actually used? Course it is! If you want that then take a look at ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/Proverb/blob/master/Proverb.Web/app/app.ts"}),(0,a.kt)("inlineCode",{parentName:"a"},"app.ts"))," on GitHub. And if you'd like the naked JavaScript well ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/Proverb/blob/master/Proverb.Web/app/app.js"}),"that's there too"),"."))}u.isMDXComponent=!0}}]);