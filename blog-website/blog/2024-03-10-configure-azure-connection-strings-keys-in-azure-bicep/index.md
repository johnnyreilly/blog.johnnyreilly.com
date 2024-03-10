---
slug: configure-azure-connection-strings-keys-in-azure-bicep
title: 'Configure Azure connection strings and keys in Azure Bicep'
authors: johnnyreilly
tags: [bicep, azure]
image: ./title-image.png
hide_table_of_contents: false
description: 'Learn how to configure Azure resources like Azure Static Web Apps and Azure Container Apps with connection strings and access keys in Azure with Bicep.'
---

Imagine you're deploying a solution to Azure. It'll feature some resources like a database or a storage account. These resources will have connection strings and access keys. You'll need these to run your application. How do can you configure your application with access to these resources? One approach would be using Managed Identity, what we will look at is directly injecting the connection strings and access keys into our application. This is a common approach when working with Azure Functions, Azure Static Web Apps, Azure Container Apps and similar. We'll look at how to do this with Bicep.

A wonderful aspect of this approach is that no human need ever get to see the connection strings / access keys. They'll be discovered and consumed by Azure during a deployment, but untrustworthy humans need never get to see them. This is secure, and therefore _good_.

![title image reading "Configure Azure connection strings and keys in Azure Bicep" with the Bicep and Azure logos](title-image.png)

<!--truncate-->
