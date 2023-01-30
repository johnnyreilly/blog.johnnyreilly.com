"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[91515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||h[b]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},17667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});n(67294);var i=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Using the PubSub / Observer pattern to emulate constructor chaining without cluttering up global scope",authors:"johnnyreilly",tags:["inheritance","javascript","c#","observer pattern","pubsub"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2012/03/17/using-pubsub-observer-pattern-to",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-03-17-using-pubsub-observer-pattern-to/index.md",source:"@site/blog/2012-03-17-using-pubsub-observer-pattern-to/index.md",title:"Using the PubSub / Observer pattern to emulate constructor chaining without cluttering up global scope",description:"Yes the title of this post is \\*painfully\\* verbose. Sorry about that. Couple of questions for you: - Have you ever liked the way you can have base classes in C# which can then be inherited and subclassed in a different file / class",date:"2012-03-17T00:00:00.000Z",formattedDate:"March 17, 2012",tags:[{label:"inheritance",permalink:"/tags/inheritance"},{label:"javascript",permalink:"/tags/javascript"},{label:"c#",permalink:"/tags/c"},{label:"observer pattern",permalink:"/tags/observer-pattern"},{label:"pubsub",permalink:"/tags/pubsub"}],readingTime:5.48,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Using the PubSub / Observer pattern to emulate constructor chaining without cluttering up global scope",authors:"johnnyreilly",tags:["inheritance","javascript","c#","observer pattern","pubsub"],hide_table_of_contents:!1},prevItem:{title:"WCF - moving from Config to Code, a simple WCF service harness (plus implementing your own Authorization)",permalink:"/2012/03/22/wcf-moving-from-config-to-code-simple"},nextItem:{title:"Striving for (JavaScript) Convention",permalink:"/2012/03/12/striving-for-javascript-convention"}},c={authorsImageUrls:[void 0]},u=[{value:"The Problem",id:"the-problem",level:2}],p={toc:u};function h(e){var{components:t}=e,o=r(e,["components"]);return(0,i.kt)("wrapper",a({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Yes the title of this post is ","*",(0,i.kt)("strong",{parentName:"p"},"painfully"),"*"," verbose. Sorry about that. Couple of questions for you: - Have you ever liked the way you can have base classes in C# which can then be inherited and subclassed ",(0,i.kt)("u",null,"in a different file / class")),(0,i.kt)("p",null,"?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Have you ever thought; gosh it'd be nice to do something like that in JavaScript..."),(0,i.kt)("li",{parentName:"ul"},"Have you then looked at JavaScripts prototypical inheritance and thought \"right.... I'm sure it's possible but this going to end up like ",(0,i.kt)("a",a({parentName:"li"},{href:"http://en.wikipedia.org/wiki/War_and_Peace"}),"War and Peace"),'"'),(0,i.kt)("li",{parentName:"ul"},"Have you then subsequently thought \"and hold on a minute... even if I did implement this using the prototype and split things between different files / modules wouldn't I have to pollute the global scope to achieve that? And wouldn't that mean that my code was exposed to the vagaries of any other scripts on the page? Hmmm...\""),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",a({parentName:"li"},{href:"http://www.thrillingdetective.com/eyes/oxford.html"}),"Men! Are you skinny? Do bullies kick sand in your face?")," (Just wanted to see if you were still paying attention...)")),(0,i.kt)("h2",a({},{id:"the-problem"}),"The Problem"),(0,i.kt)("p",null,"Well, the above thoughts occurred to me just recently. I had a situation where I was working on an MVC project and needed to build up quite large objects within JavaScript representing various models. The models in question were already implemented on the server side using classes and made extensive use of inheritance because many of the properties were shared between the various models. That is to say we would have models which were implemented through the use of a class inheriting a base class which in turn inherits a further base class. With me? Good. Perhaps I can make it a little clearer with an example. Here are my 3 classes. First BaseReilly.cs:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'public class BaseReilly\n{\n    public string LastName { get; set; }\n\n        public BaseReilly()\n        {\n            LastName = "Reilly";\n        }\n    }\n')),(0,i.kt)("p",null,"Next BoyReilly.cs (which inherits from BaseReilly):"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'public class BoyReilly : BaseReilly\n{\n    public string Sex { get; set; }\n\n    public BoyReilly()\n        : base()\n    {\n        Sex = "It is a manchild";\n    }\n}\n')),(0,i.kt)("p",null,"And finally JohnReilly.cs (which inherits from BoyReilly which in turn inherits from BaseReilly):"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'public class JohnReilly : BoyReilly\n{\n    public string FirstName { get; set; }\n\n    public JohnReilly()\n        : base()\n    {\n        FirstName = "John";\n    }\n}\n')),(0,i.kt)("p",null,'Using the above I can create myself my very own "JohnReilly" like so:'),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),"var johnReilly = new JohnReilly();\n")),(0,i.kt)("p",null,"And it will look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",src:n(90672).Z,width:"320",height:"140"})),(0,i.kt)("p",null,"I was looking to implement something similar on the client and within JavaScript. I was keen to ensure ",(0,i.kt)("a",a({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Code_reuse"}),"code reuse"),". And my inclination to keep things simple made me wary of making use of the ",(0,i.kt)("a",a({parentName:"p"},{href:"http://bonsaiden.github.com/JavaScript-Garden/#object.prototype"}),"prototype"),". It is undoubtedly powerful but I don't think even the mighty ",(0,i.kt)("a",a({parentName:"p"},{href:"http://javascript.crockford.com/prototypal.html"}),"Crockford"),' would consider it "simple". Also I had the reservation of exposing my object to the global scope. So what to do? I had an idea.... ## The Big Idea'),(0,i.kt)("p",null,"For a while I've been making use explicit use of the ",(0,i.kt)("a",a({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Observer_pattern"}),"Observer pattern"),' in my JavaScript, better known by most as the publish/subscribe (or "PubSub") pattern. There\'s a million JavaScript libraries that facilitate this and after some experimentation I finally settled on ',(0,i.kt)("a",a({parentName:"p"},{href:"https://github.com/phiggins42/bloody-jquery-plugins/blob/master/pubsub.js"}),"higgins")," implementation as it's simple and I saw a ",(0,i.kt)("a",a({parentName:"p"},{href:"http://jsperf.com/pubsubjs-vs-jquery-custom-events/11"}),"JSPerf")," which demonstrated it as either the fastest or second fastest in class. Up until now my main use for it had been to facilitate loosely coupled GUI interactions. If I wanted one component on the screen to influence anothers behaviour I simply needed to get the first component to publish out the relevant events and the second to subscribe to these self-same events. One of the handy things about publishing out events this way is that with them you can also include data. This data can be useful when driving the response in the subscribers. However, it occurred to me that it would be equally possible to pass an object when publishing an event. ","*","*",(0,i.kt)("u",null,"And the subscribers could enrich that object with data as they saw fit.")),(0,i.kt)("p",null,"*","*"," Now this struck me as a pretty useful approach. It's not rock solid secure as it's always possible that someone could subscribe to your events and get access to your object as you published out. However, that's pretty unlikely to happen accidentally; certainly far less likely than someone else's global object clashing with your global object. ## What might this look like in practice?"),(0,i.kt)("p",null,"So this is what it ended up looking like when I turned my 3 classes into JavaScript files / modules. First BaseReilly.js:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-js"}),"$(function () {\n  $.subscribe('PubSub.Inheritance.Emulation', function (obj) {\n    obj.LastName = 'Reilly';\n  });\n});\n")),(0,i.kt)("p",null,"Next BoyReilly.js:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-js"}),"$(function () {\n  $.subscribe('PubSub.Inheritance.Emulation', function (obj) {\n    obj.Sex = 'It is a manchild';\n  });\n});\n")),(0,i.kt)("p",null,"And finally JohnReilly.js:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-js"}),"$(function () {\n  $.subscribe('PubSub.Inheritance.Emulation', function (obj) {\n    obj.FirstName = 'John';\n  });\n});\n")),(0,i.kt)("p",null,'If the above scripts have been included in a page I can create myself my very own "JohnReilly" in JavaScript like so:'),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-js"}),'var oJohnReilly = {}; //Empty object\n\n$.publish(\'PubSub.Inheritance.Emulation\', [oJohnReilly]); //Empty object "published" so it can be enriched by subscribers\n\nconsole.log(JSON.stringify(oJohnReilly)); //Show me this thing you call "JohnReilly"\n')),(0,i.kt)("p",null,"And it will look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(62991).Z,width:"320",height:"137"})),(0,i.kt)("p",null,"And it works. Obviously the example I've given above it somewhat naive - in reality my object properties are driven by GUI components rather than hard-coded. But I hope this illustrates the point. This technique allows you to simply share functionality between different JavaScript files and so keep your codebase tight. I certainly wouldn't recommend it for all circumstances but when you're doing something as simple as building up an object to be used to pass data around (as I am) then it works very well indeed. ## A Final Thought on Script Ordering"),(0,i.kt)("p",null,"A final thing that maybe worth mentioning is script ordering. The order in which functions are called is driven by the order in which subscriptions are made. In my example I was registering the scripts in this order:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-html"}),'<script src="/Scripts/PubSubInheritanceDemo/BaseReilly.js"><\/script>\n<script src="/Scripts/PubSubInheritanceDemo/BoyReilly.js"><\/script>\n<script src="/Scripts/PubSubInheritanceDemo/JohnReilly.js"<>/script>\n')),(0,i.kt)("p",null,"So when my event was published out the functions in the above JS files would be called in this order: 1. BaseReilly.js 2. BoyReilly.js 3. JohnReilly.js"),(0,i.kt)("p",null,"If you were so inclined you could use this to emulate inheritance in behaviour. Eg you could set a property in ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseReilly.js")," which was subsequently overridden in ",(0,i.kt)("inlineCode",{parentName:"p"},"JohnReilly.js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"BoyReilly.js")," if you so desired. I'm not doing that myself but it occurred as a possibility. ## PS"),(0,i.kt)("p",null,"If you're interested in learning more about JavaScript stabs at inheritance you could do far worse than look at Bob Inces in depth StackOverflow ",(0,i.kt)("a",a({parentName:"p"},{href:"http://stackoverflow.com/a/1598077/761388"}),"answer"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{}),"")))}h.isMDXComponent=!0},90672:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/CSharp-version-of-JohnReilly-836e0b7414d5a336104847981658261c.webp"},62991:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/JavaScript-version-of-JohnReilly-8e8928f803782798071a689ae95a2bcb.webp"}}]);