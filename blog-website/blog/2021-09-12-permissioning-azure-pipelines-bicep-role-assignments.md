---
title: "Permissioning Azure Pipelines with Bicep and Role Assignments"
authors: johnnyreilly
tags: [Role Assignments, Bicep, Azure DevOps, Azure Pipelines]
image: blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/permissioning-azure-pipelines-with-bicep-and-role-assignments.png
hide_table_of_contents: false
---
We want to test our newly deployed Azure resources in the context of an Azure Pipeline.  We'll permission our Azure Pipeline to access these resources using role assignments. Finally we'll write a dotnet test that runs in the context of the pipeline and makes use of those role assignments.

We're following this approach as an alternative to exporting connection strings, as these can be viewed in the Azure Portal; which may be an security issue if you have many people who are able to access the portal and view outputs.

![title image reading "Permissioning Azure Pipelines with Bicep and Role Assignments" and some Azure logos](../static/blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/permissioning-azure-pipelines-with-bicep-and-role-assignments.png)

There's a number of things we need to have set up before we can actually get deploying:

- Add Event Hubs to your subscription
- Permission your service connection / service principal

## Add Event Hubs to your subscription

First of all, we may need to add Event Hubs to our Azure subscription.

Without this in place, we may encounter errors of the type:

> ##[error]MissingSubscriptionRegistration: The subscription is not registered to use namespace 'Microsoft.EventHub'. See https://aka.ms/rps-not-found for how to register subscriptions.

