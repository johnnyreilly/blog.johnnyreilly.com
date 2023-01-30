"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[90749],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),h=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=h(o),u=a,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var h=2;h<r;h++)i[h]=o[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},10528:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});o(67294);var n=o(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const i={title:"HTML to PDF using a WCF Service",authors:"johnnyreilly",tags:["wkhtmltopdf","html","WCF","pdf"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2013/01/03/html-to-pdf-using-wcf-service",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-01-03-html-to-pdf-using-wcf-service/index.md",source:"@site/blog/2013-01-03-html-to-pdf-using-wcf-service/index.md",title:"HTML to PDF using a WCF Service",description:'TL; DR - "Talk is cheap. Show me the code."',date:"2013-01-03T00:00:00.000Z",formattedDate:"January 3, 2013",tags:[{label:"wkhtmltopdf",permalink:"/tags/wkhtmltopdf"},{label:"html",permalink:"/tags/html"},{label:"WCF",permalink:"/tags/wcf"},{label:"pdf",permalink:"/tags/pdf"}],readingTime:3.13,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"HTML to PDF using a WCF Service",authors:"johnnyreilly",tags:["wkhtmltopdf","html","WCF","pdf"],hide_table_of_contents:!1},prevItem:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker",permalink:"/2013/01/09/twitterbootstrapmvc4-meet-bootstrap"},nextItem:{title:"Getting up to speed with Bloomberg's Open API...",permalink:"/2012/11/13/a-nicer-net-api-for-bloombergs-open-api"}},h={authorsImageUrls:[void 0]},p=[{value:"TL; DR - &quot;Talk is cheap. Show me the code.&quot;",id:"tl-dr---talk-is-cheap-show-me-the-code",level:2},{value:"A little more detail",id:"a-little-more-detail",level:2},{value:"That which binds us",id:"that-which-binds-us",level:2},{value:"Good behaviour",id:"good-behaviour",level:2},{value:"Test Harness",id:"test-harness",level:2}],c={toc:p};function d(e){var{components:t}=e,o=r(e,["components"]);return(0,n.kt)("wrapper",a({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"tl-dr---talk-is-cheap-show-me-the-code"}),'TL; DR - "Talk is cheap. Show me the code."'),(0,n.kt)("p",null,"Some time ago I wrote a ",(0,n.kt)("a",a({parentName:"p"},{href:"/2012/04/05/making-pdfs-from-html-in-c-using"}),"post which demonstrated how you could make PDFs from HTML")," using C# and ",(0,n.kt)("a",a({parentName:"p"},{href:"http://code.google.com/p/wkhtmltopdf/"}),"wkhtmltopdf"),". To my lasting surprise this has been the most popular post I've written. I recently put together an ASP.NET WCF service which exposed this functionality which I thought might be worth sharing. The code can be found on GitHub ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/johnnyreilly/PdfMakerWcfService"}),"here"),"."),(0,n.kt)("h2",a({},{id:"a-little-more-detail"}),"A little more detail"),(0,n.kt)("p",null,"I should say up front that I'm still a little ambivalent about how sensible an idea this is. Behind the scenes this WCF service is remotely firing up wkhtmltopdf using ",(0,n.kt)("inlineCode",{parentName:"p"},"System.Diagnostics.Process"),". I feel a little wary about recommending this as a solution for a variety of not particularly defined reasons. However, I have to say I've found this pretty stable and reliable. Bottom line it seems to work and work consistently. But I though I should include a caveat emptor; there is probably a better approach than this available. Anyway..."),(0,n.kt)("p",null,"There isn't actually a great deal to say about this WCF service. It should (hopefully) just do what it says on the tin. Putting it together didn't involve a great deal of work; essentially it takes the code from the initial blog post and just wraps it in a WCF service called ",(0,n.kt)("inlineCode",{parentName:"p"},"PdfMaker"),". The service exposes 2 methods:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"GetPdf")," ","-"," given a supplied URL this method creates a PDF and then returns it as a Stream to the client"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"GetPdfUrl")," ","-"," given a supplied URL this method creates a PDF and then returns the location of it to the client")),(0,n.kt)("p",null,"Both of these methods also set a Location header in the response indicating the location of the created PDF."),(0,n.kt)("h2",a({},{id:"that-which-binds-us"}),"That which binds us"),(0,n.kt)("p",null,"The service uses ",(0,n.kt)("inlineCode",{parentName:"p"},"webHttpBinding"),'. This is commonly employed when people want to expose a RESTful WCF service. The reason I\'ve used this binding is I wanted a simple "in" when calling the service. I wanted to be able to call the service via AJAX as well as directly by browsing to the service and supplying a URL-encoded URL like this:'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:59002/PdfMaker.svc/GetPdf?url=http%3A%2F%2Fnews.ycombinator.com/"),"You may wonder why I'm using ",(0,n.kt)("a",a({parentName:"p"},{href:"http://news.ycombinator.com"}),"http://news.ycombinator.com")," for the example above. I chose this as Hacker News is a very simple site; very few resources and a small page size. This means the service has less work to do when creating the PDF; it's a quick demo."),(0,n.kt)("p",null,"I should say that this service is arguably ","*","*","not","*","*"," completely RESTful as each GET operation behind the scenes attempts to create a new PDF (arguably a side-effect). These should probably be POST operations as they create a new resource each time they're hit. However, if they were I wouldn't be able to just enter a URL into a browser for testing and that's really useful. So tough, I shake my fist at the devotees of pure REST on this occasion. (If I should be attacked in the street shortly after this blog is posted then the police should be advised this is good line of inquiry...)"),(0,n.kt)("h2",a({},{id:"good-behaviour"}),"Good behaviour"),(0,n.kt)("p",null,"It's worth noting that ",(0,n.kt)("inlineCode",{parentName:"p"},"automaticFormatSelectionEnabled")," set to true on the behaviour so that content negotiation is enabled. Obviously for the ",(0,n.kt)("inlineCode",{parentName:"p"},"GetPdf")," action this is rather meaningless as it's a stream that's passed back. However, for the ",(0,n.kt)("inlineCode",{parentName:"p"},"GetPdfUrl")," action the returned string can either be JSON or XML. The Fiddler screenshots below demonstrate this in action."),(0,n.kt)("h2",a({},{id:"test-harness"}),"Test Harness"),(0,n.kt)("p",null,"As a final touch I added in a test harness in the form of ",(0,n.kt)("inlineCode",{parentName:"p"},"Demo.aspx"),". Here's an example of the output generated when pointing at Hacker News:"),(0,n.kt)("iframe",{src:"https://docs.google.com/file/d/0B87K8-qxOZGFMGNCUWRneUFsVFU/preview",width:"500",height:"500"}),(0,n.kt)("p",null,"And that's it. If there was a need this service could be easily extended to leverage the ",(0,n.kt)("a",a({parentName:"p"},{href:"http://madalgo.au.dk/~jakobt/wkhtmltoxdoc/wkhtmltopdf-0.9.9-doc.html"}),"various options")," that wkhtmltopdf makes available. Hope people find it useful."))}d.isMDXComponent=!0}}]);