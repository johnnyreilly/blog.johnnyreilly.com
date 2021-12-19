"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[11733],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60021:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"NuGet and WebMatrix: How to install a specific version of a package",authors:"johnnyreilly",tags:["jquery","package","WebMatrix","NuGet"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2013/12/13/nuget-and-webmatrix-how-to-install",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-12-13-nuget-and-webmatrix-how-to-install/index.md",source:"@site/blog/2013-12-13-nuget-and-webmatrix-how-to-install/index.md",title:"NuGet and WebMatrix: How to install a specific version of a package",description:"I've recently been experimenting with WebMatrix. If you haven't heard of it, WebMatrix is Microsoft's \"free, lightweight, cloud-connected web development tool\". All marketing aside, it's pretty cool. You can whip up a site in next to no time, it has source control, publishing abilities, intellisense. Much good stuff. And one thing it has, that I genuinely hadn't expected is NuGet. Brilliant!",date:"2013-12-13T00:00:00.000Z",formattedDate:"December 13, 2013",tags:[{label:"jquery",permalink:"/tags/jquery"},{label:"package",permalink:"/tags/package"},{label:"WebMatrix",permalink:"/tags/web-matrix"},{label:"NuGet",permalink:"/tags/nu-get"}],readingTime:2.495,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Upgrading to TypeScript 0.9.5 - A Personal Memoir",permalink:"/2014/01/09/upgrading-to-typescript-095-personal"},nextItem:{title:"Simple fading in and out using CSS transitions and classes",permalink:"/2013/12/04/simple-fading-in-and-out-using-css-transitions"}},u={authorsImageUrls:[void 0]},c=[{value:"NuGet, by hook or by crook",id:"nuget-by-hook-or-by-crook",children:[],level:2},{value:"Now for bonus points",id:"now-for-bonus-points",children:[],level:2},{value:"Rounding off",id:"rounding-off",children:[],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I've recently been experimenting with WebMatrix. If you haven't heard of it, WebMatrix is Microsoft's ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"http://www.microsoft.com/web/webmatrix/"},'"free, lightweight, cloud-connected web development tool"')),". All marketing aside, it's pretty cool. You can whip up a site in next to no time, it has source control, publishing abilities, intellisense. Much good stuff. And one thing it has, that I genuinely hadn't expected is ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/"},"NuGet"),". Brilliant!"),(0,i.kt)("p",null,"But like any free product there are disadvantages. As a long time Visual Studio user I've become very used to the power of the NuGet command line. I've been spoiled. You don't have this in WebMatrix. You have a nice UI that looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-MLAAVw9-O_A/UqstzAa1-8I/AAAAAAAAAfU/gtg8kPjsP7M/s400/NuGetWebMatrix.png",alt:null})),(0,i.kt)("p",null,"Looks great right? However, if you want to install a specific version of a NuGet package... well let's see what happens..."),(0,i.kt)("p",null,"As you're probably aware jQuery currently exists in 2 branches; the 1.10.x branch which supports IE 6-8 and the 2.0.x branch which doesn't. However there is only 1 jQuery inside NuGet. Let's click on install and see if we can select a specific version:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-Phqw0WYN0BM/UqswJPr7X1I/AAAAAAAAAfg/4lpkwUG5p5w/s400/NuGetWebMatrixjQuery.png",alt:null})),(0,i.kt)("p",null,"Hmmm.... As you can see it's 2.0.3 or bust. We can't select a specific version; we're forced to go with the latest and greatest which is a problem if you need to support IE 6-8. So the obvious strategy if you're in this particular camp is to forego NuGet entirely. Go old school. And we could. But let's say we want to keep using NuGet, mindful that a little while down the road we'll be ready to do that upgrade. Can it be done? Let's find out."),(0,i.kt)("h2",{id:"nuget-by-hook-or-by-crook"},"NuGet, by hook or by crook"),(0,i.kt)("p",null,"I've created a new site in WebMatrix using the Empty Site template. Looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-yDf_KCHWImA/Uqs8Csn8UWI/AAAAAAAAAfs/cmnj5ddqDCk/s400/EmptySite.png",alt:null})),(0,i.kt)("p",null,"Lovely."),(0,i.kt)("p",null,"Now to get me some jQuery 1.10.2 goodness. To the console Batman! We've already got the NuGet command line installed (if you haven't you could get it from ",(0,i.kt)("a",{parentName:"p",href:"http://nuget.org/nuget.exe"},"here"),") and so we follow these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"At the ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\")," prompt we enter ",(0,i.kt)("inlineCode",{parentName:"li"},"nuget install jQuery -Version 1.10.2")," and down comes jQuery 1.10.2."),(0,i.kt)("li",{parentName:"ul"},"We move ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\jQuery.1.10.2")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\me\\Documents\\My Web Sites\\Empty Site\\App_Data\\packages\\jQuery.1.10.2"),"."),(0,i.kt)("li",{parentName:"ul"},"Then we delete the ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\me\\Documents\\My Web Sites\\Empty Site\\App_Data\\packages\\jQuery.1.10.2\\Tools")," subfolder."),(0,i.kt)("li",{parentName:"ul"},"We move ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\me\\Documents\\My Web Sites\\Empty Site\\App_Data\\packages\\jQuery.1.10.2\\Content\\Scripts")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\me\\Documents\\My Web Sites\\Empty Site\\Scripts"),"."),(0,i.kt)("li",{parentName:"ul"},"And finally we delete the ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\me\\Documents\\My Web Sites\\Empty Site\\App_Data\\packages\\jQuery.1.10.2\\Content")," folder.")),(0,i.kt)("p",null,"We hit refresh back in WebMatrix and now we get this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-EAfCq2zjNl4/UqtAvAW35PI/AAAAAAAAAf4/u97kbdXWO84/s400/EmptySiteWithjQuery.png",alt:null})),(0,i.kt)("p",null,'If we go to NuGet and select updates you\'ll see that jQuery is now considered "installed" and an update is available. So, in short, our plan worked - yay!'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://3.bp.blogspot.com/-3-pJuMZVJPo/UqtBiuBNdyI/AAAAAAAAAgE/GA_4difKXdQ/s320/NuGetWebMatrixjQueryUpgrade.png",alt:null})),(0,i.kt)("h2",{id:"now-for-bonus-points"},"Now for bonus points"),(0,i.kt)("p",null,'Just to prove that you can upgrade using the WebMatrix tooling following our manual install let\'s do it. Click "Update", then "Yes" and finally "I Accept" to the EULA. You\'ll now see we\'re now on jQuery 2.0.3:'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-6tLukWlzBfg/UqtE_Ni4FaI/AAAAAAAAAgM/AUxszwXhlGo/s400/NuGetWebMatrixjQueryUpgraded.png",alt:null})),(0,i.kt)("h2",{id:"rounding-off"},"Rounding off"),(0,i.kt)("p",null,"In my example I'm only looking at a simple JavaScript library. But the same principal should be able to be applied to any NuGet package as far as I'm aware. Hope that helps!"))}d.isMDXComponent=!0}}]);