---
slug: debugging-aspnet-core-in-vs-or-code
title: 'Debugging ASP.Net Core in VS or Code'
authors: johnnyreilly
tags: [VS Code, ASP.Net Core, Visual Studio]
hide_table_of_contents: false
description: 'Learn how the author became a fan of VS Code for TypeScript and how they managed to debug ASP.Net Core using the extension for C#.'
---

I've been using Visual Studio for a long time. Very good it is too. However, it is heavyweight; it does far more than I need. What I really want when I'm working is a fast snappy editor, with intellisense and debugging. What I've basically described is [VS Code](https://code.visualstudio.com/). It rocks and has long become my go-to editor for TypeScript.

<!--truncate-->

Since I'm a big C# fan as well I was delighted that editing C# was also possible in Code. What I want now is to be able to debug ASP.Net Core in Visual Studio OR VS Code. Can it be done? Let's see....

I fire up Visual Studio and `File -&gt; New Project` (yes it's a verb now). Select .NET Core and then ASP.Net Core Web Application. OK. We'll go for a Web Application. Let's not bother with authentication. OK. Wait a couple of seconds and Visual Studio serves up a new project. Hit F5 and we're debugging in Visual Studio.

So far, so straightforward. What will VS Code make of this?

I cd my way to the root of my new ASP.Net Core Web Application and type the magical phrase "code .". Up it fires. I feel lucky, let's hit "F5". Huh, a dropdown shows up saying `"Select Environment"` and offering me the options of Chrome and Node. Neither do I want. It's about this time I remember this is a clean install of VS Code and doesn't yet have the C# extension installed. In fact, if I open a C# file it up it tells me and recommends that I install. Well that's nice. I take it up on the kind offer; install and reload.

When it comes back up I see the following entries in the "output" tab:

```ts
Updating C# dependencies...
Platform: win32, x86_64 (win7-x64)

Downloading package 'OmniSharp (.NET 4.6 / x64)' (20447 KB) .................... Done!
Downloading package '.NET Core Debugger (Windows / x64)' (39685 KB) .................... Done!

Installing package 'OmniSharp (.NET 4.6 / x64)'
Installing package '.NET Core Debugger (Windows / x64)'

Finished
```

Note that mention of "debugger" there? Sounds super-promising. There's also some prompts: `"There are unresolved dependencies from 'WebApplication1/WebApplication1.csproj'. Please execute the restore command to continue"`

So it wants me to `dotnet restore`. It's even offering to do that for me! Have at you; I let it.

```ts
Welcome to .NET Core!
```
