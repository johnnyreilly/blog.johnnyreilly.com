"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[77455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(n),d=s,g=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:s,o[1]=a;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});n(67294);var i=n(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const o={title:"TypeScript Unit Tests with Debug Support",authors:"johnnyreilly",tags:["typescript","Unit Tests","Debug"],image:"./title-image.png",description:"Unit tests are an important part of the development process. This post will outline how to write unit tests using TypeScript and how to debug them as well.",hide_table_of_contents:!1},a=void 0,l={permalink:"/2022/10/01/typescript-unit-tests-with-debug-support",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-10-01-typescript-unit-tests-with-debug-support/index.md",source:"@site/blog/2022-10-01-typescript-unit-tests-with-debug-support/index.md",title:"TypeScript Unit Tests with Debug Support",description:"Unit tests are an important part of the development process. This post will outline how to write unit tests using TypeScript and how to debug them as well.",date:"2022-10-01T00:00:00.000Z",formattedDate:"October 1, 2022",tags:[{label:"typescript",permalink:"/tags/typescript"},{label:"Unit Tests",permalink:"/tags/unit-tests"},{label:"Debug",permalink:"/tags/debug"}],readingTime:6.34,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript Unit Tests with Debug Support",authors:"johnnyreilly",tags:["typescript","Unit Tests","Debug"],image:"./title-image.png",description:"Unit tests are an important part of the development process. This post will outline how to write unit tests using TypeScript and how to debug them as well.",hide_table_of_contents:!1},prevItem:{title:"Bicep: Static Web Apps and Linked Backends",permalink:"/2022/10/14/bicep-static-web-apps-linked-backends"},nextItem:{title:"Faster Docusaurus builds with swc-loader",permalink:"/2022/09/29/faster-docusaurus-build-swc-loader"}},p={image:n(41427).Z,authorsImageUrls:[void 0]},u=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"Setting up our TypeScript project",id:"setting-up-our-typescript-project",level:2},{value:"Setting up the Jest project",id:"setting-up-the-jest-project",level:2},{value:"Set up debugging support",id:"set-up-debugging-support",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function h(e){var{components:t}=e,o=r(e,["components"]);return(0,i.kt)("wrapper",s({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://meticulous.ai/blog/typescript-unit-tests-with-debugging/"})),(0,i.kt)("p",null,"Unit tests are an important part of the development process. They are used to verify that the code is working as intended. This post will outline how to write unit tests using TypeScript and how to debug them as well."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;TypeScript Unit Tests with Debug Support&quot; with TypeScript and Jest logos",src:n(41427).Z,width:"1600",height:"900"})),(0,i.kt)("h2",s({},{id:"unit-tests"}),"Unit Tests"),(0,i.kt)("p",null,"When we are writing unit tests to verify system behaviour, we have to make choices. We need to choose the test framework that we'll use to run our tests. In the JavaScript world we'll be choosing from options including Jest, Mocha, tape, Jasmine and others. There are numerous other testing tools like Cypress and Playwright which cover broader automated testing needs, but we're intentionally just thinking about unit tests right now and so we'll exclude those."),(0,i.kt)("p",null,"Of the various choices available, Jest is (at time of writing) very much the most popular. Since we have do not have a particular reason for favouring one of the frameworks that isn't as popular as Jest, that's what we'll use."),(0,i.kt)("p",null,"Tests are a wonderful tool for asserting system behaviour. However, they can fail for mysterious reasons. When that happens, it can be helpful to see what the computer can see. It can be helpful to be able to debug your tests in the way you might hope to debug your other code."),(0,i.kt)("p",null,"In this post:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We'll set up a TypeScript Node.js project, containing some code we'd like to test."),(0,i.kt)("li",{parentName:"ol"},"We'll configure our project to work with Jest and we'll write a test."),(0,i.kt)("li",{parentName:"ol"},"We'll debug our unit test.")),(0,i.kt)("p",null,"Let's begin."),(0,i.kt)("h2",s({},{id:"setting-up-our-typescript-project"}),"Setting up our TypeScript project"),(0,i.kt)("p",null,"First we'll create ourselves a new Node.js project:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-shell"}),"mkdir typescript-unit-tests-with-debug-support\ncd typescript-unit-tests-with-debug-support\nnpm init --yes\n")),(0,i.kt)("p",null,"At this point we have an empty Node.js project. Let's add TypeScript to it as a dependency and initialise our TypeScript project:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-shell"}),"npm install typescript\nnpx -p typescript tsc --init\n")),(0,i.kt)("p",null,"We now have a fully working TypeScript Node.js project and we're ready to start writing some code!"),(0,i.kt)("p",null,"This is a post about demonstrating unit testing with TypeScript. So naturally we need something to test. We're going write a simple module called ",(0,i.kt)("inlineCode",{parentName:"p"},"greeter.ts")," which has the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"export function makeGreeting(name: string): string {\n  const lengthOfName = name.length;\n  const greeting = `Well hello there ${name}, I see your name is ${lengthOfName} characters long!`;\n  return greeting;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"greeter.ts")," is a TypeScript file that contains a single simple function. The ",(0,i.kt)("inlineCode",{parentName:"p"},"makeGreeting")," function takes a string parameter and, over a number of lines, constructs a greeting string which the function returns. The nature of the greeting is inconsequential. However, remember later we want to be able to debug our test. We've intentionally written a function featuring more than one line of code. We've done this so we can demonstrate the benefits of debugging by showing the program state as it is in the process of executing."),(0,i.kt)("h2",s({},{id:"setting-up-the-jest-project"}),"Setting up the Jest project"),(0,i.kt)("p",null,"The next step after setting up our TypeScript Node.js project, is adding tests, and the ability to run them, using Jest."),(0,i.kt)("p",null,"First of all we're going to need to add Jest to our project and initially configure it:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-shell"}),"npm install --save-dev jest\nnpx jest --init\n")),(0,i.kt)("p",null,"As part of the initialisation you should be prompted with a number of questions:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{}),"npx jest --init\n\nThe following questions will help Jest to create a suitable configuration for your project\n\n\u2714 Would you like to use Typescript for the configuration file? \u2026 no\n\u2714 Choose the test environment that will be used for testing \u203a node\n\u2714 Do you want Jest to add coverage reports? \u2026 no\n\u2714 Which provider should be used to instrument code for coverage? \u203a v8\n\u2714 Automatically clear mock calls, instances, contexts and results before every test? \u2026 no\n")),(0,i.kt)("p",null,"We'll select all the defaults; including ",(0,i.kt)("em",{parentName:"p"},"not")," using TypeScript for the configuration file. We don't require a configuration file written in TypeScript to be able to write TypeScript tests. The initialisation will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file which contains the configuration used to run our tests."),(0,i.kt)("p",null,"Next, we'll update the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," section of our ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," to invoke Jest:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-json"}),'  "scripts": {\n    "test": "jest"\n  },\n')),(0,i.kt)("p",null,"At this point we're in a place where we can run tests written in JavaScript. But we want to run tests written in TypeScript. ",(0,i.kt)("a",s({parentName:"p"},{href:"https://jestjs.io/docs/getting-started#using-typescript"}),"Jest supports this scenario well"),", using Babel. So we'll add the dependencies we need:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-shell"}),"npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest\n")),(0,i.kt)("p",null,"With all that done, let's see if we can write a test. We'll create a ",(0,i.kt)("inlineCode",{parentName:"p"},"greeter.test.ts")," file to sit alongside ",(0,i.kt)("inlineCode",{parentName:"p"},"greeter.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"import { makeGreeting } from './greeter';\n\ntest('given a name produces the expected greeting', () => {\n  expect(makeGreeting('George')).toBe(\n    'Well hello there George, I see your name is 6 characters long!'\n  );\n});\n")),(0,i.kt)("p",null,"This simple test, invokes the ",(0,i.kt)("inlineCode",{parentName:"p"},"makeGreeting")," function in our ",(0,i.kt)("inlineCode",{parentName:"p"},"greeter.ts")," file and asserts the return value is as expected. Let us see if we can run our test with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of tests running and passing in the terminal",src:n(83914).Z,width:"866",height:"370"})),(0,i.kt)("p",null,"Success! We've now created a TypeScript project, written a function, written a test for that function and we have the ability to run it."),(0,i.kt)("h2",s({},{id:"set-up-debugging-support"}),"Set up debugging support"),(0,i.kt)("p",null,"The final thing we wanted to tackle was adding debug support. In times past, this was often quite tricky to configure. However, debugging has become much easier due to the excellent ",(0,i.kt)("a",s({parentName:"p"},{href:"https://github.com/jest-community/vscode-jest"}),(0,i.kt)("inlineCode",{parentName:"a"},"vscode-jest")),' project, which is dedicated to making "testing more intuitive and fun". In fact, with this extension the experience is now very "plug and play" which is a great thing.'),(0,i.kt)("p",null,"Inside VS Code, we will install the vscode-jest extension:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of the VS Code Jest extension",src:n(58584).Z,width:"906",height:"352"})),(0,i.kt)("p",null,"Once it's installed, we'll need to restart VS Code, and we may also need to enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"Jest: Start All Runners")," command in VS Codes power bar:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of the Jest: Start All Runners command in VS Code",src:n(45740).Z,width:"1192",height:"350"})),(0,i.kt)("p",null,"Once the Jest runners have started, we start to see the benefits that the VS Code Jest plugin offers. Where tests exist in our code, they are detected by the plugin and run. Depending upon whether tests are passing or failing we will be presented with a red cross or a green tick denoting failure or success directly alongside the code:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of the jest test explorer with a green tick next to a passing test",src:n(61886).Z,width:"2140",height:"406"})),(0,i.kt)("p",null,"Using the test explorer, it's possible to run tests on demand. Even more excitingly, it's now possible to debug them too. If you examine the test explorer and right / command click on a given test, you'll be presented with the option to debug a test:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of the context menu in the Jest explorer featuring the words &quot;Debug Test&quot;",src:n(89574).Z,width:"2140",height:"480"})),(0,i.kt)("p",null,"Excitingly this means exactly what we might hope. If we put breakpoints in our code, when the test runs we'll now hit them. We'll be able to debug and introspect each test that runs:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of a test being debugged",src:n(14522).Z,width:"2480",height:"480"})),(0,i.kt)("p",null,"If you look at the screenshot above you'll see we've stopped on a breakpoint, we're able to examine the context of the program at the point that it has paused. We can step further on in our code, we can do all the useful things that debugging affords us. We have succeeded in debugging."),(0,i.kt)("h2",s({},{id:"conclusion"}),"Conclusion"),(0,i.kt)("p",null,"In this piece we've taken a look at how to get up and running with a unit testable TypeScript project. Beyond that, we've demonstrated how we can debug our TypeScript tests using the VS Code editor."),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"https://meticulous.ai/blog/typescript-unit-tests-with-debugging/"}),"This post was originally published on Meticulous.")))}h.isMDXComponent=!0},14522:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-jest-debug-test-df3894e357383bcdfedfcaf1133309ce.png"},45740:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-jest-start-all-runners-f2b658005aaa5058e5f53945e1833477.png"},89574:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-jest-test-explorer-debug-test-e30494b6c7a343a98d906d146984f9b4.png"},61886:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-jest-test-explorer-cf9d396c8212b3a48beb40625b8585f3.png"},83914:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-of-tests-passing-0b849ef654b02c80b48a2d969237213b.png"},58584:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-of-vscode-jest-d8ec4174a380e090da1608f22f7dde0d.png"},41427:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/title-image-0e63c04f8d1675d5dde527914ccc9f7f.png"}}]);