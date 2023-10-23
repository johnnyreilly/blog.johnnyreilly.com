---
slug: migrating-azure-functions-node-js-v4-typescript
title: 'Migrating to v4 Azure Functions Node.js with TypeScript'
authors: johnnyreilly
image: ./title-image.png
tags: [typescript, azure, azure static web apps]
description: Learn how to migrate a TypeScript Azure Functions app to the v4 Node.js programming model.
hide_table_of_contents: false
---

There's a new programming model available for Node.js Azure Functions known as v4. There's documentation out there for [how to migrate JavaScript Azure Functions from v3 to v4](https://learn.microsoft.com/en-us/azure/azure-functions/functions-node-upgrade-v4?tabs=v4), but at the time of writing, TypeScript wasn't covered.

This post fills in the gaps for a TypeScript Azure Function. It's probably worth mentioning that [my blog](https://johnnyreilly.com) is an [Azure Static Web App](https://learn.microsoft.com/en-us/azure/static-web-apps/overview) with an Azure Functions back end. So, this post is based on my experience migrating my blog to v4.

![title image reading "Link Azure Application Insights to Static Web Apps with Bicep" with the Bicep and Azure Static Web App logos](title-image.png)

<!--truncate-->

I'm going to walk through the migration of my blog from v3 to v4. This takes place in [this pull request](https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/728/files). I'll probably cover some of the ground of the offical JavaScript upgrade docs, but I'll also cover some of the TypeScript specific stuff.

## `package.json`

There's three changes to make to `package.json`:

```diff
  "dependencies": {
+    "@azure/functions": "^4.0.1",
  },
  "devDependencies": {
-    "@azure/functions": "^3.5.0",
  },
+  "main": "dist/src/functions/*/index.js"
```

1. Update the `@azure/functions` dependency to `^4.0.1` (or later)
2. `@azure/functions` dev dependency becomes a regular dependency - this is because we'll be using the package at runtime now - previously we just used it to get the types at build time
3. Add a `main` property to the `package.json` with a glob that matches the functions in your project; in my case `dist/src/functions/*/index.js` - which will be our output from the TypeScript build

As I did **3.**, I found myself changing the folder structure of my functions. Actually, this isn't mandatory, but it was tricky for me to come up with a glob for my current structure. So I moved things around - you may not need to. All that matters is that your glob matches the output of your build.

## Migrating a Function

In order that we can understand what migration looks like, we must first take a look at the v3 version of a function. Here's the `fallback` function from my blog:

```ts
import type { AzureFunction, Context, HttpRequest } from '@azure/functions';

import { redirect } from './redirect';
import { saveToDatabase } from './saveToDatabase';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {
  try {
    const originalUrl = req.headers['x-ms-original-url'];

    const { status, location } = redirect(originalUrl, context.log);

    await saveToDatabase(originalUrl, { status, location }, context.log);

    context.res = {
      status,
      headers: {
        location,
      },
    };
  } catch (error) {
    context.log.error(
      'Problem with fallback',
      error,
      req.headers['x-ms-original-url'],
    );
  }
};

export default httpTrigger;
```

The above is the code I use to power [dynamic redirects with my Azure Static Web App with my Azure Function back-end](../2022-12-22-azure-static-web-apps-dynamic-redirects-azure-functions/index.md). It's a TypeScript Azure Function that takes a request, redirects to a new location and saves the redirect to a database.

What it does isn't significant for this post, but the structure is. Now let's look at the migrated version:

```ts
import type {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions';
import { app } from '@azure/functions';

import { redirect } from './redirect';
import { saveToDatabase } from './saveToDatabase';

export async function fallback(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  try {
    const originalUrl = request.headers.get('x-ms-original-url') || '';

    const { status, location } = redirect(originalUrl, context);

    await saveToDatabase(originalUrl, { status, location }, context);

    return {
      status,
      headers: {
        location,
      },
    };
  } catch (error) {
    context.error(
      'Problem with fallback',
      error,
      request.headers.get('x-ms-original-url'),
    );
    return {
      status: 500,
      body: 'something went wrong',
    };
  }
}

app.http('fallback', {
  methods: ['GET'],
  handler: fallback,
});
```

What's different? We'll go through the changes one by one.

### `import`s used

Starting at the top, the `import`s we use are different:

```diff
-import type { AzureFunction, Context, HttpRequest } from '@azure/functions';
+import type {
+  HttpRequest,
+  HttpResponseInit,
+  InvocationContext,
+} from '@azure/functions';
+import { app } from '@azure/functions';
```

We're no longer just importing types, we're importing the `app` function from `@azure/functions` also. The types being imported are different too. We're no longer importing `AzureFunction, Context, HttpRequest` - instead we're importing `HttpRequest, HttpResponseInit,  InvocationContext`.

### Hello `app`, goodbye `function.json`

As we saw, we're making use of the `app` function from `@azure/functions`. This is a new function that we use to register our functions. We no longer use `function.json` to register our functions. Instead we use `app` to register our functions. In the case of my `fallback` function, we register it like this:

```ts
app.http('fallback', {
  methods: ['GET'],
  handler: fallback,
});
```

The replaces the more verbose `function.json` that used to sit alongside:

```json
{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["get", "post"]
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ],
  "scriptFile": "../dist/fallback/index.js"
}
```

As you've probably guessed, the `scriptFile` property above was covered by our `main` addition to the `package.json`. The rest of the `function.json` is covered by the `app.http` call. Much terser.

### function signature

The signature of the function has changed too:

```diff
-const httpTrigger: AzureFunction = async function (
-  context: Context,
-  req: HttpRequest
-): Promise<void> {
+export async function fallback(
+  request: HttpRequest,
+  context: InvocationContext,
+): Promise<HttpResponseInit> {
```

You'll see here that we're using a function declaration rather than a function expression. Our new function takes our new types, the subtly different `HttpRequest` and `InvocationContext`, which are similar to, but different from the previous `Context` and `HttpRequest` types. The order of the parameters has changed too.

The return type is now `Promise<HttpResponseInit>` rather than `Promise<void>`. What this means is, we're going to return values from our function, which we didn't do previously. Let's look at the implications of this.

### From `context.res` to `Promise<HttpResponseInit>`

With a v3 function, we'd set properties on the `context` object to return values from our function. With a v4 function, we return values from our function directly. What does this look like?

```diff
-    context.res = {
-      status,
-      headers: {
-        location,
-      },
-    };
+    return {
+      status,
+      headers: {
+        location,
+      },
+    };
```

This is rather a nice change, as we no longer need to remember to subsequently `return` after setting the `context.res` property. We just return the value we want to return from our function.

### `body` vs `jsonBody`

Another difference is that we no longer set the `body` property of the `context.res` object. Instead we return an object with a `jsonBody` property, if we're returning JSON from our API. (And that's the most common case, right?)

This wasn't illustrated in the `fallback` function above, but here's an example of migrating a function that returns JavaScript object literal named `redirectSummary`:

```diff
-    context.res = {
-      status: 200,
-      body: redirectSummary,
-    };
+    return {
+      status: 200,
+      jsonBody: redirectSummary,
+    };
```

The `body` property still exists, but it's for returning strings, rather than JSON. If you're returning JSON, you should use the `jsonBody` property.

### Runtime APIs

Finally, the APIs offered by the `request` and `context` objects are different. I shan't go into detail here as it's [well covered in the official documentation](https://learn.microsoft.com/en-us/azure/azure-functions/functions-node-upgrade-v4?tabs=v4#review-your-usage-of-http-types). But I will show you the changes I made to my `fallback` function:

```diff
-    const originalUrl = req.headers['x-ms-original-url'];
+    const originalUrl = request.headers.get('x-ms-original-url') || '';
```

Not too significant, but there's a number of changes like this to make.

## Conclusion

Migrating an Azure Function from v3 to v4 with TypeScript is a little more involved than I'd expected. But it's not too bad. The official documentation is good, but it's not complete right now. Hopefully this post will help you migrate your TypeScript Azure Functions to v4.
