---
slug: typescript-dont-forget-build-action-for-implicit-referencing
title: "TypeScript: Don't forget Build Action for Implicit Referencing..."
authors: johnnyreilly
tags: [definitely typed, typescript]
hide_table_of_contents: false
description: 'TypeScript files in Visual Studio now implicitly reference each other. This caused problems for some projects and its important to check file settings.'
---

As part of the [known breaking changes between 0.9 and 0.9.1](https://typescript.codeplex.com/wikipage?title=Known%20breaking%20changes%20between%200.8%20and%200.9&referringTitle=Documentation) there was this subtle but significant switch:

<!--truncate-->

> In Visual Studio, all TypeScript files in a project are considered to be referencing each other
>
> _Description:_ Previously, all TypeScript files in a project had to reference each other explicitly. With 0.9.1, they now implicitly reference all other TypeScript files in the project. For existing projects that fit multiple projects into a single projects, these will now have to be separate projects.
>
> _Reason:_ This greatly simplifies using TypeScript in the project context.

Having been [initially resistant](https://typescript.codeplex.com/workitem/1471) to this change I recently decided to give it a try. That is to say I started pulling out the `/// &lt;reference`'s from my TypeScript files. However, to my surprise, pulling out these references stopped my TypeScript from compiling and killed my Intellisense. After wrestling with this for a couple of hours I finally [filed an issue on the TypeScript CodePlex site](https://typescript.codeplex.com/workitem/1855). (Because clearly the problem was with TypeScript and not how I was using it, right?)

## Wrong!

When I looked through my typing files (\*.d.ts) I found that, pretty much without exception, all had a Build Action of "Content" and not "TypeScriptCompile". I went through the project and switched the files over to being "TypeScriptCompile". This resolved the issue and I was then able to pull out the remaining `/// &lt;reference` comments from the codebase (though I did have to restart Visual Studio to get the Intellisense working).

Most, if not all, of the typing files had been pulled in from NuGet and are part of the [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) project on GitHub. Unfortunately, at present, when TypeScript NuGet packages are added they are added without the "TypeScriptCompile" Build Action. I was going to post an issue there and ask if it's possible for NuGet packages to pull in typings files as "TypeScriptCompile" from the off - fortunately a chap called Natan Vivo [already has](https://github.com/borisyankov/DefinitelyTyped/issues/1138).

So until this issue is resolved it's probably a good idea to check that your TypeScript files are set to the correct Build Action in your project. And every time you upgrade your TypeScript NuGet packages double check that you still have the correct Build Action afterwards (and to get Intellisense working in VS 2012 at least you'll need to close and re-open the solution as well).
