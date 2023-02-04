"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[88949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,b=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={slug:"concatting-ienumerables-in-csharp",title:"Concatting IEnumerables in C#",authors:"johnnyreilly",tags:["C#"],hide_table_of_contents:!1},i=void 0,c={permalink:"/concatting-ienumerables-in-csharp",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2016-03-22-concatting-ienumerables-in-csharp/index.md",source:"@site/blog/2016-03-22-concatting-ienumerables-in-csharp/index.md",title:"Concatting IEnumerables in C#",description:"I hate LINQ's Enumerable.Concat when bringing together IEnumerables. Not the behaviour (I love that!) but rather how code ends up looking when you use it. Consider this:",date:"2016-03-22T00:00:00.000Z",formattedDate:"March 22, 2016",tags:[{label:"C#",permalink:"/tags/c"}],readingTime:2.525,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"concatting-ienumerables-in-csharp",title:"Concatting IEnumerables in C#",authors:"johnnyreilly",tags:["C#"],hide_table_of_contents:!1},prevItem:{title:"Instant Stubs with JSON.Net (just add hot water)",permalink:"/instant-stubs-with-jsonnet"},nextItem:{title:"Atom - Recovering from Corrupted Packages",permalink:"/atom-recovering-from-corrupted-packages"}},s={authorsImageUrls:[void 0]},u=[{value:"Attempt #1: <code>ConcatMany</code>",id:"attempt-1-concatmany",level:2},{value:"Attempt #2: <code>EnumerableExtensions.Create</code>",id:"attempt-2-enumerableextensionscreate",level:2},{value:"What Gives Elvis?",id:"what-gives-elvis",level:2}],p={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I hate LINQ's ",(0,a.kt)("a",r({parentName:"p"},{href:"https://msdn.microsoft.com/en-us/library/bb302894%28v=vs.110%29.aspx?f=255&MSPPError=-2147217396"}),(0,a.kt)("inlineCode",{parentName:"a"},"Enumerable.Concat"))," when bringing together ",(0,a.kt)("inlineCode",{parentName:"p"},"IEnumerable"),"s. Not the behaviour (I love that!) but rather how code ends up looking when you use it. Consider this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),"var concatenated = myCollection?.Select(x => new ConcatObj(x)) ?? new ConcatObj[0].Concat(\n   myOtherCollection?.Select(x => new ConcatObj(x)) ?? new ConcatObj[0]\n);\n")),(0,a.kt)("p",null,"In this example I'm bringing together 2 collections, either of which may be null (more on that later). I think we can all agree this doesn't represent a world of readability. I've also had to create a custom class ",(0,a.kt)("inlineCode",{parentName:"p"},"ConcatObj")," because you can't create an empty array for an anonymous type in C#."),(0,a.kt)("h2",r({},{id:"attempt-1-concatmany"}),"Attempt #1: ",(0,a.kt)("inlineCode",{parentName:"h2"},"ConcatMany")),(0,a.kt)("p",null,"After toying around with a bunch of different ideas I created this extension method:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),"public static class FunctionalExtensions\n{\n    public static IEnumerable<T> ConcatMany<T>(\n        this IEnumerable<T> original,\n        params IEnumerable<T>[] enumerablesToConcat) => original.Concat(\n            enumerablesToConcat.Where(e => e != null).SelectMany(c => c)\n        );\n}\n")),(0,a.kt)("p",null,"Thanks to the joy of ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," this extension allows me to bring together multiple IEnumerables into a single one but has the advantage of considerably cleaner calling code:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),"var concatenated = Enumerable.Empty<ConcatObj>().ConcatMany(\n    myCollection?.Select(x => new ConcatObj(x)),\n    myOtherCollection?.Select(x => new ConcatObj(x))\n    );\n")),(0,a.kt)("p",null,"For my money this is more readable and intent is clearer. Particularly as the number of contributing IEnumerables goes up. The downside is that I can\u2019t use anonymous objects because you need to tell the compiler what the type is when using ",(0,a.kt)("inlineCode",{parentName:"p"},'<a href="https://msdn.microsoft.com/en-us/library/bb341042%28v=vs.110%29.aspx?f=255&amp;MSPPError=-2147217396">Enumerable.Empty</a>'),"."),(0,a.kt)("p",null,"Wouldn't it be nice to have both:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Readable code and"),(0,a.kt)("li",{parentName:"ol"},"Anonymous objects?")),(0,a.kt)("h2",r({},{id:"attempt-2-enumerableextensionscreate"}),"Attempt #2: ",(0,a.kt)("inlineCode",{parentName:"h2"},"EnumerableExtensions.Create")),(0,a.kt)("p",null,"After batting round a few ideas (thanks Matt) I settled on this implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),"public static class EnumerableExtensions\n{\n    public static IEnumerable<TSource> Create<TSource>(params IEnumerable<TSource>[] enumerables)\n    {\n        return Concat(enumerables.Where(e => e != null));\n    }\n\n    private static IEnumerable<TSource> Concat<TSource>(IEnumerable<IEnumerable<TSource>> enumerables)\n    {\n        foreach (var enumerable in enumerables)\n        {\n            foreach (var item in enumerable)\n            {\n                yield return item;\n            }\n        }\n    }\n}\n")),(0,a.kt)("p",null,"Which allows for calling code like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),"var concatenated = EnumerableExtensions.Create(\n    myCollection?.Select(x => new { Anonymous = x.Types }),\n    myOtherCollection?.Select(x => new { Anonymous = x.Types })\n);\n")),(0,a.kt)("p",null,"That's right; anonymous types are back! Strictly speaking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Concat")," method above could be converted into a single ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectMany")," (and boy does ReSharper like telling me) but I'm quite happy with it as is. And to be honest, I so rarely get to use ",(0,a.kt)("inlineCode",{parentName:"p"},"yield")," in my own code; I thought it might be nice to give it a whirl \ud83d\ude0a"),(0,a.kt)("h2",r({},{id:"what-gives-elvis"}),"What Gives Elvis?"),(0,a.kt)("p",null,"If you look closely at the implementation you'll notice that I purge all ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"s when I'm bringing together the ",(0,a.kt)("inlineCode",{parentName:"p"},"Enumerable"),'s. For why? Some may legitimately argue this is a bad idea. However, there is method in my "bad practice".'),(0,a.kt)("p",null,"I've chosen to treat ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),' as "not important" for this use case. I\'m doing this because it emerges that ASP.NET MVC deserialises empty collections as nulls. (See ',(0,a.kt)("a",r({parentName:"p"},{href:"http://aspnetwebstack.codeplex.com/SourceControl/latest#src/System.Web.Mvc/ValueProviderResult.cs"}),"here")," and play spot the ",(0,a.kt)("inlineCode",{parentName:"p"},"return null;"),") Which is a pain. But thanks to the null purging behaviour of ",(0,a.kt)("inlineCode",{parentName:"p"},"EnumerableExtensions.Create")," I can trust in the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://csharp.today/c-6-features-null-conditional-and-and-null-coalescing-operators/"}),"null-conditional (Elvis)")," operator to not do me wrong."))}m.isMDXComponent=!0}}]);