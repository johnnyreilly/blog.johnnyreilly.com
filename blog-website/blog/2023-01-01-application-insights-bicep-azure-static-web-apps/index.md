---
title: 'Using Application Insights with Bicep to monitor Azure Static Web Apps and Azure Functions'
authors: johnnyreilly
tags: [Azure Static Web Apps, redirects, Azure Functions, GitHub Actions]
image: ./title-image.png
hide_table_of_contents: false
---

Application Insights are a great way to monitor Azure Static Web Apps and Azure Functions. But how do you deploy that using Bicep? Let's find out!

![title image reading "Using Application Insights with Bicep to monitor Azure Static Web Apps and Azure Functions" with the Bicep, Application Insights, Azure Static Web Apps and Azure Functions logos](title-image.png)

## Monitoring Azure Static Web Apps

This post should possibly win some kind of "least pithy blog title" award. But it's definitely descriptive. Let's get into it.

I recently wrote [about using dynamic redirects in Azure Static Web Apps using the Azure Function they support](../2022-12-22-azure-static-web-apps-dynamic-redirects-azure-functions/index.md). I wanted to monitor the redirects that were being performed. I knew I could do this with Application Insights. But how do I deploy Application Insights using Bicep?

[My blog](https://johnnyreilly.com) runs on Azure Static Web Apps which is deployed using Bicep. [I've written about deploying Azure Static Web Apps with Bicep previously](blog-website/blog/2022-02-01-migrating-from-github-pages-to-azure-static-web-apps/index.md). I wanted to add Application Insights to that deployment.

## Deploying Application Insights with Bicep

The first thing we need to do is deploy the Application Insights workspace. This is a resource that is required for Application Insights to work. And then deploy an Application Insights resource that uses it. We can achieve that with the following `appInsights.bicep` Bicep module:

```bicep
param location string
param tags object
param workspaceName string = 'appInsightsWorkspace'
param appInsightsName string = 'appInsights'

// https://learn.microsoft.com/en-us/azure/templates/microsoft.operationalinsights/workspaces?pivots=deployment-language-bicep
resource workspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: workspaceName
  location: location
  tags: tags
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
    workspaceCapping: {}
  }
}

// https://learn.microsoft.com/en-us/azure/templates/microsoft.insights/components?pivots=deployment-language-bicep
resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: appInsightsName
  location: location
  kind: 'other'
  properties: {
    Application_Type: 'web'
    Flow_Type: 'Bluefield'
    WorkspaceResourceId: workspace.id
    RetentionInDays: 90
    IngestionMode: 'LogAnalytics'
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}

output appInsightsId string = appInsights.id
output appInsightsInstrumentationKey string = appInsights.properties.InstrumentationKey
output appInsightsConnectionString string = appInsights.properties.ConnectionString
```
