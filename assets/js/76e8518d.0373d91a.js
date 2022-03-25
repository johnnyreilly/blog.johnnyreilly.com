"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[35087],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||r;return n?o.createElement(d,l(l({ref:t},c),{},{components:n})):o.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63303:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),l=["components"],i={title:"Hello World Bicep",authors:"johnnyreilly",tags:["Bicep","ARM templates"],image:"./hello-world-bicep.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/2021/04/10/hello-world-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-04-10-hello-world-bicep/index.md",source:"@site/blog/2021-04-10-hello-world-bicep/index.md",title:"Hello World Bicep",description:'Bicep makes Azure Resource Management a great deal simpler than ARM templates. The selling point here is grokkability. This post takes a look at the "Hello World" example recently added to the Bicep repo to appreciate quite what a difference it makes.',date:"2021-04-10T00:00:00.000Z",formattedDate:"April 10, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"ARM templates",permalink:"/tags/arm-templates"}],readingTime:2.675,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Hello World Bicep",authors:"johnnyreilly",tags:["Bicep","ARM templates"],image:"./hello-world-bicep.png",hide_table_of_contents:!1},prevItem:{title:"ts-loader goes webpack 5",permalink:"/2021/04/20/ts-loader-goes-webpack-5"},nextItem:{title:"Bicep meet Azure Pipelines 2",permalink:"/2021/03/23/bicep-meet-azure-pipelines-2"}},c={image:n(29582).Z,authorsImageUrls:[void 0]},m=[{value:"More than configuration",id:"more-than-configuration",level:2},{value:"From terse to verbose",id:"from-terse-to-verbose",level:2}],u={toc:m};function h(e){var t=e.components,i=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bicep makes Azure Resource Management a great deal simpler than ARM templates. The selling point here is grokkability. This post takes a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/bicep/pull/2011"},'"Hello World" example recently added to the Bicep repo')," to appreciate quite what a difference it makes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hello world bicep",src:n(29582).Z,width:"255",height:"255"})),(0,r.kt)("h2",{id:"more-than-configuration"},"More than configuration"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/bicep/tree/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world"},'"Hello World"')," added to the Bicep repo by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChristopherGLewis"},"Chris Lewis")," illustrates the simplest usage of Bicep:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This bicep file takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"yourName")," parameter and adds that to a ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," variable and returns the concatenated string as an ARM output.")),(0,r.kt)("p",null,"This is, when you consider it, the very essence of a computer program. Taking an input, doing some computation and providing an output. When I think about ARM templates, (and because Bicep is transpiled into ARM templates I mentally bracket the two together) I tend to think about resources being deployed. I focus on ",(0,r.kt)("em",{parentName:"p"},"configuration"),", not ",(0,r.kt)("em",{parentName:"p"},"computation")),(0,r.kt)("p",null,"This is an imperfect mental model. ARM templates can do so much more than deploy by slinging strings and numbers. Thanks to the wealth of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-functions"},"template functions")," that exist they have much more power. They can do computation."),(0,r.kt)("p",null,"The Hello World example focuses just on computation."),(0,r.kt)("h2",{id:"from-terse-to-verbose"},"From terse to verbose"),(0,r.kt)("p",null,"The Hello World example is made up of two significant files:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"main.bicep")," - the bicep code"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"main.json")," - the ARM template compiled from the Bicep file")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/bicep/blob/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world/main.bicep"},(0,r.kt)("inlineCode",{parentName:"a"},"main.bicep"))," file amounts to 3 lines of code (I have omitted the comment line):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bicep"},"param yourName string\nvar hello = 'Hello World! - Hi'\n\noutput helloWorld string = '${hello} ${yourName}'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the first line takes the ",(0,r.kt)("em",{parentName:"li"},"input")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"yourName")),(0,r.kt)("li",{parentName:"ul"},"the second line declares a ",(0,r.kt)("inlineCode",{parentName:"li"},"hello")," variable"),(0,r.kt)("li",{parentName:"ul"},"the third line ",(0,r.kt)("em",{parentName:"li"},"computes")," the new value of ",(0,r.kt)("inlineCode",{parentName:"li"},"helloWorld")," based upon ",(0,r.kt)("inlineCode",{parentName:"li"},"hello")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"yourName"),", then passes it as ",(0,r.kt)("em",{parentName:"li"},"output"))),(0,r.kt)("p",null,"Gosh is it ever simple. It's easy to read and it's simple to understand. Even if you don't know Bicep, if you've experience in another language you can likely guess what's happening."),(0,r.kt)("p",null,"Let's compare this with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/bicep/blob/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world/main.json"},(0,r.kt)("inlineCode",{parentName:"a"},"main.json"))," that ",(0,r.kt)("inlineCode",{parentName:"p"},"main.bicep")," is transpiled into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",\n  "contentVersion": "1.0.0.0",\n  "metadata": {\n    "_generator": {\n      "name": "bicep",\n      "version": "dev",\n      "templateHash": "6989941473549654446"\n    }\n  },\n  "parameters": {\n    "yourName": {\n      "type": "string"\n    }\n  },\n  "functions": [],\n  "variables": {\n    "hello": "Hello World! - Hi"\n  },\n  "resources": [],\n  "outputs": {\n    "helloWorld": {\n      "type": "string",\n      "value": "[format(\'{0} {1}\', variables(\'hello\'), parameters(\'yourName\'))]"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The above ARM template expresses exactly the same thing as the Bicep alternative. But that 3 lines of logic has become 27 lines of JSON. We've lost something in the transition. Intent is no longer clear. We've gone from something easy to reason about, to something that is hard to reason about. You need to think a lot less to write the Bicep alternative and that's a ",(0,r.kt)("em",{parentName:"p"},"good")," thing."),(0,r.kt)("p",null,"I was chatting to someone recently who expressed it well by saying:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ARM is the format that the resource providers understand, so really it\u2019s the Azure equivalent of Assembler \u2013 and I don\u2019t know anyone who enjoys coding in Assembler.")),(0,r.kt)("p",null,"This is a great example of the value that Bicep provides. If you'd like to play with the Hello World a little, why not ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/bicepdemo#eJzT1w9OzC3ISVXISM3JyVcozy/KSeEqSCxKzFWozC8t8kvMTVUoLinKzEvnKkssgqqyVVD3ADPCQcoVFXQVPDLVubjyS0sKSksgasAyUJ0g9SrVYOFaBZVqmLm16gCvlitr"},"take it for a spin in the Bicep playground"),"."))}h.isMDXComponent=!0},29582:function(e,t,n){t.Z=n.p+"assets/images/hello-world-bicep-8cc1eb5adf0611f3d44220693bed4915.png"}}]);