We do this by going to "Resource Providers" in the [Azure Portal](https://portal.azure.com) and registering the resources you need. Lots are registered by default, but not all.

![Screenshot of the Azure Portal, subscriptions -> resource providers section, showing that Event Hubs have been registered](../static/blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/screenshot-azure-portal-subscription-resource-providers.png)

## Permission our service connection / service principal

In order that we can run pipelines related to Azure, we mostly need to have an Azure Resource Manager service connection set up in Azure DevOps.  Once that exists, we also need to give it a role assignment to allow it to create role assignments of its own when pipelines are running.

Without this in place, we may encounter errors of the type:

> ##[error]The template deployment failed with error: 'Authorization failed for template resource '{GUID-THE-FIRST}' of type 'Microsoft.Authorization/roleAssignments'. The client '{GUID-THE-SECOND}' with object id '{GUID-THE-SECOND}' does not have permission to perform action 'Microsoft.Authorization/roleAssignments/write' at scope '/subscriptions/***/resourceGroups/johnnyreilly/providers/Microsoft.EventHub/namespaces/evhns-demo/providers/Microsoft.Authorization/roleAssignments/{GUID-THE-FIRST}'.'.

Essentially, we want to be able to run pipelines that say "hey Azure, we want to give permissions to our service connection".  We are doing this *with* the self same service connection, so (chicken and egg) we first need to give it permission to give those commands in future.  This is a little confusing; but let's role with it. (Pun most definitely intended. 😉)

To grant that permission / add that role assignment, we go to the service connection in Azure Devops:

![Screenshot of the service connection in Azure DevOps](../static/blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/screenshot-azure-devops-service-connection.png)

We can see there's two links here; first we'll click on "Manage Service Principal", which will take us to the service principal in the Azure Portal:

![Screenshot of the service principal in the Azure Portal](../static/blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/screenshot-azure-portal-service-principal.png)

Take note of the display name of the service principal; we'll need that as we click on the "Manage service connection roles" link, which will take us to the resource groups IAM page in the Azure Portal:

![Screenshot of the resource groups IAM page in the Azure Portal](../static/blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/screenshot-azure-portal-service-principal-access-control.png)

Here we can click on "Add role assignment", select "Owner":

![Screenshot of the add role assignment IAM page in the Azure Portal](../static/blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/screenshot-azure-portal-add-role-assignment.png)

Then when selecting members we should be able to look up the service principal to assign it:

![Screenshot of the add role assignment select member IAM page in the Azure Portal](../static/blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/screenshot-azure-portal-add-role-assignment-member.png)

We now have a service connection which we should be able to use for granting permissions / role assignments, which is what we need.

## Event Hub and Role Assignment with Bicep

Next we want a Bicep file that will, when run, provision an Event Hub and a role assignment which will allow our Azure Pipeline (via its service connection) to interact with it.

```bicep
@description('Name of the eventhub namespace')
param eventHubNamespaceName string

@description('Name of the eventhub name')
param eventHubName string

@description('The service principal')
param principalId string

// Create an event hub namespace
resource eventHubNamespace 'Microsoft.EventHub/namespaces@2021-01-01-preview' = {
  name: eventHubNamespaceName
  location: resourceGroup().location
  sku: {
    name: 'Standard'
    tier: 'Standard'
    capacity: 1
  }
  properties: {
    zoneRedundant: true
  }
}

// Create an event hub inside the namespace
resource eventHubNamespaceName_eventHubName 'Microsoft.EventHub/namespaces/eventhubs@2021-01-01-preview' = {
  parent: eventHubNamespace
  name: eventHubName
  properties: {
    messageRetentionInDays: 7
    partitionCount: 1
  }
}

// Grant Listen and Send on our event hub
resource eventHubNamespaceName_eventHubName_ListenSend 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2021-01-01-preview' = {
  parent: eventHubNamespaceName_eventHubName
  name: 'ListenSend'
  properties: {
    rights: [
      'Listen'
      'Send'
    ]
  }
  dependsOn: [
    eventHubNamespace
  ]
}

// give Azure Pipelines Service Principal permissions against the namespace 

var roleDefinitionAzureEventHubsDataOwner = subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'f526a384-b230-433a-b45c-95f59c4a2dec')

resource integrationTestEventHubReceiverNamespaceRoleAssignment 'Microsoft.Authorization/roleAssignments@2018-01-01-preview' = {
  name: guid(principalId, eventHubNamespace.id, roleDefinitionAzureEventHubsDataOwner)
  scope: eventHubNamespace
  properties: {
    roleDefinitionId: roleDefinitionAzureEventHubsDataOwner
    principalId: principalId
  }
}
```

Our bicep template takes three parameters: 
...

## Azure Pipeline

We'll begin by creating a Repo in Azure DevOps which we're going to work in. Then we're going to add an `azure-pipelines.yml` file which Azure DevOps can use to power a pipeline:  

```yml
trigger:
  - main
  
pool:
  vmImage: ubuntu-latest

steps:
- bash: az bicep build --file infra/static-web-app/main.bicep
  displayName: "Compile Bicep to ARM"

- task: AzureResourceManagerTemplateDeployment@3
  name: DeployStaticWebAppInfra
  displayName: Deploy Static Web App infra
  inputs:
    deploymentScope: Resource Group
    azureResourceManagerConnection: $(serviceConnection)
    subscriptionId: $(subscriptionId)
    action: Create Or Update Resource Group
    resourceGroupName: $(azureResourceGroup)
    location: $(location)
    templateLocation: Linked artifact
    csmFile: 'infra/static-web-app/main.json' # created by bash script
    overrideParameters: >-
      -repositoryUrl $(repo)
      -repositoryBranch $(Build.SourceBranchName)
      -appName $(staticWebAppName)
    deploymentMode: Incremental
    deploymentOutputs: deploymentOutputs

- task: PowerShell@2
  name: 'SetDeploymentOutputVariables'
  displayName: "Set Deployment Output Variables"
  inputs:
    targetType: inline
    script: |
      $armOutputObj = '$(deploymentOutputs)' | ConvertFrom-Json
      $armOutputObj.PSObject.Properties | ForEach-Object {
        $keyname = $_.Name
        $value = $_.Value.value

        # Creates a standard pipeline variable
        Write-Output "##vso[task.setvariable variable=$keyName;]$value"

        # Creates an output variable
        Write-Output "##vso[task.setvariable variable=$keyName;issecret=true;isOutput=true]$value"

        # Display keys in pipeline
        Write-Output "output variable: $keyName"
      }
    pwsh: true

- task: AzureStaticWebApp@0
  name: DeployStaticWebApp
  displayName: Deploy Static Web App
  inputs:
    app_location: 'static-web-app'
    # api_location: 'api'
    output_location: 'build'
    azure_static_web_apps_api_token: $(deployment_token) # captured from deploymentOutputs
```

When the pipeline is run, it does the following:

1. Compiles our Bicep into an ARM template
2. Deploys the compiled ARM template to Azure
3. Captures the deployment outputs (essentially the `deployment_token`) and converts them into variables to use in the pipeline
4. Deploys our Static Web App using the `deployment_token`

The pipeline depends upon a number of variables:
- `azureResourceGroup` - the name of your resource group in Azure where the app will be deployed
- `location` - where your app is deployed, eg `northeurope`
- `repo` - the URL of your repository in Azure DevOps, eg https://dev.azure.com/johnnyreilly/_git/azure-static-web-apps
- `serviceConnection` - the name of your AzureRM service connection in Azure DevOps
- `staticWebAppName` - the name of your static web app, eg `azure-static-web-apps-johnnyreilly`
- `subscriptionId` - your Azure subscription id from the [Azure Portal](https://portal.azure.com)



This post demonstrates how to deploy [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/overview) using Bicep and Azure DevOps. It includes a few workarounds for the ["Provider is invalid.  Cannot change the Provider. Please detach your static site first if you wish to use to another deployment provider." issue](https://github.com/Azure/static-web-apps/issues/516).

![title image reading "Publish Azure Static Web Apps with Bicep and Azure DevOps" and some Azure logos](../static/blog/2021-08-15-bicep-azure-static-web-apps-azure-devops/title-image.png)

