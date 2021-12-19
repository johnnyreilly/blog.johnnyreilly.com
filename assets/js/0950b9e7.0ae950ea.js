"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[7938],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},h),{},{components:n})):r.createElement(f,i({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21111:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return h},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"What on earth is jQuery?  And why should I care?",authors:"johnnyreilly",tags:["jqgrid","ajax","jquery","scott gu","microsoft"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2012/01/24/what-on-earth-is-jquery-and-why-should",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-01-24-what-on-earth-is-jquery-and-why-should/index.md",source:"@site/blog/2012-01-24-what-on-earth-is-jquery-and-why-should/index.md",title:"What on earth is jQuery?  And why should I care?",description:"What on earth is jQuery? What's a jQuery plugin?",date:"2012-01-24T00:00:00.000Z",formattedDate:"January 24, 2012",tags:[{label:"jqgrid",permalink:"/tags/jqgrid"},{label:"ajax",permalink:"/tags/ajax"},{label:"jquery",permalink:"/tags/jquery"},{label:"scott gu",permalink:"/tags/scott-gu"},{label:"microsoft",permalink:"/tags/microsoft"}],readingTime:4.525,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"JavaScript - getting to know the beast...",permalink:"/2012/01/30/javascript-getting-to-know-beast"},nextItem:{title:"jqGrid - it's just a far better grid",permalink:"/2012/01/14/jqgrid-its-just-far-better-grid"}},h={authorsImageUrls:[void 0]},p=[],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"What on earth is jQuery? What's a jQuery plugin?"),(0,o.kt)("p",null,'These were the questions I was asking myself shortly after discovering that jqGrid was a "jQuery plugin". I\'d been vaguely aware of the phrase "jQuery" being increasingly mentioned on various techical websites since about 2009. But for some reason I\'d felt no urge to find out what it was. I seem to remember that I read the name "jQuery" and jumped to the perfectly logical (in my head) conclusion that this must be a Java SQL engine of some sort. (After all "j" as a prefix to anything so far had generally been Java and "Query" just rang of databases to me.) Clearly I was wrong - life\'s full of surprises.'),(0,o.kt)("p",null,"I soon discovered that, contrary to expectations, jQuery had nothing to do with Java ","*",(0,o.kt)("strong",{parentName:"p"},"and"),"*"," nothing to do with databases either. It was in fact a JavaScript library written by the amazing ",(0,o.kt)("a",{parentName:"p",href:"http://ejohn.org/about/"},"John Resig"),". At the time I had no love for JavaScript. I now realise I knew nearly nothing about it but my feeling was that JavaScript was awful - evil even. However, given JavaScripts ubiquity in the world of web it seemed to be a necessary evil."),(0,o.kt)("p",null,"I took a look at the ",(0,o.kt)("a",{parentName:"p",href:"http://jquery.com/"},"jQuery website")," and after reading round a bit I noticed that it could be used for ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Ajax_%28programming%29"},"Ajax")," operations. This lead to me reaching the (incorrect) conclusion that jQuery was basically an alternative to the ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/ASP.NET_AJAX#Microsoft_Ajax_Library"},"Microsoft Ajax library")," which we were already using to call various Web Services. But I remained frankly suspicious of jQuery. What was the point of this library? Why did it exist?"),(0,o.kt)("p",null,"I read the the ",(0,o.kt)("a",{parentName:"p",href:"http://weblogs.asp.net/scottgu/archive/2008/09/28/jquery-and-microsoft.aspx"},"blog")," by Scott Gu announcing Microsoft was going to start shipping jQuery with Visual Studio. The Great Gu trusted it. Therefore, I figured, it must be okay... Right?"),(0,o.kt)("p",null,"The thing was, I was quite happy with the Microsoft Ajax library. I was familiar with it. It worked. Why switch? I saw the various operations Scott Gu was doing to divs on the screen using jQuery. I didn't want to do anything like that at all. As I said; I had no love for JavaScript - I viewed it as C#'s simple-minded idiot cousin. My unofficial motto when doing web stuff was \"wherever possible, do it on the server\"."),(0,o.kt)("p",null,"I think I would have ignored jQuery entirely but for the fact of jqGrid. If I wanted to use jqGrid I had to use jQuery as well. In the end I decided I'd allow it house room just for the sake of jqGrid and I'd just ignore it apart from that. And that's how it was for a while."),(0,o.kt)("p",null,"Then I had an epiphany. Okay - that's overplaying it. What actually happened was I realised that something we were doing elsewhere could be done faster and easier with jQuery. It's something so ridiculously feeble that I feel vaguely embarrassed sharing it. Anyway."),(0,o.kt)("p",null,"So, you know the css hover behaviour is only implemented for anchor tags in IE6? No? Well read this ",(0,o.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/36605/ie-6-css-hover-non-anchor-tag"},"Stack Overflow"),' entry - it\'ll clarify. Well, the app that I was working on was an internal web application only used by people with the corporate installation of IE 6 on their desktops. And it was "terribly important" that buttons had hover behaviour. For reasons that now escape me we were doing this by manually adding inline onmouseover / onmouseout event handlers to each input button on the screen in turn in every page in the ',(0,o.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/ms178472.aspx"},"Page_Load")," event server side. I think we were aware it wasn't fantastic to have to wire up each button in turn. But it worked and as with so many development situations we had other pressures, other requirements to fulfil and other fish to fry - so we left it at that."),(0,o.kt)("p",null,"And then it occurred to me... What about using the ",(0,o.kt)("a",{parentName:"p",href:"http://api.jquery.com/class-selector/"},"jQuery class selector")," in conjunction with the ",(0,o.kt)("a",{parentName:"p",href:"http://api.jquery.com/hover/"},"jQuery hover event"),"? I could have one method that I called on a page which would wire up all of my hover behaviours in one fell swoop. I wouldn't need to do input-by-input wireups anymore! Hallelujah! This is what I did:"),(0,o.kt)("p",null,"The buttons I would like to style:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="button" value="I am a button" class="itIsAButton" />\n<input type="button" value="So am I" class="itIsAButton" />\n<input type="button" value="Me too" class="itIsAButton" />\n')),(0,o.kt)("p",null,"My CSS (filter, by the way, is just linear gradients in IE 6-9):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".itIsAButton {\n  filter: progid:DXImageTransform.Microsoft.Gradient (GradientType=0,StartColorStr='#ededed',EndColorStr='#cdcdcd');\n}\n\n.itIsAButton:hover, .itIsAButton_hover /* \"_hover\" is for IE6 */ {\n  filter: progid:DXImageTransform.Microsoft.Gradient (GradientType=0,StartColorStr='#f6f6f6',EndColorStr='#efefef');\n}\n")),(0,o.kt)("p",null,"My jQuery:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$(document).ready(function () {\n  //Add hover behaviour on picker buttons for IE6\n  if ($.browser.msie && parseInt($.browser.version, 10) < 7) {\n    var fnButtonHover = function (handlerInOut) {\n      var $btn = $(this);\n      var sOriginalClass = $btn.prop('class');\n\n      if (handlerInOut.type === 'mouseenter') {\n        //If not already hovering class then apply it\n        if (sOriginalClass.indexOf('_hover') === -1) {\n          $btn.prop('class', sOriginalClass + '_hover');\n        }\n      } else if (handlerInOut.type === 'mouseleave') {\n        //If not already non-hovering class then apply it\n        if (sOriginalClass.indexOf('_hover') !== -1) {\n          $btn.prop('class', sOriginalClass.split('_')[0]);\n        }\n      }\n    };\n\n    $('.itIsAButton').hover(fnButtonHover);\n  }\n});\n")),(0,o.kt)("p",null,"And it worked. I didn't really understand this much about this jQuery \"thing\" at that point but I could now see that it clearly had at least one use. I've come to appreciate that jQuery is one of the best pieces of software I've ever encountered. Over time I may go further into some of the good stuff of jQuery. It is, quite simply, brilliant."))}d.isMDXComponent=!0}}]);