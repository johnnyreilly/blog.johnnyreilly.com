param location string
param tags object
param workspaceName string = 'appInsightsWorkspace'
param appInsightsName string = 'appInsights'

// https://learn.microsoft.com/en-us/azure/templates/microsoft.operationalinsights/workspaces?pivots=deployment-language-bicep
// resource workspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
//   name: workspaceName
//   location: location
//   tags: tags
//   properties: {
//     sku: {
//       name: 'PerGB2018'
//     }
//     retentionInDays: 30
//     workspaceCapping: {}
//   }
// }

// https://learn.microsoft.com/en-us/azure/templates/microsoft.insights/components?pivots=deployment-language-bicep
resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: appInsightsName
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    Flow_Type: 'Bluefield'
    // WorkspaceResourceId: workspace.id
    WorkspaceResourceId: '/subscriptions/26178455-cfd9-4d36-bab5-35896b6d2dd1/resourceGroups/DefaultResourceGroup-WEU/providers/Microsoft.OperationalInsights/workspaces/DefaultWorkspace-26178455-cfd9-4d36-bab5-35896b6d2dd1-WEU'

    // RetentionInDays: 30
    // IngestionMode: 'LogAnalytics'
    // publicNetworkAccessForIngestion: 'Enabled'
    // publicNetworkAccessForQuery: 'Enabled'
  }
}

output appInsightsId string = appInsights.id
output appInsightsInstrumentationKey string = appInsights.properties.InstrumentationKey
output appInsightsConnectionString string = appInsights.properties.ConnectionString
