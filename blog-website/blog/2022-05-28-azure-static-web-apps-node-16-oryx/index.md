---
title: 'Azure Static Web Apps: Node.js 16 and Oryx'
authors: johnnyreilly
tags: [Azure Static Web Apps, GitHub Actions, Docusaurus, Node.js, Oryx]
hide_table_of_contents: false
---

Azure Static Web Apps presently fixes to Node.js 14 when building. If you require a different version of Node to build, this can be a problem. This post outlines a workaround.

![title image reading "Azure Static Web Apps: Node.js 16 and Oryx" with Azure and Node.js logos](title-image.png)

## The engine "node" is incompatible

As I was upgrading this blog to [Docusaurus v2.0.0-beta.21](https://github.com/facebook/docusaurus/releases/tag/v2.0.0-beta.21) I noticed this error in my build:

```shell
error @docusaurus/core@2.0.0-beta.21: The engine "node" is incompatible with this module. Expected version ">=16.14". Got "14.19.1"
error Found incompatible module.


---End of Oryx build logs---
Oryx has failed to build the solution.
```

[Oryx](https://github.com/microsoft/Oryx), which performs the build for Static Web Apps, is fixed to Node 14 it seems. Or it may actually be that the GitHub Action is fixed to use Node.js 14 - I'm not completely sure. Either way, Docusaurus now requires Node 16. Frustratingly, the GitHub Action does not allow explicit configuration of the Node version. Happily, there is a way to resolve this - and it's pretty simple.

## `engines` to the rescue!

You can specify the node version you require in your `package.json` with the [`engines`](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#engines) property. This means you can do something like this:

```json
  "engines": {
    "node": ">=16"
  }
```

And have the version of Node.js you require installed by Oryx.

Thanks to [Cormac McCarthy](https://github.com/cormacpayne) for his [comment](https://github.com/Azure/static-web-apps/issues/694#issuecomment-1137492562) which lead me to try this approach out.

[You can see the PR where I made this change for my blog here.](https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/228)
