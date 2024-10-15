---
slug: module-ws-does-not-provide-an-export-named-websocketserver
title: 'module ws does not provide an export named WebSocketServer'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'Resolve the ws npm issue: SyntaxError: The requested module ws does not provide an export named WebSocketServer'
---

I use Playwright for testing and mock Web Socket calls with the [ws](https://github.com/websockets/ws) package. I recently did an `npm upgrade` and found myself hitting this error message when I tried to run tests: 

```
SyntaxError: The requested module 'ws' does not provide an export named 'WebSocketServer'
```

It was caused by the following code:

```ts
import { WebSocketServer } from "ws"; // this goes bang!

// ...

const mockWsServer = new WebSocketServer({ port: 5000 });
```

The fix was surprisingly simple to implement but hard to search for.  That's why I'm writing this.

## Resolving "The requested module 'ws' does not provide"...

This fix is as simple switching the code to:

```ts
import ws from "ws";

// ...

const mockWsServer = new ws.Server({ port: 5000 });
```

And that should resolve the issue.
