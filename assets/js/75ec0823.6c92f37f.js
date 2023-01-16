"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[2368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?i.createElement(d,a(a({ref:t},h),{},{components:n})):i.createElement(d,a({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});n(67294);var i=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={title:"Back to the Future with Code First Migrations",authors:"johnnyreilly",tags:["Emmett Brown","Entity Framework","Code First Migrations"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2015/06/19/Back-to-the-Future-with-Code-First-Migrations",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations/index.md",source:"@site/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations/index.md",title:"Back to the Future with Code First Migrations",description:"Code First Migrations. They look a little like this in Visual Studio:",date:"2015-06-19T00:00:00.000Z",formattedDate:"June 19, 2015",tags:[{label:"Emmett Brown",permalink:"/tags/emmett-brown"},{label:"Entity Framework",permalink:"/tags/entity-framework"},{label:"Code First Migrations",permalink:"/tags/code-first-migrations"}],readingTime:2.255,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Back to the Future with Code First Migrations",authors:"johnnyreilly",tags:["Emmett Brown","Entity Framework","Code First Migrations"],hide_table_of_contents:!1},prevItem:{title:"npm please stop hurting Visual Studio",permalink:"/2015/06/29/npm-please-stop-hurting-visual-studio"},nextItem:{title:"Angular UI Bootstrap Datepicker Weirdness",permalink:"/2015/05/23/angular-ui-bootstrap-datepicker-weirdness"}},p={authorsImageUrls:[void 0]},h=[{value:"Great Scott! It&#39;s clearly filename driven",id:"great-scott-its-clearly-filename-driven",level:2},{value:"Whoa, this is heavy! Gimme the project file",id:"whoa-this-is-heavy-gimme-the-project-file",level:2},{value:"Designer.cs... Your kids are gonna love it",id:"designercs-your-kids-are-gonna-love-it",level:2}],c={toc:h};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,i.kt)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Code First Migrations. They look a little like this in Visual Studio:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69682).Z,width:"333",height:"221"})),(0,i.kt)("p",null,"The thing I want you to notice about the image above is not the pithily named migrations. It isn't the natty opacity on everything but the migration files (which I can assure you took me to the very limits of my ",(0,i.kt)("a",r({parentName:"p"},{href:"http://www.gimp.org/"}),"GIMP")," expertise). No, whilst exciting in themselves what I want you to think about is ",(0,i.kt)("em",{parentName:"p"},"the order in which migrations are applied"),". Essentially how the ",(0,i.kt)("inlineCode",{parentName:"p"},"__MigrationHistory")," table in SQL Server ends up being populated in this manner:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62879).Z,width:"640",height:"207"})),(0,i.kt)("p",null,"Because, myself, I didn't really think about this until it came time for me to try and change the ordering of some migrations manually. Do you know how migrations end up the order they do? I bet you don't. But either way, let's watch and see what happens to the pre-enlightenment me as I attempt to take a migration which appears ",(0,i.kt)("em",{parentName:"p"},"before")," a migration I have created locally and move it to ",(0,i.kt)("em",{parentName:"p"},"after")," that same migration."),(0,i.kt)("h2",r({},{id:"great-scott-its-clearly-filename-driven"}),"Great Scott! It's clearly filename driven"),(0,i.kt)("p",null,"That's right - it's blindingly obvious to me. All I need do is take the migration I want to move forwards in time and rename it in Visual Studio. So take our old migration (\"2014 is so pass\xe9 darling\"):"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(35300).Z,width:"302",height:"115"})),(0,i.kt)("p",null,'And rename it to make it new and shiny ("2015! Gorgeous - I love it sweetie!"):'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(38526).Z,width:"359",height:"170"})),(0,i.kt)("p",null,"Perfection right? Wrong! What you've done makes not the slightest jot of difference."),(0,i.kt)("h2",r({},{id:"whoa-this-is-heavy-gimme-the-project-file"}),"Whoa, this is heavy! Gimme the project file"),(0,i.kt)("p",null,"How could I be so dim? I mean it makes perfect sense - before the days of ",(0,i.kt)("a",r({parentName:"p"},{href:"/2015/02/27/hey-tsconfigjson-where-have-you-been"}),"TypeScript's ",(0,i.kt)("inlineCode",{parentName:"a"},"tsconfig.json"))," the default ordering of ",(0,i.kt)("inlineCode",{parentName:"p"},"*.ts")," files being passed to the TypeScript compiler was determined by the ordering of the ",(0,i.kt)("inlineCode",{parentName:"p"},"*.ts")," files in the ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," file. It must be the same for Code First Migrations."),(0,i.kt)("p",null,"So, simply spin up ",(0,i.kt)("a",r({parentName:"p"},{href:"https://notepad-plus-plus.org/"}),"Notepad++")," and let's play hack the XML until each file is referenced in the required order."),(0,i.kt)("p",null,"Well, I'm glad we sorted that out. A quick test to reassure myself of my astuteness. Drum roll.... Fail!! Things are just as they were. Shame on you John Reilly, shame on you."),(0,i.kt)("h2",r({},{id:"designercs-your-kids-are-gonna-love-it"}),"Designer.cs... Your kids are gonna love it"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(22780).Z,width:"640",height:"398"})),(0,i.kt)("p",null,"I want you to look very carefully at this and tell me what you see. We're looking at the mysterious ",(0,i.kt)("inlineCode",{parentName:"p"},"201508121401253_AddSagacityToSage.Designer.cs")," file that sits underneath the main ",(0,i.kt)("inlineCode",{parentName:"p"},"201508121401253_AddSagacityToSage.cs")," file. What could it be.... Give in?"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IMigrationMetadata.Id")," property is returning ",(0,i.kt)("inlineCode",{parentName:"p"},"<u>201408121401253</u>_AddSagacityToSage"),". That is the ",(0,i.kt)("em",{parentName:"p"},"old")," date! Remember? The pass\xe9 one. If you change that property to line up with the file name change you're done. It works."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(66102).Z,width:"1368",height:"764"})),(0,i.kt)("p",null,"Let's say it together: \"Automatic Migrations? Where we're going, we don't need Automatic Migrations.\""))}u.isMDXComponent=!0},62879:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/MigrationHistory-8904b3e0bbb58f999644df4666d69b92.webp"},69682:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Migrations-3ddbdaf0fb45daa7122fc2fa7ef323c9.png"},35300:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Screenshot-2015-06-19-13.07.50-b5f34a048c42393b95bf8ec80d17a178.png"},38526:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Screenshot-2015-06-19-13.08.46-1b8014508b5d028482b42e7c51c2ffc4.png"},22780:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Screenshot-2015-06-19-13.35.40-f22e0660c499845cd98e5551595c0dc3.webp"},66102:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/where-were-going-1320a9efce695617ff7978b03d4a43ec.webp"}}]);