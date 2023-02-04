"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[2930],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(g,i(i({ref:t},h),{},{components:a})):n.createElement(g,i({ref:t},h))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},94516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={slug:"open-graph-sharing-previews-guide",title:"Open Graph: a guide to sharable social media previews",authors:"johnnyreilly",tags:["Open Graph"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/open-graph-sharing-previews-guide",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-12-12-open-graph-sharing-previews-guide/index.md",source:"@site/blog/2021-12-12-open-graph-sharing-previews-guide/index.md",title:"Open Graph: a guide to sharable social media previews",description:"The Open Graph protocol has become the standard mechanism for sharing rich content on the web. This post looks at what implementing Open Graph tags for sharable previews (often called social media previews) looks like, the tools you can use and also examines the different platform rendering issue.",date:"2021-12-12T00:00:00.000Z",formattedDate:"December 12, 2021",tags:[{label:"Open Graph",permalink:"/tags/open-graph"}],readingTime:7.76,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"open-graph-sharing-previews-guide",title:"Open Graph: a guide to sharable social media previews",authors:"johnnyreilly",tags:["Open Graph"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Azure Container Apps, Bicep and GitHub Actions",permalink:"/azure-container-apps-bicep-and-github-actions"},nextItem:{title:"Azure Static Web App Deploy Previews with Azure DevOps",permalink:"/azure-static-web-app-deploy-previews-with-azure-devops"}},p={image:a(7092).Z,authorsImageUrls:[void 0]},h=[{value:"Updated: 26 November 2022",id:"updated-26-november-2022",level:2},{value:"Open Graph protocol and sharing",id:"open-graph-protocol-and-sharing",level:2},{value:"Open Graph meta tags",id:"open-graph-meta-tags",level:2},{value:"Tools for testing sharing",id:"tools-for-testing-sharing",level:2},{value:"Sharable preview rendering: not yet standard",id:"sharable-preview-rendering-not-yet-standard",level:2},{value:"<code>og:image</code> type: PNG, JPEG or WebP? What&#39;s best?",id:"ogimage-type-png-jpeg-or-webp-whats-best",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:h};function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Open Graph protocol has become the standard mechanism for sharing rich content on the web. This post looks at what implementing Open Graph tags for sharable previews (often called social media previews) looks like, the tools you can use and also examines the different platform rendering issue."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Open Graph: a guide to sharable social media previews&quot; with the open graph logo and screenshots of twitter shared cards",src:a(7092).Z,width:"1600",height:"900"})),(0,n.kt)("h2",r({},{id:"updated-26-november-2022"}),"Updated: 26 November 2022"),(0,n.kt)("p",null,"I've updated this post to advise on image types to favour."),(0,n.kt)("h2",r({},{id:"open-graph-protocol-and-sharing"}),"Open Graph protocol and sharing"),(0,n.kt)("p",null,"You may have noticed, that when you share a URL, the platform on which you're sharing may display a kind of \"preview\" of the link. Here's an example of sharing a link to a blog on Twitter:"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://twitter.com/johnny_reilly/status/1454092877722800131"}),(0,n.kt)("img",{loading:"lazy",alt:"screenshot of tweet demonstrating sharing",src:a(6981).Z,width:"1197",height:"1392"}))),(0,n.kt)("p",null,'Sharing a link has automagically generated a preview "card" at the bottom of the tweet. It contains an image, it has the title of the blog and it has a description of the post as well.'),(0,n.kt)("p",null,"This looks pretty fabulous and it gives the reader of that tweet some fairly rich information about what might be in that post. It potentially saves readers a click if it's obvious that the post isn't particularly interesting to them. Conversely, it makes it more likely that the reader will click if it does seem intriguing. Sharing previews are an asset."),(0,n.kt)("p",null,"Twitter made this card using a combination of Open Graph metatags (and some custom tags) which my blog surfaces."),(0,n.kt)("h2",r({},{id:"open-graph-meta-tags"}),"Open Graph meta tags"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",r({parentName:"p"},{href:"https://ogp.me/"}),"Open Graph protocol")," came out of Facebook and it describes itself thusly:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.")),(0,n.kt)("p",null,"What Open Graph is all about, is meta tags. Adding meta tags to an HTML page to explicitly define pieces of standardised information. Now there's many purposes for this, and we're interested in just one: sharing."),(0,n.kt)("p",null,"Now that we understand what sharing previews give us, let's understand how they work. The ",(0,n.kt)("a",r({parentName:"p"},{href:"https://ogp.me/#metadata"}),"Open Graph")," website has a great walkthrough of the minimum requirement for Open Graph:"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"og:title"),' - The title of your object as it should appear within the graph, e.g., "The Rock".'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"og:type"),' - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"og:image")," - An image URL which should represent your object within the graph."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"og:url"),' - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "',(0,n.kt)("a",r({parentName:"li"},{href:"https://www.imdb.com/title/tt0117500/%22"}),'https://www.imdb.com/title/tt0117500/"'),".")),(0,n.kt)("p",{parentName:"blockquote"},"As an example, the following is the Open Graph protocol markup for The Rock on IMDB:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<html prefix="og: https://ogp.me/ns#">\n  <head>\n    <title>The Rock (1996)</title>\n    <meta property="og:title" content="The Rock" />\n    <meta property="og:type" content="video.movie" />\n    <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />\n    <meta\n      property="og:image"\n      content="https://ia.media-imdb.com/images/rock.jpg"\n    />\n    ...\n  </head>\n  ...\n</html>\n'))),(0,n.kt)("p",null,"Sharing previews have very similar, but crucially slightly different, requirements. Five tags are required to generate a sharable preview:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"og:title")," - The title of your page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"og:description")," - A description of the content of that page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"og:image")," - An image URL which should appear in the social media share."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"og:url")," - The canonical URL of your web page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"twitter:card")," - A ",(0,n.kt)("a",r({parentName:"li"},{href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#started"}),"custom tag which is only required by Twitter")," indicating the type of share, be it ",(0,n.kt)("inlineCode",{parentName:"li"},'"summary"'),", ",(0,n.kt)("inlineCode",{parentName:"li"},'"summary_large_image"'),", ",(0,n.kt)("inlineCode",{parentName:"li"},'"app"'),", or ",(0,n.kt)("inlineCode",{parentName:"li"},'"player"'),". Probably ",(0,n.kt)("inlineCode",{parentName:"li"},'"summary"')," or ",(0,n.kt)("inlineCode",{parentName:"li"},'"summary_large_image"')," for most use cases.")),(0,n.kt)("p",null,"If we implement these, then our page will offer sharable previews."),(0,n.kt)("p",null,"With this understanding in place; we can take a look at what it would look like to add sharable previews to a website. We'll make ourselves a React website with:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"npx react-static create\n")),(0,n.kt)("p",null,"When prompted, name the site ",(0,n.kt)("inlineCode",{parentName:"p"},"demo")," and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"blank")," template."),(0,n.kt)("p",null,"Please note, nothing that we're doing here is React specific; it's applicable to all websites regardless of the technology they're built with; this is just a straightforward way to demo a website."),(0,n.kt)("p",null,"We're using ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/react-static/react-static"}),(0,n.kt)("inlineCode",{parentName:"a"},"react-static"))," for this demo because it is a static site generator. This is significant because, as a general rule, many platforms that support sharing, do not crawl dynamically generated meta tags. By this we mean, tags generated by JavaScript at runtime. Rather, these tags must be baked into the HTML that is served up, so a static site generator like ",(0,n.kt)("inlineCode",{parentName:"p"},"react-static")," fits the brief well as it takes care of this."),(0,n.kt)("p",null,"We're going to replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"App.js")," that is scaffolded out with our own ",(0,n.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),'import * as React from \'react\';\nimport { Head } from \'react-static\';\nimport \'./app.css\';\n\nfunction App() {\n  const openGraphData = {\n    title: \'Open Graph: a guide to sharing previews\',\n    description:\n      \'This page features the Open Graph protocol markup for sharing previews.\',\n    url: \'https://johnnyreilly.github.io/open-graph-sharing-previews/\',\n    image:\n      \'https://upload.wikimedia.org/wikipedia/commons/7/72/Open_Graph_protocol_logo.png\',\n  };\n  return (\n    <div className="App">\n      <Head>\n        <meta property="og:title" content={openGraphData.title} />\n        <meta property="og:description" content={openGraphData.description} />\n        <meta property="og:url" content={openGraphData.url} />\n        <meta property="og:image" content={openGraphData.image} />\n        <meta name="twitter:card" content="summary" />\n      </Head>\n      <h1>{openGraphData.title}</h1>\n      <img src={openGraphData.image} alt="The Open Graph protocol logo" />\n      <h2>Share it and see!</h2>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,n.kt)("p",null,"The code above renders the required meta tags for sharing previews. When we build and deploy this we can see they show up like so:"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"screenshot of demo with devtools open illustrating the meta tags",src:a(74018).Z,width:"2355",height:"1325"})),(0,n.kt)("h2",r({},{id:"tools-for-testing-sharing"}),"Tools for testing sharing"),(0,n.kt)("p",null,"Now we have a demo, it would be tremendous to be able to test it out. There's various official tools to test your URLs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://cards-dev.twitter.com/validator"}),"Twitter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://developers.facebook.com/tools/debug/"}),"Facebook")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://www.linkedin.com/post-inspector/inspect/"}),"LinkedIn"))),(0,n.kt)("p",null,'There\'s also a number of unoffical "aggregator" tools that attempt to render the appearance of your social previews across multiple platforms to save you going to each tool in turn:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://www.opengraph.xyz/"}),"https://www.opengraph.xyz/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://metatags.io/"}),"https://metatags.io/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://socialsharepreview.com/"}),"https://socialsharepreview.com/"))),(0,n.kt)("p",null,"Let's test out the Twitter validator:"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"screenshot of testing out our site using the twitter validator",src:a(1437).Z,width:"2005",height:"1077"})),(0,n.kt)("p",null,"Terrific! We have sharable previews enabled for the site we've made."),(0,n.kt)("h2",r({},{id:"sharable-preview-rendering-not-yet-standard"}),"Sharable preview rendering: not yet standard"),(0,n.kt)("p",null,"Now we have a sense of what sharing previews look like, what powers them and how to implement them. So far we've looked just at Twitter for examples of sharing previews. However, support for Open Graph sharing previews is widespread. Examples of other places where you can use them include: Facebook, Polywork, Slack, Teams, Linked In, Outlook.com, Discord... The list is now very long indeed."),(0,n.kt)("p",null,"However, each platform implements sharing previews according to their own standard. What does mean? Well, a link shared on Twitter will look different to one shared on Outlook.com. For example:"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"screenshot of an email being sent in outlook with a share preview card to the same blog showing the untruncated title",src:a(33244).Z,width:"1631",height:"483"})),(0,n.kt)("p",null,"Above I'm sharing a link to a blog post. The image is to the left, the title and description is to the right. Now let's look at the same link shared on Twitter:"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://twitter.com/AzureWeekly/status/1436733027489652743"}),(0,n.kt)("img",{loading:"lazy",alt:"screenshot of a tweet where the image in the share preview card has been cropped making the title unreadable",src:a(19131).Z,width:"1204",height:"1337"}))),(0,n.kt)("p",null,"Here the image is above the title and the description. More distressingly, the image has been cropped which renders the title slightly unreadable."),(0,n.kt)("p",null,"So whilst the mechanism for sharing is roughly standardised, the rendering is not. It's not dissimilar to the web in the year 2000. Back then, a single piece of HTML could be rendered in many different ways, depending upon the browser. The same statement is true now for Open Graph sharing. Sharing can look very different depending upon the platform which is displaying the preview. The only way to avoid this at present is to thoroughly on all the platforms where we want to share links; ensuring the sharable previews look acceptable."),(0,n.kt)("h2",r({},{id:"ogimage-type-png-jpeg-or-webp-whats-best"}),(0,n.kt)("inlineCode",{parentName:"h2"},"og:image")," type: PNG, JPEG or WebP? What's best?"),(0,n.kt)("p",null,"Let's think about the type of image we reference in the ",(0,n.kt)("inlineCode",{parentName:"p"},"og:image")," tag for a moment. This is the image that will be displayed in the sharing preview:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />\n')),(0,n.kt)("p",null,"We can use any image format we like. However, there are some considerations to bear in mind. Whilst you might imagine that the image format is not important, it is. This is because not all platforms support all image formats. Whilst say Twitter and Facebook support PNG, JPEG and WebP, other platforms do not. For example, Teams does not support WebP. So if we want to share a link on Teams, we likely want to use a JPEG or PNG image."),(0,n.kt)("p",null,"I should tell you that I learned this the hard way, deciding to use WebP for most of the images on my blog, including the Open Graph image. I was then surprised to find that the images were not displaying in Teams. I had to go back and change the Open Graph images back to PNG. Don't be me."),(0,n.kt)("p",null,'Incidentally, the world could use a "caniuse" for Open Graph sharing previews. I\'d love to see one.'),(0,n.kt)("h2",r({},{id:"conclusion"}),"Conclusion"),(0,n.kt)("p",null,"In this post we've understood what sharable previews are, how to add them to a website, how to test them and some of the rough edges to be aware of."),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://blog.logrocket.com/open-graph-sharable-social-media-previews/"}),"This post was originally published on LogRocket.")),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://blog.logrocket.com/open-graph-sharable-social-media-previews/"})))}d.isMDXComponent=!0},74018:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-of-demo-with-devtools-open-9175e0caae087e98546c1e36cfaf80d2.png"},33244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-of-email-demonstrating-sharing-with-a-non-cropped-image-2ddbdec0484bd20393753981ad31b8b5.png"},19131:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-of-tweet-demonstrating-sharing-with-a-cropped-image-a4bf32936840d57d732941e377b80935.webp"},6981:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-of-tweet-demonstrating-sharing-422aa4496f18dff26a505a6222cff97d.webp"},1437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-of-twitter-validator-54e216720b96b80c77d13328a8416ccb.webp"},7092:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/title-image-82d942edc0e083dd6a80c07e40e68b3f.png"}}]);