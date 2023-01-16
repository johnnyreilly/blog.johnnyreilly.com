"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[98022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,d=p["".concat(l,".").concat(y)]||p[y]||c[y]||i;return n?o.createElement(d,a(a({ref:t},h),{},{components:n})):o.createElement(d,a({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},35243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>h});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={title:"The Convent with Continuous Delivery",authors:"johnnyreilly",tags:["Poor Clares","Continuous Delivery","Arundel","AppVeyor"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2015/02/11/the-convent-with-continuous-delivery",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2015-02-11-the-convent-with-continuous-delivery/index.md",source:"@site/blog/2015-02-11-the-convent-with-continuous-delivery/index.md",title:"The Convent with Continuous Delivery",description:"I've done it. I've open sourced the website that I maintain for my aunt what is a nun. Because I think we can all agree that nuns need open source and continuous integration about as much as anyone else.",date:"2015-02-11T00:00:00.000Z",formattedDate:"February 11, 2015",tags:[{label:"Poor Clares",permalink:"/tags/poor-clares"},{label:"Continuous Delivery",permalink:"/tags/continuous-delivery"},{label:"Arundel",permalink:"/tags/arundel"},{label:"AppVeyor",permalink:"/tags/app-veyor"}],readingTime:3.53,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"The Convent with Continuous Delivery",authors:"johnnyreilly",tags:["Poor Clares","Continuous Delivery","Arundel","AppVeyor"],hide_table_of_contents:!1},prevItem:{title:"Using Gulp to inject scripts and styles tags directly into your HTML",permalink:"/2015/02/17/using-gulp-in-asp-net-instead-of-web-optimization"},nextItem:{title:"TypeScript: In Praise of Union Types",permalink:"/2015/01/20/typescript-using-functions-with-union-types"}},u={authorsImageUrls:[void 0]},h=[{value:"Why on earth did you bother?",id:"why-on-earth-did-you-bother",level:2},{value:"How did you go about it?",id:"how-did-you-go-about-it",level:2},{value:"Where is it?",id:"where-is-it",level:2},{value:"Will you take pull requests?",id:"will-you-take-pull-requests",level:2}],p={toc:h};function c(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I've done it. I've open sourced the ",(0,o.kt)("a",r({parentName:"p"},{href:"http://www.poorclaresarundel.org/"}),"website that I maintain for my aunt what is a nun"),". Because I think we can all agree that nuns need open source and continuous integration about as much as anyone else."),(0,o.kt)("p",null,"For a long time now I've been maintaining a website for one of my (many) aunts that is a Poor Clare. (",(0,o.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Subtyping"}),'That\'s a subtype of "nun" you OO enthusiasts.'),") It's not a terribly exciting site - it's mostly static content. It's built with a combination of AngularJS / TypeScript / Bootstrap and ASP.Net MVC. It's hosted on ",(0,o.kt)("a",r({parentName:"p"},{href:"http://azure.microsoft.com/en-us/documentation/services/websites/"}),"Azure Websites"),". In fact I have written about it (slightly more cagily) before ",(0,o.kt)("a",r({parentName:"p"},{href:"/2014/06/01/migrating-from-angularjs-to-angularts"}),"here"),"."),(0,o.kt)("p",null,"I'll say up front: presentation-wise the site is not a work of art. However the nuns seem pretty happy with it. (Or perhaps secretly they're forgiving me the shonkiness and sparing my feelings - who can say?) If I put my mind to it the site could look much more lovely. But there's only so much time I can spare - and that's actually one of the reasons I've set up Continuous Delivery."),(0,o.kt)("h2",r({},{id:"why-on-earth-did-you-bother"}),"Why on earth did you bother?"),(0,o.kt)("p",null,"Well, you'd be surprised how often tweaks can be requested. Sometimes it appears to be forgotten for months at a time, and then all of a sudden my inbox is daily filled with a list of minor alterations. You know, slight text changes and the like."),(0,o.kt)("p",null,'So what I was generally doing was getting home of an evening, waiting until the children were in bed, chomping down some food and then firing up Visual Studio to make the changes and hit "Publish". Yes that\'s right; I was essentially using Visual Studio to edit text files and push a website out to Azure. The very definition of using a sledgehammer to crack a nut I think we can all agree.'),(0,o.kt)("p",null,"It occurred to me that if I had Continuous Delivery set up then I could make these tweaks and not have to worry about the site being published. Which would be nice. I wouldn't need Visual Studio anymore - any text editor would do. Also nice. Finally, if the source control was accessible online then I could probably get away with doing most tweaks on my mobile phone whilst I was travelling home. Timesaver!"),(0,o.kt)("h2",r({},{id:"how-did-you-go-about-it"}),"How did you go about it?"),(0,o.kt)("p",null,"Since ",(0,o.kt)("a",r({parentName:"p"},{href:"http://www.visualstudioonline.com"}),'Visual Studio Online (then "Team Foundation Service")')," was released I have been using it to host the source code. So the obvious solution was to use the tools offered there to do the deployment. However, this wasn't the smooth experience you might have hoped for. I had quite a frustrating afternoon trying things out before deciding it was becoming more trouble than it was worth. VSO appeared to make it supremely hard to customise builds."),(0,o.kt)("p",null,"Just recently though I have been having the most wonderful experience with ",(0,o.kt)("a",r({parentName:"p"},{href:"http://www.appveyor.com/"}),"AppVeyor"),". AppVeyor market themselves as ",(0,o.kt)("em",{parentName:"p"},'"#1 Continuous Delivery service for Windows"')," ","-"," I think they're right. Their build process is entirely flexible and customisable. It is, in short, a joy to use. (The support is fantastic too - very helpful indeed. Go ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/FeodorFitsner"}),"Feodor"),"!)"),(0,o.kt)("p",null,"If you look just below the header you'll read a very important sentence: ",(0,o.kt)("em",{parentName:"p"},'"Free for open-source projects"'),". You hear that? By the time I'd finished reading that sentence I'd decided that the Poor Clares website was about to become an open source project."),(0,o.kt)("p",null,"And now it is."),(0,o.kt)("h2",r({},{id:"where-is-it"}),"Where is it?"),(0,o.kt)("p",null,"The source on ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/poorclaresarundel"}),"GitHub"),". The builds and deployment are taken care of by ",(0,o.kt)("a",r({parentName:"p"},{href:"https://ci.appveyor.com/project/JohnReilly/poorclaresarundel"}),"AppVeyor"),"."),(0,o.kt)("h2",r({},{id:"will-you-take-pull-requests"}),"Will you take pull requests?"),(0,o.kt)("p",null,"If they're serious, then yes, certainly! My long term plan is to try and get the nuns set up as collaborators in GitHub. That way they can make their own minor tweaks without me getting involved."),(0,o.kt)("p",null,"On another front, I do wonder if open-sourcing Poor Clares, Arundel might have other hidden benefits. There's a number of things I'm not too keen on in the code. Up until now I think my attitude was possibly \"it works so that's good enough\". It was only me aware of the shortcomings. Now it's public I'll probably have more of an incentive to tidy up the rough edges. That's the theory anyway - Embarrassment Driven Development anyone? :-)"))}c.isMDXComponent=!0}}]);