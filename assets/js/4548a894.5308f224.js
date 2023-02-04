"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[65865],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),h=r,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return t?o.createElement(d,a(a({ref:n},p),{},{components:t})):o.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},54596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});t(67294);var o=t(3905);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const a={slug:"ef-core-31-breaks-left-join-with-no-navigation-property",title:"EF Core 3.1 breaks left join with no navigation property",authors:"johnnyreilly",tags:["Entity Framework"],hide_table_of_contents:!1},l=void 0,s={permalink:"/ef-core-31-breaks-left-join-with-no-navigation-property",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2020-01-02-ef-core-31-breaks-left-join-with-no-navigation-property/index.md",source:"@site/blog/2020-01-02-ef-core-31-breaks-left-join-with-no-navigation-property/index.md",title:"EF Core 3.1 breaks left join with no navigation property",description:"Just recently my team took on the challenge of upgrading our codebase from .NET Core 2.2 to .NET Core 3.1. Along the way we encountered a quirky issue which caused us much befuddlement. Should you be befuddled too, then maybe this can help you.",date:"2020-01-02T00:00:00.000Z",formattedDate:"January 2, 2020",tags:[{label:"Entity Framework",permalink:"/tags/entity-framework"}],readingTime:2.38,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"ef-core-31-breaks-left-join-with-no-navigation-property",title:"EF Core 3.1 breaks left join with no navigation property",authors:"johnnyreilly",tags:["Entity Framework"],hide_table_of_contents:!1},prevItem:{title:"LICENSE to kill your PWA",permalink:"/license-to-kill-your-pwa"},nextItem:{title:"Teams notification webhooks",permalink:"/teams-notification-webhooks"}},u={authorsImageUrls:[void 0]},p=[{value:"Join me!",id:"join-me",level:2},{value:"Navigation properties to the rescue!",id:"navigation-properties-to-the-rescue",level:2}],m={toc:p};function c(e){var{components:n}=e,t=i(e,["components"]);return(0,o.kt)("wrapper",r({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Just recently my team took on the challenge of upgrading our codebase from .NET Core 2.2 to .NET Core 3.1. Along the way we encountered a quirky issue which caused us much befuddlement. Should you be befuddled too, then maybe this can help you."),(0,o.kt)("p",null,"Whilst running our app, we started encountering an error with an Entity Framework Query that looked like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-cs"}),"var stuffWeCareAbout = await context.Things\n    .Include(thing => thing.ThisIsFine)\n    .Include(thing => thing.Problematic)\n    .Where(thing => thing.CreatedOn > startFromThisTime && thing.CreatedOn < endAtThisTime)\n    .OrderByDescending(thing => thing.CreatedOn)\n    .ToArrayAsync();\n")),(0,o.kt)("h2",r({},{id:"join-me"}),"Join me!"),(0,o.kt)("p",null,"As EF Core tried to join from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Things")," table to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Problematic")," table (some obfuscation in table names here), that which worked in .NET Core 2.2 was ",(0,o.kt)("em",{parentName:"p"},"not")," working in .NET Core 3.1. Digging into the issue, we discovered EF Core was generating an invalid ",(0,o.kt)("inlineCode",{parentName:"p"},"LEFT JOIN"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-sql"}),"fail: Microsoft.EntityFrameworkCore.Database.Command[20102]\n      Failed executing DbCommand (18ms) [Parameters=[@__startFromThisTime_0='?' (DbType = DateTime2), @__endAtThisTime_1='?' (DbType = DateTime2)], CommandType='Text', CommandTimeout='30']\n      SELECT [o].[ThingId], [o].[AnonymousId], [o].[CreatedOn],  [o].[Status], [o].[UpdatedOn], [o0].[Id], [o0].[ThingId], [o0].[Name], [o1].[ThingId], [o1].[Status], [o1].[CreatedOn], [o1].[ThingThingId], [o1].[SentOn]\n      FROM [Things] AS [o]\n      LEFT JOIN [ThisIsFines] AS [o0] ON [o].[ThingId] = [o0].[ThingId]\n      LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]\n      WHERE ([o].[CreatedOn] @__startFromThisTime_0) AND ([o].[CreatedOn] < @__endAtThisTime_1)\n      ORDER BY [o].[CreatedOn] DESC, [o].[ThingId], [o1].[ThingId], [o1].[Status]\nMicrosoft.EntityFrameworkCore.Database.Command: Error: Failed executing DbCommand (18ms) [Parameters=[@__startFromThisTime_0='?' (DbType = DateTime2), @__endAtThisTime_1='?' (DbType = DateTime2)], CommandType='Text', CommandTimeout='30']\nSELECT [o].[ThingId], [o].[AnonymousId], [o].[CreatedOn], [o].[Status], [o].[UpdatedOn], [o0].[Id], [o0].[ThingId], [o0].[Name], [o1].[ThingId], [o1].[Status], [o1].[CreatedOn], [o1].[ThingThingId], [o1].[SentOn]\nFROM [Things] AS [o]\nLEFT JOIN [ThisIsFines] AS [o0] ON [o].[ThingId] = [o0].[ThingId]\nLEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]\nWHERE ([o].[CreatedOn] @__startFromThisTime_0) AND ([o].[CreatedOn] < @__endAtThisTime_1)\nORDER BY [o].[CreatedOn] DESC, [o].[ThingId], [o1].[ThingId], [o1].[Status]\n")),(0,o.kt)("p",null,"Do you see it? Probably not; it took us a while too... The issue lay here:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-sql"}),"LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]\n")),(0,o.kt)("p",null,"This should actually have been:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-sql"}),"LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingId]\n")),(0,o.kt)("p",null,"For some reason EF Core was looking for ",(0,o.kt)("inlineCode",{parentName:"p"},"ThingThingId")," where it should have looked for ",(0,o.kt)("inlineCode",{parentName:"p"},"ThingId"),". But why?"),(0,o.kt)("h2",r({},{id:"navigation-properties-to-the-rescue"}),"Navigation properties to the rescue!"),(0,o.kt)("p",null,"This was the ",(0,o.kt)("inlineCode",{parentName:"p"},"Problematic")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.ComponentModel.DataAnnotations;\nusing System.ComponentModel.DataAnnotations.Schema;\n\nnamespace Treasury.Data.Entities\n{\n    public class Problematic\n    {\n        [ForeignKey("Thing")]\n        [Required]\n        public Guid ThingId { get; set; }\n        [Required]\n        public DateTime CreatedOn { get; set; }\n        public DateTime SentOn { get; set; }\n    }\n}\n')),(0,o.kt)("p",null,"If you look closely you'll see it has a ",(0,o.kt)("inlineCode",{parentName:"p"},"ForeignKey")," but ",(0,o.kt)("em",{parentName:"p"},"no")," accompanying Navigation property. So let's add one:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.ComponentModel.DataAnnotations;\nusing System.ComponentModel.DataAnnotations.Schema;\n\nnamespace Our.App\n{\n    public class Problematic\n    {\n        [ForeignKey("Thing")]\n        [Required]\n        public Guid ThingId { get; set; }\n        [Required]\n        public DateTime CreatedOn { get; set; }\n        public DateTime SentOn { get; set; }\n\n        /* THIS NAVIGATION PROPERTY IS WHAT WE NEEDED!!! */\n        public virtual Thing Thing { get; set; }\n    }\n}\n')),(0,o.kt)("p",null,"With this in place our app starts generating the SQL we need."))}c.isMDXComponent=!0}}]);