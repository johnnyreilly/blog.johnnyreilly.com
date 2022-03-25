"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[50218],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return w}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),w=i,d=h["".concat(s,".").concat(w)]||h[w]||u[w]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return w},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={title:"PartialView.ToString()",authors:"johnnyreilly",tags:["asp.net mvc","sward","PartialView"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2015/03/20/partialview-tostring",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-03-20-partialview-tostring/index.md",source:"@site/blog/2015-03-20-partialview-tostring/index.md",title:"PartialView.ToString()",description:"In the name of DRY I found myself puzzling how one could take a PartialViewResult and render it as a string. Simple, right?",date:"2015-03-20T00:00:00.000Z",formattedDate:"March 20, 2015",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"sward",permalink:"/tags/sward"},{label:"PartialView",permalink:"/tags/partial-view"}],readingTime:3.705,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"PartialView.ToString()",authors:"johnnyreilly",tags:["asp.net mvc","sward","PartialView"],hide_table_of_contents:!1},prevItem:{title:"How to activate your emoji keyboard on Android 5.0 (Lollipop)",permalink:"/2015/04/17/how-to-activate-your-emoji-keyboard-on"},nextItem:{title:"Hey tsconfig.json, where have you been all my life?",permalink:"/2015/02/27/hey-tsconfigjson-where-have-you-been"}},c={authorsImageUrls:[void 0]},u=[{value:"What are we trying to do?",id:"what-are-we-trying-to-do",level:2},{value:"Inheritance (it&#39;s so yesterday darling)",id:"inheritance-its-so-yesterday-darling",level:2},{value:"Extension method (sexier syntax)",id:"extension-method-sexier-syntax",level:2},{value:"Favouring Composition over Inheritance (testable)",id:"favouring-composition-over-inheritance-testable",level:2}],h={toc:u};function w(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the name of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"DRY")," I found myself puzzling how one could take a ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialViewResult")," and render it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". Simple, right?"),(0,r.kt)("p",null,"In fact, in my head this was already a solved problem. I mean I've written about this ",(0,r.kt)("a",{parentName:"p",href:"http://blog.icanmakethiswork.io/2012/07/rendering-partial-view-to-string.html"},"before")," already! Except I haven't. Not really - what I did back then was link to what someone else had written and say \"yay! well done chap - like he said!\". It turns out that was a bad move. That blog appears to be gone and so I'm back to where I was. Ug. Lesson learned."),(0,r.kt)("h2",{id:"what-are-we-trying-to-do"},"What are we trying to do?"),(0,r.kt)("p",null,"So, for the second time of asking, here is how to take a ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialViewResult")," and turn it into a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". It's an invaluable technique to deal with certain scenarios."),(0,r.kt)("p",null,"In my own case I have a toolbar in my application that is first pushed into the UI in my ",(0,r.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml")," by means of a trusty ",(0,r.kt)("inlineCode",{parentName:"p"},'@Html.Action("Toolbar")'),". I wanted to be able to re-use the ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialViewResult")," returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"Toolbar")," on my controller inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," payload. And despite the title of this post, ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialView.ToString()"),(0,r.kt)("em",{parentName:"p"},"doesn't")," quite cut the mustard. Obvious really, if it did then why would I be writing this and you be reading this?"),(0,r.kt)("p",null,"The solution is actually fairly simple. And, purely for swank, I'm going to offer it you 3 ways. Whatever's your poison."),(0,r.kt)("h2",{id:"inheritance-its-so-yesterday-darling"},"Inheritance (it's so yesterday darling)"),(0,r.kt)("p",null,"Yes there was a time when everything was inheritance based. You were rewarded handsomely for making sure that was the case. However, times have changed and (with good reason) people tend to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Composition_over_inheritance"},"favour composition over inheritance"),". So, perhaps just for the memories, let first offer you the inheritance based approach:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected string ConvertPartialViewToString(PartialViewResult partialView)\n{\n  using (var sw = new StringWriter())\n  {\n    partialView.View = ViewEngines.Engines\n      .FindPartialView(ControllerContext, partialView.ViewName).View;\n\n    var vc = new ViewContext(\n      ControllerContext, partialView.View, partialView.ViewData, partialView.TempData, sw);\n    partialView.View.Render(vc, sw);\n\n    var partialViewString = sw.GetStringBuilder().ToString();\n\n    return partialViewString;\n  }\n}\n")),(0,r.kt)("p",null,"The idea being that the above method is placed onto a base controller which your controllers subclass. Thus using this method inside one of the controllers is as simple as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var toolbarHtml = ConvertPartialViewToString(partialViewResult);\n")),(0,r.kt)("h2",{id:"extension-method-sexier-syntax"},"Extension method (sexier syntax)"),(0,r.kt)("p",null,"So the next choice is implementing this as an extension method. Here's my static class which adds ",(0,r.kt)("inlineCode",{parentName:"p"},"ConvertToString")," onto ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialViewResult"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using System.IO;\nusing System.Web.Mvc;\n\nnamespace My.Utilities.Extensions\n{\n  public static class PartialViewResultExtensions\n  {\n    public static string ConvertToString(this PartialViewResult partialView,\n                                              ControllerContext controllerContext)\n    {\n      using (var sw = new StringWriter())\n      {\n        partialView.View = ViewEngines.Engines\n          .FindPartialView(controllerContext, partialView.ViewName).View;\n\n        var vc = new ViewContext(\n          controllerContext, partialView.View, partialView.ViewData, partialView.TempData, sw);\n        partialView.View.Render(vc, sw);\n\n        var partialViewString = sw.GetStringBuilder().ToString();\n\n        return partialViewString;\n      }\n    }\n  }\n}\n")),(0,r.kt)("p",null,"I don't know about you but I do love an extension method - it often makes for much more readable code. In this case we can use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var toolbarHtml = partialViewResult.ConvertToString(ControllerContext);\n")),(0,r.kt)("p",null,"Which I think we can all agree is really rather lovely. Perhaps it would be more lovely if I didn't have to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"ControllerContext")," ","-"," but hey! Still quite nice."),(0,r.kt)("h2",{id:"favouring-composition-over-inheritance-testable"},"Favouring Composition over Inheritance (testable)"),(0,r.kt)("p",null,'Although ASP.Net MVC was designed to be testable there are times when you think "really? Can it be that hard?". In fact for a well thought through discussion on the topic I advise you read ',(0,r.kt)("a",{parentName:"p",href:"http://volaresystems.com/blog/post/2010/08/19/Dont-mock-HttpContext"},"this"),". (I'm aware of the irony implicit in linking to another blog post in a blog post that I only wrote because I first linked to another blog which vanished.... Infinite recursion anybody?)"),(0,r.kt)("p",null,"The conclusion of the linked blog post is twofold"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Don't mock HTTPContext"),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Facade_pattern"},"facade pattern")," instead")),(0,r.kt)("p",null,"Having testable code is not a optional bauble in my view - it's a necessity. So with my final approach that's exactly what I'll do."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using System.Web.Mvc;\n\nnamespace My.Interfaces\n{\n  public interface IMvcInternals\n  {\n    string ConvertPartialViewToString(PartialViewResult partialView, ControllerContext controllerContext);\n  }\n}\n\n// ....\n\nusing System.IO;\nusing System.Web.Mvc;\nusing My.Interfaces;\n\nnamespace My.Utilities\n{\n  public class MvcInternals : IMvcInternals\n  {\n    public string ConvertPartialViewToString(PartialViewResult partialView,\n                                             ControllerContext controllerContext)\n    {\n      using (var sw = new StringWriter())\n      {\n        partialView.View = ViewEngines.Engines\n          .FindPartialView(controllerContext, partialView.ViewName).View;\n\n        var vc = new ViewContext(\n          controllerContext, partialView.View, partialView.ViewData, partialView.TempData, sw);\n        partialView.View.Render(vc, sw);\n\n        var partialViewString = sw.GetStringBuilder().ToString();\n\n        return partialViewString;\n      }\n    }\n  }\n}\n")),(0,r.kt)("p",null,"So here I have a simple interface with a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConvertPartialViewToString")," method on it. This interface can be passed into a controller and then used like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var toolbarHtml = _mvcInternals.ConvertPartialViewToString(partialViewResult, ControllerContext);\n")),(0,r.kt)("p",null,"Ah... that's the sweet mellifluous sound of easily testable code."))}w.isMDXComponent=!0}}]);