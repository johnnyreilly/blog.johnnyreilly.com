"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[66159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={title:"Bulletproof uniq with TypeScript generics (yay code reviews!)",authors:"johnnyreilly",tags:["typescript"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2020/11/14/bulletproof-uniq-with-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2020-11-14-bulletproof-uniq-with-typescript/index.md",source:"@site/blog/2020-11-14-bulletproof-uniq-with-typescript/index.md",title:"Bulletproof uniq with TypeScript generics (yay code reviews!)",description:"Never neglect the possibilities of a code review. There are times when you raise a PR and all you want is for everyone to hit approve so you can merge, merge and ship, ship! This can be a missed opportunity. For as much as I'd like to imagine my code is perfect, it's patently not. There's always scope for improvement.",date:"2020-11-14T00:00:00.000Z",formattedDate:"November 14, 2020",tags:[{label:"typescript",permalink:"/tags/typescript"}],readingTime:3.86,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Bulletproof uniq with TypeScript generics (yay code reviews!)",authors:"johnnyreilly",tags:["typescript"],hide_table_of_contents:!1},prevItem:{title:"Visual Studio Marketplace: images in Markdown!",permalink:"/2020/11/28/images-in-markdown-for-azure-devops-marketplace"},nextItem:{title:"Throttling data requests with React Hooks",permalink:"/2020/11/10/throttle-data-requests-with-react-hooks"}},p={authorsImageUrls:[void 0]},u=[{value:"&quot;What&#39;s this?&quot;",id:"whats-this",level:2},{value:"<code>uniq</code> v1",id:"uniq-v1",level:2},{value:"<code>uniq</code> v2",id:"uniq-v2",level:2}],c={toc:u};function h(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Never neglect the possibilities of a code review. There are times when you raise a PR and all you want is for everyone to hit approve so you can merge, merge and ship, ship! This can be a missed opportunity. For as much as I'd like to imagine my code is perfect, it's patently not. There's always scope for improvement."),(0,a.kt)("h2",i({},{id:"whats-this"}),'"What\'s this?"'),(0,a.kt)("p",null,"This week afforded me that opportunity. I was walking through a somewhat complicated PR on a call and someone said \"what's this?\". They'd spotted an expression much like this in my code:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"const myValues = [...new Set(allTheValuesSupplied)];\n")),(0,a.kt)("p",null,"What is that? Well, it's a number of things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",i({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Remove_duplicate_elements_from_the_array"}),"It's a way to get the unique values in a collection.")),(0,a.kt)("li",{parentName:"ol"},"It's a pro-tip and a coding BMX trick.")),(0,a.kt)("p",null,"What do I mean? Well, this is indeed a technique for getting the unique values in a collection. But it relies upon you knowing a bunch of things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"}),(0,a.kt)("inlineCode",{parentName:"a"},"Set"))," contains unique values. If you add multiple identical values, only a single value will be stored."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",i({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set"}),(0,a.kt)("inlineCode",{parentName:"a"},"Set")," constructor")," takes ",(0,a.kt)("a",i({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol"}),"iterable objects"),". This means we can ",(0,a.kt)("inlineCode",{parentName:"li"},"new")," up a ",(0,a.kt)("inlineCode",{parentName:"li"},"Set"),' with an array that we want to "unique-ify" and we will have a ',(0,a.kt)("inlineCode",{parentName:"li"},"Set")," that contains those unique values."),(0,a.kt)("li",{parentName:"ul"},"If you want to go on to do filtering / mapping etc on your unique values, you'll need to get them out of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Set"),". This is because (regrettably) ECMAScript iterables don't implicitly support these operations and neither are methods such as these part of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Set")," API. The easiest way to do that is to ",(0,a.kt)("a",i({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"}),"spread")," into a new array which you can then operate upon.")),(0,a.kt)("p",null,"I have this knowledge. Lots of people have this knowledge. But whilst this may be the case, using this technique goes against what I would generally consider to be a good tenet of programming: comprehensibility. When you read this code above, it doesn't immediately tell you what it's doing. This is a strike against it."),(0,a.kt)("p",null,'Further to that, it\'s "noisy". Even if the reader does have this knowledge, as they digest the code, they have to mentally unravel it. "Oh it\'s a ',(0,a.kt)("inlineCode",{parentName:"p"},"Set"),", we're passing in values, then spreading it out, it's probably intended to get the unique values.... Right, cool, cool.... Continue!\""),(0,a.kt)("iframe",{src:"https://giphy.com/embed/4NnSe87mg3h25JYIDh",width:"100%",height:"100%",frameBorder:"0",allowFullScreen:""}),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://twitter.com/margaridagp"}),"Margarida Pereira")," explicitly called this out and I found myself agreeing. Let's make a ",(0,a.kt)("inlineCode",{parentName:"p"},"uniq")," function!"),(0,a.kt)("h2",i({},{id:"uniq-v1"}),(0,a.kt)("inlineCode",{parentName:"h2"},"uniq")," v1"),(0,a.kt)("p",null,"I wrote a very simple ",(0,a.kt)("inlineCode",{parentName:"p"},"uniq")," function which looked like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"/**\n * Return the unique values found in the passed iterable\n */\nfunction uniq<TElement>(iterableToGetUniqueValuesOf: Iterable<TElement>) {\n  return [...new Set(iterableToGetUniqueValuesOf)];\n}\n")),(0,a.kt)("p",null,"Usage of this was simple:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"uniq([1, 1, 1, 3, 1, 1, 2]); // produces [1, 3, 2]\nuniq(['John', 'Guida', 'Ollie', 'Divya', 'John']); // produces [\"John\", \"Guida\", \"Ollie\", \"Divya\"]\n")),(0,a.kt)("p",null,"And I thought this was tremendous. I committed and pushed. I assumed there was no more to be done. Guida (Margarida) then made this very helpful comment:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"BTW, I found a big bold warning that ",(0,a.kt)("inlineCode",{parentName:"p"},"new Set()")," compares objects by reference (unless they're primitives) so it might be worth adding a comment to warn people that uniq/distinct compares objects by reference: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://codeburst.io/javascript-array-distinct-5edc93501dc4"}),"https://codeburst.io/javascript-array-distinct-5edc93501dc4"))),(0,a.kt)("p",null,"She was right! If a caller was to, say, pass a collection of objects to ",(0,a.kt)("inlineCode",{parentName:"p"},"uniq")," then they'd end up highly disappointed. Consider:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"uniq([{ name: 'John' }, { name: 'John' }]); // produces [{ name: \"John\" }, { name: \"John\" }]\n")),(0,a.kt)("p",null,"We can do better!"),(0,a.kt)("h2",i({},{id:"uniq-v2"}),(0,a.kt)("inlineCode",{parentName:"h2"},"uniq")," v2"),(0,a.kt)("p",null,"I like compilers shouting at me. Or more accurately, I like compilers telling me when something isn't valid / supported / correct. I wanted ",(0,a.kt)("inlineCode",{parentName:"p"},"uniq")," to mirror the behaviour of ",(0,a.kt)("inlineCode",{parentName:"p"},"Set")," ","-"," to only support primitives such as ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," etc. So I made a new version of ",(0,a.kt)("inlineCode",{parentName:"p"},"uniq")," that hardened up the generic contraints:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"/**\n * Return the unique values found in the passed iterable\n */\nfunction uniq<TElement extends string | number | bigint | boolean | symbol>(\n  iterableToGetUniqueValuesOf: Iterable<TElement>\n) {\n  return [...new Set(iterableToGetUniqueValuesOf)];\n}\n")),(0,a.kt)("p",null,"With this in place, the compiler started shouting in the most helpful way. When I re-attemped ",(0,a.kt)("inlineCode",{parentName:"p"},'[{ name: "John" }, { name: "John" }]')," the compiler hit me with:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Argument of type '{ name: string; }[]' is not assignable to parameter of type 'Iterable&lt;string | number | bigint | boolean | symbol&gt;'.")),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://www.typescriptlang.org/play?#code/FAYw9gdgzmA2CmA6WYDmAKArhAlgR3QG0BvAAggEMBbeALlICIApMACwgdIF8AaUsyjXrM2HbgF0AlJNCQYCZGiy4ChEewZ91HKTOAB6AFSHgpQ6QBK8AC6YAThFLXW8UtnyZXANwqxPUUgAzMGwAE1IcR2dXAAcKKCh4cJxreDsKACMEU0N9YEDsEGscSDcVAB4AFQBRBBoIa1J4AA9UiFCAqGs7SNRSAB9yTCoMtIHSDJxUSMbBjLA4eApHQagATxG4AD50U1J9lLTMhEqwAHEbAFUVTwA1X38AeUD6AElU9Kz4Ktr4eustsBJPw9vs7DZ7I5CIgYRB4AB3UgAZRs6EOnxO5yuN3g9z88Cgz0k4gA3MAuMAgA"}),"Take a look.")),(0,a.kt)("p",null,"This is good. This is descriptive code that only allows legitimate inputs. It should lead to less confusion and a reduced likelihood of issues in Production. It's also a nice example of how code review can result in demonstrably better code. Thanks Guida!"))}h.isMDXComponent=!0}}]);