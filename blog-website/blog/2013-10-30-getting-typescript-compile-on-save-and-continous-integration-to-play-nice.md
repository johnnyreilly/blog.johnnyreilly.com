---
title: "Getting TypeScript Compile-on-Save and Continuous Integration to play nice"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: [TFS, TypeScript, Build Server, Continuous Integration]
hide_table_of_contents: false
---
Well sort of... Perhaps this post should more accurately called "How to get CI to ignore your TypeScript whilst Visual Studio still compiles it..."

 ## Once there was Web Essentials

When I first started using TypeScript, I was using it in combination with Web Essentials. Those were happy days. I saved my TS file and Web Essentials would kick off TypeScript compilation. Ah bliss. But the good times couldn't last forever and sure enough when version 3.0 of Web Essentials shipped it [pulled support for TypeScript](<http://madskristensen.net/post/Web-Essentials-2013-Where-is-the-TypeScript-support>).

This made me, [and others](<https://typescript.codeplex.com/workitem/1616>), very sad. Essentially we were given the choice between sticking with an old version of Web Essentials (2.9 - the last release before 3.0) and keeping our Compile-on-Save \***or**\* keeping with the latest version of Web Essentials and losing it. And since I understood that newer versions of TypeScript had differences in the compiler flags which slightly broke compatibility with WE 2.9 the latter choice seemed the most sensible...

## But there is still Compile on Save hope!

The information was that we need not lose our Compile on Save. We just need to follow the instructions [here](<https://typescript.codeplex.com/wikipage?title=Compile-on-Save>). Or to quote them:

> Then additionally add (or replace if you had an older PreBuild action for TypeScript) the following at the end of your project file to include TypeScript compilation in your project.
> 
> ...
> 
> For C#-style projects (.csproj):
> 
> <pre>  &lt;PropertyGroup Condition="'$(Configuration)' == 'Debug'"&gt;
>     &lt;TypeScriptTarget&gt;ES5&lt;/TypeScriptTarget&gt;
>     &lt;TypeScriptIncludeComments&gt;true&lt;/TypeScriptIncludeComments&gt;
>     &lt;TypeScriptSourceMap&gt;true&lt;/TypeScriptSourceMap&gt;
>   &lt;/PropertyGroup&gt;
>   &lt;PropertyGroup Condition="'$(Configuration)' == 'Release'"&gt;
>     &lt;TypeScriptTarget&gt;ES5&lt;/TypeScriptTarget&gt;
>     &lt;TypeScriptIncludeComments&gt;false&lt;/TypeScriptIncludeComments&gt;
>     &lt;TypeScriptSourceMap&gt;false&lt;/TypeScriptSourceMap&gt;
>   &lt;/PropertyGroup&gt;
>   &lt;Import Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets" /&gt;</pre>

I followed these instructions (well I had to tweak the `Import Project` location) and I was in business again. But I when I came to check my code into TFS I came unstuck. The automated build kicked off and then, in short order, kicked me:

> `C:\Builds\1\MyApp\MyApp Continuous Integration\src\MyApp\MyApp.csproj (1520): The imported project "C:\Program Files (x86)\MSBuild\Microsoft\VisualStudio\v11.0\TypeScript\Microsoft.TypeScript.targets" was not found. Confirm that the path in the <import> declaration is correct, and that the file exists on disk. C:\Builds\1\MyApp\MyApp Continuous Integration\src\MyApp\MyApp.csproj (1520): The imported project "C:\Program Files (x86)\MSBuild\Microsoft\VisualStudio\v11.0\TypeScript\Microsoft.TypeScript.targets" was not found. Confirm that the path in the <import> declaration is correct, and that the file exists on disk. </import></import>`

That's right, TypeScript wasn't installed on the build server. And since TypeScript was now part of the build process my builds were now failing. Ouch.

## So what now?

I did a little digging and found [this issue report on the TypeScript CodePlex site](<https://typescript.codeplex.com/workitem/1518>). To quote the issue, it seemed there were 2 possible solutions to get continuous integration and typescript playing nice:

1. Install TypeScript on the build server
2. Copy the required files for Microsoft.TypeScript.targets to a different source-controlled folder and change the path references in the csproj file to this folder.

<!-- -->

\#1 wasn't an option for us - we couldn't install on the build server. And covering both #1 and #2, I wasn't particularly inclined to kick off builds on the build server since I was wary of [reported problems with memory leaks](<https://typescript.codeplex.com/workitem/1432>) etc with the TS compiler. I may feel differently later when TS is no longer in Alpha and has stabilised but it didn't seem like the right time.

## A solution

So, to sum up, what I wanted was to be able to compile TypeScript in Visual Studio on my machine, and indeed in VS on the machine of anyone else working on the project. But I \***didn't**\* want TypeScript compilation to be part of the build process on the server.

The solution in the end was pretty simple - I replaced the `.csproj` changes with the code below:

<pre>  &lt;PropertyGroup Condition="'$(Configuration)' == 'Debug'"&gt;
    &lt;TypeScriptTarget&gt;ES5&lt;/TypeScriptTarget&gt;
    &lt;TypeScriptRemoveComments&gt;false&lt;/TypeScriptRemoveComments&gt;
    &lt;TypeScriptSourceMap&gt;false&lt;/TypeScriptSourceMap&gt;
    &lt;TypeScriptModuleKind&gt;AMD&lt;/TypeScriptModuleKind&gt;
    &lt;TypeScriptNoImplicitAny&gt;true&lt;/TypeScriptNoImplicitAny&gt;
  &lt;/PropertyGroup&gt;
  &lt;PropertyGroup Condition="'$(Configuration)' == 'Release'"&gt;
    &lt;TypeScriptTarget&gt;ES5&lt;/TypeScriptTarget&gt;
    &lt;TypeScriptRemoveComments&gt;false&lt;/TypeScriptRemoveComments&gt;
    &lt;TypeScriptSourceMap&gt;false&lt;/TypeScriptSourceMap&gt;
    &lt;TypeScriptModuleKind&gt;AMD&lt;/TypeScriptModuleKind&gt;
    &lt;TypeScriptNoImplicitAny&gt;true&lt;/TypeScriptNoImplicitAny&gt;
  &lt;/PropertyGroup&gt;
  &lt;Import Project="$(VSToolsPath)\TypeScript\Microsoft.TypeScript.targets" Condition="Exists('$(VSToolsPath)\TypeScript\Microsoft.TypeScript.targets')" /&gt;</pre>

What this does is enable TypeScript compilation \***only**\* if TypeScript is installed. So when I'm busy developing with Visual Studio on my machine with the plugin installed I can compile TypeScript. But when I check in the TypeScript compilation is \***not**\* performed on the build server. This is because TypeScript is not installed on the build server and we are only compiling if it is installed. (Just to completely labour the point.)

## Final thoughts

I do consider this an interim solution. As I mentioned earlier, when TypeScript has stabilised I think I'd like TS compilation to be part of the build process. Like with any other code I think compiling on check-in to catch bugs early is an excellent idea. But I think I'll wait until there's some clearer guidance on the topic from the TypeScript team before I take this step.

<!-- Typescript CI WebEssentials 3.0 Debug=false Compile on save does not work unless csproj change in place   C:\Program Files (x86)\MSBuild\Microsoft\VisualStudio\v11.0\TypeScript  <pre class="prettyprint xml">
&lt;PropertyGroup Condition="'$(TypeScriptBuildConfigurations)' == ''"&gt;
  &lt;TypeScriptCompileOnSaveEnabled Condition="'$(TypeScriptEnableCompileOnSave)' != 'false'"&gt;true&lt;/TypeScriptCompileOnSaveEnabled&gt;

  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptRemoveComments)' == 'true'"&gt;$(TypeScriptBuildConfigurations) --removeComments&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptNoImplicitAny)' == 'true'"&gt;$(TypeScriptBuildConfigurations) --noImplicitAny&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptNoResolve)' == 'true'"&gt;$(TypeScriptBuildConfigurations) --noResolve&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptGeneratesDeclarations)' == 'true'"&gt;$(TypeScriptBuildConfigurations) --declaration&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptModuleKind)' != ''"&gt;$(TypeScriptBuildConfigurations) --module $(TypeScriptModuleKind)&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptOutFile)' != ''"&gt;$(TypeScriptBuildConfigurations) --out &quot;$(TypeScriptOutFile)&quot;&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptOutDir)' != ''"&gt;$(TypeScriptBuildConfigurations) --outDir &quot;$(TypeScriptOutDir)&quot;&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptSourceMap)' == 'true'"&gt;$(TypeScriptBuildConfigurations) --sourcemap&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptTarget)' != ''"&gt;$(TypeScriptBuildConfigurations) --target $(TypeScriptTarget)&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptNoResolve)' == 'true'"&gt;$(TypeScriptBuildConfigurations) --noResolve&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptAdditionalFlags)' != ''"&gt;$(TypeScriptBuildConfigurations) $(TypeScriptAdditionalFlags)&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptMapRoot)' != ''"&gt;$(TypeScriptBuildConfigurations) --mapRoot &quot;$(TypeScriptMapRoot)&quot;&lt;/TypeScriptBuildConfigurations&gt;
  &lt;TypeScriptBuildConfigurations Condition="'$(TypeScriptSourceRoot)' != ''"&gt;$(TypeScriptBuildConfigurations) --sourceRoot &quot;$(TypeScriptSourceRoot)&quot;&lt;/TypeScriptBuildConfigurations&gt;
&lt;/PropertyGroup&gt;
</pre>-->


