"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[93171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Creating Angular UI Routes in the Controller",authors:"johnnyreilly",tags:["AngularJS"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2016/02/29/creating-angular-ui-routes-in-controller",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2016-02-29-creating-angular-ui-routes-in-controller/index.md",source:"@site/blog/2016-02-29-creating-angular-ui-routes-in-controller/index.md",title:"Creating Angular UI Routes in the Controller",description:"So you're creating a link with the Angular UI Router. You're passing more than a few parameters and it's getting kinda big. Something like this:",date:"2016-02-29T00:00:00.000Z",formattedDate:"February 29, 2016",tags:[{label:"AngularJS",permalink:"/tags/angular-js"}],readingTime:1.87,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Creating Angular UI Routes in the Controller",authors:"johnnyreilly",tags:["AngularJS"],hide_table_of_contents:!1},prevItem:{title:"TFS 2012 meet PowerShell, Karma and BuildNumber",permalink:"/2016/03/04/tfs-2012-meet-powershell-karma-and-buildnumber"},nextItem:{title:"Visual Studio, tsconfig.json and external TypeScript compilation",permalink:"/2016/02/19/visual-studio-tsconfigjson-and-external"}},u={authorsImageUrls:[void 0]},c=[{value:"<code>ui-sref</code> in the Controller",id:"ui-sref-in-the-controller",level:2}],p={toc:c};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So you're creating a link with the Angular UI Router. You're passing more than a few parameters and it's getting kinda big. Something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-xml"}),'<a class="contains-icon"\n      ui-sref="Entity.Edit({ entityId: (vm.selectedEntityId ? vm.selectedEntityId: null), initialData: vm.initialData })">\n        <i class="fa fa-pencil"></i>Edit\n   </a>\n')),(0,r.kt)("p",null,"See? It's too long to fit on the screen without wrapping. It's clearly mad and bad."),(0,r.kt)("p",null,"Generally I try to keep the logic in a view to a minimum. It makes the view harder to read, it makes behaviour of the app harder to reason about. Also, it's not testable and (if you're using some kind of static typing like TypeScript) it is entirely out of the realms that a compiler can catch. So what to do? Move the URL generation to the controller. That's what I decided to do after I had a typo in my view which I didn't catch until post-commit."),(0,r.kt)("h2",a({},{id:"ui-sref-in-the-controller"}),(0,r.kt)("inlineCode",{parentName:"h2"},"ui-sref")," in the Controller"),(0,r.kt)("p",null,"Actually, that's not exactly what you want to do. If you look at the ",(0,r.kt)("a",a({parentName:"p"},{href:"http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-sref"}),"Angular UI Router docs")," you will see that ",(0,r.kt)("inlineCode",{parentName:"p"},"ui-sref")," is:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"...a directive that binds a link (",(0,r.kt)("inlineCode",{parentName:"p"},"&lt;a&gt;")," tag) to a state. If the state has an associated URL, the directive will automatically generate & update the href attribute via the ",(0,r.kt)("a",a({parentName:"p"},{href:"http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state#methods_href"}),(0,r.kt)("inlineCode",{parentName:"a"},"$state.href()"))," method.")),(0,r.kt)("p",null,"So what we actually want to do is use the ",(0,r.kt)("inlineCode",{parentName:"p"},"$state.href()")," method in our controller. To take our example above we'll create another method on our controller called ",(0,r.kt)("inlineCode",{parentName:"p"},"getEditUrl")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"export class EntityController {\n  $state: angular.ui.IStateService;\n\n  static $inject = ['$state'];\n  constructor($state: angular.ui.IStateService) {\n    this.$state = $state;\n  }\n\n  //... Other stuff\n\n  getEditUrl() {\n    return this.$state.href('Entity.Edit', {\n      selectedEntityId: this.selectedEntityId ? this.selectedEntityId : null,\n      initialData: this.initialData,\n    });\n  }\n}\n")),(0,r.kt)("p",null,"You can see I'm using TypeScript here; but feel free to strip out the type annotations and go with raw ES6 classes; that'll still give you testability if not static typing."),(0,r.kt)("p",null,"Now we've added the ",(0,r.kt)("inlineCode",{parentName:"p"},"getEditUrl")," method we just need to reference it in our view:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-xml"}),'<a class="contains-icon" ng-href="{{vm.getEditUrl()}}"><i class="fa fa-pencil"></i>Edit</a>\n')),(0,r.kt)("p",null,"Note we've ditched usage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ui-sref")," directive and gone with Angular's native ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.angularjs.org/api/ng/directive/ngHref"}),(0,r.kt)("inlineCode",{parentName:"a"},"ng-href")),". Within that directive we execute our ",(0,r.kt)("inlineCode",{parentName:"p"},"getEditUrl")," as an expression which gives us our route. As a bonus, our view is much less cluttered and comprehensible as a result. How lovely."))}h.isMDXComponent=!0}}]);