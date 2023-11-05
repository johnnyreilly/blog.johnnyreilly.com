---
slug: arm-templates-security-role-assignments
title: 'Azure RBAC: role assignments and ARM templates'
authors: johnnyreilly
image: ./with-great-power-comes-great-responsibility.webp
tags: [azure]
hide_table_of_contents: false
description: 'ARM templates can help define Azure Role-Based Access Control. By creating role assignments, users can grant Managed Identities access to resources.'
---

This post is about Azure's role assignments and ARM templates. Role assignments can be thought of as "permissions for Azure".

<!--truncate-->

If you're deploying to Azure, there's a good chance you're using [ARM templates](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview) to do so. Once you've got past "Hello World", you'll probably find yourself in a situation when you're deploying multiple types of resource to make your solution. For instance, you may be deploying an [App Service](https://docs.microsoft.com/en-us/azure/app-service/quickstart-arm-template?pivots=platform-linux#review-the-template) alongside [Key Vault](https://docs.microsoft.com/en-us/azure/templates/microsoft.keyvault/vaults) and [Storage](https://docs.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts).

One of the hardest things when it comes to deploying software and having it work, is permissions. Without adequate permissions configured, the most beautiful code can do _nothing_. Incidentally, this is a good thing. We're deploying to the web; many people are there, not all good. As a different kind of web-head once said:

![Spider-man saying with great power, comes great responsibility](with-great-power-comes-great-responsibility.webp)

Azure has great power and [suggests you use it wisely](https://docs.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices#use-role-based-access-control).

> Access management for cloud resources is critical for any organization that uses the cloud. [Azure role-based access control (Azure RBAC)](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview) helps you manage who has access to Azure resources, what they can do with those resources, and what areas they have access to.
>
> Designating groups or individual roles responsible for specific functions in Azure helps avoid confusion that can lead to human and automation errors that create security risks. Restricting access based on the [need to know](https://en.wikipedia.org/wiki/Need_to_know) and [least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) security principles is imperative for organizations that want to enforce security policies for data access.

This is good advice. With that in mind, how can we ensure that the different resources we're deploying to Azure can talk to one another?

## Role (up for your) assignments

The answer is roles. There's a number of roles that exist in Azure that can be assigned to users, groups, service principals and managed identities. In our own case we're using managed identity for our resources. What we can do is use ["role assignments"](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview#how-azure-rbac-works) to give our managed identity access to given resources. [Arturo Lucatero](https://twitter.com/ArLucaID) gives a great short explanation of this:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Dzhm-garKBM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>

Whilst this explanation is delightfully simple, the actual implementation when it comes to ARM templates is a little more involved. Because now it's time to talk "magic" GUIDs. Consider the following truncated ARM template, which gives our managed identity (and hence our App Service which uses this identity) access to Key Vault and Storage:

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  // ...
  "variables": {
    // ...
    "managedIdentity": "[concat('mi-', parameters('applicationName'), '-', parameters('environment'), '-', '001')]",
    "appInsightsName": "[concat('appi-', parameters('applicationName'), '-', parameters('environment'), '-', '001')]",
    "keyVaultName": "[concat('kv-', parameters('applicationName'), '-', parameters('environment'), '-', '001')]",
    "storageAccountName": "[concat('st', parameters('applicationName'), parameters('environment'), '001')]",
    "storageBlobDataContributor": "[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'ba92f5b4-2d11-453d-a403-e96b0029c9fe')]",
    "keyVaultSecretsOfficer": "[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'b86a8fe4-44ce-4948-aee5-eccb2c155cd7')]",
    "keyVaultCryptoOfficer": "[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '14b46e9e-c2b7-41b4-b07b-48a6ebf60603')]",
    "uniqueRoleGuidKeyVaultSecretsOfficer": "[guid(resourceId('Microsoft.KeyVault/vaults',  variables('keyVaultName')), variables('keyVaultSecretsOfficer'), resourceId('Microsoft.KeyVault/vaults', variables('keyVaultName')))]",
    "uniqueRoleGuidKeyVaultCryptoOfficer": "[guid(resourceId('Microsoft.KeyVault/vaults',  variables('keyVaultName')), variables('keyVaultCryptoOfficer'), resourceId('Microsoft.KeyVault/vaults', variables('keyVaultName')))]",
    "uniqueRoleGuidStorageAccount": "[guid(resourceId('Microsoft.Storage/storageAccounts',  variables('storageAccountName')), variables('storageBlobDataContributor'), resourceId('Microsoft.Storage/storageAccounts', variables('storageAccountName')))]"
  },
  "resources": [
    {
      "type": "Microsoft.ManagedIdentity/userAssignedIdentities",
      "name": "[variables('managedIdentity')]",
      "apiVersion": "2018-11-30",
      "location": "[parameters('location')]"
    },
    // ...
    {
      "type": "Microsoft.Storage/storageAccounts/providers/roleAssignments",
      "apiVersion": "2020-04-01-preview",
      "name": "[concat(variables('storageAccountName'), '/Microsoft.Authorization/', variables('uniqueRoleGuidStorageAccount'))]",
      "dependsOn": [
        "[resourceId('Microsoft.ManagedIdentity/userAssignedIdentities', variables('managedIdentity'))]"
      ],
      "properties": {
        "roleDefinitionId": "[variables('storageBlobDataContributor')]",
        "principalId": "[reference(resourceId('Microsoft.ManagedIdentity/userAssignedIdentities/', variables('managedIdentity')), '2018-11-30').principalId]",
        "scope": "[resourceId('Microsoft.Storage/storageAccounts', variables('storageAccountName'))]",
        "principalType": "ServicePrincipal"
      }
    },
    {
      "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",
      "apiVersion": "2018-01-01-preview",
      "name": "[concat(variables('keyVaultName'), '/Microsoft.Authorization/', variables('uniqueRoleGuidKeyVaultSecretsOfficer'))]",
      "dependsOn": [
        "[resourceId('Microsoft.ManagedIdentity/userAssignedIdentities', variables('managedIdentity'))]"
      ],
      "properties": {
        "roleDefinitionId": "[variables('keyVaultSecretsOfficer')]",
        "principalId": "[reference(resourceId('Microsoft.ManagedIdentity/userAssignedIdentities/', variables('managedIdentity')), '2018-11-30').principalId]",
        "scope": "[resourceId('Microsoft.KeyVault/vaults', variables('keyVaultName'))]",
        "principalType": "ServicePrincipal"
      }
    },
    {
      "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",
      "apiVersion": "2018-01-01-preview",
      "name": "[concat(variables('keyVaultName'), '/Microsoft.Authorization/', variables('uniqueRoleGuidKeyVaultCryptoOfficer'))]",
      "dependsOn": [
        "[resourceId('Microsoft.ManagedIdentity/userAssignedIdentities', variables('managedIdentity'))]"
      ],
      "properties": {
        "roleDefinitionId": "[variables('keyVaultCryptoOfficer')]",
        "principalId": "[reference(resourceId('Microsoft.ManagedIdentity/userAssignedIdentities/', variables('managedIdentity')), '2018-11-30').principalId]",
        "scope": "[resourceId('Microsoft.KeyVault/vaults', variables('keyVaultName'))]",
        "principalType": "ServicePrincipal"
      }
    }
  ]
}
```

Let's take a look at these three variables:

```json
"storageBlobDataContributor": "[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'ba92f5b4-2d11-453d-a403-e96b0029c9fe')]",
"keyVaultSecretsOfficer": "[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'b86a8fe4-44ce-4948-aee5-eccb2c155cd7')]",
"keyVaultCryptoOfficer": "[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '14b46e9e-c2b7-41b4-b07b-48a6ebf60603')]",
```

The three variables above contain the subscription resource ids for the roles [Storage Blob Data Contributor](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor), [Key Vault Secrets Officer](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#key-vault-secrets-officer-preview) and [Key Vault Crypto Officer](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#key-vault-crypto-officer-preview). The first question on your mind is likely: "what is `ba92f5b4-2d11-453d-a403-e96b0029c9fe` and where does it come from?" Great question! Well, each of these GUIDs represents a built-in role in Azure RBAC. The `ba92f5b4-2d11-453d-a403-e96b0029c9fe` represents the Storage Blob Data Contributor role.

How can I look these up? Well, there's two ways; [there's an article which documents them here](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles) or you could crack open the [Cloud Shell](https://azure.microsoft.com/en-gb/features/cloud-shell/) and look up a role by GUID like so:

```ps
Get-AzRoleDefinition | ? {$_.id -eq "ba92f5b4-2d11-453d-a403-e96b0029c9fe" }

Name             : Storage Blob Data Contributor
Id               : ba92f5b4-2d11-453d-a403-e96b0029c9fe
IsCustom         : False
Description      : Allows for read, write and delete access to Azure Storage blob containers and data
Actions          : {Microsoft.Storage/storageAccounts/blobServices/containers/delete, Microsoft.Storage/storageAccounts/blobServices/containers/read,
                   Microsoft.Storage/storageAccounts/blobServices/containers/write, Microsoft.Storage/storageAccounts/blobServices/generateUserDelegationKey/action}
NotActions       : {}
DataActions      : {Microsoft.Storage/storageAccounts/blobServices/containers/blobs/delete, Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read,
                   Microsoft.Storage/storageAccounts/blobServices/containers/blobs/write, Microsoft.Storage/storageAccounts/blobServices/containers/blobs/move/action…}
NotDataActions   : {}
AssignableScopes : {/}
```

Or by name like so:

```ps
Get-AzRoleDefinition | ? {$_.name -like "*Crypto Officer*" }

Name             : Key Vault Crypto Officer
Id               : 14b46e9e-c2b7-41b4-b07b-48a6ebf60603
IsCustom         : False
Description      : Perform any action on the keys of a key vault, except manage permissions. Only works for key vaults that use the 'Azure role-based access control' permission model.
Actions          : {Microsoft.Authorization/*/read, Microsoft.Insights/alertRules/*, Microsoft.Resources/deployments/*, Microsoft.Resources/subscriptions/resourceGroups/read…}
NotActions       : {}
DataActions      : {Microsoft.KeyVault/vaults/keys/*}
NotDataActions   : {}
AssignableScopes : {/}
```

As you can see, the `Actions` section of the output above (and in even more detail on the [linked article](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles)) provides information about what the different roles can do. So if you're looking to enable one Azure resource to talk to another, you should be able to refer to these to identify a role that you might want to use.

## Creating a role assignment

So now we understand how you identify the roles in question, let's take the final leap and look at assigning those roles to our managed identity. For each role assignment, you'll need a `roleAssignments` resource defined that looks like this:

```json
{
  "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",
  "apiVersion": "2018-01-01-preview",
  "name": "[concat(variables('keyVaultName'), '/Microsoft.Authorization/', variables('uniqueRoleGuidKeyVaultCryptoOfficer'))]",
  "dependsOn": [
    "[resourceId('Microsoft.ManagedIdentity/userAssignedIdentities', variables('managedIdentity'))]"
  ],
  "properties": {
    "roleDefinitionId": "[variables('keyVaultCryptoOfficer')]",
    "principalId": "[reference(resourceId('Microsoft.ManagedIdentity/userAssignedIdentities/', variables('managedIdentity')), '2018-11-30').principalId]",
    "scope": "[resourceId('Microsoft.KeyVault/vaults', variables('keyVaultName'))]",
    "principalType": "ServicePrincipal"
  }
}
```

Let's go through the above, significant property by significant property (it's also worth checking the official reference [here](https://docs.microsoft.com/en-us/azure/templates/microsoft.authorization/roleassignments)):

- `type` \- the type of role assignment we want to create, for a key vault it's `"Microsoft.KeyVault/vaults/providers/roleAssignments"`, for storage it's `"Microsoft.Storage/storageAccounts/providers/roleAssignments"`. The pattern is that it's the resource type, followed by `"/providers/roleAssignments"`.
- `dependsOn` \- before we can create a role assignment, we need the service principal we desire to permission (in our case a managed identity) to exist
- `properties.roleDefinitionId` \- the role that we're assigning, provided as an id. So for this example it's the `keyVaultCryptoOfficer` variable, which was earlier defined as `[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'ba92f5b4-2d11-453d-a403-e96b0029c9fe')]`. (Note the use of the GUID)
- `properties.principalId` \- the id of the principal we're adding permissions for. In our case this is a managed identity (a type of service principal).
- `properties.scope` \- we're modifying another resource; our key vault isn't defined in this ARM template and we want to specify the resource we're granting permissions to.
- `properties.principalType` \- the type of principal that we're creating an assignment for; in our this is `"ServicePrincipal"` \- our managed identity.

There is an alternate approach that you can use where the `type` is `"Microsoft.Authorization/roleAssignments"`. Whilst this also works, it displayed errors in the [Azure tooling for VS Code](https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools). As such, we've opted not to use that approach in our ARM templates.

Many thanks to the awesome [John McCormick](https://github.com/jmccor99) who wrangled permissions with me until we bent Azure RBAC to our will.
