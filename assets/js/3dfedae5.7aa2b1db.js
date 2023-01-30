"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[5424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},30196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Uploading Images to Cloudinary with the Fetch API",authors:"johnnyreilly",tags:["React","Cloudinary"],hide_table_of_contents:!1},i=void 0,p={permalink:"/2018/03/25/uploading-images-to-cloudinary-with-fetch",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2018-03-25-uploading-images-to-cloudinary-with-fetch/index.md",source:"@site/blog/2018-03-25-uploading-images-to-cloudinary-with-fetch/index.md",title:"Uploading Images to Cloudinary with the Fetch API",description:"I was recently checking out a very good post which explained how to upload images using React Dropzone and SuperAgent to Cloudinary.",date:"2018-03-25T00:00:00.000Z",formattedDate:"March 25, 2018",tags:[{label:"React",permalink:"/tags/react"},{label:"Cloudinary",permalink:"/tags/cloudinary"}],readingTime:1.03,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Uploading Images to Cloudinary with the Fetch API",authors:"johnnyreilly",tags:["React","Cloudinary"],hide_table_of_contents:!1},prevItem:{title:"It's Not Dead 2: mobx-react-devtools and the undead",permalink:"/2018/03/26/its-not-dead-2-mobx-react-devtools-and-the-undead"},nextItem:{title:"It's Not Dead: webpack and dead code elimination limitations",permalink:"/2018/03/07/its-not-dead-webpack-and-dead-code"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I was recently checking out a ",(0,r.kt)("a",o({parentName:"p"},{href:"https://css-tricks.com/image-upload-manipulation-react/"}),"very good post")," which explained how to upload images using ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/react-dropzone/react-dropzone"}),"React Dropzone")," and ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/visionmedia/superagent"}),"SuperAgent")," to ",(0,r.kt)("a",o({parentName:"p"},{href:"https://cloudinary.com/"}),"Cloudinary"),"."),(0,r.kt)("p",null,"It's a brilliant post; you should totally read it. Even if you hate images, uploads and JavaScript. However, there was one thing in there that I didn't want; SuperAgent. It's lovely but I'm a ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"Fetch")," guy. That's just how I roll. The question is, how do I do the below using Fetch?"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"handleImageUpload(file) {\n    let upload = request.post(CLOUDINARY_UPLOAD_URL)\n                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)\n                     .field('file', file);\n\n    upload.end((err, response) => {\n      if (err) {\n        console.error(err);\n      }\n\n      if (response.body.secure_url !== '') {\n        this.setState({\n          uploadedFileCloudinaryUrl: response.body.secure_url\n        });\n      }\n    });\n  }\n")),(0,r.kt)("p",null,"Well it actually took me longer to work out than I'd like to admit. But now I have, let me save you the bother. To do the above using Fetch you just need this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"handleImageUpload(file) {\n    const formData = new FormData();\n    formData.append(\"file\", file);\n    formData.append(\"upload_preset\", CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own\n\n    fetch(CLOUDINARY_UPLOAD_URL, {\n      method: 'POST',\n      body: formData\n    })\n      .then(response => response.json())\n      .then(data => {\n        if (data.secure_url !== '') {\n          this.setState({\n            uploadedFileCloudinaryUrl: data.secure_url\n          });\n        }\n      })\n      .catch(err => console.error(err))\n  }\n")),(0,r.kt)("p",null,"To get a pre-canned project to try this with take a look at ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/damonbauer/react-cloudinary"}),"Damon's repo"),"."))}d.isMDXComponent=!0}}]);