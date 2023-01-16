"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[58444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"(Top One, Nice One) Get Sorted",authors:"johnnyreilly",tags:["sort","javascript","OrderBy","LINQ"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2015/08/13/top-one-nice-one-get-sorted",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2015-08-13-top-one-nice-one-get-sorted/index.md",source:"@site/blog/2015-08-13-top-one-nice-one-get-sorted/index.md",title:"(Top One, Nice One) Get Sorted",description:"I was recently reading a post by Jaime Gonz\xe1lez Garc\xeda which featured the following mind-bending proposition:",date:"2015-08-13T00:00:00.000Z",formattedDate:"August 13, 2015",tags:[{label:"sort",permalink:"/tags/sort"},{label:"javascript",permalink:"/tags/javascript"},{label:"OrderBy",permalink:"/tags/order-by"},{label:"LINQ",permalink:"/tags/linq"}],readingTime:8.57,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"(Top One, Nice One) Get Sorted",authors:"johnnyreilly",tags:["sort","javascript","OrderBy","LINQ"],hide_table_of_contents:!1},prevItem:{title:"Things Done Changed",permalink:"/2015/09/10/things-done-changed"},nextItem:{title:"Upgrading to Globalize 1.x for Dummies",permalink:"/2015/07/30/upgrading-to-globalize-1x-for-dummies"}},p={authorsImageUrls:[void 0]},c=[{value:"Sort",id:"sort",level:2},{value:"String Comparer",id:"string-comparer",level:2},{value:"Number Comparer",id:"number-comparer",level:2},{value:"Descending Into the Pit of Success",id:"descending-into-the-pit-of-success",level:2},{value:"<code>ThenBy</code>",id:"thenby",level:2},{value:"<code>composeComparers</code>: The Sequel",id:"composecomparers-the-sequel",level:2},{value:"<code>composeComparers</code>: The Ultimate",id:"composecomparers-the-ultimate",level:2},{value:"Updated 08/10/2018: Now TypeScript",id:"updated-08102018-now-typescript",level:2}],u={toc:c};function h(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I was recently reading ",(0,r.kt)("a",o({parentName:"p"},{href:"http://www.barbarianmeetscoding.com/blog/2015/07/09/mastering-the-arcane-art-of-javascript-mancy-for-c-sharp-developers-chapter-7-using-linq-in-javascript/"}),"a post by Jaime Gonz\xe1lez Garc\xeda")," which featured the following mind-bending proposition:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What if I told you that JavaScript has ",(0,r.kt)("a",o({parentName:"p"},{href:"https://msdn.microsoft.com/en-us/library/bb397926.aspx"}),"LINQ"),"??")),(0,r.kt)("p",null,"It got me thinking about one of favourite features of LINQ: ",(0,r.kt)("a",o({parentName:"p"},{href:"http://www.dotnetperls.com/orderby-extension"}),"ordering using OrderBy, ThenBy...")," The ability to simply expose a collection of objects in a given order with a relatively terse and descriptive syntax. It is fantastically convenient, expressive and something I've been missing in JavaScript. But if Jaime is right... Well, let's see what we can do."),(0,r.kt)("h2",o({},{id:"sort"}),"Sort"),(0,r.kt)("p",null,"JavaScript arrays have a ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"}),"sort")," method. To quote MDN:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"arr.sort([compareFunction])"),"### ",(0,r.kt)("inlineCode",{parentName:"p"},"compareFunction")),(0,r.kt)("p",{parentName:"blockquote"},"Optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.")),(0,r.kt)("p",null,"We want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"sort")," function to introduce some LINQ-ish ordering goodness. Sort of. See what I did there?"),(0,r.kt)("p",null,"Before we get going it's worth saying that LINQ's ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderBy")," and JavaScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"sort")," are not the same thing. ",(0,r.kt)("inlineCode",{parentName:"p"},"sort")," actually changes the order of the array. However, ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderBy")," returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"IOrderedEnumerable")," which when iterated returns the items of the collection in a particular order. An important difference. If preserving the original order of my array was important to me (spoiler: mostly it isn't) then I could make a call to ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"}),(0,r.kt)("inlineCode",{parentName:"a"},"slice"))," prior to calling ",(0,r.kt)("inlineCode",{parentName:"p"},"sort"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sort")," also returns the array to the caller which is nice for chaining and means we can use it in a similar fashion to the way we use ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderBy"),". With that in mind, we're going to create comparer functions which will take a lambda / arrow function (ES6 alert!) and return a function which will compare based on the supplied lambda."),(0,r.kt)("h2",o({},{id:"string-comparer"}),"String Comparer"),(0,r.kt)("p",null,"Let's start with ordering by string properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function stringComparer(propLambda) {\n  return (obj1, obj2) => {\n    const obj1Val = propLambda(obj1) || '';\n    const obj2Val = propLambda(obj2) || '';\n    return obj1Val.localeCompare(obj2Val);\n  };\n}\n")),(0,r.kt)("p",null,"We need some example data to sort: (I can only apologise for my lack of inspiration here)"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const foodInTheHouse = [\n  { what: 'cake', daysSincePurchase: 2 },\n  { what: 'apple', daysSincePurchase: 8 },\n  { what: 'orange', daysSincePurchase: 6 },\n  { what: 'apple', daysSincePurchase: 2 },\n];\n")),(0,r.kt)("p",null,"If we were doing a sort by strings in LINQ we wouldn't need to implement our own comparer. And the code we'd write would look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var foodInTheHouseSorted = foodInTheHouse.OrderBy((x) => x.what);\n")),(0,r.kt)("p",null,"With that in mind, here's how it would look to use our shiny and new ",(0,r.kt)("inlineCode",{parentName:"p"},"stringComparer"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const foodInTheHouseSorted = foodInTheHouse.sort(stringComparer((x) => x.what));\n\n// foodInTheHouseSorted: [\n//   { what: 'apple',  daysSincePurchase: 8 },\n//   { what: 'apple',  daysSincePurchase: 2 },\n//   { what: 'cake',   daysSincePurchase: 2 },\n//   { what: 'orange', daysSincePurchase: 6 }\n// ]\n\n// PS Don't forget, for our JavaScript: foodInTheHouse === foodInTheHouseSorted\n//    But for the LINQ:                 foodInTheHouse !=  foodInTheHouseSorted\n//\n//    However, if I'd done this:\n\nconst foodInTheHouseSlicedAndSorted = foodInTheHouse\n  .slice()\n  .sort(stringComparer((x) => x.what));\n\n//    then:                             foodInTheHouse !== foodInTheHouseSlicedAndSorted\n//\n//    I shan't mention this again.\n")),(0,r.kt)("h2",o({},{id:"number-comparer"}),"Number Comparer"),(0,r.kt)("p",null,"Well that's strings sorted (quite literally). Now, what about numbers?"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function numberComparer(propLambda) {\n  return (obj1, obj2) => {\n    const obj1Val = propLambda(obj1);\n    const obj2Val = propLambda(obj2);\n    if (obj1Val > obj2Val) {\n      return 1;\n    } else if (obj1Val < obj2Val) {\n      return -1;\n    }\n    return 0;\n  };\n}\n")),(0,r.kt)("p",null,"If we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"numberComparer")," on our original array it looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const foodInTheHouseSorted = foodInTheHouse.sort(\n  numberComparer((x) => x.daysSincePurchase)\n);\n\n// foodInTheHouseSorted: [\n//   { what: 'cake',   daysSincePurchase: 2 },\n//   { what: 'apple',  daysSincePurchase: 2 },\n//   { what: 'orange', daysSincePurchase: 6 },\n//   { what: 'apple',  daysSincePurchase: 8 }\n// ]\n")),(0,r.kt)("h2",o({},{id:"descending-into-the-pit-of-success"}),"Descending Into the Pit of Success"),(0,r.kt)("p",null,"Well this is all kinds of fabulous. But something's probably nagging at you... What about ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderByDescending"),"? What about when I want to sort in the reverse order? May I present the ",(0,r.kt)("inlineCode",{parentName:"p"},"reverse")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function reverse(comparer) {\n  return (obj1, obj2) => comparer(obj1, obj2) * -1;\n}\n")),(0,r.kt)("p",null,"As the name suggests, this function takes a given comparer that's handed to it and returns a function that inverts the results of executing that comparer. Clear as mud? A comparer can return 3 types of return values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0 - implies equality for ",(0,r.kt)("inlineCode",{parentName:"li"},"obj1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"obj2")),(0,r.kt)("li",{parentName:"ul"},"positive - implies ",(0,r.kt)("inlineCode",{parentName:"li"},"obj1")," is greater than ",(0,r.kt)("inlineCode",{parentName:"li"},"obj2")," by the ordering criterion"),(0,r.kt)("li",{parentName:"ul"},"negative - implies ",(0,r.kt)("inlineCode",{parentName:"li"},"obj1")," is less than ",(0,r.kt)("inlineCode",{parentName:"li"},"obj2")," by the ordering criterion")),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"reverse")," function takes the comparer it is given and returns a new comparer that will return a positive value where the old one would have returned a negative and vica versa. (Equality is unaffected.) An alternative implementation would have been this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function reverse(comparer) {\n  return (obj1, obj2) => comparer(obj2, obj1);\n}\n")),(0,r.kt)("p",null,"Which is more optimal and even simpler as it just swaps the values supplied to the comparer. Whatever tickles your fancy. Either way, when used it looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const foodInTheHouseSorted = foodInTheHouse.sort(\n  reverse(stringComparer((x) => x.what))\n);\n\n// foodInTheHouseSorted: [\n//   { what: 'orange', daysSincePurchase: 6 },\n//   { what: 'cake',   daysSincePurchase: 2 },\n//   { what: 'apple',  daysSincePurchase: 8 },\n//   { what: 'apple',  daysSincePurchase: 2 }\n// ]\n")),(0,r.kt)("p",null,"If you'd rather not have a function wrapping a function inline then you could create ",(0,r.kt)("inlineCode",{parentName:"p"},"stringComparerDescending"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"numberComparerDescending")," etc implementations. Arguably it might make for a nicer API. I'm not unhappy with the present approach myself and so I'll leave it as is. But it's an option."),(0,r.kt)("h2",o({},{id:"thenby"}),(0,r.kt)("inlineCode",{parentName:"h2"},"ThenBy")),(0,r.kt)("p",null,"So far we can sort arrays by strings, we can sort arrays by numbers and we can do either in descending order. It's time to take it to the next level people. That's right ",(0,r.kt)("inlineCode",{parentName:"p"},"ThenBy"),"; I want to be able to sort by one criteria and then by a subcriteria. So perhaps I want to eat the food in the house in alphabetical order, but if I have multiple apples I want to eat the ones I bought most recently first (because the other ones look old, brown and yukky). This may also be a sign I haven't thought my life through, but it's a choice that people make. People that I know. People I may have married."),(0,r.kt)("p",null,"It's time to compose our comparers together. May I present... drum roll.... the ",(0,r.kt)("inlineCode",{parentName:"p"},"composeComparers")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function composeComparers(...comparers) {\n  return (obj1, obj2) => {\n    const comparer = comparers.find((c) => c(obj1, obj2) !== 0);\n    return comparer ? comparer(obj1, obj2) : 0;\n  };\n}\n")),(0,r.kt)("p",null,"This fine function takes any number of comparers that have been supplied to it. It then returns a comparer function which, when called, iterates through each of the original comparers and executes them until it finds one that returns a value that is not 0 (ie represents that the 2 items are not equal). It then sends that non-zero value back or if all was equal then sends back 0."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const foodInTheHouseSorted = foodInTheHouse.sort(\n  composeComparers(\n    stringComparer((x) => x.what),\n    numberComparer((x) => x.daysSincePurchase)\n  )\n);\n\n// foodInTheHouseSorted: [\n//   { what: 'apple',  daysSincePurchase: 2 },\n//   { what: 'apple',  daysSincePurchase: 8 },\n//   { what: 'cake',   daysSincePurchase: 2 },\n//   { what: 'orange', daysSincePurchase: 6 }\n// ]\n")),(0,r.kt)("h2",o({},{id:"composecomparers-the-sequel"}),(0,r.kt)("inlineCode",{parentName:"h2"},"composeComparers"),": The Sequel"),(0,r.kt)("p",null,"I'm not gonna lie - I was feeling quite pleased with this approach. I shared it with my friend (and repeated colleague) ",(0,r.kt)("a",o({parentName:"p"},{href:"http://blog.peterfoldi.com/"}),"Peter Foldi"),". The next day I found this in my inbox:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function composeComparers(...comparers) {\n  return (obj1, obj2) =>\n    comparers.reduce((prev, curr) => prev || curr(obj1, obj2), 0);\n}\n")),(0,r.kt)("p",null,"Dammit he's improved it. It's down to 1 line of code, it doesn't execute a non-zero returning comparer twice and it doesn't rely on ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"}),(0,r.kt)("inlineCode",{parentName:"a"},"find"))," which only arrives with ES6. So if you wanted to backport to ES5 then this is a better choice."),(0,r.kt)("p",null,"The only criticism I can make of it is that it iterates through each of the comparers even when it doesn't need to execute them. But that's just carping really."),(0,r.kt)("h2",o({},{id:"composecomparers-the-ultimate"}),(0,r.kt)("inlineCode",{parentName:"h2"},"composeComparers"),": The Ultimate"),(0,r.kt)("p",null,"So naturally I thought I was done. Showing Peter's improvements to the estimable Matthew Horsley I learned that this was not so. Because he reached for the keyboard and entered this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'function composeComparers(...comparers) {\n  // README: <a href="https://wiki.haskell.org/Function_composition">https://wiki.haskell.org/Function_composition</a>\n  return comparers.reduce((prev, curr) => (a, b) => prev(a, b) || curr(a, b));\n}\n')),(0,r.kt)("p",null,"That's right, he's created a function which takes a number of comparers and reduced them up front into a single comparer function. This means that when the sort takes place there is no longer a need to iterate through the comparers, just execute them."),(0,r.kt)("p",null,"I know."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"animated gif with the heading &quot;mind-equals-blown&quot;",src:n(57950).Z,width:"500",height:"299"})),(0,r.kt)("p",null,"I'll get my coat..."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function composeComparers(...comparers) {\n  return comparers.reduce((prev, curr) => (a, b) => prev(a, b) || curr(a, b));\n}\n\nfunction stringComparer(propLambda) {\n  return (obj1, obj2) => {\n    const obj1Val = propLambda(obj1) || '';\n    const obj2Val = propLambda(obj2) || '';\n    return obj1Val.localeCompare(obj2Val);\n  };\n}\n\nfunction numberComparer(propLambda) {\n  return (obj1, obj2) => {\n    const obj1Val = propLambda(obj1);\n    const obj2Val = propLambda(obj2);\n    if (obj1Val > obj2Val) {\n      return 1;\n    } else if (obj1Val < obj2Val) {\n      return -1;\n    }\n    return 0;\n  };\n}\n\nfunction reverse(comparer) {\n  return (obj1, obj2) => comparer(obj2, obj1);\n}\n\n/* - Example usage\nconst foodInTheHouse = [\n  { what: 'cake',   daysSincePurchase: 2 },\n  { what: 'apple',  daysSincePurchase: 8 },\n  { what: 'orange', daysSincePurchase: 6 },\n  { what: 'apple',  daysSincePurchase: 2 },\n];\nconst foodInTheHouseSorted = foodInTheHouse.sort(composeComparers(\n    stringComparer(x => x.what),\n    reverse(numberComparer(x => x.daysSincePurchase))\n));\nconsole.log(foodInTheHouseSorted);\n*/\n")),(0,r.kt)("h2",o({},{id:"updated-08102018-now-typescript"}),"Updated 08/10/2018: Now TypeScript"),(0,r.kt)("p",null,"You want to do this with TypeScript? Use this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"type Comparer<TObject> = (obj1: TObject, obj2: TObject) => number;\n\nexport function stringComparer<TObject>(\n  propLambda: (obj: TObject) => string\n): Comparer<TObject> {\n  return (obj1: TObject, obj2: TObject) => {\n    const obj1Val = propLambda(obj1) || '';\n    const obj2Val = propLambda(obj2) || '';\n    return obj1Val.localeCompare(obj2Val);\n  };\n}\n\nexport function numberComparer<TObject>(\n  propLambda: (obj: TObject) => number\n): Comparer<TObject> {\n  return (obj1: TObject, obj2: TObject) => {\n    const obj1Val = propLambda(obj1);\n    const obj2Val = propLambda(obj2);\n    if (obj1Val > obj2Val) {\n      return 1;\n    } else if (obj1Val < obj2Val) {\n      return -1;\n    }\n    return 0;\n  };\n}\n\nexport function reverse<TObject>(comparer: Comparer<TObject>) {\n  return (obj1: TObject, obj2: TObject) => comparer(obj2, obj1);\n}\n\nexport function composeComparers<TObject>(...comparers: Comparer<TObject>[]) {\n  return comparers.reduce((prev, curr) => (a, b) => prev(a, b) || curr(a, b));\n}\n")))}h.isMDXComponent=!0},57950:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mind-equals-blown-342005173a8a84b38b9df2d94f463b6a.gif"}}]);