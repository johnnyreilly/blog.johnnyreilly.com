---
slug: visual-studio-tsconfigjson-and-external
title: 'Visual Studio, tsconfig.json and external TypeScript compilation'
authors: johnnyreilly
tags: [visual studio, webpack, azure devops, typescript]
hide_table_of_contents: false
description: 'Visual Studio will not gain support for tsconfig.json until TypeScript 1.8, so using external compilation may be preferable.'
---

TypeScript first gained support for [`tsconfig.json`](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json) back with the [1\.5 release](https://blogs.msdn.microsoft.com/typescript/2015/07/20/announcing-typescript-1-5/). However, to my lasting regret and surprise Visual Studio will not be gaining meaningful support for it until [TypeScript 1.8](https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#improved-support-for-tsconfigjson-in-visual-studio-2015) ships. However, if you want it now, it's already available to use in [beta](https://blogs.msdn.microsoft.com/typescript/2016/01/28/announcing-typescript-1-8-beta/).

<!--truncate-->

I've already leapt aboard. Whilst there's a number of bugs in the beta it's still totally usable. So use it.

## External TypeScript Compilation and the VS build

Whilst `tsconfig.json` is useful and super cool it has limitations. It allows you to deactivate compilation upon file saving using [`compileOnSave`](https://github.com/Microsoft/TypeScript/issues/2326#issuecomment-178294169). [What it doesn't allow is deactivation of the TypeScript compilation that happens as part of a Visual Studio build.](https://github.com/Microsoft/TypeScript/issues/7091) That may not matter for the vanilla workflow of just dropping TypeScript files in a Visual Studio web project and having VS invoke the TypeScript compilation. However it comes to matter when your workflow deviates from the norm, as mine does. Using external compilation of TypeScript within Visual Studio is a little tricky. My own use case is somewhat atypical but perhaps not uncommon.

I'm working on a project which has been built using TypeScript since TS 0.9. Not surprisingly, this started off using the default Visual Studio / TypeScript workflow. Active development on the project ceased around 9 months ago. Now it's starting up again. It's a reasonable sized web app and the existing functionality is, in the main, fine. But the users want to add some new screens.

Like any developer, I want to build with the latest and greatest. In my case, this means I want to write modular ES6 using TypeScript. With this approach my code can be leaner and I have less script ordering drama in my life. (Yay import statements!) This can be done by bringing together webpack, TypeScript ([ts-loader](https://github.com/TypeStrong/ts-loader)) and [Babel](http://babeljs.io/) ([babel-loader](https://github.com/babel/babel-loader)). There's an example of this approach [here](../2015-12-16-es6-typescript-babel-react-flux-karma/index.md). Given the size of the existing codebase I'd rather leave the legacy TypeScript as is and isolate my new approach to the screens I'm going to build. Obviously I'd like to have a common build process for all the codebase at some point but I've got a deadline to meet and so a half-old / half-new approach is called for (at least for the time being).

## Goodbye TypeScript Compilation in VS

Writing modular ES6 TypeScript which is fully transpiled to old-school JS is _not possible_ using the Visual Studio tooling at present. For what it's worth I think that SystemJS compilation may make this more possible in the future but I don't really know enough about it to be sure. That's why I'm bringing webpack / Babel into the mix right now. I don't want Visual Studio to do anything for the ES6 code; I don't want it to compile. I want to deactivate my TypeScript compilation for the ES6 code. I can't do this from the `tsconfig.json` so I'm in a bit of a hole. What to do?

Well, as of (I think) TypeScript 1.7 it's possible to deactivate TypeScript compilation in Visual Studio. To [quote](https://github.com/Microsoft/TypeScript/issues/2294#issuecomment-129367578):

> there is an easier way to disable TypeScriptCompile:
>
> Just add `&lt;TypeScriptCompileBlocked&gt;true&lt;/TypeScriptCompileBlocked&gt;` to the `.csproj`, e.g. in the first `&lt;PropertyGroup&gt;`.

Awesomeness!

But wait, this means that the legacy TypeScript isn't being compiled any longer. Bear in mind, I'm totally happy with the existing / legacy TypeScript compilation. Nooooooooooooooo!!!!!!!!!!!!!!!

## Hello TypeScript Compilation outside VS

Have no fear, I gotcha. What we're going to do is ensure that Visual Studio triggers 2 external TypeScript builds as part of its own build process:

- The modular ES6 TypeScript (new)
- The legacy TypeScript (old)

How do we do this? Through the magic of build targets. We need to add this to our `.csproj`: (I add it near the end; I'm not sure if location matters though)

```xml
<PropertyGroup>
    <CompileDependsOn>
      $(CompileDependsOn);
      WebClientBuild;
    </CompileDependsOn>
    <CleanDependsOn>
      $(CleanDependsOn);
      WebClientClean
    </CleanDependsOn>
    <CopyAllFilesToSingleFolderForPackageDependsOn>
      CollectGulpOutput;
      CollectLegacyTypeScriptOutput;
      $(CopyAllFilesToSingleFolderForPackageDependsOn);
    </CopyAllFilesToSingleFolderForPackageDependsOn>
    <CopyAllFilesToSingleFolderForMsdeployDependsOn>
      CollectGulpOutput;
      CollectLegacyTypeScriptOutput;
      $(CopyAllFilesToSingleFolderForPackageDependsOn);
    </CopyAllFilesToSingleFolderForMsdeployDependsOn>
  </PropertyGroup>
  <Target Name="WebClientBuild">
    <Exec Command="npm install" />
    <Exec Command="npm run build-legacy-typescript" />
    <Exec Command="npm run build -- --mode $(ConfigurationName)" />
  </Target>
  <Target Name="WebClientClean">
    <Exec Command="npm run clean" />
  </Target>
  <Target Name="CollectGulpOutput">
    <ItemGroup>
      <_CustomFiles Include="dist\**\*" />
      <FilesForPackagingFromProject Include="%(_CustomFiles.Identity)">
        <DestinationRelativePath>dist\%(RecursiveDir)%(Filename)%(Extension)</DestinationRelativePath>
      </FilesForPackagingFromProject>
    </ItemGroup>
    <Message Text="CollectGulpOutput list: %(_CustomFiles.Identity)" />
  </Target>
  <Target Name="CollectLegacyTypeScriptOutput">
    <ItemGroup>
      <_CustomFiles Include="Scripts\**\*.js" />
      <FilesForPackagingFromProject Include="%(_CustomFiles.Identity)">
        <DestinationRelativePath>Scripts\%(RecursiveDir)%(Filename)%(Extension)</DestinationRelativePath>
      </FilesForPackagingFromProject>
    </ItemGroup>
    <Message Text="CollectLegacyTypeScriptOutput list: %(_CustomFiles.Identity)" />
  </Target>
```

There's a few things going on here; let's take them one by one.

## The `WebClientBuild` Target

This target triggers our external builds. One by one it runs the following commands:

<dl><dt><code>npm install</code></dt><dd>Installs the npm packages.</dd><dt><code>npm run build-legacy-typescript</code></dt><dd>Runs the <code>"build-legacy-typescript"</code><code>script</code> in our <code>package.json</code></dd><dt><code>npm run build -- --mode $(ConfigurationName)</code></dt><dd>Runs the <code>"build"</code><code>script</code> in our <code>package.json</code> and passes through a <code>mode</code> parameter of either <code>"Debug"</code> or <code>"Release"</code> from MSBuild - indicating whether we're creating a debug or a release build.</dd></dl>

As you've no doubt gathered, I'm following the convention of using the `scripts` element of my `package.json` as repository for the various build tasks I might have for a web project. It looks like this:

```json
{
  // ...
  "scripts": {
    "test": "karma start --reporters mocha,junit --single-run --browsers PhantomJS",
    "build-legacy-typescript": "tsc -v&&tsc --project Scripts",
    "clean": "gulp delete-dist-contents",
    "watch": "gulp watch",
    "build": "gulp build"
  }
  // ...
}
```

As you can see, `"build-legacy-typescript"` invokes `tsc` (which is registered as a `devDependency`) to print out the version of the compiler. Then it invokes `tsc` again using the [`project`](https://github.com/Microsoft/TypeScript/wiki/Compiler-Options) flag directly on the `Scripts` directory. This is where the legacy TypeScript and its associated `tsconfig.json` resides. Et voilá, the old / existing TypeScript is compiled just as it was previously by VS itself.

Next, the `"build"` invokes a `gulp` task called, descriptively, `"build"`. This task caters for our brand new codebase of modular ES6 TypeScript. When run, this task will invoke webpack, copy static files, build less etc. Quick digression: you can see there's a `"watch"` script that does the same thing on a file-watching basis; I use that during development.

## The `WebClientClean` Target

The task that runs to clean up artefacts created by `WebClientBuild`.

## The `CollectLegacyTypeScriptOutput` and `CollectGulpOutput` Targets

Since we're compiling our TypeScript outside of VS we need to tell MSBuild / MSDeploy about the externally compiled assets in order that they are included in the publish pipeline. Here I'm standing on the shoulders of [Steve Cadwallader's excellent post](http://www.codecadwallader.com/2015/03/15/integrating-gulp-into-your-tfs-builds-and-web-deploy/). Thanks Steve!

`CollectLegacyTypeScriptOutput` and `CollectGulpOutput` respectively include all the built files contained in the `"Scripts"` and `"dist"` folders when a publish takes place. You don't need this for when you're building on your own machine but if you're looking to publish (either from your machine or from TFS) then you will need exactly this. Believe me that last sentence was typed with a memory of _great_ pain and frustration.

So in the end, as far as TypeScript is concerned, I'm using Visual Studio solely as an editor. It's the hooks in the `.csproj` that ensure that compilation happens. It seems a little quirky that we still need to have the original TypeScript targets in the `.csproj` file as well; but it works. That's all that matters.
