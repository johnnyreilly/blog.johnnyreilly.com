---
title: "The TypeScript webpack PWA"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: [workbox, TypeScript, PWA, Service Worker, Webpack]
hide_table_of_contents: false
---
So, there you sit, conflicted. You've got a lovely build setup; it's a thing of beauty. Precious, polished like a diamond, sharpened like a circular saw. There at the core of your carefully crafted setup sits webpack. Heaving, mysterious... powerful.

 There's more. Not only are you sold on webpack, you're all in TypeScript too. But now you've heard tell of "Progressive Web Applications" and "Service Workers".... And you want to be dealt in. You want to build web apps that work offline. It can't work can it? Your build setup's going to be like the creature in the episode where they've taken one too many jumps and it's gone into the foetal position.

So this is the plan kids. Let's take a simple TypeScript, webpack setup and make it a PWA. Like Victoria Wood said...

## [Let's Do It Tonight](<https://youtu.be/lNU5KVa_Tu8>)

How to begin? Well first comes the plagiarism; [here's a simple TypeScript webpack setup](<https://github.com/TypeStrong/ts-loader/tree/master/examples/core-js>). Rob it. Stick a gun to its head and order it onto your hard drive. `yarn install` to pick up your dependencies and then `yarn start` to see what you've got. Something like this:

[![null](<https://2.bp.blogspot.com/-Myu9uP3Vy3M/WhHN8AoAKLI/AAAAAAAAHOo/VtxOTu4S3bEhVIzkPvzt-BfV5c6anSidgCPcBGAYYCw/s320/Screenshot%2B2017-11-19%2B18.29.15.png> =320x138)](<https://2.bp.blogspot.com/-Myu9uP3Vy3M/WhHN8AoAKLI/AAAAAAAAHOo/VtxOTu4S3bEhVIzkPvzt-BfV5c6anSidgCPcBGAYYCw/s1600/Screenshot%2B2017-11-19%2B18.29.15.png>)Beautiful right? And if we `yarn build` we end up with a simple output:

[![null](<https://4.bp.blogspot.com/-EVLkO9g-zSE/WhHPJYhCXJI/AAAAAAAAHO0/rBnRHqsjCE8cHvEPtuPyQqd5DtZDUCgdgCPcBGAYYCw/s320/Screenshot%2B2017-11-19%2B18.34.12.png> =320x119)](<https://4.bp.blogspot.com/-EVLkO9g-zSE/WhHPJYhCXJI/AAAAAAAAHO0/rBnRHqsjCE8cHvEPtuPyQqd5DtZDUCgdgCPcBGAYYCw/s1600/Screenshot%2B2017-11-19%2B18.34.12.png>)To test what we've built out we want to use a simple web server to serve up the `dist` folder. I've got the npm package [http-server](<https://www.npmjs.com/package/http-server>) installed globally for just such an eventuality. So let's `http-server ./dist` and I'm once again looking at our simple app; it looks exactly the same as when I `yarn start`. Smashing. What would we see if we were offline? Well thanks to the magic of Chrome DevTools we can find out. Offline and refresh our browser...

[![null](<https://2.bp.blogspot.com/-6AXev3DTAr8/WhHkJjtRHqI/AAAAAAAAHPI/aTaWZXWQPmIdXSIjoYjBXysWkSJ3wDUJACLcBGAs/s320/Screenshot%2B2017-11-19%2B20.05.19.png> =230x320)](<https://2.bp.blogspot.com/-6AXev3DTAr8/WhHkJjtRHqI/AAAAAAAAHPI/aTaWZXWQPmIdXSIjoYjBXysWkSJ3wDUJACLcBGAs/s1600/Screenshot%2B2017-11-19%2B20.05.19.png>)Not very user friendly. Once we're done, we should be able to refresh and still see our app.

## [Work(box) It](<https://youtu.be/UODX_pYpVxk>)

[Workbox](<https://developers.google.com/web/tools/workbox/>) is a project that makes the setting up of Service Workers (aka the magic that powers PWAs) easier. It supports webpack use cases through the [workbox-webpack-plugin](<https://www.npmjs.com/package/workbox-webpack-plugin>); so let's give it a whirl. Incidentally, there's a [cracking example](<https://developers.google.com/web/tools/workbox/get-started/webpack>) on the Workbox site.

`yarn add workbox-webpack-plugin --dev` adds the plugin to our project. To make use of it, punt your way over to the `webpack.production.config.js` and add an entry for the plugin. We also need to set the `hash` parameter of the html-webpack-plugin to be false; if it's true it'll cause problems for the ServiceWorker.

```js
const WorkboxPlugin = require('workbox-webpack-plugin');

//...

module.exports = {

    //...

    plugins: [

        //...

        new HtmlWebpackPlugin({
            hash: false,
            inject: true,
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),

        new WorkboxPlugin({
            // we want our service worker to cache the dist directory
            globDirectory: 'dist',
            // these are the sorts of files we want to cache
            globPatterns: ['**/*.{html,js,css,png,svg,jpg,gif,json}'],
            // this is where we want our ServiceWorker to be created
            swDest: path.resolve('dist', 'sw.js'),
            // these options encourage the ServiceWorkers to get in there fast 
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        }),
    ]

    //...
};
```

With this in place, `yarn build` will generate a ServiceWorker. Now to alter our code to register it. Open up `index.tsx` and add this to the end of the file:

```js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      // tslint:disable:no-console
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
```

Put it together and...

## What Have We Got?

Let's `yarn build` again.

[![null](<https://3.bp.blogspot.com/-qnRIwI47480/WhH97gl3IcI/AAAAAAAAHQE/cGiYHu46Fy4TpKkoy-DBzRnqIJuocFUdQCLcBGAs/s640/Screenshot%2B2017-11-19%2B21.55.18.png> =640x347)](<https://3.bp.blogspot.com/-qnRIwI47480/WhH97gl3IcI/AAAAAAAAHQE/cGiYHu46Fy4TpKkoy-DBzRnqIJuocFUdQCLcBGAs/s1600/Screenshot%2B2017-11-19%2B21.55.18.png>)Oooohh look! A service worker is with us. Does it work? Let's find out... `http-server ./dist` Browse to [http://localhost:8080](<http://localhost:8080>) and let's have a look at the console.

[![null](<https://2.bp.blogspot.com/-PuY_60KBBag/WhH5V7BSFEI/AAAAAAAAHP4/jeFJYz9TPXMYpQCiblVVIW1M1xJcS9WiwCLcBGAs/s640/Screenshot%2B2017-11-19%2B21.34.54.png> =640x266)](<https://2.bp.blogspot.com/-PuY_60KBBag/WhH5V7BSFEI/AAAAAAAAHP4/jeFJYz9TPXMYpQCiblVVIW1M1xJcS9WiwCLcBGAs/s1600/Screenshot%2B2017-11-19%2B21.34.54.png>)Looks very exciting. So now the test; let's go offline and refresh:

[![null](<https://3.bp.blogspot.com/-uYJ4yOIuJro/WhH_Yj2xRGI/AAAAAAAAHQQ/hqMmJC-HwwkR6sMGbMJyxCpRms0wXccrgCLcBGAs/s640/Screenshot%2B2017-11-19%2B22.01.37.png> =640x338)](<https://3.bp.blogspot.com/-uYJ4yOIuJro/WhH_Yj2xRGI/AAAAAAAAHQQ/hqMmJC-HwwkR6sMGbMJyxCpRms0wXccrgCLcBGAs/s1600/Screenshot%2B2017-11-19%2B22.01.37.png>)You are looking at the 200s of success. You're now running with webpack and TypeScript and you have built a Progressive Web Application. Feel good about life.


