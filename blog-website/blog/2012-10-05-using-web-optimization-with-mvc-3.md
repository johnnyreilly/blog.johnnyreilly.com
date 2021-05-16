---
title: "Using Web Optimization with MVC 3"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://blog.johnnyreilly.com/img/profile.jpg
tags: [asp.net, Bundling, MVC 3, Web Optimization, Minification]
hide_table_of_contents: false
---
A while ago I [wrote](http://icanmakethiswork.blogspot.com/2012/06/how-im-structuring-my-javascript-in-web.html#WebOptimization) about optimally serving up JavaScript in web applications. I mentioned that Microsoft had come up with a NuGet package called [Microsoft ASP.NET Web Optimization](http://nuget.org/packages/Microsoft.AspNet.Web.Optimization) which could help with that by minifying and bundling CSS and JavaScript. At the time I was wondering if I would be able to to use this package with pre-existing MVC 3 projects (given that the package had been released together with MVC 4). Happily it turns out you can. But it's not quite as straightforward as I might have liked so I've documented how to get going with this here...

 ## Getting the Basics in Place

To keep it simple I'm going to go through taking a "vanilla" MVC 3 app and enhancing it to work with Web Optimization. To start, follow these basic steps:

1. Open Visual Studio (bet you didn't see that coming!)
2. Create a new MVC 3 application (I called mine "WebOptimizationWithMvc3" to demonstrate my imaginative flair). It doesn't really matter which sort of MVC 3 project you create - I chose an Intranet application but really that's by the by.
3. Update pre-existing NuGet packages
4. At the NuGet console type: "`Install-Package Microsoft.AspNet.Web.Optimization`"



Whilst the NuGet package adds the necessary references to your MVC 3 project it doesn't add the corresponding namespaces to the web.configs. To fix this manually add the following child XML element to the `&lt;namespaces&gt;` element in your root and Views web.config files:

`&lt;add namespace="System.Web.Optimization" /&gt;`

This gives you access to `Scripts` and `Styles` in your views without needing the fully qualified namespace. For reasons best known to Microsoft I had to close down and restart Visual Studio before intellisense started working. You may need to do likewise.

Next up we want to get some JavaScript / CSS bundles in place. To do this, create a folder in the root of your project called "App\_Start". There's nothing magical about this to my knowledge; this is just a convention that's been adopted to store all the bits of startup in one place and avoid clutterage. (I think this grew out of Nuget; see [David Ebbo talking about this here](http://blog.davidebbo.com/2011/02/appstart-folder-convention-for-nuget.html).) Inside your new folder you should add a new class called `BundleConfig.cs` which looks like this:

<script src="https://gist.github.com/3839486.js?file=BundleConfig.cs"></script>

The above is what you get when you create a new MVC 4 project (as it includes Web Optimization out of the box). All it does is create some JavaScript and CSS bundles relating to jQuery, jQuery UI, jQuery Validate, Modernizr and the standard site CSS. Nothing radical here but this example should give you an idea of how bundling can be configured and used. To make use of `BundleConfig.cs` you should modify your `Global.asax.cs` so it looks like this:

<script src="https://gist.github.com/3839486.js?file=Global.asax.cs"></script>

Once you've done this you're ready to start using Web Optimization in your MVC 3 application.

## Switching over \_Layout.cshtml to use Web Optimization

With a "vanilla" MVC 3 app the only use of CSS and JavaScript files is found in `_Layout.cshtml`. To switch over to using Web Optimization you should replace the existing `_Layout.cshtml` with this: (you'll see that the few differences that there are between the 2 are solely around the replacement of link / script tags with references to `Scripts` and `Styles` instead)

<script src="https://gist.github.com/3839486.js?file=_Layout.cshtml"></script>

Do note that in the above `Scripts.Render` call we're rendering out 3 bundles; jQuery, jQuery UI and jQuery Validate. We're not using any of these in `_Layout.cshtml` but rendering these (and their associated link tags) gives us a chance to demonstrate that everything is working as expected.

In your root web.config file make sure that the following tag is in place: `&lt;compilation debug="<b>true</b>" targetFramework="4.0"&gt;`. Then run, the generated HTML should look something like this:

<script src="https://gist.github.com/3839486.js?file=debug  true"></script>

This demonstrates that when the application has debug set to true you see the full scripts / links being rendered out as you would hope (to make your debugging less painful).

Now go back to your root `web.config` file and chance the debug tag to false: `&lt;compilation debug="<b>false</b>" targetFramework="4.0"&gt;`. This time when you run, the generated HTML should look something like this:

<script src="https://gist.github.com/3839486.js?file=debug  false"></script>

This time you can see that in non-debug mode (ie how it would run in Production) minified bundles of scripts and css files are being served up instead of the raw files. And that's it; done.


