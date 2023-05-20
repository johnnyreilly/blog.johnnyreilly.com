---
slug: static-web-apps-cli-node-18-could-not-connect-to-api
title: 'Static Web Apps CLI and Node.js 18: could not connect to API'
authors: johnnyreilly
tags: [Azure Static Web Apps, Node.js]
image: ./title-image.png
description: 'With Node.js 18, the Static Web Apps CLI fails to connect to the API - there is a way to fix this.'
hide_table_of_contents: false
---

I make use of Azure Static Web Apps a lot. I recently upgraded to Node.js 18 and found that the Static Web Apps CLI no longer worked when trying to run locally; the API would not connect when running `swa start`:

`[swa] ❌ Could not connect to "http://localhost:7071/". Is the server up and running?`

This post shares a workaround.

![title image reading "Static Web Apps CLI and Node.js 18: could not connect to API" with the Static Web Apps CLI and Node.js logos](title-image.png)

<!--truncate-->

## The issue

My own setup is a Vite front end and a Function App back end. I have a `package.json` in the folder of the front end app with the following scripts:

```json
"dev": "vite",
"start": "swa start http://localhost:3000 --run \"npm run dev\" --api-location ../my-function-app"
```

https://github.com/Azure/static-web-apps-cli/issues/663

Thought I'd share my own workaround. I installed [concurrently](https://www.npmjs.com/package/concurrently):

```
npm i concurrently
```

Then I separated out my front end / back end scripts like so:

```json
"debug": "concurrently -n \"staticwebapp,functionapp\" -c \"bgBlue.bold,bgMagenta.bold\" \"npm run debug:staticwebapp\" \"npm run debug:functionapp\"",
"debug:staticwebapp": "cd src/StaticWebApp && npm run debug",
"debug:functionapp": "cd src/FunctionApp && func start",
```

Where the `npm run debug` in `src/StaticWebApp` is:

```json
"debug": "swa start http://localhost:5173 --run \"npm run dev\" --api-location http://127.0.0.1:7071",
```

This allows me to work around the issue.
