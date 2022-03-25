"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[98638],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||r;return n?i.createElement(g,o(o({ref:t},h),{},{components:n})):i.createElement(g,o({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],l={title:"Caching and Cache-Busting in AngularJS with HTTP interceptors",authors:"johnnyreilly",tags:["TypeScript","$http","AngularJS","interceptors","caching"],hide_table_of_contents:!1},s=void 0,c={permalink:"/2014/10/06/caching-and-cache-busting-in-angularjs-with-http-interceptors",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-10-06-caching-and-cache-busting-in-angularjs-with-http-interceptors/index.md",source:"@site/blog/2014-10-06-caching-and-cache-busting-in-angularjs-with-http-interceptors/index.md",title:"Caching and Cache-Busting in AngularJS with HTTP interceptors",description:"Loading On-Demand and Caching",date:"2014-10-06T00:00:00.000Z",formattedDate:"October 6, 2014",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"$http",permalink:"/tags/http"},{label:"AngularJS",permalink:"/tags/angular-js"},{label:"interceptors",permalink:"/tags/interceptors"},{label:"caching",permalink:"/tags/caching"}],readingTime:4.07,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Caching and Cache-Busting in AngularJS with HTTP interceptors",authors:"johnnyreilly",tags:["TypeScript","$http","AngularJS","interceptors","caching"],hide_table_of_contents:!1},prevItem:{title:"Using Gulp in Visual Studio instead of Web Optimization",permalink:"/2014/11/04/using-gulp-in-visual-studio-instead-of-web-optimization"},nextItem:{title:"He tasks me; he heaps me.... I will wreak that MOQ upon him.",permalink:"/2014/10/03/he-tasks-me-he-heaps-me-i-will-wreak"}},h={authorsImageUrls:[void 0]},p=[{value:"Loading On-Demand and Caching",id:"loading-on-demand-and-caching",level:2},{value:"Loading Views in AngularJS Using this Approach",id:"loading-views-in-angularjs-using-this-approach",level:2},{value:"Interesting technique.... How do I apply it?",id:"interesting-technique-how-do-i-apply-it",level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"loading-on-demand-and-caching"},"Loading On-Demand and Caching"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.com/2014/03/caching-and-cache-busting-with-requirejs.html"},"I've written before about my own needs for caching and cache-busting when using RequireJS.")," Long story short, when I'm loading ",(0,r.kt)("em",{parentName:"p"},"static")," resources (scripts / views etc) on demand from the server I want to do a little URL fiddling along the way. I want to do that to cater for these 2 scenarios:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"In Development")," ","-",' I want my URLs for static resources to have a unique querystring with each request to ensure that resources are loaded afresh each time. (eg so a GET request URL might look like this: "/app/layout/sidebar.html?v=IAmRandomYesRandomRandomIsWhatIAm58965782")'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"In Production")," ","-",' I want my URLs for static resources to have a querystring with that is driven by the application version number. This means that static resources can potentially be cached with a given querystring - subsequent requests should result in a 304 status code (indicating \u201cNot Modified\u201d) and local cache should be used. But when a new version of the app is rolled out and the app version is incremented then the querystring will change and resources will be loaded anew. (eg a GET request URL might look like this: "/app/layout/sidebar.html?v=1.0.5389.16180")')),(0,r.kt)("h2",{id:"loading-views-in-angularjs-using-this-approach"},"Loading Views in AngularJS Using this Approach"),(0,r.kt)("p",null,"I have exactly the same use cases when I'm using AngularJS for views. Out of the box with AngularJS 1.x views are loaded lazily (unlike controllers, services etc). For that reason I want to use the same approach I've outlined above to load my views. Also, I want to prepend my URLs with the root of my application - this allows me to cater for my app being deployed in a virtual folder."),(0,r.kt)("p",null,"It turns out that's pretty easy thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/service/$http#interceptors"},"HTTP interceptors"),". They allow you to step into the pipeline and access and modify requests and responses made by your application. When AngularJS loads a view it's the HTTP service doing the heavy lifting. So to deal with my own use case, I just need to add in an HTTP interceptor that amends the get request. This is handled in the example that follows in the ",(0,r.kt)("inlineCode",{parentName:"p"},"configureHttpProvider")," function: (The example that follows is TypeScript - though if you just chopped out the interface and the type declarations you'd find this is pretty much idiomatic JavaScript)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"interface config {\n  appRoot: string; // eg \"/\"\n  inDebug: boolean; // eg true or false\n  urlCacheBusterSuffix: string; // if in debug this might look like this: \"v=1412608547047\",\n  // if not in debug this might look like this: \"v=1.0.5389.16180\"\n}\n\nfunction configureHttpProvider() {\n  // This is the name of our HTTP interceptor\n  var serviceId = 'urlInterceptor';\n\n  // We're going to create a service factory which will be our HTTP interceptor\n  // It will be injected with a config object which is represented by the config interface above\n  app.factory(serviceId, [\n    '$templateCache',\n    'config',\n    function ($templateCache: ng.ITemplateCacheService, config: config) {\n      // We're returning an object literal with a single function; the \"request\" function\n      var service = {\n        request: request,\n      };\n\n      return service;\n\n      // Request will be called with a request config object which includes the URL which we will amend\n      function request(requestConfig: ng.IRequestConfig) {\n        // For the loading of HTML templates we want the appRoot to be prefixed to the path\n        // and we want a suffix to either allow caching or prevent caching\n        // (depending on whether in debug mode or not)\n        if (\n          requestConfig.method === 'GET' &&\n          endsWith(requestConfig.url, '.html')\n        ) {\n          // If this has already been placed into a primed template cache then we should leave the URL as is\n          // so that the version in templateCache is served.  If we tweak the URL then it will not be found\n          var cachedAlready = $templateCache.get(requestConfig.url);\n          if (!cachedAlready) {\n            // THIS IS THE MAGIC!!!!!!!!!!!!!!!\n\n            requestConfig.url =\n              config.appRoot + requestConfig.url + config.urlCacheBusterSuffix;\n\n            // WE NOW HAVE A URL WHICH IS CACHE-FRIENDLY FOR OUR PURPOSES - REJOICE!!!!!!!!!!!\n          }\n        }\n\n        return requestConfig;\n      }\n\n      // <a href=\"http://stackoverflow.com/a/2548133/761388\">a simple JavaScript string \"endswith\" implementation</a>\n      function endsWith(str: string, suffix: string) {\n        return str.indexOf(suffix, str.length - suffix.length) !== -1;\n      }\n    },\n  ]);\n\n  // This adds our service factory interceptor into the pipeline\n  app.config([\n    '$httpProvider',\n    function ($httpProvider: ng.IHttpProvider) {\n      $httpProvider.interceptors.push(serviceId);\n    },\n  ]);\n}\n")),(0,r.kt)("p",null,"This interceptor steps in and amends each ajax request when all the following conditions hold true:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It's a GET request."),(0,r.kt)("li",{parentName:"ol"},'It\'s requesting a file that ends ".html" - a template basically.'),(0,r.kt)("li",{parentName:"ol"},"The template cache does not already contain the template. I left this out at first and got bitten when I found that the contents of the template cache were being ignored for pre-primed templates. Ugly.")),(0,r.kt)("h2",{id:"interesting-technique-how-do-i-apply-it"},"Interesting technique.... How do I apply it?"),(0,r.kt)("p",null,"Isn't it always much more helpful when you can see an example of code in the context of which it is actually used? Course it is! If you want that then take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/Proverb/blob/master/Proverb.Web/app/app.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"app.ts"))," on GitHub. And if you'd like the naked JavaScript well ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/Proverb/blob/master/Proverb.Web/app/app.js"},"that's there too"),"."))}d.isMDXComponent=!0}}]);