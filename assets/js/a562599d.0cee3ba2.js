"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[17068],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=s(t),p=r,m=h["".concat(u,".").concat(p)]||h[p]||d[p]||l;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=h;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},89591:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=t(83117),r=t(80102),l=(t(67294),t(3905)),o=["components"],i={title:"Knockout + Globalize = valueNumber Binding Handler",authors:"johnnyreilly",tags:["Globalize","Knockout","bindingHandler"],hide_table_of_contents:!1},u=void 0,s={permalink:"/2014/03/11/knockout-globalize-valuenumber-binding",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2014-03-11-knockout-globalize-valuenumber-binding/index.md",source:"@site/blog/2014-03-11-knockout-globalize-valuenumber-binding/index.md",title:"Knockout + Globalize = valueNumber Binding Handler",description:"I\u2019ve long used Globalize for my JavaScript number formatting / parsing needs. In a current project I\u2019m using Knockout for the UI. When it came to data-binding numeric values none of the default binding handlers seemed appropriate. What I wanted was a binding handler that:",date:"2014-03-11T00:00:00.000Z",formattedDate:"March 11, 2014",tags:[{label:"Globalize",permalink:"/tags/globalize"},{label:"Knockout",permalink:"/tags/knockout"},{label:"bindingHandler",permalink:"/tags/binding-handler"}],readingTime:3.88,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Knockout + Globalize = valueNumber Binding Handler",authors:"johnnyreilly",tags:["Globalize","Knockout","bindingHandler"],hide_table_of_contents:!1},prevItem:{title:"The Surprisingly Happy Tale of Visual Studio Online, Continous Integration and Chutzpah",permalink:"/2014/03/17/the-surprisingly-happy-tale-of-visual"},nextItem:{title:"Caching and cache-busting with RequireJS",permalink:"/2014/03/05/caching-and-cache-busting-with-requirejs"}},c={authorsImageUrls:[void 0]},d=[{value:"PS Globalize is a-changing",id:"ps-globalize-is-a-changing",level:2}],h={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"I\u2019ve long used ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jquery/globalize/"},"Globalize")," for my JavaScript number formatting / parsing needs. In a current project I\u2019m using Knockout for the UI. When it came to data-binding numeric values none of the default binding handlers seemed appropriate. What I wanted was a binding handler that:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Was specifically purposed for dealing with numeric values"),(0,l.kt)("li",{parentName:"ol"},"Handled the parsing / formatting for the current locale (and I naturally intended to use Globalize for this purpose)")),(0,l.kt)("p",null,"Like so much development we start by standing on the shoulders of giants. In this case it\u2019s the fantastic ",(0,l.kt)("a",{parentName:"p",href:"https://twitter.com/RPNiemeyer"},"Ryan Niemeyer")," who put up a ",(0,l.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/12647270/761388"},"post on StackOverflow")," that got me on the right track."),(0,l.kt)("p",null,"Essentially his approach provides an \u201cinterceptor\u201d mechanism that allows you to validate numeric data entry on input and format numeric data going out as well. Very nice. Into this I plugged Globalize to handle the parsing and formatting. I ended up with the \u201cvalueNumber\u201d binding handler:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"ko.bindingHandlers.valueNumber = {\n  init: function (\n    element,\n    valueAccessor,\n    allBindingsAccessor,\n    viewModel,\n    bindingContext\n  ) {\n    /**\n     * Adapted from the KO hasfocus handleElementFocusChange function\n     */\n    function elementIsFocused() {\n      var isFocused = false,\n        ownerDoc = element.ownerDocument;\n      if ('activeElement' in ownerDoc) {\n        var active;\n        try {\n          active = ownerDoc.activeElement;\n        } catch (e) {\n          // IE9 throws if you access activeElement during page load\n          active = ownerDoc.body;\n        }\n        isFocused = active === element;\n      }\n\n      return isFocused;\n    }\n\n    /**\n     * Adapted from the KO hasfocus handleElementFocusChange function\n     *\n     * @param {boolean} isFocused whether the current element has focus\n     */\n    function handleElementFocusChange(isFocused) {\n      elementHasFocus(isFocused);\n    }\n\n    var observable = valueAccessor(),\n      properties = allBindingsAccessor(),\n      elementHasFocus = ko.observable(elementIsFocused()),\n      handleElementFocusIn = handleElementFocusChange.bind(null, true),\n      handleElementFocusOut = handleElementFocusChange.bind(null, false);\n\n    var interceptor = ko.computed({\n      read: function () {\n        var currentValue = ko.utils.unwrapObservable(observable);\n        if (elementHasFocus()) {\n          return !isNaN(currentValue) &&\n            currentValue !== null &&\n            currentValue !== undefined\n            ? currentValue\n                .toString()\n                .replace('.', Globalize.findClosestCulture().numberFormat['.']) // Displays correct decimal separator for the current culture (so de-DE would format 1.234 as \"1,234\")\n            : null;\n        } else {\n          var format = properties.numberFormat || 'n2',\n            formattedNumber = Globalize.format(currentValue, format);\n\n          return formattedNumber;\n        }\n      },\n      write: function (newValue) {\n        var currentValue = ko.utils.unwrapObservable(observable),\n          numberValue = Globalize.parseFloat(newValue);\n\n        if (!isNaN(numberValue)) {\n          if (numberValue !== currentValue) {\n            // The value has changed so update the observable\n            observable(numberValue);\n          }\n        } else if (newValue.length === 0) {\n          if (properties.isNullable) {\n            // If newValue is a blank string and the isNullable property has been set then nullify the observable\n            observable(null);\n          } else {\n            // If newValue is a blank string and the isNullable property has not been set then set the observable to 0\n            observable(0);\n          }\n        }\n      },\n    });\n\n    ko.utils.registerEventHandler(element, 'focus', handleElementFocusIn);\n    ko.utils.registerEventHandler(element, 'focusin', handleElementFocusIn); // For IE\n    ko.utils.registerEventHandler(element, 'blur', handleElementFocusOut);\n    ko.utils.registerEventHandler(element, 'focusout', handleElementFocusOut); // For IE\n\n    if (element.tagName.toLowerCase() === 'input') {\n      ko.applyBindingsToNode(element, { value: interceptor });\n    } else {\n      ko.applyBindingsToNode(element, { text: interceptor });\n    }\n  },\n};\n")),(0,l.kt)("p",null,"Using this binding handler you just need to drop in a ",(0,l.kt)("inlineCode",{parentName:"p"},"valueNumber")," into your ",(0,l.kt)("inlineCode",{parentName:"p"},"data-bind")," statement where you might previously have used a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," binding. The binding also has a couple of nice hooks in place which you might find useful:"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,'numberFormat (defaults to "n2")'),(0,l.kt)("dd",null,'allows you to specify a format to display your number with. Eg, "c2" would display your number as a currency to 2 decimal places, "p1" would display your number as a percentage to 1 decimal place etc'),(0,l.kt)("dt",null,"isNullable (defaults to false)"),(0,l.kt)("dd",null,"specifies whether your number should be treated as nullable. If it's not then clearing the elements value will set the underlying observable to 0.")),(0,l.kt)("p",null,'Finally when the element gains focus / becomes active the full underlying value is displayed. (Kind of like Excel - like many an app, the one I\'m working on started life as Excel and the users want to keep some of the nice aspects of Excel\'s UI.) To take a scenario, let\'s imagine we have an input element which is applying the "n1" format. The underlying value backing this is 1.234. The valueNumber binding displays this as "1.2" when the input does not have focus and when the element gains focus the full "1.234" is displayed. Credit where it\u2019s due, this is thanks to ',(0,l.kt)("a",{parentName:"p",href:"http://stackoverflow.com/users/1105996/robert-westerlund"},"Robert Westerlund")," who was kind enough to respond to a ",(0,l.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/22313546/761388"},"question of mine on StackOverflow"),"."),(0,l.kt)("p",null,'Finally, here\u2019s a demo using the "de-DE" locale:'),(0,l.kt)("iframe",{width:"100%",height:"400",src:"https://jsfiddle.net/johnny_reilly/jRt3k/embedded/result,js,html",allowFullScreen:"allowFullScreen",frameBorder:"0"}),(0,l.kt)("h2",{id:"ps-globalize-is-a-changing"},"PS Globalize is a-changing"),(0,l.kt)("p",null,"The version of Globalize used in the binding handler is Globalize v0.1.1. This has been available in various forms for quite some time but as I write this the Globalize plugin is in the process of being ported to the ",(0,l.kt)("a",{parentName:"p",href:"http://cldr.unicode.org/"},"CLDR"),". As part of that work it looks like the Globalize API will change. When that gets finalized I\u2019ll try and come back and update this."))}p.isMDXComponent=!0}}]);