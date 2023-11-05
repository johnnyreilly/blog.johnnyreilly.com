---
slug: usestaticfiles-for-aspnet-vold
title: 'UseStaticFiles for ASP.Net Framework'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'Learn how to prevent exposing static files to the public when working with ASP.Net Framework. Discover how to implement an allowlist approach.'
---

This is a guide on how _not_ to expose all your static files to the world at large when working with the ASP.Net Framework. How to move from a blocklisting approach to a allowlisting approach.

<!--truncate-->

Not clear? Stick around; I'll get better. Oh and that's not all, we've also got.... drumroll:

## Support for [HTML5 History API](https://html.spec.whatwg.org/multipage/browsers.html#the-history-interface)!

What that means, in as close to English as I can get it, is real URLs for Single Page Applications. None of that hash-based routing malarkey. So, `https://i-am-your-domain.com/i-am-your-route` rather than `https://i-am-your-domain.com/<em>#/</em>i-am-your-route`. (For a more in depth look at the different sorts of routing SPA's can use then take a look at the [excellent docs](http://rackt.org/history/stable/GettingStarted.html) by the folk behind [React Router](https://github.com/rackt/react-router). These concepts are not React specific and can be applied to any SPA technology.)

## `UseStaticFiles`

You may be aware that historically ASP.Net has been somewhat unusual in its approach to serving static files. Essentially, all the files in a project are theoretically servable. Okay, that's not entirely true; things like the `web.config` files etc are not going to be handed over to someone browsing your site. But other files that you might well want kept away from prying eyes may be. So your [TypeScript](http://www.typescriptlang.org/) files, your [Less](http://lesscss.org/) files are all up for grabs unless you take action to block access to them. This is, and has always been, bad.

The ASP.Net team know this and things are changing with ASP.Net 5. With the new stack you have to say "these are the static files we want people to access" in the form of an `<a href="https://msdn.microsoft.com/en-us/library/dn782589(v=vs.113).aspx">app.UseStaticFiles()</a>` declaration. This is mighty similar to how you do things in other frameworks such as [Express](http://expressjs.com/en/starter/static-files.html). To quote the [docs](https://docs.asp.net/en/latest/fundamentals/static-files.html#serving-static-files):

> By default, static files are stored in the webroot of your project. The location of the webroot is defined in the project’s `project.json` file where the default is wwwroot.
>
> ```json
> "webroot": "wwwroot"
> ```
>
> Static files can be stored in any folder under the webroot and accessed with a relative path to that root. For example, when you create a default Web application project using Visual Studio, there are several folders created within the webroot folder - `css`, `images` and `js`. In order to directly access an image in the images subfolder, the URL would look like the following:
>
> `http://&lt;yourApp&gt;/images/&lt;imageFileName&gt;`

So how do we get this behaviour with ASP.Net vOld? Well, it's just a matter of `web.config` URL rewrite twiddling:

```xml
<configuration>
  <!-- other config -->

  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Map empty URLs to the index.html">
          <match url="^$" />
          <action type="Rewrite" url="/index.html" />
        </rule>
        <rule name="Map all requests with a '.' in to the 'build' directory" stopProcessing="true">
          <match url="^(.*[.].*)$" />
          <action type="Rewrite" url="/build/{R:1}" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

My `webroot` is named `build` rather than `wwwroot`. The 2 URL rewrite rules above do the following:

<dl><dt>Map empty URLs to the index.html</dt><dd>Empty URLs (ie the URL for the root of your site) are mapped to <code>index.html</code>. The <code>index.html</code> in the <code>build</code> folder is the home page of this particular site and the next rule will make sure that we hit that. (Since we haven't set <code>stopProcessing</code> to <code>true</code> for this particular rule the next rule will be processed after this one.)</dd><dt>Map all requests with a '.' in to the 'build' directory</dt><dd>All URLs with a "." in the title (including <code>index.html</code>) are redirected to the <code>build</code> folder. All static files have a "." in them because filenames have suffixes. This essentially means all requests for files are served from the <code>build</code> folder. In this case we have set <code>stopProcessing</code> to <code>true</code> which means that any URLs that matched this rule will be not be affected by any subsequent rules.</dd></dl>

So if anyone sneakily tries to sneakily browse to say, `http://&lt;yourApp&gt;/js/app.ts` then they'll be nicely redirected to the non-existent `build/js/app.ts`. 404 in your face!

## "I am SPArtucus"

When you have a Single Page Application you want the same web experience as a server side rendered web app. What I mean by this is: routing just works. You want people to be able to go to `https://i-am-your-domain.com/i-am-your-route` and get your site at the specified route. Happily, whether you're using React Router, Angular UI Router or something else, the client side is covered. They can be configured to detect the route that you enter at and serve up the SPA in the relevant state. But you have to meet them halfway; the server needs to do its bit.

When a URL is requested that doesn't look like a request for a static file, let's make the (reasonable) assumption that this is a route URL and serve up the shell SPA page. So, for my own example of an Angular 1.x app I want the server to hand over `/build/index.html`.

This is the magic that makes real URLs and SPAs work. Provided the client hasn't requested a static file, every request to the server will be responded to with our very own "I am SPArtucus"; the shell SPA page. This is catered for by the addition of another new rule to our `web.config`:

```xml
<configuration>
  <!-- other config -->

  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Map empty URLs to the index.html">
          <match url="^$" />
          <action type="Rewrite" url="/index.html" />
        </rule>
        <rule name="Map all requests with a '.' in to the 'build' directory" stopProcessing="true">
          <match url="^(.*[.].*)$" />
          <action type="Rewrite" url="/build/{R:1}" />
        </rule>
        <rule name="Map all other URLs to the index.html - this to support our SPA routes">
          <match url="^.*$" />
          <action type="Rewrite" url="/build/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

<dl><dt>Map all other URLs to the index.html - this to support our SPA routes</dt><dd>Our new rule says "whatever URL turns up, if it hasn't been catered for by an existing rule, well it must be a SPA route, so we'll serve up the shell SPA page of <code>build/index.html</code>".</dd></dl>

## Data! Data! Data!.. I can't make bricks without clay.

Sherlock Holmes was onto something; most applications are nothing without data. What you've got at present is an application that carefully restricts access to static files and, for all other requests, serves up our shell SPA page. So let's relax our final rule a little to make data access a thing:

```xml
<configuration>
  <!-- other config -->

  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Map empty URLs to the index.html">
          <match url="^$" />
          <action type="Rewrite" url="/index.html" />
        </rule>
        <rule name="Map all requests with a '.' in to the 'build' directory" stopProcessing="true">
          <match url="^(.*[.].*)$" />
          <action type="Rewrite" url="/build/{R:1}" />
        </rule>
        <rule name="Map non-api URLs to the index.html - this to support our SPA routes">
          <match url="^(api/).*$" negate="true" ignoreCase="true" />
          <action type="Rewrite" url="/build/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

<dl><dt>Map non-api URLs to the index.html - this to support our SPA routes</dt><dd>This amended rule says "whatever URL turns up, <em>unless it begins <code>"api/"</code></em>, if it hasn't been catered for by an existing rule, well it must be a SPA route, so we'll serve up the shell SPA page of <code>build/index.html</code>".</dd></dl>

This allows us to perform data access by prefixing all the Web API routes with `"api/"`. I've picked this because it is the default location for ASP.Net Web API routes. It is (like most things) entirely configurable. To see a working implementation of this complete approach then take a look at the PoorClaresAngular project [here](https://github.com/johnnyreilly/poorclaresarundel/tree/15e7d4ddc0f1c06fe326b44c3bdc71ceb554bf73).
