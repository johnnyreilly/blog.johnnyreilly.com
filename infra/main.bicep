param location string
param branch string
param staticWebAppName string
param tags object
@secure()
param repositoryToken string
param rootCustomDomainName string
param blogCustomDomainName string
param workspaceName string = 'blog-app-insights-workspace'
param appInsightsName string = 'blog-app-insights'

var cosmosDbAccountName = 'site'
var cosmosDbDatabaseName = 'sitedb'

module appInsights './appInsights.bicep' = {
  name: 'appInsights'
  params: {
    location: location
    tags: tags
    workspaceName: workspaceName
    appInsightsName: appInsightsName
  }
}

module database 'database/main.bicep' = {
  name: 'database'
  params: {
    tags: tags
    location: location
    cosmosDbAccountName: cosmosDbAccountName
    cosmosDbDatabaseName: cosmosDbDatabaseName
    userId: 'fdc0f550-79f0-4c06-9ad9-be0f13ce344b' // https://portal.azure.com/#view/Microsoft_AAD_UsersAndTenants/UserProfileMenuBlade/~/overview/userId/fdc0f550-79f0-4c06-9ad9-be0f13ce344b
  }
}

resource appInsightsResource 'Microsoft.Insights/components@2020-02-02' existing = {
  name: appInsightsName
}

module staticWebApp './static-web-app.bicep' = {
  name: 'staticWebApp'
  params: {
    location: location
    branch: branch
    staticWebAppName: staticWebAppName
    tags: tags
    repositoryToken: repositoryToken
    rootCustomDomainName: rootCustomDomainName
    blogCustomDomainName: blogCustomDomainName
    appInsightsId: appInsights.outputs.appInsightsId
    appInsightsConnectionString: appInsightsResource.properties.ConnectionString
    appInsightsInstrumentationKey: appInsightsResource.properties.InstrumentationKey
    cosmosDbAccountName: database.outputs.cosmosDbAccountName
    cosmosDbDatabaseName: database.outputs.cosmosDbDatabaseName
  }
}

output staticWebAppDefaultHostName string = staticWebApp.outputs.staticWebAppDefaultHostName // eg gentle-bush-0db02ce03.azurestaticapps.net
output staticWebAppId string = staticWebApp.outputs.staticWebAppId
output staticWebAppName string = staticWebApp.outputs.staticWebAppName
