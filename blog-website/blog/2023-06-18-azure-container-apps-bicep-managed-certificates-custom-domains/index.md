---
slug: azure-container-apps-bicep-managed-certificates-custom-domains
title: 'Azure Container Apps, Bicep, Managed Certificates and Custom Domains'
authors: johnnyreilly
tags: [azure container apps, bicep]
image: ./title-image.png
description: 'Azure Container Apps support managed certificates and custom domains. However, deploying them with Bicep is not straightforward. This post explains how to do it.'
hide_table_of_contents: false
---

Azure Container Apps support managed certificates and custom domains. However, deploying them with Bicep is not straightforward - although it is possible. It seems likely there's a bug in the implementation in Azure, but I'm not sure. Either way, it's possible to work around it.

![title image reading "Azure Container Apps, Bicep, Managed Certificates and Custom Domains" with the Azure Container App logos](title-image.png)

<!--truncate-->

## A three pipe(line) problem

I spent much of the last week attempting to attach a custom domain to an Azure Container App. I was using Bicep to deploy the infrastructure and I was using Azure DevOps to deploy the Bicep.

There wasn't any documentation I could find about this, and so I decided to try and work it out for myself. I was able to get it working, but it was a bit of a journey. I'm going to share the steps I took here in the hope that it helps someone else.

I titled this section "A three pipe(line) problem" because it turned out it required three Azure Pipeline runs to deploy a custom domain with a managed certificate. That, and the fact that it seemed a great way to get a Sherlock Holmes pun into the mix. I feel justified; there was no small amount of detective work involved.

## Reverse engineering the Azure Portal

I knew that to get a custom domain working with an Azure Container App I would need to do two things:

1. Create a managed certificate on my managed environment
2. Create a custom domain on my container app

So I fired up the Azure Portal and did those two things. Then I went to the export template option and downloaded the ARM template. I was hoping to see how the Azure Portal did it. Since my eyes bleed when I attempt to read ARM templates, I [decompiled the ARM template into the Bicep equivalent](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/decompile?tabs=azure-cli).

It actually seemed relatively simple. First there was a [`Microsoft.App/managedEnvironments/managedCertificates`](https://learn.microsoft.com/en-us/azure/templates/microsoft.app/2022-11-01-preview/managedenvironments/managedcertificates?pivots=deployment-language-bicep) resource which created the managed certificate:

```bicep
resource managedEnvironmentManagedCertificate 'Microsoft.App/managedEnvironments/managedCertificates@2022-11-01-preview' = {
  parent: managedEnvironment
  name: '${managedEnvironment.name}-certificate'
  location: location
  tags: tags
  properties: {
    subjectName: customDomainName
    domainControlValidation: 'CNAME'
  }
}
```

Then there was the addition of a [`customDomains`](https://learn.microsoft.com/en-us/azure/templates/microsoft.app/containerapps?pivots=deployment-language-bicep#customdomain) property to the `Microsoft.App/containerApps` resource:

```bicep
resource containerApp 'Microsoft.App/containerApps@2022-11-01-preview' = {
  //...
  properties: {
    configuration: {
      //...
      ingress: {
        //...
        customDomains: [
          {
            name: managedEnvironmentManagedCertificate.properties.subjectName
            certificateId: managedEnvironmentManagedCertificate.id
            bindingType: 'SniEnabled'
          }
        ]
        //...
      }
      //...
    }
    //...
  }
  //...
}
```

It looked simple enough. I added those two resources to my Bicep file and ran the pipeline. It failed. I got this error:

> `Creating managed certificate requires hostname '....' added as a custom hostname to a container app in environment 'caenv-appname-dev'`

Googling that error message didn't lead me to [this issue](https://github.com/microsoft/azure-container-apps/issues/607) on the Azure Container Apps GitHub repo. Other people were having similar issues. I was able to gather enough clues from that issue to get me to a working approach. I may be the first person in the world to have got this far... Wouldn't that be special?

## The three pipe(line) solution

So whilst the original approach I came up with looked like it should work, it did not. What succeeded was an approach where I ran one pipeline to deploy some Bicep, a second pipeline to deploy some tweaked Bicep, and a third pipeline to deploy some more tweaked Bicep. Then profit.

### Pipeline / Bicep template 1: Create a disabled custom domain

### Pipeline / Bicep template 2: Create the managed certificate

### Pipeline / Bicep template 3: Create an active custom domain
