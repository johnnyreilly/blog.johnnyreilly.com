@description('Tags that our resources need')
param tags object

@description('Cosmos DB account name, max length 44 characters, lowercase. e.g. cosmos-myapp-sbx-001')
param cosmosDbAccountName string

@description('Location for the resources')
param location string

@description('Identity for the resource. https://docs.microsoft.com/en-us/azure/templates/microsoft.documentdb/databaseaccounts?tabs=bicep#managedserviceidentity')
param identity object = {
  type: 'None'
}

@allowed([
  'Sql'
  'MongoDB'
  'Cassandra'
  'Gremlin'
  'Table'
])
@description('Cosmos DB account type')
param accountApi string = 'Sql'

@description('An array that contains the georeplication locations enabled for the Cosmos DB account. https://docs.microsoft.com/en-us/azure/templates/microsoft.documentdb/databaseaccounts?tabs=bicep#location')
param locations array

@description('The object representing the policy for taking backups on an account. https://docs.microsoft.com/en-us/azure/templates/microsoft.documentdb/databaseaccounts?tabs=bicep#backuppolicy')
param backupPolicy object = {
  type: 'Periodic'
  periodicModeProperties: {
    backupIntervalInMinutes: 240
    backupRetentionIntervalInHours: 8
  }
}

@description('Whether requests from Public Network are allowed.')
@allowed([
  'Disabled'
  'Enabled'
])
param publicNetworkAccess string = 'Enabled'

@description('The offer type for the Cosmos DB database account.')
@allowed([
  'Standard'
])
param databaseAccountOfferType string = 'Standard'

@allowed([
  'Eventual'
  'ConsistentPrefix'
  'Session'
  'BoundedStaleness'
  'Strong'
])
@description('The default consistency level of the Cosmos DB account')
param defaultConsistencyLevel string = 'Session'

@minValue(10)
@maxValue(2147483647)
@description('Max stale requests. Required for BoundedStaleness. Valid ranges, Single Region: 10 to 1000000. Multi Region: 100000 to 1000000')
param maxStalenessPrefix int = 100000

@minValue(5)
@maxValue(86400)
@description('Max lag time (minutes). Required for BoundedStaleness. Valid ranges, Single Region: 5 to 84600. Multi Region: 300 to 86400')
param maxIntervalInSeconds int = 300

@description('Enable multi-master to make all regions writable')
param multipleWriteLocations bool = false

@description('Enable automatic failover for regions')
param automaticFailover bool = true

@description('IP addresses to allow access to Cosmos DB')
param allowedIpAdresses array = [
  '0.0.0.0'
]

@description('Array of virtualNetworkRule objects {id: subnetId}')
param virtualNetworkRules array = []

@description('Pricing mode of the Cosmos DB account')
@allowed([
  'Provisioned'
  'Serverless'
])
param pricingMode string = 'Provisioned'

@description('Enable or disable Advanced Threat Protection')
param advancedThreatProtectionEnabled bool = true

var apiType = {
  Sql: {
    kind: 'GlobalDocumentDB'
  }
  MongoDB: {
    kind: 'MongoDB'
  }
  Cassandra: {
    kind: 'GlobalDocumentDB'
    capabilities: [
      {
        name: 'EnableCassandra'
      }
    ]
  }
  Gremlin: {
    kind: 'GlobalDocumentDB'
    capabilities: [
      {
        name: 'EnableGremlin'
      }
    ]
  }
  Table: {
    kind: 'GlobalDocumentDB'
    capabilities: [
      {
        name: 'EnableTable'
      }
    ]
  }
}

var consistencyPolicy = {
  Eventual: {
    defaultConsistencyLevel: 'Eventual'
  }
  ConsistentPrefix: {
    defaultConsistencyLevel: 'ConsistentPrefix'
  }
  Session: {
    defaultConsistencyLevel: 'Session'
  }
  BoundedStaleness: {
    defaultConsistencyLevel: 'BoundedStaleness'
    maxStalenessPrefix: maxStalenessPrefix
    maxIntervalInSeconds: maxIntervalInSeconds
  }
  Strong: {
    defaultConsistencyLevel: 'Strong'
  }
}

resource databaseAccount 'Microsoft.DocumentDB/databaseAccounts@2021-04-15' = {
  name: cosmosDbAccountName
  kind: apiType[accountApi].kind
  location: location
  tags: tags
  identity: identity
  properties: {
    consistencyPolicy: consistencyPolicy[defaultConsistencyLevel]
    locations: locations
    databaseAccountOfferType: databaseAccountOfferType
    enableAutomaticFailover: automaticFailover
    enableMultipleWriteLocations: multipleWriteLocations
    disableKeyBasedMetadataWriteAccess: true
    publicNetworkAccess: publicNetworkAccess
    isVirtualNetworkFilterEnabled: true
    capabilities: pricingMode == 'Serverless' ? [
      {
        name: 'EnableServerless'
      }
    ] : []
    ipRules: [for item in allowedIpAdresses: {
      ipAddressOrRange: item
    }]
    backupPolicy: backupPolicy
    virtualNetworkRules: virtualNetworkRules
  }
}

resource advancedThreatProtectionSettings 'Microsoft.Security/advancedThreatProtectionSettings@2019-01-01' = if (advancedThreatProtectionEnabled) {
  name: 'current'
  scope: databaseAccount
  properties: {
    isEnabled: advancedThreatProtectionEnabled
  }
}

output cosmosDbAccountName string = databaseAccount.name
output cosmosDbAccountId string = databaseAccount.id
