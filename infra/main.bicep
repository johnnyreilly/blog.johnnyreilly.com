param location string
param branch string
param name string
param tags object
@secure()
param repositoryToken string
param customDomainName string

resource staticWebApp 'Microsoft.Web/staticSites@2021-02-01' = {
  name: name
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

output staticWebAppDefaultHostName string = staticWebApp.properties.defaultHostname // eg gentle-bush-0db02ce03.azurestaticapps.net
output staticWebAppId string = staticWebApp.id
output staticWebAppName string = staticWebApp.name
