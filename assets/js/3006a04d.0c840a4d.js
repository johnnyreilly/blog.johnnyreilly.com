"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[43575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"XML: read and write with Node.js",authors:"johnnyreilly",tags:["XML","Node.js","fast-xml-parser","sitemap","Docusaurus"],image:"./title-image.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/2022/11/22/xml-read-and-write-with-node-js",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-11-22-xml-read-and-write-with-node-js/index.md",source:"@site/blog/2022-11-22-xml-read-and-write-with-node-js/index.md",title:"XML: read and write with Node.js",description:"This post demonstrates reading and writing XML in Node.js using fast-xml-parser. We'll use the Docusauruses XML sitemap as an example.",date:"2022-11-22T00:00:00.000Z",formattedDate:"November 22, 2022",tags:[{label:"XML",permalink:"/tags/xml"},{label:"Node.js",permalink:"/tags/node-js"},{label:"fast-xml-parser",permalink:"/tags/fast-xml-parser"},{label:"sitemap",permalink:"/tags/sitemap"},{label:"Docusaurus",permalink:"/tags/docusaurus"}],readingTime:5.615,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"XML: read and write with Node.js",authors:"johnnyreilly",tags:["XML","Node.js","fast-xml-parser","sitemap","Docusaurus"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Adding lastmod to sitemap based on git commits",permalink:"/2022/11/25/adding-lastmod-to-sitemap-git-commit-date"},nextItem:{title:"Azure AD Claims with Static Web Apps and Azure Functions",permalink:"/2022/11/17/azure-ad-claims-static-web-apps-azure-functions"}},p={image:n(31250).Z,authorsImageUrls:[void 0]},c=[{value:"Docusaurus sitemap",id:"docusaurus-sitemap",level:2},{value:"<code>fast-xml-parser</code>",id:"fast-xml-parser",level:2},{value:"Reading XML",id:"reading-xml",level:2},{value:"Filtering and writing XML",id:"filtering-and-writing-xml",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"PS <code>noindex</code>",id:"ps-noindex",level:2}],m={toc:c};function u(e){var{components:t}=e,s=i(e,["components"]);return(0,a.kt)("wrapper",r({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This post demonstrates reading and writing XML in Node.js using ",(0,a.kt)("inlineCode",{parentName:"p"},"fast-xml-parser"),". We'll use the Docusauruses XML sitemap as an example."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"title image reading &quot;XML: read and write with Node.js&quot; with XML and Docusaurus logos",src:n(31250).Z,width:"800",height:"450"})),(0,a.kt)("h2",r({},{id:"docusaurus-sitemap"}),"Docusaurus sitemap"),(0,a.kt)("p",null,"I was prompted to write this post by wanting to edit the sitemap on my Docusaurus blog. I wanted to remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"/page/")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/tag/")," routes from the sitemap. They effectively serve as duplicate content and I don't want them to be indexed by search engines. (A little more is required to remove them from search engines - see the section at the end of the post.)"),(0,a.kt)("p",null,"I was able to find the sitemap in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder of my Docusaurus site. It's called ",(0,a.kt)("inlineCode",{parentName:"p"},"sitemap.xml")," and it's in the root of the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder. It looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n  <url>\n    <loc>https://blog.johnnyreilly.com/2012/01/07/standing-on-shoulders-of-giants</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.5</priority>\n  </url>\n  <url>\n    <loc>https://blog.johnnyreilly.com/2022/09/20/react-usesearchparamsstate</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.5</priority>\n  </url>\n  <url>\n    <loc>https://blog.johnnyreilly.com/page/10</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.5</priority>\n  </url>\n  <url>\n    <loc>https://blog.johnnyreilly.com/tags/ajax</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.5</priority>\n  </url>\n  \x3c!-- ... --\x3e\n</urlset>\n')),(0,a.kt)("h2",r({},{id:"fast-xml-parser"}),(0,a.kt)("inlineCode",{parentName:"h2"},"fast-xml-parser")),(0,a.kt)("p",null,"After experimenting with a few different XML parsers I settled on ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NaturalIntelligence/fast-xml-parser"}),(0,a.kt)("inlineCode",{parentName:"a"},"fast-xml-parser")),". It's fast, it's simple and it's well maintained. It also handles XML namespaces and attributes well. (This appears to be rare in XML parsers.)"),(0,a.kt)("p",null,"Let's scaffold up an example project alongside our Docusaurus site:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"mkdir trim-xml\ncd trim-xml\nnpx typescript --init\nyarn init\nyarn add @types/node fast-xml-parser ts-node typescript\n")),(0,a.kt)("p",null,"And in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file add a ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," script:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": "ts-node index.ts"\n  }\n}\n')),(0,a.kt)("p",null,"Finally, create an empty ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file."),(0,a.kt)("h2",r({},{id:"reading-xml"}),"Reading XML"),(0,a.kt)("p",null,"Our Docusaurus sitemap is in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder of our Docusaurus site. Let's read it in and parse it into a JavaScript object:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { XMLParser, XMLBuilder } from 'fast-xml-parser';\nimport fs from 'fs';\nimport path from 'path';\n\ninterface Sitemap {\n  urlset: {\n    url: { loc: string; changefreq: string; priority: number }[];\n  };\n}\n\nasync function trimXML() {\n  const sitemapPath = path.resolve(\n    '..',\n    'blog-website',\n    'build',\n    'sitemap.xml'\n  );\n\n  console.log(`Loading ${sitemapPath}`);\n  const sitemapXml = await fs.promises.readFile(sitemapPath, 'utf8');\n\n  const parser = new XMLParser({\n    ignoreAttributes: false,\n  });\n  let sitemap: Sitemap = parser.parse(sitemapXml);\n\n  console.log(sitemap);\n}\n\ntrimXML();\n")),(0,a.kt)("p",null,"We're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLParser")," class to parse the XML into a JavaScript object. We're also using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreAttributes")," option to ensure that attributes are included in the parsed object. When we run this we get the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"Loading /home/john/code/github/blog.johnnyreilly.com/blog-website/build/sitemap.xml\n{\n  '?xml': { '@_version': '1.0', '@_encoding': 'UTF-8' },\n  urlset: {\n    url: [\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object], [Object], [Object],\n      [Object], [Object], [Object], [Object],\n      ... 1481 more items\n    ],\n    '@_xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',\n    '@_xmlns:news': 'http://www.google.com/schemas/sitemap-news/0.9',\n    '@_xmlns:xhtml': 'http://www.w3.org/1999/xhtml',\n    '@_xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',\n    '@_xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1'\n  }\n}\n")),(0,a.kt)("p",null,"As we can see, the ",(0,a.kt)("inlineCode",{parentName:"p"},"fast-xml-parser")," library has parsed the XML into a JavaScript object. We can see that the ",(0,a.kt)("inlineCode",{parentName:"p"},"urlset")," element has an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," elements. Each ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," element has a ",(0,a.kt)("inlineCode",{parentName:"p"},"loc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"changefreq")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"priority")," element. We can also see that the ",(0,a.kt)("inlineCode",{parentName:"p"},"urlset")," element has a number of attributes. This matches the XML we saw earlier and the interface we defined."),(0,a.kt)("h2",r({},{id:"filtering-and-writing-xml"}),"Filtering and writing XML"),(0,a.kt)("p",null,"Now that we have the XML parsed into a JavaScript object we can filter it just like we would any other JavaScript object. We have all the power of JavaScript at our fingertips!"),(0,a.kt)("p",null,'As I mentioned earlier, I want to remove all the URLs that represent duplicate content. This includes "pagination" URLs. These are URLs that are used to navigate between pages of content. For example, the URL ',(0,a.kt)("inlineCode",{parentName:"p"},"https://blog.johnnyreilly.com/page/10"),' is a pagination URL. I want to remove these URLs from the sitemap. I also want to get rid of the "tags" URLs. These are URLs that are used to navigate between posts that have a particular tag. For example, the URL ',(0,a.kt)("inlineCode",{parentName:"p"},"https://blog.johnnyreilly.com/tags/ajax")," is a tag URL. I want to remove these URLs from the sitemap too."),(0,a.kt)("p",null,"This is simplicity itself now we're in JavaScript land. We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," method on the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," array to remove the URLs we don't want:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const rootUrl = 'https://blog.johnnyreilly.com';\nconst filteredUrls = sitemap.urlset.url.filter(\n  (url) =>\n    url.loc !== `${rootUrl}/tags` &&\n    !url.loc.startsWith(rootUrl + '/tags/') &&\n    !url.loc.startsWith(rootUrl + '/page/')\n);\n")),(0,a.kt)("p",null,"We can then update the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," array with the filtered URLs:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"sitemap.urlset.url = filteredUrls;\n")),(0,a.kt)("p",null,"Finally, we can write the XML back out to a file:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const builder = new XMLBuilder({\n  ignoreAttributes: false,\n});\nconst xml = builder.buildObject(sitemap);\n\nconst outputPath = path.resolve('sitemap.xml');\nawait fs.promises.writeFile(outputPath, xml);\n")),(0,a.kt)("p",null,"Note again that we're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreAttributes")," option to ensure that attributes are included in the XML."),(0,a.kt)("p",null,"Let's put it all together into a single file:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { XMLParser, XMLBuilder } from 'fast-xml-parser';\nimport fs from 'fs';\nimport path from 'path';\n\ninterface Sitemap {\n  urlset: {\n    url: { loc: string; changefreq: string; priority: number }[];\n  };\n}\n\nasync function trimXML() {\n  const sitemapPath = path.resolve(\n    '..',\n    'blog-website',\n    'build',\n    'sitemap.xml'\n  );\n\n  console.log(`Loading ${sitemapPath}`);\n  const sitemapXml = await fs.promises.readFile(sitemapPath, 'utf8');\n\n  const parser = new XMLParser({\n    ignoreAttributes: false,\n  });\n  let sitemap: Sitemap = parser.parse(sitemapXml);\n\n  const rootUrl = 'https://blog.johnnyreilly.com';\n  const filteredUrls = sitemap.urlset.url.filter(\n    (url) =>\n      url.loc !== `${rootUrl}/tags` &&\n      !url.loc.startsWith(rootUrl + '/tags/') &&\n      !url.loc.startsWith(rootUrl + '/page/')\n  );\n\n  console.log(\n    `Reducing ${sitemap.urlset.url.length} urls to ${filteredUrls.length} urls`\n  );\n\n  sitemap.urlset.url = filteredUrls;\n\n  const builder = new XMLBuilder({ format: false, ignoreAttributes: false });\n  const shorterSitemapXml = builder.build(sitemap);\n\n  console.log(`Saving ${sitemapPath}`);\n  await fs.promises.writeFile(sitemapPath, shorterSitemapXml);\n}\n\ntrimXML();\n")),(0,a.kt)("p",null,"With that we're done. We can run the script and see the result:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"Loading /github/workspace/blog-website/build/sitemap.xml\nReducing 1598 urls to 281 urls\nSaving /github/workspace/blog-website/build/sitemap.xml\n")),(0,a.kt)("h2",r({},{id:"conclusion"}),"Conclusion"),(0,a.kt)("p",null,"In this post we've seen how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"fast-xml-parser")," library to parse XML into a JavaScript object, operate upon that object and then write it back out to XML."),(0,a.kt)("p",null,"If you'd to see how I'm using this directly on my blog, it's probably worth looking at ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/344"}),"this PR"),"."),(0,a.kt)("h2",r({},{id:"ps-noindex"}),"PS ",(0,a.kt)("inlineCode",{parentName:"h2"},"noindex")),(0,a.kt)("p",null,"This is unrelated to XML processing, but I didn't want to miss this out. ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.google.com/search/docs/crawling-indexing/remove-information"}),"Merely editing the sitemap isn't enough to remove them from search engines"),". We're also going to serve a ",(0,a.kt)("inlineCode",{parentName:"p"},"noindex")," response header for those routes by adjusting the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/static-web-apps/configuration"}),(0,a.kt)("inlineCode",{parentName:"a"},"staticwebapp.config.json")," file of our Static Web App"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  // ...\n  "routes": [\n    // ...\n    {\n      "route": "/tags/*",\n      "headers": {\n        "X-Robots-Tag": "noindex"\n      }\n    },\n    {\n      "route": "/page/*",\n      "headers": {\n        "X-Robots-Tag": "noindex"\n      }\n    }\n  ]\n  // ...\n}\n')))}u.isMDXComponent=!0},31250:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/title-image-993d3a3acf60b36d542817c2ea943ec7.png"}}]);