"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[27526],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2246:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"Compromising: A Guide for Developers",authors:"johnnyreilly",tags:["compromise","empathy","developers","code style","teams"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2018/05/13/compromising-guide-for-developers",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2018-05-13-compromising-guide-for-developers/index.md",source:"@site/blog/2018-05-13-compromising-guide-for-developers/index.md",title:"Compromising: A Guide for Developers",description:"It is a truth universally acknowledged, that a single developer, will not be short of an opinion. Opinions on tabs vs spaces. Upon OOP vs FP. Upon classes vs functions. Just opinions, opinions, opinions. Opinions that are felt with all the sincerity of a Witchfinder General. And, alas, not always the same level of empathy.",date:"2018-05-13T00:00:00.000Z",formattedDate:"May 13, 2018",tags:[{label:"compromise",permalink:"/tags/compromise"},{label:"empathy",permalink:"/tags/empathy"},{label:"developers",permalink:"/tags/developers"},{label:"code style",permalink:"/tags/code-style"},{label:"teams",permalink:"/tags/teams"}],readingTime:2.915,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Compromising: A Guide for Developers",authors:"johnnyreilly",tags:["compromise","empathy","developers","code style","teams"],hide_table_of_contents:!1},prevItem:{title:"VSTS... YAML up!",permalink:"/2018/06/16/vsts-yaml-up"},nextItem:{title:"Using Reflection to Identify Unwanted Dependencies",permalink:"/2018/04/28/using-reflection-to-identify-unwanted-dependencies"}},c={authorsImageUrls:[void 0]},h=[{value:"On Compromise",id:"on-compromise",level:2},{value:"Weighting Opinion",id:"weighting-opinion",level:2}],u={toc:h};function m(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is a truth universally acknowledged, that a single developer, will not be short of an opinion. Opinions on tabs vs spaces. Upon OOP vs FP. Upon ",(0,i.kt)("inlineCode",{parentName:"p"},"class"),"es vs ",(0,i.kt)("inlineCode",{parentName:"p"},"function"),"s. Just opinions, opinions, opinions. Opinions that are felt with all the sincerity of a Witchfinder General. And, alas, not always the same level of empathy."),(0,i.kt)("p",null,"Given the wealth of strongly felt desires, it's kind of amazing that developers ever manage to work together. It's rare to find a fellow dev that agrees entirely with your predilections. So how do people ever get past the \"you don't use semi-colons; what's wrong with you\"? Well, not easily to be honest. It involves compromise."),(0,i.kt)("h2",{id:"on-compromise"},"On Compromise"),(0,i.kt)("p",null,"We've all been in the position where we realise that there's something we don't like in a codebase. The ordering of members in a ",(0,i.kt)("inlineCode",{parentName:"p"},"class"),", naming conventions, a lack of tests... Something."),(0,i.kt)("p",null,"Then comes the moment of trepidation. You suggest a change. You suggest difference. It's time to find out if you're working with psychopaths. It's not untypical to find that you just have to go with the flow."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"You\'ve been using 3 spaces?"'),(0,i.kt)("li",{parentName:"ul"},'"Yes we use 3 spaces."'),(0,i.kt)("li",{parentName:"ul"},'"Okay... So we\'ll be using 3 spaces..." ',"[backs away carefully]")),(0,i.kt)("p",null,"I've been in this position so many times I've learned to adapt. It helps that I'm a malleable sort anyway. But what if there were another way?"),(0,i.kt)("h2",{id:"weighting-opinion"},"Weighting Opinion"),(0,i.kt)("p",null,"Sometimes your opinion is... Well.... Just an opinion. Other opinions are legitimate. At least in theory. If you can acknowledge that, you already have a level of self knowledge not gifted to all in the dev community. If you're able to get that far I feel there's something you might want to consider."),(0,i.kt)("p",null,"Let me frame this up: there's a choice to be made around an approach that could be used in a codebase. There are 2 camps in the team; 1 camp advocating for 1 approach. The other for a different approach. Either one is functionally legitimate. They work. It's just a matter of preference of choice. How do you choose now? Let's look at a technique for splitting the difference."),(0,i.kt)("p",null,"Voting helps. But let's say 50% of the team wants 1 approach and 50% wants the other. What then? Or, to take a more interesting idea, what say 25% want 1 approach and 75% want the other? If it's just 1 person, 1 vote then the 75% wins and that's it."),(0,i.kt)("p",null,"But before we all move on, let's consider another factor. How much do people care? What if the 25% are really, really invested in the choice they're advocating for and the 75% just have a mild preference? From that point forwards the 25% are likely going to be less happy. Maybe they'll even burn inside. They're certainly going to be less productive."),(0,i.kt)("p",null,'It\'s because of situations like this that weighting votes becomes useful. Out of 5, how much do you care? If one person cares "5 out of 5" and the other three are "1 out of 5".... Well go with the 25% It matters to them and that it matters to them should matter to you.'),(0,i.kt)("p",null,"I'll contend that rolling like this makes for more content, happier and more productive teams. Making strength of feeling a factor in choices reduces friction and increases the peace."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(44317).Z,width:"640",height:"427"})),(0,i.kt)("p",null,"I've only recently discovered this technique and I can't claim credit for it. I learned it from the awesome ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/foldr"},"Jamie McCrindle"),". I commend to you! Be happier!"))}m.isMDXComponent=!0},44317:function(e,t,n){t.Z=n.p+"assets/images/Bestival_2008_Increase_the_Peace_banner-bd4bbca0f34169bbe198a52c07162631.jpg"}}]);