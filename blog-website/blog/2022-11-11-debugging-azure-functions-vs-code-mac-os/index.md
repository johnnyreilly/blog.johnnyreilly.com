---
title: 'Debugging Azure Functions in VS Code on Mac OS'
authors: johnnyreilly
tags: [Azure Functions, VS Code, Mac OS]
image: ./title-image.webp
hide_table_of_contents: false
---

Debugging for Azure Functions on Mac OS frequently breaks. This post documents a mechanism to get it working.

![title image reading "Debugging Azure Functions in VS Code on Mac OS" with Docusaurus, SWC and webpack logos](title-image.webp)

## The problem

I frequently use a Mac to develop Azure Functions. I use VS Code as my editor. I value debugging. I often find that the debugger fails to attach. I can't actually debug my Azure Functions. This is a known issue.

In fact, this blog post is me sharing a workaround that I've needed again and again, but keep losing. Not my own work, the work of [Bas Stottelaar](https://github.com/basilfx). I share it as a public service announcement. (And to remind myself how to do it!) The original issue is [here](https://github.com/OmniSharp/omnisharp-vscode/issues/4903#issuecomment-993015843). Yay Bas!

## The solution

You'll first need to generate a self signed certificate to be used for code signing. [There's a good resource on Stack Overflow covering this](https://stackoverflow.com/a/58363510/761388).

You'll only ever need to do this once. You can then use the same certificate every time you apply the workaround. In fact it's probably worth emphasising that you'll likely need to apply this workaround again and again. It's not a permanent fix.

The script that you need to run is:

```shell
cd ~/.vscode/extensions/ms-dotnettools.csharp-1.25.2-darwin-x64/.debugger/x86_64
codesign --remove-signature vsdbg-ui && codesign --remove-signature vsdbg
codesign -s my-codesign-cert vsdbg-ui && codesign -s my-codesign-cert vsdbg
```

A thing to note about the above is the version in the path. You'll need to change that to match the version of the C# extension that you have installed. You can find the version in the VS Code extensions view.

![Screenshot of C# extension in VS Code; in this case version 1.25.2](screenshot-csharp-extension-vs-code.png)

I've found that restarting VS Code is a good idea after applying the workaround. It will also stop working after a while, and the workaround will need to be reapplied.

In the long term, I'd love to see some debugging improvements for Azure Functions. Until that time, we have this.
