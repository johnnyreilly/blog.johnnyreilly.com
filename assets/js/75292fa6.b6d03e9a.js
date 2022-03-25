"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[96984],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,d=m["".concat(l,".").concat(b)]||m[b]||c[b]||i;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10074:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),s=["components"],o={title:"azure-pipelines-task-lib and isOutput setVariable",authors:"johnnyreilly",tags:["azure-pipelines-task-lib","Azure Pipelines","custom task"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2020/12/09/azure-pipelines-task-lib-and-isoutput-setvariable",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-12-09-azure-pipelines-task-lib-and-isoutput-setvariable/index.md",source:"@site/blog/2020-12-09-azure-pipelines-task-lib-and-isoutput-setvariable/index.md",title:"azure-pipelines-task-lib and isOutput setVariable",description:'Some blog posts are insightful treatises on the future of web development, some are "here\'s how I solved my problem". This is most assuredly the latter.',date:"2020-12-09T00:00:00.000Z",formattedDate:"December 9, 2020",tags:[{label:"azure-pipelines-task-lib",permalink:"/tags/azure-pipelines-task-lib"},{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"},{label:"custom task",permalink:"/tags/custom-task"}],readingTime:1.615,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"azure-pipelines-task-lib and isOutput setVariable",authors:"johnnyreilly",tags:["azure-pipelines-task-lib","Azure Pipelines","custom task"],hide_table_of_contents:!1},prevItem:{title:"Nullable reference types; CSharp's very own strictNullChecks",permalink:"/2020/12/20/nullable-reference-types-csharp-strictnullchecks"},nextItem:{title:"Visual Studio Marketplace: images in Markdown!",permalink:"/2020/11/28/images-in-markdown-for-azure-devops-marketplace"}},u={authorsImageUrls:[void 0]},c=[],m={toc:c};function b(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Some blog posts are insightful treatises on the future of web development, some are "here\'s how I solved my problem". This is most assuredly the latter.'),(0,i.kt)("p",null,"I'm writing an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/add-build-task?view=azure-devops"},"custom pipelines task extension for Azure Pipelines"),". It's written with TypeScript and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/azure-pipelines-task-lib"},"azure-pipelines-task-lib"),"."),(0,i.kt)("p",null,"The pipeline needs to output a variable. Azure Pipelines does that using the ",(0,i.kt)("inlineCode",{parentName:"p"},"setvariable")," command combined with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#set-a-multi-job-output-variable"},"isOutput=true"),". This looks something like this: ",(0,i.kt)("inlineCode",{parentName:"p"},'##vso[task.setvariable variable=myOutputVar;isOutput=true]this is the value"'),"."),(0,i.kt)("p",null,"The bad news is that the lib ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/azure-pipelines-task-lib/issues/688"},"doesn't presently support ",(0,i.kt)("inlineCode",{parentName:"a"},"isOutput=true")),". Gosh it makes me sad. Hopefully in future it will be resolved. But what now?"),(0,i.kt)("p",null,"For now we can hack ourselves a workaround:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as tl from 'azure-pipelines-task-lib/task';\nimport * as tcm from 'azure-pipelines-task-lib/taskcommand';\nimport * as os from 'os';\n\n/**\n * Sets a variable which will be output as well.\n *\n * @param     name    name of the variable to set\n * @param     val     value to set\n * @param     secret  whether variable is secret.  Multi-line secrets are not allowed.  Optional, defaults to false\n * @returns   void\n */\nexport function setOutputVariable(\n  name: string,\n  val: string,\n  secret = false\n): void {\n  // use the implementation of setVariable to set all the internals,\n  // then subsequently set the output variable manually\n  tl.setVariable(name, val, secret);\n\n  const varValue = val || '';\n\n  // write the command\n  // see https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#set-a-multi-job-output-variable\n  _command(\n    'task.setvariable',\n    {\n      variable: name || '',\n      isOutput: 'true',\n      issecret: (secret || false).toString(),\n    },\n    varValue\n  );\n}\n\nconst _outStream = process.stdout;\n\nfunction _writeLine(str: string): void {\n  _outStream.write(str + os.EOL);\n}\n\nfunction _command(command: string, properties: any, message: string) {\n  const taskCmd = new tcm.TaskCommand(command, properties, message);\n  _writeLine(taskCmd.toString());\n}\n")),(0,i.kt)("p",null,"The above is effectively a wrapper for the existing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/azure-pipelines-task-lib/blob/90e9cde0e509cba77185a80ef3af2fc898fb026c/node/task.ts#L162"},(0,i.kt)("inlineCode",{parentName:"a"},"setVariable")),". However, once it's called into the initial implementation, ",(0,i.kt)("inlineCode",{parentName:"p"},"setOutputVariable")," then writes out the same variable once more, but this time bolting on ",(0,i.kt)("inlineCode",{parentName:"p"},"isOutput=true"),"."),(0,i.kt)("p",null,"Finally, I've raised a PR to see if ",(0,i.kt)("inlineCode",{parentName:"p"},"isOutput")," can be added directly to the library. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/azure-pipelines-task-lib/pull/691"},"You can track progress on that here.")))}b.isMDXComponent=!0}}]);