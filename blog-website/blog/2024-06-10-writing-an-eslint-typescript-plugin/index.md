---
slug: writing-an-eslint-typescript-plugin
title: 'Writing an ESLint TypeScript Plugin'
authors: johnnyreilly
tags: [typescript, eslint]
image: ./title-image.png
hide_table_of_contents: false
description: 'Learn how to write an ESLint plugin for TypeScript that enforces a rule to enfoce using a comments to specify the name of arguments in a function call.'
---

Every now and then, I need to use a treeview component in a React application. The Material-UI (MUI) library provides a [treeview component](https://mui.com/x/react-tree-view/) that is very useful. However, some of the default behaviours of the component differ from that which you typically find in a treeview component. I'm speaking, of course, about node selection. I'm used to a treeview component that, when a parent node is selected, auto selects the child nodes underneath. And by turn, when nodes are deselected, the parent nodes get deselected.

This post documents how to implement this behaviour with the MUI treeview component.

Since initially writing this, I've learned that it is likely that the kind of behaviour I'm hand-rolling here, will natively land in the component. So, all being well, what follows should become unnecessary! To track native support [watch this GitHub issue](https://github.com/mui/mui-x/issues/12883).

![title image reading "MUI React Tree View: check children, uncheck parents" with the MUI logo](title-image.png)

<!--truncate-->

## Inlay hints as a TypeScript ESLint plugin

A long time ago I had an idea of an ESLint plugin I wanted to write. At the time someone distracted me by saying "oh you just need https://code.visualstudio.com/docs/typescript/typescript-editing#_inlay-hints". And I tried it. I hate it. It's super noisy and it does weird things with your cursor. And it's not as configurable as I'd like. And the hints are only visible in VS Code when the editor is open - not in the raw source code.

What I want to build is (I think) an ESLint plugin that will be powered by TypeScript type information and crucially will have an autofix capability. Consider the following code:

```ts
import { getThing } from 'someone-elses-package';

const myThing = getThing(5, true);
```

Now, I have no control over the definition of `getThing`. It lives in someone else's package. I must consume it as is. If I was writing this function myself I might have written a single object as the sole parameter of the function to get that "named parameters" behaviour. But I didn't - and I don't want to wrap it. When I look at the code above, I think to myself, what is `5`? What is `true`? Now consider the following code:

```ts
import { getThing } from 'someone-elses-package';

const myThing = getThing(/** size */ 5, /** includeFalafel */ true);
```

Yes, it is more verbose. But looking at it, I now know what the parameters mean. I like this a lot more. It's probably a niche desire, but I want the ability to implement this in codebases I'm working on.

I see a way to achieve this being writing an ESLint plugin / rule, using TypeScript type information and implementing autofix for the rule.

I've never done this before, but I think I'm going to now. So, to my question: are you aware of good resources for how to write a an ESLint plugin / rule, using TypeScript type information and implementing autofix?

I suspect I may be the only consumer of this plugin, but that's fine, I'll make me happy :smile:

Have you looked at https://typescript-eslint.io/developers/custom-rules ?

https://github.com/microsoft/TypeScript/blob/af3a61fe4487a92d59f9479aa4249d897b91af14/scripts/eslint/rules/argument-trivia.cjs

https://github.com/typescript-eslint/typescript-eslint/issues/8608

https://github.com/typescript-eslint/typescript-eslint/issues/8762#issuecomment-2016959762
