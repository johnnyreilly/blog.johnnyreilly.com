"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[40072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});n(67294);var i=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"JSHint - Customising your hurt feelings",authors:"johnnyreilly",tags:["JSLint","JSHint","ESLint"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2012/04/23/jshint-customising-your-hurt-feelings",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-04-23-jshint-customising-your-hurt-feelings/index.md",source:"@site/blog/2012-04-23-jshint-customising-your-hurt-feelings/index.md",title:"JSHint - Customising your hurt feelings",description:"As I've started making greater use of JavaScript to give a richer GUI experience the amount of JS in my ASP.NET apps has unsurprisingly ballooned. If I'm honest, I hadn't given much consideration to the code quality of my JavaScript in the past. However, if I was going to make increasing use of it (and given the way the web is going at the moment I'd say that's a given) I didn't think this was tenable position to maintain. A friend of mine works for Coverity which is a company that provides tools for analysing code quality. I understand, from conversations with him, that their tools provide static analysis for compiled languages such as C++ / C# / Java etc. I was looking for something similar for JavaScript. Like many, I have read and loved Douglas Crockford's \"JavaScript",date:"2012-04-23T00:00:00.000Z",formattedDate:"April 23, 2012",tags:[{label:"JSLint",permalink:"/tags/js-lint"},{label:"JSHint",permalink:"/tags/js-hint"},{label:"ESLint",permalink:"/tags/es-lint"}],readingTime:4.505,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"JSHint - Customising your hurt feelings",authors:"johnnyreilly",tags:["JSLint","JSHint","ESLint"],hide_table_of_contents:!1},prevItem:{title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",permalink:"/2012/04/28/beg-steal-or-borrow-decent-javascript"},nextItem:{title:"A Simple Technique for Initialising Properties with Internal Setters for Unit Testing",permalink:"/2012/04/16/simple-technique-for-initialising"}},c={authorsImageUrls:[void 0]},p=[],h={toc:p};function u(e){var{components:t}=e,a=r(e,["components"]);return(0,i.kt)("wrapper",o({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As I've started making greater use of JavaScript to give a richer GUI experience the amount of JS in my ASP.NET apps has unsurprisingly ballooned. If I'm honest, I hadn't given much consideration to the code quality of my JavaScript in the past. However, if I was going to make increasing use of it (and given the way the web is going at the moment I'd say that's a given) I didn't think this was tenable position to maintain. A friend of mine works for ",(0,i.kt)("a",o({parentName:"p"},{href:"http://www.coverity.com/"}),"Coverity")," which is a company that provides tools for analysing code quality. I understand, from conversations with him, that their tools provide static analysis for compiled languages such as C++ / C# / Java etc. I was looking for something similar for JavaScript. Like many, I have read and loved ",(0,i.kt)("a",o({parentName:"p"},{href:"http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"}),'Douglas Crockford\'s "JavaScript: The Good Parts"'),"; it is by some margin the most useful and interesting software related book I have read.So I was aware that Crockford had come up with his own JavaScript code quality tool called ",(0,i.kt)("a",o({parentName:"p"},{href:"http://www.jslint.com/"}),"JSLint"),". JSLint is quite striking when you first encounter it:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",src:n(21613).Z,width:"320",height:"192"})),(0,i.kt)("p",null,"It's the \"Warning! JSLint will hurt your feelings.\" that grabs you. And it's not wrong. I've copied and pasted code that I've written into JSLint and then gasped at the reams of errors JSLint would produce. I subsequently tried JSLint-ing various well known JS libraries (jQuery etc) and saw that JSLint considered they were thoroughly problematic as well. This made me feel slightly better. It was when I started examining some of the \"errors\" JSLint reported that I took exception. Yes, I took exception to exceptions! (I'm ","*",(0,i.kt)("strong",{parentName:"p"},"very"),"*"," pleased with that!) Here's a few of the errors generated by JSLint when inspecting ",(0,i.kt)("a",o({parentName:"p"},{href:"http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"}),"jquery-1.7.2.js"),": - ",(0,i.kt)("inlineCode",{parentName:"p"},"Problem at line 16 character 10: Expected exactly one space between 'function' and '('.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Problem at line 25 character 1: Expected 'var' at column 13, not column 1.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Problem at line 31 character 5: Unexpected dangling '_' in '_jQuery'."))),(0,i.kt)("p",null,"JSLint is, much like it's creator, quite opinionated. Which is no bad thing. Many of Crockfords opinions are clearly worth their salt. It's just I didn't want all of them enforced upon me. As you can see above most of these \"problems\" are essentially complaints about a different style rather than bugs or potential issues. Now there are options in JSLint that you can turn on and off which looked quite promising. But before I got to investigating them I heard about ",(0,i.kt)("a",o({parentName:"p"},{href:"http://www.jshint.com"}),"JSHint"),", brainchild of Anton Kovalyov and Paul Irish. In their own words: ",(0,i.kt)("em",{parentName:"p"},"JSHint is a fork of JSLint, the tool written and maintained by Douglas Crockford. The project originally started as an effort to make a more configurable version of JSLint\u2014one that doesn't enforce one particular coding style on its users\u2014but then transformed into a separate static analysis tool with its own goals and ideals.")," This sounded right up my alley! So I thought I'd repeat my jQuery test. Here's a sample of what JSHint threw back at me, with its default settings in place: - ",(0,i.kt)("inlineCode",{parentName:"p"},"Line 230: return num == null ? Expected '===' and instead saw '=='. ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Line 352: if ( (options = arguments[ i ]) != null ) { Expected '!==' and instead saw '!='. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Line 354: for ( name in options ) { The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype. "))),(0,i.kt)("p",null,'These were much more the sort of "issues" I was interested in. Plus it seemed there was plenty of scope to tweak my options. Excellent. This was good. The icing on my cake would have been a plug-in for Visual Studio which would allow me to evaluate my JS files from within my IDE. Happily the world seems to be full of developers doing good turns for one another. I discovered an extension for VS called ',(0,i.kt)("a",o({parentName:"p"},{href:"http://jslint4vs2010.codeplex.com/"}),"JSLint for Visual Studio 2010"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(34535).Z,width:"320",height:"186"})),(0,i.kt)("p",null,"This was an extension that provided either JSLint ","*",(0,i.kt)("strong",{parentName:"p"},"or"),"*"," JSHint evaluation as you preferred from within Visual Studio. Fantastic! With this extension in play you could add JavaScript static code analysis to your compilation process and so learn of all the issues in your code at the same time, whether they lay in C# or JS or ","[insert language here]",'. You could control how JS problems were reported; as warnings, errors etc. You could straightforwardly exclude files from evaluation (essential if you\'re reliant on a number of 3rd party JS libraries which you are not responsible for maintaining). You could cater for predefined variables; allow for jQuery or DOJO. You could simply evaluate a single file in your solution by right clicking it and hitting the "JS Lint" option in the context menu. And it was simplicity itself to activate and deactivate the JSHint / JSLint extension as required. For a more exhaustive round up of the options available I advise taking a look here: ',(0,i.kt)("a",o({parentName:"p"},{href:"http://jslint4vs2010.codeplex.com/"}),"http://jslint4vs2010.codeplex.com"),". I would heartily recommend using JSHint if you're looking to improve your JS code quality. I'm grateful to Crockford for making JSHint possible by first writing JSLint. For my part though I think JSHint is the more pragmatic and useful tool and likely to be the one I stick with. For interest (and frankly sheer entertainment value at the crotchetiness of Crockford) it's definitely worth having a read up on how JSHint came to pass: - ",(0,i.kt)("a",o({parentName:"p"},{href:"http://anton.kovalyov.net/2011/02/20/why-i-forked-jslint-to-jshint/"}),"http://anton.kovalyov.net/2011/02/20/why-i-forked-jslint-to-jshint/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",o({parentName:"li"},{href:"http://badassjs.com/post/3364925033/jshint-an-community-driven-fork-of-jslint"}),"http://badassjs.com/post/3364925033/jshint-an-community-driven-fork-of-jslint"))))}u.isMDXComponent=!0},34535:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Extensions-a0125814fba87f127354ae52c4509b3f.webp"},21613:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/JSLint-8f63767579064fce2f1881bc45bb1f11.webp"}}]);