---
title: 'Bicep, Static Web Apps and Bring Your Own Azure Functions'
authors: johnnyreilly
tags: [Bicep, Static Web Apps, Azure Functions]
image: ./title-image.png
hide_table_of_contents: false
---

Unit tests are an important part of the development process. They are used to verify that the code is working as intended. This post will outline how to write unit tests using TypeScript and how to debug them as well.

![title image reading "TypeScript Unit Tests with Debug Support" with TypeScript and Jest logos](title-image.png)

```bicep
resource staticAppBackend 'Microsoft.Web/staticSites/linkedBackends@2022-03-01' = {
  name: '${microscopeStaticWebAppName}/backend'
  properties: {
    backendResourceId: microscopeFunctionApp.outputs.functionAppResourceId
    region: location
  }
}
```
