"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[5616],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=h(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var h=2;h<r;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Live Reload Considered Harmful",authors:"johnnyreilly",tags:[],hide_table_of_contents:!1},s=void 0,h={permalink:"/2015/12/20/live-reload-considered-harmful",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-12-20-live-reload-considered-harmful/index.md",source:"@site/blog/2015-12-20-live-reload-considered-harmful/index.md",title:"Live Reload Considered Harmful",description:"I've seen it go by many names; live reload, hot reload, browser sync... the list goes on. It's been the subject of a million demos. It's the focus of a thousand npm packages. Someone tweaks a file and... wait for it... doesn't have to refresh their browser to see the changes... The future is now!",date:"2015-12-20T00:00:00.000Z",formattedDate:"December 20, 2015",tags:[],readingTime:2.455,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Live Reload Considered Harmful",authors:"johnnyreilly",tags:[],hide_table_of_contents:!1},prevItem:{title:"UseStaticFiles for ASP.Net Framework",permalink:"/2016/01/01/usestaticfiles-for-aspnet-vold"},nextItem:{title:"ES6 + TypeScript + Babel + React + Flux + Karma: The Secret Recipe",permalink:"/2015/12/16/es6-typescript-babel-react-flux-karma"}},c={authorsImageUrls:[void 0]},u=[{value:"Why is Live Reload a Thing?",id:"why-is-live-reload-a-thing",level:2},{value:"Why is Live Reload a BAD Thing?",id:"why-is-live-reload-a-bad-thing",level:2}],p={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I've seen it go by many names; ",(0,r.kt)("a",{parentName:"p",href:"http://livereload.com/"},"live reload"),", hot reload, ",(0,r.kt)("a",{parentName:"p",href:"https://browsersync.io/"},"browser sync"),"... the list goes on. It's been the subject of a million demos. It's the focus of a thousand npm packages. Someone tweaks a file and... wait for it... ",(0,r.kt)("em",{parentName:"p"},"doesn't have to refresh their browser to see the changes"),"... The future is now!"),(0,r.kt)("p",null,"Forgive me the sarcasm, but I have come to the conclusion that whilst live reload is impressive... for my own purposes, it is not actually that useful. It certainly shouldn't be the default goto that it seems to have become."),(0,r.kt)("p",null,"Hear me out people, I may be the voice crying out in the wilderness but I'm right dammit."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(80956).Z,width:"245",height:"170"})),(0,r.kt)("h2",{id:"why-is-live-reload-a-thing"},"Why is Live Reload a Thing?"),(0,r.kt)("p",null,"What is live reload? Well having to hit F5 after you've made a change... That seems like such hard work right? To quote ",(0,r.kt)("a",{parentName:"p",href:"http://haacked.com/archive/2011/12/13/better-git-with-powershell.aspx/"},"Phil Haack"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"... we\u2019re software developers.... It\u2019s time to AWW TOE MATE!")),(0,r.kt)("p",null,"Yup, automation. Anything that a developer can theoretically automate.... will be automated. Usually this is a good thing but automation can be addictive. And on this occasion it's time for an intervention."),(0,r.kt)("p",null,"What else could be the attraction? Well, this is speculation but I would say that the implementation actually has something to do with it. Live reload is almost invariably powered by ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"WebSockets")," and they are certainly cool. Developers I know what you are like. You're attracted by the new shiny thing. You can't resist the allure of WS. And there with live reload idling away in the background you're all bleeding edge. I can say all this because this is exactly what I am like."),(0,r.kt)("h2",{id:"why-is-live-reload-a-bad-thing"},"Why is Live Reload a BAD Thing?"),(0,r.kt)("p",null,"Well the OCD part of me is instinctively repelled by the extra ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," tag of alien code that live reload foists upon your app. How very dare that ",(0,r.kt)("inlineCode",{parentName:"p"},'&lt;script src="http://localhost:35729/livereload.js?snipver=1"&gt;&lt;/script&gt;')," push its way into my pristine DOM. It's an outrage."),(0,r.kt)("p",null,"Perhaps a more convincing rationale is how useful it is to have 2 different versions of your app up on screen at the same time. I like to try things out when I'm working. I get a screen working one way and then I tweak and play with my implementation. I have the app of 10 minutes ago sat side by side with the newly adjusted one. Assess, compare and and declare a winner. That's so useful and live reload does away with it. That's a problem."),(0,r.kt)("p",null,"Finally, I'm an obsessive 'Ctrl-S'-er. I've been burned by unsaved changes too many times. I'm saving every couple of keypresses. With live reload that usually means I have the noise of a dead application in the corner of my eye as LR obsessively forces the latest brokenness upon me. That sucks."),(0,r.kt)("p",null,"I've no doubt there are situations where live reload is useful. But for my money that's the exception rather than the rule. Let the madness end now. Just say \"no\", kids."))}d.isMDXComponent=!0},80956:function(e,t,n){t.Z=n.p+"assets/images/tumblr_mxjpcobvcg...6_r2_250-4abb938-089317fff1ed86c364efad9d63daf226.gif"}}]);