targetScope = 'resourceGroup'

@description('Environment eg dev, prod')
param envName string

param location string
param branch string
param staticWebAppName string
param tags object
param rootCustomDomainName string
param blogCustomDomainName string

var combinedTags = union(tags, { 'azd-env-name': envName })

var workspaceName = 'blog-app-insights-workspace'
var appInsightsName = 'blog-app-insights'

var cosmosDbAccountName = 'johnnyreilly-com-database'
var cosmosDbDatabaseName = 'sitedb'

module appInsights './app-insights.bicep' = {
  name: '${deployment().name}-appInsights'
  params: {
    location: location
    tags: combinedTags
    workspaceName: workspaceName
    appInsightsName: appInsightsName
  }
}

module database 'database/main.bicep' = {
  name: '${deployment().name}-database'
  params: {
    tags: combinedTags
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
  name: '${deployment().name}-staticWebApp'
  params: {
    location: location
    branch: branch
    staticWebAppName: staticWebAppName
    tags: combinedTags
    rootCustomDomainName: rootCustomDomainName
    blogCustomDomainName: blogCustomDomainName
    appInsightsId: appInsights.outputs.appInsightsId
    appInsightsConnectionString: appInsightsResource.properties.ConnectionString
    appInsightsInstrumentationKey: appInsightsResource.properties.InstrumentationKey
    cosmosDbAccountName: database.outputs.cosmosDbAccountName
  }
}

output staticWebAppDefaultHostName string = staticWebApp.outputs.staticWebAppDefaultHostName // eg gentle-bush-0db02ce03.azurestaticapps.net
output staticWebAppId string = staticWebApp.outputs.staticWebAppId
output staticWebAppName string = staticWebApp.outputs.staticWebAppName
