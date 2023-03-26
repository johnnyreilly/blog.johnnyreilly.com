@description('Name of the cosmosdb account')
param cosmosDbAccountName string

resource cosmosDbAccount 'Microsoft.DocumentDB/databaseAccounts@2021-04-15' existing = {
  name: cosmosDbAccountName
}

resource advancedThreatProtectionSettings 'Microsoft.Security/advancedThreatProtectionSettings@2019-01-01' = {
  name: 'current'
  scope: cosmosDbAccount
  properties: {
    isEnabled: true
  }
}
