"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[87350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||h[f]||i;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var o=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Docusaurus: Using fontaine to reduce custom font cumulative layout shift",authors:"johnnyreilly",tags:["Docusaurus","fontaine","fonts","CLS","cumulative layout shift"],image:"./title-image.png",hide_table_of_contents:!1},r=void 0,l={permalink:"/2022/12/01/docusaurus-using-fontaine-to-reduce-custom-font-cumulative-layout-shift",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-12-01-docusaurus-using-fontaine-to-reduce-custom-font-cumulative-layout-shift/index.md",source:"@site/blog/2022-12-01-docusaurus-using-fontaine-to-reduce-custom-font-cumulative-layout-shift/index.md",title:"Docusaurus: Using fontaine to reduce custom font cumulative layout shift",description:'Custom font usage can introduce cumulative layout shift (or "jank") to your website. This post shows how to use fontaine to reduce this with Docusaurus sites.',date:"2022-12-01T00:00:00.000Z",formattedDate:"December 1, 2022",tags:[{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"fontaine",permalink:"/tags/fontaine"},{label:"fonts",permalink:"/tags/fonts"},{label:"CLS",permalink:"/tags/cls"},{label:"cumulative layout shift",permalink:"/tags/cumulative-layout-shift"}],readingTime:5.02,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Docusaurus: Using fontaine to reduce custom font cumulative layout shift",authors:"johnnyreilly",tags:["Docusaurus","fontaine","fonts","CLS","cumulative layout shift"],image:"./title-image.png",hide_table_of_contents:!1},nextItem:{title:"Adding lastmod to sitemap based on git commits",permalink:"/2022/11/25/adding-lastmod-to-sitemap-git-commit-date"}},u={image:n(69504).Z,authorsImageUrls:[void 0]},c=[{value:"What is cumulative layout shift?",id:"what-is-cumulative-layout-shift",level:2},{value:"What &quot;jank&quot; looks like",id:"what-jank-looks-like",level:2},{value:"fontaine",id:"fontaine",level:2},{value:"Using fontaine with Docusaurus",id:"using-fontaine-with-docusaurus",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c};function p(e){var{components:t}=e,s=i(e,["components"]);return(0,o.kt)("wrapper",a({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Custom font usage can introduce cumulative layout shift (or "jank") to your website. This post shows how to use ',(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/unjs/fontaine"}),"fontaine")," to reduce this with Docusaurus sites."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;Docusaurus: Using fontaine to reduce custom font cumulative layout shift&quot; in a ridiculous font with the Docusaurus logo and a screenshot of a preload link HTML element",src:n(69504).Z,width:"800",height:"450"})),(0,o.kt)("h2",a({},{id:"what-is-cumulative-layout-shift"}),"What is cumulative layout shift?"),(0,o.kt)("p",null,"Cumulative layout shift (CLS) is a metric that measures the instability of content on a web page. It's a ",(0,o.kt)("a",a({parentName:"p"},{href:"https://web.dev/vitals/"}),"Core Web Vitals")," metric."),(0,o.kt)("p",null,"You may well know it as \"jank\". It's jank that you see when a page loads and the text moves around. It's an irritation. There's a great description of it in ",(0,o.kt)("a",a({parentName:"p"},{href:"https://web.dev/cls/"}),"this post on the topic"),"; let me quote it here:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Have you ever been reading an article online when something suddenly changes on the page? Without warning, the text moves, and you've lost your place. Or even worse: you're about to tap a link or a button, but in the instant before your finger lands\u2014BOOM\u2014the link moves, and you end up clicking something else!")),(0,o.kt)("p",null,"For the rest of this post I'll generally to refer to CLS as jank, as it's a more relatable term."),(0,o.kt)("h2",a({},{id:"what-jank-looks-like"}),'What "jank" looks like'),(0,o.kt)("p",null,"My blog uses a custom font called ",(0,o.kt)("a",a({parentName:"p"},{href:"https://fonts.google.com/specimen/Poppins"}),"Poppins"),". Lovely though it is, using the font introduces jank to my site. It's particularly noticeable on mobile phones. Here's a gif of the jank in action:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A gif of the mobile view of my blog loading and shifting in layout as the custom font arrives",src:n(41905).Z,width:"862",height:"904"})),(0,o.kt)("p",null,"You see how the text shifts around as the custom font arrives? On the first line we either see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the fallback font rendering four words on one line: ",(0,o.kt)("em",{parentName:"p"},'"Bicep: Static Web Apps"')),(0,o.kt)("p",{parentName:"li"},"OR")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the custom font (Poppins) rendering three words on one line: ",(0,o.kt)("em",{parentName:"p"},'"Bicep: Static Web"')))),(0,o.kt)("p",null,"It's very noticeable. You can actually put a number on it. The number is the CLS score which you can determine with ",(0,o.kt)("a",a({parentName:"p"},{href:"https://developer.chrome.com/docs/lighthouse/overview/"}),"Lighthouse"),". The CLS score is the sum of the layout shifts that occur on the page. The higher the score, the more jank there is. Cumulative Layout Shift was logged as ",(0,o.kt)("strong",{parentName:"p"},"0.019")," for the page above. That's not great."),(0,o.kt)("p",null,"I'd taken steps to reduce the issues experienced, such as ",(0,o.kt)("a",a({parentName:"p"},{href:"/2021/12/29/preload-fonts-with-docusaurus"}),"font preloading"),". But the issues still remained, particularly on mobile networks where speed of loading is decreased, and it takes a longer time for the custom font to load."),(0,o.kt)("p",null,"I had rather given up on improving things further. But then...."),(0,o.kt)("h2",a({},{id:"fontaine"}),"fontaine"),(0,o.kt)("p",null,"One evening I was vaguely browsing Twitter when I came across a tweet from ",(0,o.kt)("a",a({parentName:"p"},{href:"https://twitter.com/danielcroe"}),"Daniel Roe")," which ",(0,o.kt)("a",a({parentName:"p"},{href:"https://twitter.com/danielcroe/status/1581428654479138817"}),"announced a new tool called fontaine"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of tweet saying: &quot;\u26a1\ufe0f Announcing `fontaine`! It&#39;s a zero-runtime, cross-framework library that significantly &amp; automatically reduces layout shift caused by custom fonts.&quot;",src:n(48346).Z,width:"909",height:"1344"})),(0,o.kt)("p",null,"I was intrigued. I wanted to try it out. I wanted to see if it could reduce the jank on my blog."),(0,o.kt)("h2",a({},{id:"using-fontaine-with-docusaurus"}),"Using fontaine with Docusaurus"),(0,o.kt)("p",null,"I added fontaine as a dependency to my blog:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"yarn add -D fontaine\n")),(0,o.kt)("p",null,"I then added cracked open my ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file and wrote a small plugin to make use of fontaine:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js"}),"const fontaine = require('fontaine');\n\n// ...\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  // ...\n\n  plugins: [\n    // ...\n    function fontainePlugin(_context, _options) {\n      return {\n        name: 'fontaine-plugin',\n        configureWebpack(_config, _isServer) {\n          return {\n            plugins: [\n              fontaine.fontaineTransform.webpack({\n                fallbacks: [\n                  'system-ui',\n                  '-apple-system',\n                  'BlinkMacSystemFont',\n                  'Segoe UI',\n                  'Roboto',\n                  'Oxygen',\n                  'Ubuntu',\n                  'Cantarell',\n                  'Open Sans',\n                  'Helvetica Neue',\n                  'sans-serif',\n                ],\n                // You may need to resolve assets like `/fonts/Poppins-Bold.ttf` to a particular directory\n                resolvePath: (id) => '../fonts/' + id,\n              }),\n            ],\n          };\n        },\n      };\n    },\n    // ...\n  ],\n  // ...\n};\n")),(0,o.kt)("p",null,"This didn't initially seem to make any difference. I put it up as a ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/305"}),"work-in-progress PR")," and wrote up my findings as best I could. Daniel was kind enough to take a look. He uncovered two issues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There was a bug in fontaine around how it handled CSS variables; ",(0,o.kt)("a",a({parentName:"li"},{href:"https://github.com/unjs/fontaine/commit/a708bb07ccc48f385c67ccc3b1eed280d8ee47fc"}),"he implemented a fix")),(0,o.kt)("li",{parentName:"ul"},"Docusaurus uses custom fonts through the mechanism of CSS variables. This indirection confuses fontaine as it can't read those variables. To accomodate this, we needed to update my CSS variable to add the override font family to the CSS variable:")),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-diff"}),"-  --ifm-font-family-base: 'Poppins';\n+  --ifm-font-family-base: 'Poppins', 'Poppins override';\n")),(0,o.kt)("p",null,"Behind the scenes, there is a 'Poppins override' ",(0,o.kt)("inlineCode",{parentName:"p"},"@font-face")," rule that has been created by fontaine. By manually adding this override font family to our CSS variable, we make our site use the fallback 'Poppins override' ",(0,o.kt)("inlineCode",{parentName:"p"},"@font-face")," rule with the correct font metrics that fontaine generates."),(0,o.kt)("p",null,"It's worth emphasising that for the typical user of fontaine, this is not something they need to do. It's only necessary for Docusaurus users because they use custom fonts through CSS variables. Using fontaine is very \"plug and play\" for most users."),(0,o.kt)("p",null,"Daniel was kind enough to ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/307"}),"raise a PR incorporating both the tweaks"),". When I merged that PR, I saw the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A gif of the mobile view of my blog loading and shifting in layout as the custom font arrives",src:n(53831).Z,width:"862",height:"904"})),(0,o.kt)("p",null,"Look at that! You can see the font loading, but there's no more jumping of words from one line to another. It's a huge improvement."),(0,o.kt)("h2",a({},{id:"conclusion"}),"Conclusion"),(0,o.kt)("p",null,"If you want to improve your CLS score, fontaine is a great tool. This post demonstrates using it with Docusaurus. But please note that this is a generally useful tool that you can use with Vite, Next.js and others. It's not specific to Docusaurus."),(0,o.kt)("p",null,"Prior to using fontaine, my blogs Cumulative Layout Shift was logged as ",(0,o.kt)("strong",{parentName:"p"},"0.019"),". After incorporating it, the same score is logged as ",(0,o.kt)("strong",{parentName:"p"},"0"),". This is good news!"),(0,o.kt)("p",null,"I'm very grateful to Daniel for his help in getting it working with my blog. He went above and beyond, so thank you Daniel!"),(0,o.kt)("p",null,"In testament to what a great idea fontaine is built upon, in the time I've been writing this post ",(0,o.kt)("a",a({parentName:"p"},{href:"https://nextjs.org/blog/next-13#nextfont"}),(0,o.kt)("inlineCode",{parentName:"a"},"@next/font"))," has been announced, which is based upon a similar idea."),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"https://blog.logrocket.com/docusaurus-using-fontaine-reduce-cumulative-layout-shift/"}),"This post was originally published on LogRocket.")))}p.isMDXComponent=!0},53831:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/my-jank-fixed-283c56f3684fe3a07f61b61088e1df40.gif"},41905:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/my-jank-39f38351421106231d8c0631b86b4535.gif"},48346:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-tweet-about-fontaine-f80170e8985fb12a76925230827bf2bc.webp"},69504:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/title-image-5aabb3a132e8d0b151a0e9f9cca01a25.png"}}]);