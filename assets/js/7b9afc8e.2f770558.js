"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[65825],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=h(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var h=2;h<i;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40750:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return h},assets:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={title:"Death to compatibility mode",authors:"johnnyreilly",tags:["css","intranet","meta","internet explorer","compatibility mode","header"],hide_table_of_contents:!1},s=void 0,h={permalink:"/2013/04/01/death-to-compatibility-mode",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-04-01-death-to-compatibility-mode/index.md",source:"@site/blog/2013-04-01-death-to-compatibility-mode/index.md",title:"Death to compatibility mode",description:'For just over 10 years my bread and butter has been the development and maintenance of line of business apps. More particularly, web apps built on the Microsoft stack of love (\xa9 Scott Hanselman). These sort of apps are typically accessed via the company intranet and since "bring your own device" is still a relatively new innovation these apps are invariably built for everyones favourite browser: Internet Explorer. As we all know, enterprises are generally not that speedy when it comes to upgrades. So we\'re basically talking IE 9 at best, but more often than not, IE 8.',date:"2013-04-01T00:00:00.000Z",formattedDate:"April 1, 2013",tags:[{label:"css",permalink:"/tags/css"},{label:"intranet",permalink:"/tags/intranet"},{label:"meta",permalink:"/tags/meta"},{label:"internet explorer",permalink:"/tags/internet-explorer"},{label:"compatibility mode",permalink:"/tags/compatibility-mode"},{label:"header",permalink:"/tags/header"}],readingTime:6.11,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Making IE 10's clear field (X) button and jQuery UI autocomplete play nice",permalink:"/2013/04/09/making-ie-10s-clear-field-x-button-and"},nextItem:{title:"DecimalModelBinder for nullable Decimals",permalink:"/2013/03/11/decimalmodelbinder-for-nullable-decimals"}},p={authorsImageUrls:[void 0]},c=[{value:"A Brief History",id:"a-brief-history",children:[],level:2},{value:"There&#39;s the rub",id:"theres-the-rub",children:[],level:2},{value:"Solution 1: Custom HTTP Header through web.config",id:"solution-1-custom-http-header-through-webconfig",children:[],level:2},{value:"Solution 2: Custom HTTP Header the hard way",id:"solution-2-custom-http-header-the-hard-way",children:[],level:2},{value:"Solution 3: Meta Tags are go!",id:"solution-3-meta-tags-are-go",children:[],level:2},{value:"And for bonus points: <code>IFRAME</code>s!",id:"and-for-bonus-points-iframes",children:[],level:2},{value:"That&#39;s it",id:"thats-it",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For just over 10 years my bread and butter has been the development and maintenance of line of business apps. More particularly, web apps built on the Microsoft stack of love (",(0,i.kt)("a",{parentName:"p",href:"https://channel9.msdn.com/Events/MIX/MIX11/FRM02"},"\xa9 Scott Hanselman"),'). These sort of apps are typically accessed via the company intranet and since "bring your own device" is still a relatively new innovation these apps are invariably built for everyones favourite browser: Internet Explorer. As we all know, enterprises are generally not that speedy when it comes to upgrades. So we\'re basically talking IE 9 at best, but more often than not, IE 8.'),(0,i.kt)("p",null,"Now, unlike many people, I don't regard IE as a work of evil. I spent a fair number of years working for an organization which had IE 6 as the only installed browser on company desktops. (In fact, this was still the case as late as 2012!) Now, because JavaScript is so marvellously flexible I was still able to do a great deal with the help of a number of ",(0,i.kt)("a",{parentName:"p",href:"http://paulirish.com/2011/the-history-of-the-html5-shiv/"},"shivs / shims"),"."),(0,i.kt)("p",null,'But rendering and CSS - well that\'s another matter. Because here we\'re at the mercy of "compatibility mode". Perhaps a quick history lesson is in order. What is this "compatibility mode" of which you speak?'),(0,i.kt)("h2",{id:"a-brief-history"},"A Brief History"),(0,i.kt)("p",null,"Well it all started when Microsoft released IE 8. To quote them:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},'A fundamental problem discussed during each and every Internet Explorer release is balancing new features and functionality with site compatibility for the existing Web. On the one hand, new features and functionality push the Web forward. On the other hand, the Web is a large expanse; requiring every legacy page to support the "latest and greatest" browser version immediately at product launch just isn\'t feasible. Internet Explorer 8 addresses this challenge by introducing compatibility modes which gives a way to introduce new features and stricter compliance to standards while enabling it to be backward compliant.')," ","-"," excerpted from ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.msdn.com/b/askie/archive/2009/03/23/understanding-compatibility-modes-in-internet-explorer-8.aspx"},"understanding compatibility modes in Internet Explorer 8"),".")),(0,i.kt)("h2",{id:"theres-the-rub"},"There's the rub"),(0,i.kt)("p",null,"Sounds fair enough? Of course it does. Microsoft have generally bent over backwards to facilitate backwards compatibility. Quite right too - good business sense and all that. However, one of the choices made around backwards compatibility I've come to regard as somewhat irksome. Later down in the article you'll find this doozy: (emphasis mine)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},'"',(0,i.kt)("strong",{parentName:"em"},"for Intranet pages, 7 (IE 7 Standards) rendering mode is used by default"),' and can be changed."'))),(0,i.kt)("p",null,"For whatever reason, this decision was not particularly well promoted. As a result, a fair number of devs I've encountered have little or no knowledge of compatibility mode. Certainly it came as a surprise to me. Here was I, developing away on my desktop. I'd fire up the app hosted on my machine and test on my local install of IE 8. All would look new and shiny (well non-anchor tags would have ",(0,i.kt)("inlineCode",{parentName:"p"},":hover")," support). Happy and content, I'd push to our test system and browse to it. Wait, what's happened? Where's the new style rendering? What's up with my CSS? This is a bug right?"),(0,i.kt)("p",null,"Obviously I know now it's not a bug it's a \"feature\". And I have learned how to get round the intranet default of compatibility mode through cunning deployment of meta tags and custom http headers. Recently compatibility mode has come to bite me for the second time (in this case I was building for IE 9 and was left wondering where all my rounded corners had vanished to when I deployed...)."),(0,i.kt)("p",null,'For my own sanity I thought it might be good to document the various ways that exist to solve this particular problem. Just to clarify terms, "solve" in this context means "force IE to render in the most standards compliant / like other browsers fashion it can muster". You can use compatibility mode to do more than just that and if you\'re interested in more about this then I recommend ',(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/6771584/761388"},"this Stack Overflow answer"),"."),(0,i.kt)("h2",{id:"solution-1-custom-http-header-through-webconfig"},"Solution 1: Custom HTTP Header through web.config"),(0,i.kt)("p",null,"If you're running IIS7 or greater then, for my money, this is the simplest and most pain free solution. All you need do is include the following snippet in your web config file:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5283462.js?file=web.config"}),(0,i.kt)("p",null,"This will make IIS serve up the above custom response HTTP header with each page."),(0,i.kt)("h2",{id:"solution-2-custom-http-header-the-hard-way"},"Solution 2: Custom HTTP Header the hard way"),(0,i.kt)("p",null,"Maybe you're running II6 and so you making a change to the web.config won't make a difference. That's fine, you can still get the same behaviour by going to the HTTP headers tab in IIS (see below) and adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"X-UA-Compatible: IE=edge")," header by hand."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-78CYavaCiUk/UVlGNv87U_I/AAAAAAAAAZQ/qtchMc14JsY/s320/CustomHeadersIIS6.gif",alt:null})),(0,i.kt)("p",null,"Or, if you don't have access to IIS (don't laugh - it happens) you can fall back to doing this in code like this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5283462.js?file=servingUpTheHardWay.cs"}),(0,i.kt)("p",null,"Obviously there's a whole raft of ways you could get this in, using ",(0,i.kt)("inlineCode",{parentName:"p"},"Application_BeginRequest")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"Global.asax.cs")," would probably as good an approach as any."),(0,i.kt)("h2",{id:"solution-3-meta-tags-are-go"},"Solution 3: Meta Tags are go!"),(0,i.kt)("p",null,"The final approach uses meta tags. And, in my experience it is the most quirky approach - it doesn't always seem to work. First up, what do we do? Well, in each page served we include the following meta tag like this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5283462.js?file=any.html"}),(0,i.kt)("p",null,"Having crawled over the WWW equivalent of broken glass I now know why this ","*",(0,i.kt)("strong",{parentName:"p"},"sometimes"),"*"," doesn't work. (And credit where it's due the answer came from ",(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/3960197/761388"},"here"),".) It's all down to the positioning of the meta tag:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"The X-UA-compatible header is not case sensitive; however, it must appear in the Web page's header (the HEAD section) before all other elements, except for the title element and other meta elements.")," ","-"," excerpted from ",(0,i.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-gb/library/jj676915(v=vs.85).aspx"},"specifying legacy document modes"))),(0,i.kt)("p",null,"That's right, get your meta tag in the wrong place and things won't work. And you won't know why. Lovely. But get it right and it's all gravy. This remains the most unsatisfactory approach in my book though."),(0,i.kt)("h2",{id:"and-for-bonus-points-iframes"},"And for bonus points: ",(0,i.kt)("inlineCode",{parentName:"h2"},"IFRAME"),"s!"),(0,i.kt)("p",null,"Before I finish off I thought it worth sharing a little known feature of ",(0,i.kt)("inlineCode",{parentName:"p"},"IFRAME"),"s. If page is running in compatibility mode and it contains an ",(0,i.kt)("inlineCode",{parentName:"p"},"IFRAME")," then the page loaded in that ",(0,i.kt)("inlineCode",{parentName:"p"},"IFRAME")," will ",(0,i.kt)("strong",{parentName:"p"},"also run in compatibility mode"),". No ifs, no buts."),(0,i.kt)("p",null,"In the case that I encountered this behaviour, the application was being hosted in an ",(0,i.kt)("inlineCode",{parentName:"p"},"IFRAME")," inside Sharepoint. Because of the way our Sharepoint was configured it ended up that the only real game in town for us was the meta tags approach - which happily worked once we'd correctly placed our meta tag."),(0,i.kt)("p",null,"Again, it's lamentable that this behaviour isn't better documented - hopefully the act of writing this here will mean that it becomes a little better known. There's probably a good reason for this behaviour, though I'm frankly, I don't know what it is. If anyone does, I'd be interested."),(0,i.kt)("h2",{id:"thats-it"},"That's it"),(0,i.kt)("p",null,"Armed with the above I hope you have less compatibility mode pain than I have. The following blog entry is worth a read by the way:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blogs.msdn.com/b/ie/archive/2009/02/16/just-the-facts-recap-of-compatibility-view.aspx"},"https://blogs.msdn.com/b/ie/archive/2009/02/16/just-the-facts-recap-of-compatibility-view.aspx")),(0,i.kt)("p",null,"Finally, I have an open question about compatibility mode. I ",(0,i.kt)("em",{parentName:"p"},"think")," (but I don't know) that even in compatibility mode IE runs using the same JavaScript engine. However I suspect it has a different DOM to play with. If anyone knows a little more about this and wants to let me know that'd be fantastic."))}u.isMDXComponent=!0}}]);