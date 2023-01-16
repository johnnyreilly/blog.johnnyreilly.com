"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[98751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Running JavaScript Unit Tests in AppVeyor",authors:"johnnyreilly",tags:["Jasmine","javascript","Unit tests","Continuous Integration","AppVeyor","Chutzpah"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2014/09/06/running-javascript-unit-tests-in-appveyor",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2014-09-06-running-javascript-unit-tests-in-appveyor/index.md",source:"@site/blog/2014-09-06-running-javascript-unit-tests-in-appveyor/index.md",title:"Running JavaScript Unit Tests in AppVeyor",description:"With a little help from Chutzpah...",date:"2014-09-06T00:00:00.000Z",formattedDate:"September 6, 2014",tags:[{label:"Jasmine",permalink:"/tags/jasmine"},{label:"javascript",permalink:"/tags/javascript"},{label:"Unit tests",permalink:"/tags/unit-tests"},{label:"Continuous Integration",permalink:"/tags/continuous-integration"},{label:"AppVeyor",permalink:"/tags/app-veyor"},{label:"Chutzpah",permalink:"/tags/chutzpah"}],readingTime:2.955,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Running JavaScript Unit Tests in AppVeyor",authors:"johnnyreilly",tags:["Jasmine","javascript","Unit tests","Continuous Integration","AppVeyor","Chutzpah"],hide_table_of_contents:!1},prevItem:{title:"Unit Testing an Angular Controller with Jasmine",permalink:"/2014/09/10/unit-testing-angular-controller-with"},nextItem:{title:"My Unrequited Love for Isolate Scope",permalink:"/2014/08/12/my-unrequited-love-for-isolate-scope"}},p={authorsImageUrls:[void 0]},u=[{value:"With a little help from Chutzpah...",id:"with-a-little-help-from-chutzpah",level:2},{value:"NuGet me?",id:"nuget-me",level:2},{value:"Now to use Chutzpah",id:"now-to-use-chutzpah",level:2},{value:"Thanks to...",id:"thanks-to",level:2}],h={toc:u};function c(e){var{components:t}=e,o=i(e,["components"]);return(0,a.kt)("wrapper",r({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",r({},{id:"with-a-little-help-from-chutzpah"}),"With a little help from Chutzpah..."),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"http://www.appveyor.com"}),"AppVeyor")," (if you're not aware of it) is a Continuous Integration provider. If you like, it's plug-and-play CI for .NET developers. It's lovely. And what's more it's ",(0,a.kt)("a",r({parentName:"p"},{href:"http://www.appveyor.com/pricing"}),'"free for open-source projects with public repositories hosted on GitHub and BitBucket"'),". Boom! I recently hooked up 2 of my GitHub projects with AppVeyor. It took me all of... 10 minutes. If that? It really is ","*",(0,a.kt)("strong",{parentName:"p"},"that"),"*"," good."),(0,a.kt)("p",null,"But.... There had to be a \"but\" otherwise I wouldn't have been writing the post you're reading. For a little side project of mine called ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/Proverb"}),"Proverb")," there were C# unit tests and there were JavaScript unit tests. And the JavaScript unit tests weren't being run... No fair!!!"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"https://chutzpah.codeplex.com/"}),"Chutzpah")," is a JavaScript test runner which at this point runs QUnit, Jasmine and Mocha JavaScript tests. I use the ",(0,a.kt)("a",r({parentName:"p"},{href:"http://visualstudiogallery.msdn.microsoft.com/f8741f04-bae4-4900-81c7-7c9bfb9ed1fe"}),"Visual Studio extension")," to run Jasmine tests on my machine during development. I've also been able to use ",(0,a.kt)("a",r({parentName:"p"},{href:"/2014/03/17/the-surprisingly-happy-tale-of-visual"}),"Chutzpah for CI purposes with Visual Studio Online / Team Foundation Server"),". So what say we try and do the triple and make it work with AppVeyor too?"),(0,a.kt)("h2",r({},{id:"nuget-me"}),"NuGet me?"),(0,a.kt)("p",null,"In order that I could run Chutzpah I needed Chutzpah to be installed on the build machine. So I had 2 choices:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add Chutzpah direct to the repo"),(0,a.kt)("li",{parentName:"ol"},"Add the ",(0,a.kt)("a",r({parentName:"li"},{href:"http://www.nuget.org/packages/chutzpah"}),"Chutzpah Nuget package")," to the solution")),(0,a.kt)("p",null,"Unsurprisingly I chose #2 - much cleaner."),(0,a.kt)("h2",r({},{id:"now-to-use-chutzpah"}),"Now to use Chutzpah"),(0,a.kt)("p",null,'Time to dust down the PowerShell. I created myself a "before tests script" and added it to my build. It looked a little something like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ps"}),'# Locate Chutzpah\n\n$ChutzpahDir = get-childitem chutzpah.console.exe -recurse | select-object -first 1 | select -expand Directory\n\n# Run tests using Chutzpah and export results as JUnit format to chutzpah-results.xml\n\n$ChutzpahCmd = "$($ChutzpahDir)\\chutzpah.console.exe $($env:APPVEYOR_BUILD_FOLDER)\\AngularTypeScript\\Proverb.Web.Tests.JavaScript /junit .\\chutzpah-results.xml"\nWrite-Host $ChutzpahCmd\nInvoke-Expression $ChutzpahCmd\n\n# Upload results to AppVeyor one by one\n\n$testsuites = [xml](get-content .\\chutzpah-results.xml)\n\n$anyFailures = $FALSE\nforeach ($testsuite in $testsuites.testsuites.testsuite) {\n    write-host " $($testsuite.name)"\n    foreach ($testcase in $testsuite.testcase){\n        $failed = $testcase.failure\n        $time = $testsuite.time\n        if ($testcase.time) { $time = $testcase.time }\n        if ($failed) {\n            write-host "Failed   $($testcase.name) $($testcase.failure.message)"\n            Add-AppveyorTest $testcase.name -Outcome Failed -FileName $testsuite.name -ErrorMessage $testcase.failure.message -Duration $time\n            $anyFailures = $TRUE\n        }\n        else {\n            write-host "Passed   $($testcase.name)"\n            Add-AppveyorTest $testcase.name -Outcome Passed -FileName $testsuite.name -Duration $time\n        }\n\n    }\n}\n\nif ($anyFailures -eq $TRUE){\n    write-host "Failing build as there are broken tests"\n    $host.SetShouldExit(1)\n}\n')),(0,a.kt)("p",null,"What this does is:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run Chutzpah from the installed NuGet package location, passing in the location of my Jasmine unit tests. In the case of my project there is a ",(0,a.kt)("inlineCode",{parentName:"li"},"chutzpah.json")," file in the project which dictates how Chutzpah should run the tests. Also, ",(0,a.kt)("a",r({parentName:"li"},{href:"https://chutzpah.codeplex.com/wikipage?title=Command%20Line%20Options&referringTitle=Documentation"}),"the JUnit flag is also passed")," in order that Chutzpah creates a ",(0,a.kt)("inlineCode",{parentName:"li"},"chutzpah-results.xml")," file of test results in the JUnit format."),(0,a.kt)("li",{parentName:"ol"},"We iterate through test results and tell AppVeyor about the the test passes and failures using the ",(0,a.kt)("a",r({parentName:"li"},{href:"http://www.appveyor.com/docs/build-worker-api"}),"Build Worker API"),"."),(0,a.kt)("li",{parentName:"ol"},"If there have been any failed tests then we fail the build. If you look ",(0,a.kt)("a",r({parentName:"li"},{href:"https://ci.appveyor.com/project/JohnReilly/proverb/build/1.0.17"}),"here")," you can see a deliberately failed build which demo's that this works as it should.")),(0,a.kt)("p",null,"That's a wrap - We now have CI which includes our JavaScript tests! That's right we get to see beautiful screens like these:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(85541).Z,width:"640",height:"578"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4477).Z,width:"579",height:"640"})),(0,a.kt)("h2",r({},{id:"thanks-to"}),"Thanks to..."),(0,a.kt)("p",null,"Thanks to Dan Jones, whose comments on ",(0,a.kt)("a",r({parentName:"p"},{href:"http://help.appveyor.com/discussions/questions/390-running-jasmine-on-appveyor#comment_34433599"}),"this discussion")," provided a number of useful pointers which moved me in the right direction. And thanks to Feador Fitzner who has generously ",(0,a.kt)("a",r({parentName:"p"},{href:"http://help.appveyor.com/discussions/questions/495-integrating-chutzpah-into-appveyor#comment_34447202"}),"said AppVeyor will support JUnit in the future")," which may simplify use of Chutzpah with AppVeyor even further."))}c.isMDXComponent=!0},85541:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot-2014-09-06-21.43.15-5e25ff0477bfc04d2262532fb4cc065c.webp"},4477:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot-2014-09-06-21.49.38-07607fe83d2edca25166cafa3321d7b3.webp"}}]);