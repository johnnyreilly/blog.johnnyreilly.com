@minLength(3)
@maxLength(11)
param location string

@description('Tags that our resources need')
param tags object

@description('CosmosDb account name')
param cosmosDbAccountName string

@description('CosmosDb Database Name')
param cosmosDbDatabaseName string

@description('ip addresses of folk who will run queries in the portal')
param allowedIPAddresses array

@description('Specifies if Az is enabled for Cosmos')
param isCosmosDbZoneRedundant bool = false

var locations = [
  {
    locationName: location
    failoverPriority: 0
    isZoneRedundant: isCosmosDbZoneRedundant
  }
]

var ipAddresses = union([
  // magic IP to allow requests from Azure
  '0.0.0.0'
], allowedIPAddresses)

resource databaseAccount 'Microsoft.DocumentDB/databaseAccounts@2023-04-15' = {
  name: cosmosDbAccountName
  kind: 'GlobalDocumentDB'
  location: location
  tags: tags
  properties: {
    consistencyPolicy: { defaultConsistencyLevel: 'Session' }
    locations: locations
    databaseAccountOfferType: 'Standard'
    publicNetworkAccess: 'Enabled' // TODO: change to 'Disabled'?
    ipRules: [for ipAddress in ipAddresses: {
      ipAddressOrRange: ipAddress
    }]
    // backupPolicy: { type: 'Periodic', periodicModeProperties: { backupIntervalInMinutes: 240, backupRetentionIntervalInHours: 720 }}
  }
}

resource sqlDatabase 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2022-08-15' = {
  parent: databaseAccount
  name: cosmosDbDatabaseName
  tags: tags
  properties: {
    resource: {
      id: cosmosDbDatabaseName
    }
  }
}

var cosmosDbContainerName = 'redirects'

resource container 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2022-05-15' = {
  parent: sqlDatabase
  name: cosmosDbContainerName
  properties: {
    resource: {
      id: cosmosDbContainerName
      partitionKey: {
        paths: [
          '/originalUrl'
        ]
        kind: 'Hash'
      }
      indexingPolicy: {
        indexingMode: 'consistent'
        includedPaths: [
          {
            path: '/*'
          }
        ]
        excludedPaths: [
          {
            path: '/myPathToNotIndex/*'
          }
          {
            path: '/_etag/?'
          }
        ]
      }
      defaultTtl: 86400
    }
    options: {
      autoscaleSettings: {
        maxThroughput: 1000
      }
    }
  }
}

resource advancedThreatProtectionSettings 'Microsoft.Security/advancedThreatProtectionSettings@2019-01-01' = {
  name: 'current'
  scope: databaseAccount
  properties: {
    isEnabled: true
  }
}

output cosmosDbAccountName string = databaseAccount.name
