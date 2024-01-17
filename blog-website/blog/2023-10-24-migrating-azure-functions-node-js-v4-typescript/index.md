---
slug: migrating-azure-functions-node-js-v4-typescript
title: 'Migrating to v4 Azure Functions Node.js with TypeScript'
authors: johnnyreilly
image: ./title-image.png
tags: [typescript, azure, azure functions, azure static web apps]
description: Learn how to migrate a TypeScript Azure Functions app to the v4 Node.js programming model.
hide_table_of_contents: false
---

There's a new programming model available for Node.js Azure Functions known as v4. There's documentation out there for [how to migrate JavaScript Azure Functions from v3 to v4](https://learn.microsoft.com/en-us/azure/azure-functions/functions-node-upgrade-v4?tabs=v4), but at the time of writing, TypeScript wasn't covered.

This post fills in the gaps for a TypeScript Azure Function. It's probably worth mentioning that [my blog](https://johnnyreilly.com) is an [Azure Static Web App](https://learn.microsoft.com/en-us/azure/static-web-apps/overview) with a TypeScript Node.js Azure Functions back end. So, this post is based on my experience migrating my blog to v4.

![title image reading "Link Azure Application Insights to Static Web Apps with Bicep" with the Bicep and Azure Static Web App logos](title-image.png)

<!--truncate-->

I'm going to walk through the migration of my blog from v3 to v4. This takes place in [this pull request](https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/728/files). I'll probably cover some of the ground of the offical JavaScript upgrade docs, but I'll also cover some of the TypeScript specific stuff.

There will be two main parts to this post:

1. Changes to make to `package.json`
2. Migrating a Function

The second part will be the bulk of the post, but the first part is important too.

## 1. Changes to make to the `package.json`

So, starting with the first part, there are three changes to make to the `package.json`:

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
2. The `@azure/functions` dev dependency becomes a regular dependency - this is because we'll be using the package at runtime now - previously we just used it to get the types at build time
3. Add a `main` property to the `package.json` with a glob that matches the functions in your project; in my case `dist/src/functions/*/index.js` - which will be our output from the TypeScript build

As I took care of **3.**, I found myself changing the folder structure of my functions. Actually, this isn't mandatory, but it was tricky for me to come up with a glob for my current structure. So I moved things around - you may not need to. All that matters is that your glob matches the output of your build.

## 2. Migrating a Function

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

The above is the code I use to power [dynamic redirects in my Azure Static Web App with the Azure Function back-end](../2022-12-22-azure-static-web-apps-dynamic-redirects-azure-functions/index.md). It's a TypeScript Azure Function that takes a request, redirects to a new location and saves metadata about the redirect to a database.

Looking at the code now, I rather think I should have called the function `redirect` rather than `fallback`. I'll leave it as is for now, but I'll probably change it in the future.

What the `fallback` function does isn't significant for this post, but the structure is. Now let's look at the migrated version:

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

As we can see, the logic looks pretty much the same. But a lot has changed. What's different? We'll go through the changes one by one.

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

We're no longer just importing types, we're importing the `app` function from `@azure/functions` also. The types that are being imported are different too. We're no longer importing `AzureFunction, Context, HttpRequest` - instead we're importing `HttpRequest, HttpResponseInit,  InvocationContext`.

### Hello `app`, goodbye `function.json`

As we saw, we're making use of the `app` function from `@azure/functions`. This is a new function that we use to register our Azure Functions. We no longer use `function.json`. Instead we use `app`. In the case of my `fallback` Azure Functions, we register it like this:

```ts
app.http('fallback', {
  methods: ['GET'],
  handler: fallback,
});
```

We're registering an HTTP trigger called `fallback` that responds to `GET` requests. The `handler` is the function that will be called when the trigger is invoked. There's more options available, but this is the minimum we need to register our function.

This minimal TypeScript/JavaScript replaces the more verbose `function.json` that used to sit alongside:

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

All of this is gone, replaced by the `app` function usage. There's one part of the `function.json` that isn't covered by the `app` function, and that's the `scriptFile` property. This is covered by the `main` property we added to the `package.json` earlier.

The rest of the `function.json` is covered by the `app.http` call. Much terser.

### Signature and types of our `function`

The signature of our function has changed too:

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

You'll see here that we're using a function declaration rather than a function expression. Our new function takes our new types, the subtly different `HttpRequest` and `InvocationContext`, which are similar to, but different from, the previous `Context` and `HttpRequest` types. The order of these parameters has changed also.

The return type of the function is now `Promise<HttpResponseInit>` rather than `Promise<void>`. What this means is, we're going to return values from our function, which we didn't do previously. Let's look at the implications of this.

### From `context.res` to `Promise<HttpResponseInit>`

With a v3 function, we'd set the `context.res` property to return values from our function. With a v4 function, we return values from our function directly. What does this look like?

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

I rather like this change. My reasoning is that, in the event that there is subsequent code that would otherwise run after `context.res` was set, we no longer need to remember to subsequently `return` to prevent that running. (And yes, I have made that mistake on multiple occasions.) All we need do is return the value we want to return from our function.

### `body -> jsonBody`

Another difference is that we no longer set the `body` property of the `context.res`. Instead we return an object with a `jsonBody` property, assuming we're returning JSON from our API. (And that's the most common case, right?)

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

The `body` property still exists, but it's for returning strings and other things, rather than JSON. If you're returning JSON, the easiest approach is to use the `jsonBody` property.

### Runtime APIs

Finally, the APIs offered by the `request` and `context` objects are different. I shan't go into detail here as it's [well covered in the official documentation](https://learn.microsoft.com/en-us/azure/azure-functions/functions-node-upgrade-v4?tabs=v4#review-your-usage-of-http-types). But I will show you one of the changes I made to my `fallback` function:

```diff
-    const originalUrl = req.headers['x-ms-original-url'];
+    const originalUrl = request.headers.get('x-ms-original-url') || '';
```

Not too significant a tweak, but there's a number of slight changes like this to make. (Related to this, the logging API on the `context` object is also different - but not significantly.)

## 3. Running locally

If you're a fan of running locally then you may need to make this tweak to your `host.json`:

```diff
    "extensionBundle": {
        "id": "Microsoft.Azure.Functions.ExtensionBundle",
-        "version": "[3.*, 4.0.0)"
+        "version": "[4.*, 5.0.0)"
    }
```

A complete `host.json` might look like this:

```json
{
    "version": "2.0",
    "logging": {
        "applicationInsights": {
            "samplingSettings": {
                "isEnabled": true,
                "excludedTypes": "Request"
            }
        }
    },
    "extensionBundle": {
        "id": "Microsoft.Azure.Functions.ExtensionBundle",
        "version": "[4.*, 5.0.0)"
    }
}
```

As discussed with [Eric Jizba](https://github.com/ejizba) on [this GitHub issue](https://github.com/Azure/azure-functions-core-tools/issues/3508#issuecomment-1894356158), updating the `host.json` may not actually be necessary.  For me it seemed to be the thing that turned a not working setup into a working setup; but it's possible I was mistaken. Certainly if I revert the change now I'm still able to run locally.  What I'm saying is: your mileage may vary.

## Conclusion

Migrating an Azure Function from v3 to v4 with TypeScript is a little more involved than I'd expected. But I do like that this moves us to a code style that feels more "Node-y". ~~The official documentation is good, but it's not complete right now.~~ There's now a decent upgrade guide available: https://learn.microsoft.com/en-us/azure/azure-functions/functions-node-upgrade-v4?tabs=v4

Hopefully this post will help you migrate your TypeScript Azure Functions to v4.
