"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[80822],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=h(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var h=2;h<s;h++)o[h]=a[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={title:"React: storing state in URL with URLSearchParams",authors:"johnnyreilly",tags:["React","typescript","React Router"],description:"The React `useState` hook is a great way to persist state. This post demos a simple React hook that stores state in the URL querystring.",hide_table_of_contents:!1},i=void 0,l={permalink:"/2022/09/20/react-usesearchparamsstate",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-09-20-react-usesearchparamsstate/index.md",source:"@site/blog/2022-09-20-react-usesearchparamsstate/index.md",title:"React: storing state in URL with URLSearchParams",description:"The React `useState` hook is a great way to persist state. This post demos a simple React hook that stores state in the URL querystring.",date:"2022-09-20T00:00:00.000Z",formattedDate:"September 20, 2022",tags:[{label:"React",permalink:"/tags/react"},{label:"typescript",permalink:"/tags/typescript"},{label:"React Router",permalink:"/tags/react-router"}],readingTime:6.68,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"React: storing state in URL with URLSearchParams",authors:"johnnyreilly",tags:["React","typescript","React Router"],description:"The React `useState` hook is a great way to persist state. This post demos a simple React hook that stores state in the URL querystring.",hide_table_of_contents:!1},prevItem:{title:"Faster Docusaurus builds with swc-loader",permalink:"/2022/09/29/faster-docusaurus-build-swc-loader"},nextItem:{title:"Reverse engineering the Azure Application Insights Transactions URL",permalink:"/2022/09/03/reverse-engineering-azure-app-insights-transactions-url"}},h={authorsImageUrls:[void 0]},p=[{value:"<code>useState</code>",id:"usestate",level:2},{value:"A stateful URL",id:"a-stateful-url",level:2},{value:"<code>useSearchParams</code>",id:"usesearchparams",level:2},{value:"The <code>useSearchParamsState</code> hook",id:"the-usesearchparamsstate-hook",level:2},{value:"Performance - updated 18th December 2022",id:"performance---updated-18th-december-2022",level:2},{value:"Persisting querystring across your site",id:"persisting-querystring-across-your-site",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function c(e){var{components:t}=e,a=s(e,["components"]);return(0,r.kt)("wrapper",n({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The React ",(0,r.kt)("a",n({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#usestate"}),(0,r.kt)("inlineCode",{parentName:"a"},"useState"))," hook is a great way to persist state inside the context of a component in React. This post demonstrates a simple React hook that stores state in the URL querystring, building on top of React Routers ",(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParams")," hook."),(0,r.kt)("h2",n({},{id:"usestate"}),(0,r.kt)("inlineCode",{parentName:"h2"},"useState")),(0,r.kt)("p",null,"Usage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," hook looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"const [greeting, setGreeting] = useState('hello world');\n\n// ....\n\nsetGreeting('hello John'); // will set greeting to 'hello John'\n")),(0,r.kt)("p",null,"However, there is a disadvantage to using ",(0,r.kt)("inlineCode",{parentName:"p"},"useState"),"; that state is not persistent and not shareable. So if you want someone else to see what you can see in an application, you're reliant on them carrying out the same actions that got your application into its current state. Doing that can be time consuming and error prone. Wouldn't it be great if there was a simple way to share state?"),(0,r.kt)("h2",n({},{id:"a-stateful-url"}),"A stateful URL"),(0,r.kt)("p",null,"An effective way to share state between users, without needing a backend for persistence, is with the URL. A URL can contain the required state in the form of the route and the querystring / search parameters. The search parameters are particularly powerful as they are entirely generic and customisable."),(0,r.kt)("p",null,"Thanks to the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams"}),"URLSearchParams API"),", it's possible to manipulate the querystring ",(0,r.kt)("em",{parentName:"p"},"without")," round-tripping to the server. This is a primitive upon which we can build; as long as the URL limit (around ",(0,r.kt)("a",n({parentName:"p"},{href:"https://stackoverflow.com/a/417184/761388"}),"2000 chars"),") is not exceeded, we're free to persist state in your URL. Consider:"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"https://our-app.com?greeting=hi"}),"https://our-app.com?greeting=hi")),(0,r.kt)("p",null,"The URL above is storing a single piece of state; the ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting"),". Consider:"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"https://our-app.com?greeting=hi&name=john"}),"https://our-app.com?greeting=hi&name=john")),(0,r.kt)("p",null,"The URL above is going further and storing multiple pieces of state; the ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,r.kt)("h2",n({},{id:"usesearchparams"}),(0,r.kt)("inlineCode",{parentName:"h2"},"useSearchParams")),(0,r.kt)("p",null,"If you're working with React, the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://reactrouter.com/"}),"React Router")," project makes consuming state in the URL, particularly in the form of querystring or search parameters, straightforward. It achieves this with the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://reactrouter.com/docs/en/v6/hooks/use-search-params"}),(0,r.kt)("inlineCode",{parentName:"a"},"useSearchParams"))," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"import { useSearchParams } from 'react-router-dom';\n\nconst [searchParams, setSearchParams] = useSearchParams();\n\nconst greeting = searchParams.get('greeting');\n\n// ...\n\nsetSearchParams({ greeting: 'bonjour' }); // will set URL like so https://our-app.com?greeting=bonjour - this value will feed through to anything driven by the URL\n")),(0,r.kt)("p",null,"This is a great mechanism for persisting state both locally and in a shareable way."),(0,r.kt)("p",null,"A significant benefit of this approach is that it doesn't require posting to the server. It's just using browser APIs like the URLSearchParams API. Changing a query string parameter happens entirely locally and instantaneously."),(0,r.kt)("h2",n({},{id:"the-usesearchparamsstate-hook"}),"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"useSearchParamsState")," hook"),(0,r.kt)("p",null,"What the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParams")," hook doesn't do, is maintain other query string or search parameters."),(0,r.kt)("p",null,"If you are maintaining multiple pieces of state in your application, that will likely mean multiple query string or search parameters. What would be quite useful, is a hook which allows us the update state ",(0,r.kt)("em",{parentName:"p"},"without")," losing other state. Furthermore, it would be great if we didn't have to first acquire the ",(0,r.kt)("inlineCode",{parentName:"p"},"searchParams")," object and then manipulate it. It's time for our ",(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParamsState")," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"import { useSearchParams } from 'react-router-dom';\n\nexport function useSearchParamsState(\n  searchParamName: string,\n  defaultValue: string\n): readonly [\n  searchParamsState: string,\n  setSearchParamsState: (newState: string) => void\n] {\n  const [searchParams, setSearchParams] = useSearchParams();\n\n  const acquiredSearchParam = searchParams.get(searchParamName);\n  const searchParamsState = acquiredSearchParam ?? defaultValue;\n\n  const setSearchParamsState = (newState: string) => {\n    const next = Object.assign(\n      {},\n      [...searchParams.entries()].reduce(\n        (o, [key, value]) => ({ ...o, [key]: value }),\n        {}\n      ),\n      { [searchParamName]: newState }\n    );\n    setSearchParams(next);\n  };\n  return [searchParamsState, setSearchParamsState];\n}\n")),(0,r.kt)("p",null,"The above hook can roughly be thought of as ",(0,r.kt)("inlineCode",{parentName:"p"},"useState<string>")," but storing that state in the URL."),(0,r.kt)("p",null,"Let's think about how it works. When initialised, the hook takes two parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"searchParamName")," - this is the name of the querystring parameter where state is persisted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultValue")," - if there is no value in the querystring, this is the fallback value")),(0,r.kt)("p",null,"The hook then goes on to wrap the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParams")," hook. It interrogates the ",(0,r.kt)("inlineCode",{parentName:"p"},"searchParams")," for the supplied ",(0,r.kt)("inlineCode",{parentName:"p"},"searchParamName"),", and if it isn't present, falls back to the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"setSearchParamsState")," method definition looks somewhat complicated but essentially all it does is get the contents of the existing search parameters, and applies the new state for the current property. It's probably worth pausing here a second to observe an opinion that's lurking in this implementation. It is actually valid to have multiple values for the same search parameter. Whilst this is possible, it's somewhat rare for this to be used. This implementation only allows for a single value for any given parameter, as that is quite useful behaviour."),(0,r.kt)("p",null,"With all this in place, we have a hook that can be used like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"const [greeting, setGreeting] = useSearchParamsState('greeting', 'hello');\n")),(0,r.kt)("p",null,"The above code returns back a ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting")," value which is derived from the ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting")," search parameter. It also returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"setGreeting")," function which allows setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting")," value. This is the same API as ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," and so should feel idiomatic to a user of React. Tremendous!"),(0,r.kt)("h2",n({},{id:"performance---updated-18th-december-2022"}),"Performance - updated 18th December 2022"),(0,r.kt)("p",null,'At this point you might be thinking "why don\u2019t we use the ',(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParamsState"),' hook always?". The fact of the matter is, you could but there\u2019s a reason why you might not want to: performance. The ',(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParamsState")," hook is slower to use than the ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," hook. Let's think about why."),(0,r.kt)("p",null,"If you\u2019re using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," hook, then ultimately a variable is being updated inside the program that represents your application. This is internal state. However, for the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParamsState")," hook the story is slightly different. The ",(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParamsState")," hook is built upon the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParams")," hook in react-router, as we\u2019ve seen. ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/remix-run/react-router/blob/590b7a25a454d998c83f4e5d6f00ad5a6217533b/packages/react-router-dom/index.tsx#L785"}),"If you look at the implementation of that hook"),", you can see that it relies on various browser APIs such as ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"History"),"."),(0,r.kt)("p",null,"The upshot of this is that the state for our ",(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParamsState")," hook is ",(0,r.kt)("inlineCode",{parentName:"p"},"external")," to our application. It might not feel external because we haven't had to set up a database or an API or anything, but external it is. State lives in the browsers APIs, and with that comes a performance penalty. Every time we change state the following happens:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"useSearchParams")," hook in react-router will invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"History")," API"),(0,r.kt)("li",{parentName:"ul"},"The browser will update the URL"),(0,r.kt)("li",{parentName:"ul"},"The instance of react-router running at the root of your application will detect changes in the ",(0,r.kt)("inlineCode",{parentName:"li"},"location.search")," and will surface a new value for your application."),(0,r.kt)("li",{parentName:"ul"},"The code in your application that depends upon this will react.")),(0,r.kt)("p",null,"The above is slower than just invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," and relying upon a local variable. It\u2019s not overwhelmingly slower; generally I\u2019ve not had an issue because browsers are very fast these days. But it\u2019s worth bearing in mind, that if you\u2019re intending to write code that is as performant as possible, then this is probably a hook to avoid. Anything that involves an external API, even if it\u2019s an API that lives in the browser, will be slower than local variables. That said, I would expect there to be few applications to which this is a significant factor - but it\u2019s worth considering."),(0,r.kt)("h2",n({},{id:"persisting-querystring-across-your-site"}),"Persisting querystring across your site"),(0,r.kt)("p",null,"Now we have this exciting mechanism set up which allows us to store state in our URL and consequently easily share state by sending someone our URL."),(0,r.kt)("p",null,"What would also be useful is a way to navigate around our site ",(0,r.kt)("em",{parentName:"p"},"without")," losing that state. Imagine I've got a date range selected and stored in my URL. As I click around from screen to screen, I want to persist that. I don't want to have to reselect the date range on each screen."),(0,r.kt)("p",null,"How can we do this? Well, it turns out to be quite easy. All we need is the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocation")," hook and the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"location.search")," property. That represents the querystring, hence every time we render a link we just include that like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"const [location] = useLocation();\n\nreturn (<Link to={`/my-page${location.search}`}>Page</>)\n")),(0,r.kt)("p",null,"Now as we navigate around our site, that state will be maintained."),(0,r.kt)("h2",n({},{id:"conclusion"}),"Conclusion"),(0,r.kt)("p",null,"In this post we've created a ",(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParamsState")," hook, which allows state to be persisted to URLs for sharing purposes."),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"https://blog.logrocket.com/use-state-url-persist-state-usesearchparams/"}),"This post was originally published on LogRocket.")),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://blog.logrocket.com/use-state-url-persist-state-usesearchparams/"})))}c.isMDXComponent=!0}}]);