param location string
param branch string
param staticWebAppName string
param functionAppName string
param hostingPlanName string
param storageAccountName string
param tags object
@secure()
param repositoryToken string
param customDomainName string

module functionApp 'function.bicep' = {
  name: 'functionApp'
  params: {
    location: location
    tags: tags
    functionAppName: functionAppName
    hostingPlanName: hostingPlanName
    storageAccountName: storageAccountName
  }
}

resource staticWebApp 'Microsoft.Web/staticSites@2021-02-01' = {
  name: staticWebAppName
  location: location
  tags: tags
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    repositoryUrl: 'https://github.com/johnnyreilly/blog.johnnyreilly.com'
    repositoryToken: repositoryToken
    branch: branch
    provider: 'GitHub'
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    buildProperties:{
      skipGithubActionWorkflowGeneration: true
    }
  }
}

resource customDomain 'Microsoft.Web/staticSites/customDomains@2021-02-01' = {
  parent: staticWebApp
  name: customDomainName
  properties: {}
}

resource staticAppBackend 'Microsoft.Web/staticSites/linkedBackends@2022-03-01' = {
  name: '${staticWebAppName}/backend'
  properties: {
    backendResourceId: functionApp.outputs.functionAppResourceId
    region: location
  }
}

output staticWebAppDefaultHostName string = staticWebApp.properties.defaultHostname // eg gentle-bush-0db02ce03.azurestaticapps.net
output staticWebAppId string = staticWebApp.id
output staticWebAppName string = staticWebApp.name
