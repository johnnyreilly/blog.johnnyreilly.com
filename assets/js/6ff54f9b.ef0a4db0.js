"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[89538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=h(r),c=a,d=p["".concat(l,".").concat(c)]||p[c]||u[c]||o;return r?n.createElement(d,s(s({ref:t},m),{},{components:r})):n.createElement(d,s({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var h=2;h<o;h++)s[h]=r[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},32512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"Karma: From PhantomJS to Headless Chrome",authors:"johnnyreilly",tags:["Chrome","Karma","PhantomJS","Headless"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2017/08/27/karma-from-phantomjs-to-headless-chrome",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2017-08-27-karma-from-phantomjs-to-headless-chrome/index.md",source:"@site/blog/2017-08-27-karma-from-phantomjs-to-headless-chrome/index.md",title:"Karma: From PhantomJS to Headless Chrome",description:"Like pretty much everyone else I've been using PhantomJS to run my JavaScript (or compiled-to-JS) unit tests. It's been great. So when I heard the news that PhantomJS was dead I was genuinely sad. However, the King is dead.... Long live the King! For there is a new hope; it's called Chrome Headless . It's not a separate version of Chrome; rather the ability to run Chrome without a UI is now baked into Google's favourite browser as of v59. (For those history buffs I might as well be clear: the main reason PhantomJS died is because Chrome Headless was in the works.)",date:"2017-08-27T00:00:00.000Z",formattedDate:"August 27, 2017",tags:[{label:"Chrome",permalink:"/tags/chrome"},{label:"Karma",permalink:"/tags/karma"},{label:"PhantomJS",permalink:"/tags/phantom-js"},{label:"Headless",permalink:"/tags/headless"}],readingTime:1.91,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Karma: From PhantomJS to Headless Chrome",authors:"johnnyreilly",tags:["Chrome","Karma","PhantomJS","Headless"],hide_table_of_contents:!1},prevItem:{title:"Oh the Glamour of Open Source",permalink:"/2017/08/30/oh-glamour-of-open-source"},nextItem:{title:"A Haiku on the Problem with SemVer: Us",permalink:"/2017/07/29/a-haiku-on-problem-with-semver-us"}},h={authorsImageUrls:[void 0]},m=[{value:"Making the Switch",id:"making-the-switch",level:2},{value:"<code>package.json</code>",id:"packagejson",level:2},{value:"<code>karma.conf.js</code>",id:"karmaconfjs",level:2},{value:"Continuous Integration",id:"continuous-integration",level:2}],p={toc:m};function u(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Like pretty much everyone else I've been using PhantomJS to run my JavaScript (or compiled-to-JS) unit tests. It's been great. So when I heard the news that ",(0,n.kt)("a",a({parentName:"p"},{href:"https://news.ycombinator.com/item?id=14105489"}),"PhantomJS was dead")," I was genuinely sad. However, the King is dead.... Long live the King! For there is a new hope; it's called ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.google.com/web/updates/2017/04/headless-chrome"}),"Chrome Headless "),". It's not a separate version of Chrome; rather the ability to run Chrome without a UI is now baked into Google's favourite browser as of v59. (For those history buffs I might as well be clear: the main reason PhantomJS died is because Chrome Headless was in the works.)"),(0,n.kt)("h2",a({},{id:"making-the-switch"}),"Making the Switch"),(0,n.kt)("p",null,"As long as you're running Chrome v59 or greater then you can switch. I've just made ts-loader's execution test pack run with Chrome Headless instead of PhantomJS and I've rarely been happier. Honest. Some context: the execution test pack runs Jasmine unit tests via the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://karma-runner.github.io/1.0/index.html"}),"Karma test runner"),". The move was surprisingly easy and you can see just how minimal it was in the PR ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/611/files"}),"here"),". If you want to migrate a test that runs tests via Karma then this will take you through what you need to do."),(0,n.kt)("h2",a({},{id:"packagejson"}),(0,n.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,n.kt)("p",null,"You no longer need ",(0,n.kt)("inlineCode",{parentName:"p"},"phantomjs-prebuilt")," as a dev dependency of your project. That's the PhantomJS browser disappearing in the rear view mirror. Next we need to replace ",(0,n.kt)("inlineCode",{parentName:"p"},"karma-phantomjs-launcher")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"karma-chrome-launcher"),". These packages are responsible for firing up the browser that the tests are run in and we no longer want to invoke PhantomJS; we're Chrome all the way baby."),(0,n.kt)("h2",a({},{id:"karmaconfjs"}),(0,n.kt)("inlineCode",{parentName:"h2"},"karma.conf.js")),(0,n.kt)("p",null,"You need to tell Karma to use Chrome Headless instead of PhantomJS. You do that by replacing"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-js"}),"browsers: [ 'PhantomJS' ],\n")),(0,n.kt)("p",null,"with"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-js"}),"browsers: [ 'ChromeHeadless' ],\n")),(0,n.kt)("p",null,"That's it; job done!"),(0,n.kt)("h2",a({},{id:"continuous-integration"}),"Continuous Integration"),(0,n.kt)("p",null,"There's always one more thing isn't there? Yup, ts-loader has CI builds that run on ",(0,n.kt)("a",a({parentName:"p"},{href:"https://ci.appveyor.com/project/JohnReilly/ts-loader/branch/master"}),"Windows with AppVeyor")," and ",(0,n.kt)("a",a({parentName:"p"},{href:"https://travis-ci.org/TypeStrong/ts-loader"}),"Linux with Travis"),". The AppVeyor build went green on the first run; that's because Chrome is installed by default in the AppVeyor build environment. (yay!)"),(0,n.kt)("p",null,"Travis went red. (boooo!) Travis doesn't have Chrome installed by default. But it's no biggie; you just need to tweak your ",(0,n.kt)("inlineCode",{parentName:"p"},".travis.yml")," like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-yml"}),"dist: trusty\naddons:\n  chrome: stable\n")),(0,n.kt)("p",null,"This includes Chrome in the Travis build environment. Green. Boom!"))}u.isMDXComponent=!0}}]);