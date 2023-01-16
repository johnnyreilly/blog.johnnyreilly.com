"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[81204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Using Bootstrap Tooltips to display jQuery Validation error messages",authors:"johnnyreilly",tags:["Tooltip","Bootstrap","jQuery Validation"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2013/08/17/using-bootstrap-tooltips-to-display",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-08-17-using-bootstrap-tooltips-to-display/index.md",source:"@site/blog/2013-08-17-using-bootstrap-tooltips-to-display/index.md",title:"Using Bootstrap Tooltips to display jQuery Validation error messages",description:"I love jQuery Validation. I was recently putting together a screen which had a lot of different bits of validation going on. And the default jQuery Validation approach of displaying the validation messages next to the element being validated wasn't working for me. That is to say, because of the amount of elements on the form, the appearance of validation messages was really making a mess of the presentation. So what to do?",date:"2013-08-17T00:00:00.000Z",formattedDate:"August 17, 2013",tags:[{label:"Tooltip",permalink:"/tags/tooltip"},{label:"Bootstrap",permalink:"/tags/bootstrap"},{label:"jQuery Validation",permalink:"/tags/j-query-validation"}],readingTime:2.85,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Using Bootstrap Tooltips to display jQuery Validation error messages",authors:"johnnyreilly",tags:["Tooltip","Bootstrap","jQuery Validation"],hide_table_of_contents:!1},prevItem:{title:"Migrating from jquery.validate.unobtrusive.js to jQuery.Validation.Unobtrusive.Native",permalink:"/2013/10/04/migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native"},nextItem:{title:"Announcing jQuery Validation Unobtrusive Native...",permalink:"/2013/08/08/announcing-jquery-validation"}},u={authorsImageUrls:[void 0]},p=[{value:"Tooltips to the rescue!",id:"tooltips-to-the-rescue",level:2}],d={toc:p};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I love jQuery Validation. I was recently putting together a screen which had a lot of different bits of validation going on. And the default jQuery Validation approach of displaying the validation messages next to the element being validated wasn't working for me. That is to say, because of the amount of elements on the form, the appearance of validation messages was really making a mess of the presentation. So what to do?"),(0,r.kt)("h2",a({},{id:"tooltips-to-the-rescue"}),"Tooltips to the rescue!"),(0,r.kt)("p",null,"I was chatting to ",(0,r.kt)("a",a({parentName:"p"},{href:"https://plus.google.com/u/0/116859810359377785616/posts"}),"Marc Talary")," about this and he had the bright idea of using tooltips to display the error messages. Tooltips would allow the existing presentation of the form to remain as is whilst still displaying the messages to the users. Brilliant idea!"),(0,r.kt)("p",null,"After a certain amount of fiddling I came up with a fairly solid mechanism for getting jQuery Validation to display error messages as tooltips which I'll share here. It's worth saying that for the application that Marc and I were working on we already had ",(0,r.kt)("a",a({parentName:"p"},{href:"http://jqueryui.com/"}),"jQuery UI")," in place and so we decided to use the ",(0,r.kt)("a",a({parentName:"p"},{href:"http://jqueryui.com/tooltip/"}),"jQuery UI tooltip"),". This example will use the ",(0,r.kt)("a",a({parentName:"p"},{href:"http://getbootstrap.com/javascript/#tooltips"}),"Bootstrap tooltip")," instead. As much as anything else this demonstrates that you could swap out the tooltip mechanism here with any of your choosing."),(0,r.kt)("iframe",{src:"https://htmlpreview.github.io/?https://gist.github.com/johnnyreilly/5867188/raw/2543a12fbd5c0aaad1da6793b7a7437492be3baf/DemoTooltip.html",width:"100%",height:"350"}),(0,r.kt)("p",null,"Beautiful isn't it? Now look at the source:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link\n      href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css"\n      rel="stylesheet"\n    />\n    <style>\n      form {\n        padding: 10px;\n      }\n      .error {\n        border: 1px solid #b94a48 !important;\n        background-color: #fee !important;\n      }\n    </style>\n  </head>\n  <body>\n    <form>\n      <div class="row">\n        <label for="RequiredDateDemo"\n          >A date is required (eg "15 June 2012"):</label\n        >\n        <input\n          data-msg-date="The field RequiredDateDemo must be a date."\n          data-msg-required="The RequiredDateDemo field is required."\n          data-rule-date="true"\n          data-rule-required="true"\n          id="RequiredDateDemo"\n          name="RequiredDateDemo"\n          type="text"\n          value=""\n        />\n      </div>\n\n      <div class="row">\n        <label for="StringLengthAndRequiredDemo"\n          >A string is required between 5 and 10 characters long:</label\n        >\n        <input\n          data-msg-maxlength="The field StringLengthAndRequiredDemo must be a string with a minimum length of 5 and a maximum length of 10."\n          data-msg-minlength="The field StringLengthAndRequiredDemo must be a string with a minimum length of 5 and a maximum length of 10."\n          data-msg-required="The StringLengthAndRequiredDemo field is required."\n          data-rule-maxlength="10"\n          data-rule-minlength="5"\n          data-rule-required="true"\n          id="StringLengthAndRequiredDemo"\n          name="StringLengthAndRequiredDemo"\n          type="text"\n          value=""\n        />\n      </div>\n\n      <div class="row">\n        <label for="RangeAndNumberDemo"\n          >Must be a number between -20 and 40:</label\n        >\n        <input\n          data-msg-number="The field RangeAndNumberDemo must be a number."\n          data-msg-range="The field RangeAndNumberDemo must be between -20 and 40."\n          data-rule-number="true"\n          data-rule-range="[-20,40]"\n          id="RangeAndNumberDemo"\n          name="RangeAndNumberDemo"\n          type="text"\n          value="-21"\n        />\n      </div>\n\n      <div class="row">\n        <label for="RangeAndNumberDemo">An option must be selected:</label>\n        <select\n          data-msg-required="The DropDownRequiredDemo field is required."\n          data-rule-required="true"\n          id="DropDownRequiredDemo"\n          name="DropDownRequiredDemo"\n        >\n          <option value="">Please select</option>\n          <option value="An Option">An Option</option>\n        </select>\n      </div>\n\n      <div class="row">\n        <button type="submit">Validate</button>\n      </div>\n    </form>\n\n    <script\n      src="//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.js"\n      type="text/javascript"\n    ><\/script>\n    <script\n      src="//ajax.aspnetcdn.com/ajax/jQuery.validate/1.11.1/jquery.validate.js"\n      type="text/javascript"\n    ><\/script>\n    <script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"><\/script>\n    <script type="text/javascript">\n      $(\'form\').validate({\n        showErrors: function (errorMap, errorList) {\n          // Clean up any tooltips for valid elements\n          $.each(this.validElements(), function (index, element) {\n            var $element = $(element);\n\n            $element\n              .data(\'title\', \'\') // Clear the title - there is no error associated anymore\n              .removeClass(\'error\')\n              .tooltip(\'destroy\');\n          });\n\n          // Create new tooltips for invalid elements\n          $.each(errorList, function (index, error) {\n            var $element = $(error.element);\n\n            $element\n              .tooltip(\'destroy\') // Destroy any pre-existing tooltip so we can repopulate with new tooltip content\n              .data(\'title\', error.message)\n              .addClass(\'error\')\n              .tooltip(); // Create a new tooltip based on the error messsage we just set in the title\n          });\n        },\n\n        submitHandler: function (form) {\n          alert(\'This is a valid form!\');\n        },\n      });\n    <\/script>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"All the magic is in the JavaScript, specifically the ",(0,r.kt)("inlineCode",{parentName:"p"},"showErrors")," function that's passed as an option to jQuery Validation. Enjoy!"))}m.isMDXComponent=!0}}]);