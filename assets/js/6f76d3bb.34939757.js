"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[18574],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},30720:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});o(67294);var n=o(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const i={slug:"in-defence-of-pull-requests",title:"In defence of pull requests",authors:"johnnyreilly",tags:["pull requests"],image:"./title-image.png",description:"Some people feel that pull requests are a barrier to contribution. I disagree.",hide_table_of_contents:!1},l=void 0,s={permalink:"/in-defence-of-pull-requests",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2023-02-11-in-defence-of-pull-requests/index.md",source:"@site/blog/2023-02-11-in-defence-of-pull-requests/index.md",title:"In defence of pull requests",description:"Some people feel that pull requests are a barrier to contribution. I disagree.",date:"2023-02-11T00:00:00.000Z",formattedDate:"February 11, 2023",tags:[{label:"pull requests",permalink:"/tags/pull-requests"}],readingTime:3.42,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"in-defence-of-pull-requests",title:"In defence of pull requests",authors:"johnnyreilly",tags:["pull requests"],image:"./title-image.png",description:"Some people feel that pull requests are a barrier to contribution. I disagree.",hide_table_of_contents:!1},nextItem:{title:"Docusaurus blogs: adding breadcrumb Structured Data",permalink:"/docusaurus-blogs-adding-breadcrumb-structured-data"}},u={image:o(58117).Z,authorsImageUrls:[void 0]},c=[{value:"Pull Requests provide a moment for contemplation",id:"pull-requests-provide-a-moment-for-contemplation",level:2},{value:"Pull Requests provide a chance for communication",id:"pull-requests-provide-a-chance-for-communication",level:2},{value:"Pull Requests provide an opportunity for collaboration",id:"pull-requests-provide-an-opportunity-for-collaboration",level:2},{value:"Where does automated testing fit in?",id:"where-does-automated-testing-fit-in",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function h(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",r({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Not everyone values pull requests. I really do, and this post explains why."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;In defence of pull requests&quot;",src:o(58117).Z,width:"800",height:"450"})),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://twitter.com/lockersmyboy"}),"Graeme Lockley")," recently shared ",(0,n.kt)("a",r({parentName:"p"},{href:"https://twitter.com/nhumrich/status/1623435760379768832"}),"this tweet")," with me:"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"screenshot of tweet saying &quot;Code reviews and pull requests were invented for open source projects where you want to gatekeep changes from people you don&#39;t know and don&#39;t trust to change the code safely&quot;",src:o(32175).Z,width:"1125",height:"679"})),(0,n.kt)("p",null,"I don't feel the same way; and ended up writing a long screed back to Graeme as to why. I thought I'd share it here too, in only slightly refined format:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"I've seen this idea floating around. There is something to be said for low friction contribution for people that you trust. For that reason I definitely apply less scrutiny to PRs from people that I know / trust less as compared to people I know / trust more. However, to add a little more nuance. Here we go!")),(0,n.kt)("h2",r({},{id:"pull-requests-provide-a-moment-for-contemplation"}),"Pull Requests provide a moment for contemplation"),(0,n.kt)("p",null,"A moment to take stock of what's been built, and whether we'd be happy with it landing that way. Because I'm an equal opportunities kinda guy, I apply that to myself. When I raise a PR, before I let others know it's ready for review, I will tend to do a first review myself. It's amazing the different perspective you can have as the consumer of a PR as compared to a producer. I find I change things often before sharing with others as a consequence."),(0,n.kt)("h2",r({},{id:"pull-requests-provide-a-chance-for-communication"}),"Pull Requests provide a chance for communication"),(0,n.kt)("p",null,"Engineers are not obligated to communicate about what they do. And famously many of us aren't very good at it either. You become good at things that you practice at. PRs provide an opportunity to express in clear language, the aim of a change and why it is implemented in a certain way. That allows the engineer to practice repeatedly the act of communication, which will make them a more useful engineer to those around them."),(0,n.kt)("p",null,"Very much related to this, PRs are a teaching opportunity. It's a way to level up the next generation of engineers that are learning from you. What we do is more than the code we write, it's the culture we create."),(0,n.kt)("h2",r({},{id:"pull-requests-provide-an-opportunity-for-collaboration"}),"Pull Requests provide an opportunity for collaboration"),(0,n.kt)("p",null,'This may shock you, but I don\'t always get things perfect. My ideas and implementations are often "good starts", but which are wildly improved through collaboration with others. PRs provide a way to collaborate on a change. I value them specifically for that reason.'),(0,n.kt)("p",null,"Unfortunately the prompting tweet is talking about PRs being used on OSS projects; and the nature of work I do that ",(0,n.kt)("em",{parentName:"p"},"isn't")," OSS means I can't evidence it. However, I can point you to a ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/facebook/docusaurus/pull/8378#discussion_r1044277801"}),"PR I raised on the Docusaurus repo")," where I was collaborating with the marvellous ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/slorber"}),"S\xe9bastien Lorber")," on a change. I'd say it's a good example of how PRs can be used to collaborate on a change; it's definitely how I want to roll regardless of the project I'm working on."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"screenshot of the linked PR demonstrating collaboration https://github.com/facebook/docusaurus/pull/8378#discussion_r1044277801",src:o(11513).Z,width:"829",height:"633"})),(0,n.kt)("h2",r({},{id:"where-does-automated-testing-fit-in"}),"Where does automated testing fit in?"),(0,n.kt)("p",null,"Finally, automated testing. If you value automated testing, you must ask yourself the question: where does it fit into the contribution picture? Running automated tests against contributions is a good way to test the value those contributions provide. If you don't run them prior to contribution, then when do you run them? And how do you evidence the results?"),(0,n.kt)("h2",r({},{id:"conclusion"}),"Conclusion"),(0,n.kt)("p",null,"Low friction contribution is a good goal. In the case of very simple pull requests, automating from top to bottom with minimal need for human interaction is a great idea. In fact if you'd like to see an example of this in the wild, it's worth taking a look at the automation the TypeScript team, and in particular ",(0,n.kt)("a",r({parentName:"p"},{href:"https://orta.io"}),"Orta Therox"),", applied to the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/DefinitelyTyped/DefinitelyTyped"}),"Definitely Typed")," repo."),(0,n.kt)("p",null,"But, safe to say, I think there's a great deal more nuance to the topic than implied by the raw tweet. Pull requests are to be cherished, not spurned. Yay pull requests!"))}h.isMDXComponent=!0},11513:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/screenshot-collaborating-on-github-a8c20f7ff3bcd580383a88641785b468.png"},32175:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/screenshot-tweet-code-reviews-and-pull-requests-c3ec9c76401084639fb0a49ae5972e49.webp"},58117:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/title-image-cf24b33baa2151fc67a3a16ee20cb9cb.png"}}]);