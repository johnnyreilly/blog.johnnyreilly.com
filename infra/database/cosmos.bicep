@minLength(3)
@maxLength(11)
param location string

@description('Tags that our resources need')
param tags object

@description('CosmosDb account name')
param cosmosDbAccountName string

@description('CosmosDb Database Name')
param cosmosDbDatabaseName string

@description('Specifies if Az is enabled for Cosmos')
param isCosmosDbZoneRedundant bool = false

var locations = [
  {
    locationName: location
    failoverPriority: 0
    isZoneRedundant: isCosmosDbZoneRedundant
  }
]

var allowedIpAddresses = [
  // magic IP to allow requests from Azure
  '0.0.0.0'
]

resource databaseAccount 'Microsoft.DocumentDB/databaseAccounts@2022-08-15' = {
  name: cosmosDbAccountName
  kind: 'GlobalDocumentDB'
  location: location
  tags: tags
  properties: {
    consistencyPolicy: { defaultConsistencyLevel: 'Session' }
    locations: locations
    databaseAccountOfferType: 'Standard'
    enableAutomaticFailover: true
    enableMultipleWriteLocations: false
    disableKeyBasedMetadataWriteAccess: true
    publicNetworkAccess: 'Enabled' // TODO: change to 'Disabled'?
    capabilities: [
      {
        name: 'EnableServerless'
      }
    ]
    ipRules: [for item in allowedIpAddresses: {
      ipAddressOrRange: item
    }]
    backupPolicy: { type: 'Periodic' }
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

resource container 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2022-05-15' = {
  parent: sqlDatabase
  name: 'redirects'
  properties: {
    resource: {
      id: 'redirects'
      partitionKey: {
        paths: [
          '/url'
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
  }
}

output cosmosDbAccountName string = databaseAccount.name
