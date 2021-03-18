---
title: "How I'm Using Cassette part 1:Getting Up and Running"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: [asp.net mvc, Andrew Davey, cassette]
hide_table_of_contents: false
---
## Backing into the light

 For a while now, I've been seeking a bulletproof way to handle the following scenarios... all at the same time in the context of an ASP.Net MVC application:

1. How to serve full-fat JavaScript in debug mode and minified in release mode
2. When debugging, ensure that the full-fat JS being served is definitely the latest version; and \***not**\* from the cache. (The time I've wasted due to [304's](<http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#304>)...)
3. How to add Javascript assets that need to be served up from any point in an ASP.Net MVC application (including views, layouts, partial views... even controllers if so desired) whilst preventing duplicate scripts from being served.
4. How to ensure that Javascript files are served up last to any web page to ensure a speedy feel to users (don't want JS blocking rendering).
5. And last but certainly not least the need to load Javascript files in dependency order. If `myView.js` depends on jQuery then clearly `jQuery-latest.js` needs to be served before `myView.js`.

<!-- -->

Now the best, most comprehensive and solid looking solution to this problem has for some time seemed to me to be [Andrew Davey's](<http://aboutcode.net/>)[Cassette](<http://getcassette.net/>). This addresses all my issues in one way or another, as well as bringing in a raft of other features (support for Coffeescript etc).

However, up until now I've slightly shied away from using Cassette as I was under the impression it had a large number of dependencies. That doesn't appear to be the case at all. I also had some vague notion that I could quite simply build my own solution to these problems making use of Microsoft's [Web Optimization](<http://nuget.org/packages/Microsoft.AspNet.Web.Optimization/1.0.0>) which nicely handles my #1 problem above. However, looking again at the documentation Cassette was promising to handle scenarios #1 - #5 without breaking sweat. How could I ignore that? I figured I should do the sensible thing and take another look at it. And, lo and behold, when I started evaluating it again it seemed to be just what I needed.

With the minumum of fuss I was able to get an ASP.Net MVC 4 solution up and running, integrated with Cassette, which dealt with all my scenarios very nicely indeed. I thought it might be good to write this up over a short series of posts and share what my finished code looks like. If you follow the steps I go through below it'll get you started using Cassette. Or you could skip to the end of this post and look at the repo on GitHub. Here we go...

## Adding Cassette to a raw MVC 4 project

Fire up Visual Studio and create a new MVC 4 project (I used the internet template to have some content in place).

Go to the Package Manager Console and key in "`Install-Package Cassette.Aspnet`". Cassette will install itself.

Now you've got Cassette in place you may as well pull out usage of Web Optimization as you're not going to need it any more.Be ruthless, delete App\_Start/BundleConfig.cs and delete the line of code that references it in Global.asax.cs. If you take the time to run the app now you'll see you've miraculously lost your CSS and your JavaScript. The code referencing it is still in place but there's nothing for it to serve up. Don't worry about that - we're going to come back and Cassette-ify things later on...

You'll also notice you now have a CassetteConfiguration.cs file in your project. Open it. Replace the contents with this (I've just commented out the default code and implemented my own CSS and Script bundles based on what is available in the default template of an MVC 4 app):

<script src="https://gist.github.com/johnnyreilly/5393608.js?file=CassetteConfiguration.cs"></script>

In the script above I've created 4 bundles, 1 stylesheet bundle and 3 JavaScript bundles - each of these is roughly equivalent to Web Optimization bundles that are part of the MVC 4 template:

<dl><dt>~/bundles/css</dt><dd>Our site CSS - this includes both our own CSS and the jQuery UI CSS as well. This is the rough equivalent of the Web Optimization bundles <em>~/Content/css</em> and <em>~/Content/themes/base/css</em> brought together.</dd><dt>~/bundles/head</dt><dd>What scripts we want served in the head tag - Modernizr basically. Do note the setting of the <em>PageLocation</em> property - the purpose of this will become apparent later. This is the direct equivalent of the Web Optimization bundle: <em>~/bundles/modernizr</em>.</dd><dt>~/bundles/core</dt><dd>The scripts we want served on every page. For this example project I've picked jQuery and jQuery UI. This is the rough equivalent of the Web Optimization bundles <em>~/bundles/jquery</em> and <em>~/bundles/jqueryui</em> brought together.</dd><dt>~/bundles/validate</dt><dd>The validation scripts (that are dependent on the core scripts). This is the rough equivalent of the Web Optimization bundle: <em>~/bundles/jqueryval</em>.</dd></dl>

At this point we've set up Cassette in our project - although we're not making use of it yet. If you want to double check that everything is working properly then you can fire up your project and browse to "Cassette.axd" in the root. You should see something a bit like this:

![](http://1.bp.blogspot.com/-xM9iU6HjB7o/UWzjAN5EieI/AAAAAAAAAaA/EAXTTnD6vdY/s320/CassetteScripts.png)

## How Web Optimization and Cassette Differ

If you're more familiar with the workings of Web Optimization than Cassette then it's probably worth taking a moment to appreciate an important distinction between the slightly different ways each works.

**Web Optimization**

1. Create bundles as desired.
2. Serve up bundles and / or straight JavaScript files as you like within your MVC views / partial views / layouts. 

<!-- -->

**Cassette**

1. Create bundles for \***all**\* JavaScript files you wish to serve up. You may wish to create some bundles which consist of a number of a number of JavaScript files pushed together. But for each individual file you wish to serve you also need to create an individual bundle. (Failure to do so may mean you fall prey to the "*Cannot find an asset bundle containing the path "\~/Scripts/somePath.js".*")
2. Reference bundles and / or individual JavaScript files in their individual bundles as you like within your MVC views / partial views / layouts / controllers / HTML helpers... the list goes on!
3. Render the referenced scripts to the page (typically just before the closing `body` tag)

<!-- -->

## Making use of our Bundles

Now we've created our bundles let's get the project serving up CSS and JavaScript using Cassette. First the layout file. Take the `_Layout.cshtml` file from this:

<script src="https://gist.github.com/johnnyreilly/5393608.js?file=_LayoutBefore.cshtml"></script>

To this:

<script src="https://gist.github.com/johnnyreilly/5393608.js?file=_LayoutAfter.cshtml"></script>

And now let's take one of the views, `Login.cshtml` and take it from this:

<script src="https://gist.github.com/johnnyreilly/5393608.js?file=LoginBefore.cshtml"></script>

To this:

<script src="https://gist.github.com/johnnyreilly/5393608.js?file=LoginAfter.cshtml"></script>

So now you should be up and running with Cassette. If you want the code behind this then take I've put it on GitHub [here](<https://github.com/johnnyreilly/CassetteDemo>).


