---
slug: typescript-and-requirejs-keep-it-simple
title: 'TypeScript and RequireJS (Keep It Simple)'
authors: johnnyreilly
tags: [typescript]
hide_table_of_contents: false
description: 'This article explains how to mix TypeScript and RequireJS, gives examples of the code changes needed, and shows how to create a demo.'
---

I'm not the first to take a look at mixing TypeScript and RequireJS but I wanted to get it clear in my head. Also, I've always felt the best way to learn is to do. So here we go. I'm going to create a TypeScript and RequireJS demo based on [John Papa's "Keep It Simple RequireJS Demo"](https://github.com/johnpapa/kis-requirejs-demo/).

<!--truncate-->

So let's fire up Visual Studio 2013 and create a new ASP.NET Web Application called “RequireJSandTypeScript” (the empty project template is fine).

Add a new HTML file to the root called “index.html” and base it on “index3.html” from [John Papa’s demo](https://github.com/johnpapa/kis-requirejs-demo/blob/master/ModularDemo/index3.html):

```html
<!doctype html>
<html>
  <head>
    <title>TypeScript with RequireJS</title>
  </head>
  <body>
    <div>
      <h1>TypeScript with RequireJS loading jQuery in Visual Studio land</h1>
    </div>

    <!-- use jquery to load this message-->
    <p id="message"></p>

    <!-- Shortcut to load require and then load main-->
    <script
      src="/scripts/require.js"
      data-main="/scripts/main"
      type="text/javascript"
    ></script>
  </body>
</html>
```

John’s demo depends on jQuery and RequireJS (not too surprisingly) so let’s fire up Nuget and get them:

```ps
Install-Package RequireJS
Install-Package jQuery
```

Whilst we’re at it, let’s get the Definitely Typed typings as well:

```ps
Install-Package jQuery.TypeScript.DefinitelyTyped
```

To my surprise this popped up a dialog.

By "Your project has been configured to support TypeScript." it means that the csproj file has had the following entries added:

```xml
<Project ToolsVersion="12.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <Import Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.Default.props" Condition="Exists('$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.Default.props')" />
  ...
  <PropertyGroup>
    ...
    <TypeScriptToolsVersion>0.9</TypeScriptToolsVersion>
  </PropertyGroup>
  ...
  <Import Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets" Condition="Exists('$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets')" />
  ...
</Project>
```

I’m not sure when this tweak to the Visual Studio tooling was added was added. Perhaps it's part of the [TypeScript 1.0 RC release](https://blogs.msdn.com/b/typescript/archive/2014/02/25/announcing-typescript-1-0rc.aspx); either way it’s pretty nice. Let's press on.

Whilst we’re at it let’s make sure that we’re compiling to AMD (to be RequireJS friendly) by adding in the following csproj tweaks just before the Microsoft.TypeScript.targets Project import statement:

```xml
<PropertyGroup Condition="'$(Configuration)' == 'Debug'">
    <TypeScriptModuleKind>amd</TypeScriptModuleKind>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)' == 'Release'">
    <TypeScriptModuleKind>amd</TypeScriptModuleKind>
  </PropertyGroup>
```

Where was I? Oh yes, typings. So let’s get the RequireJS typings too:

```ps
Install-Package requirejs.TypeScript.DefinitelyTyped
```

Right – looking at index.html we can see from the data-main tag that the first file loaded by RequireJS, our bootstrapper if you will, is main.js. So let’s add ourselves a main.ts based on [John's example](https://github.com/johnpapa/kis-requirejs-demo/blob/master/ModularDemo/Scripts3/main.js) (which will in turn generate a main.js):

```ts
(function () {
  requirejs.config({
    baseUrl: 'scripts',
    paths: {
      jquery: 'jquery-2.1.0',
    },
  });

  require(['alerter'], (alerter) => {
    alerter.showMessage();
  });
})();
```

main.ts depends upon [alerter](https://github.com/johnpapa/kis-requirejs-demo/blob/master/ModularDemo/Scripts3/alerter.js) so let’s add ourselves an alerter.ts as well:

```ts
define('alerter', ['jquery', 'dataservice'], function ($, dataservice) {
  var name = 'John',
    showMessage = function () {
      var msg = dataservice.getMessage();

      $('#message').text(msg + ', ' + name);
    };

  return {
    showMessage: showMessage,
  };
});
```

And a [dataservice.ts](https://github.com/johnpapa/kis-requirejs-demo/blob/master/ModularDemo/Scripts3/dataservice.js):

```ts
define('dataservice', [], function () {
  var msg = 'Welcome to Code Camp',
    getMessage = function () {
      return msg;
    };

  return {
    getMessage: getMessage,
  };
});
```

That all compiles fine. But we’re missing a trick. We’re supposed to be using TypeScripts AMD support so let’s change the code to do just that. First dataservice.ts:

```ts
var msg = 'Welcome to Code Camp';

export function getMessage() {
  return msg;
}
```

Then alerter.ts:

```ts
import $ = require('jquery');
import dataservice = require('dataservice');

var name = 'John';

export function showMessage() {
  var msg = dataservice.getMessage();

  $('#message').text(msg + ', ' + name);
}
```

I know both of the above look slightly different but if you look close you'll see it's really only boilerplate changes. The actual application code is unaffected. Finally, main.ts remains as it is and that's us done; we have ourselves a working demo... Yay!

Thanks to John Papa for creating such a simple demo I could use as the basis for my own demo.

## Closing Thoughts

Unfortunately there is no typing on the alerter reference within main.ts. To my knowledge there is no way to implicitly import the typings here – the only thing you can do is specify them manually. (By the way, if I'm wrong about this then please do set me straight!) That said, this is not so bad really since this main.ts file is essentially just a bootstrapper that kicks things off. All the other files contain the real application code and they have have typings a-go-go. So we're happy.

## Finally for bonus points....

I’ve included the js and js.map files in the project file as they don't seem to be added into the project by Visual Studio when the TS file is created or when it is compiled for the first time. I've also ensured that these files are dependent upon the typescript files they were generated from.

```xml
<TypeScriptCompile Include="Scripts\alerter.ts" />
    <Content Include="Scripts\alerter.js">
        <DependentUpon>alerter.ts</DependentUpon>
    </Content>
    <Content Include="Scripts\alerter.js.map">
        <DependentUpon>alerter.ts</DependentUpon>
    </Content>
    <TypeScriptCompile Include="Scripts\dataservice.ts" />
    <Content Include="Scripts\dataservice.js">
        <DependentUpon>dataservice.ts</DependentUpon>
    </Content>
    <Content Include="Scripts\dataservice.js.map">
        <DependentUpon>dataservice.ts</DependentUpon>
    </Content>
    <TypeScriptCompile Include="Scripts\main.ts" />
    <Content Include="Scripts\main.js">
        <DependentUpon>main.ts</DependentUpon>
    </Content>
    <Content Include="Scripts\main.js.map">
        <DependentUpon>main.ts</DependentUpon>
    </Content>
```

## Want the code for your very own?

Well you can grab it from [GitHub](https://github.com/johnnyreilly/RequireJSandTypeScript).
