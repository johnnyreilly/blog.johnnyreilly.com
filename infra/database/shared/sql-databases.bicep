@description('Tags that our resources need')
param tags object

@description('Cosmos DB account name to add the SQL database into')
param cosmosDbAccountName string

@description('Cosmosdb SQL database name')
param databaseName string

@description('Pricing mode of the Cosmosdb SQL database')
@allowed([
  'Provisioned'
  'Serverless'
  'Autoscale'
])
param pricingMode string = 'Provisioned'

@minValue(400)
@maxValue(1000000)
@description('Throughput for the database - required for Provisioned')
param throughput int = 400

@minValue(1000)
@maxValue(1000000)
@description('Maximum throughput for the database - required for Autoscale')
param autoscaleMaximumThroughput int = 1000

// this bicep here looks overly complicated but is necessary due to the strict 
// rules of what attributes can and cant exist with each pricing mode
var pricingOptions = { 
  options: pricingMode == 'Autoscale' ? {
    autoscaleSettings: {
      maxThroughput: autoscaleMaximumThroughput
    }
  } : {
    throughput: pricingMode == 'Provisioned' ? throughput : null
  }
}

var properties = {
  resource: {
    id: databaseName
  }
}

var databaseProperties = pricingMode != 'Serverless' ? union(properties, pricingOptions) : properties 

resource databaseAccount 'Microsoft.DocumentDB/databaseAccounts@2021-04-15' existing = {
  name: cosmosDbAccountName
}

resource sqlDatabase 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2021-04-15' = {
  parent: databaseAccount
  name: databaseName
  tags: tags
  properties: databaseProperties
}

output sqlDatabaseName string = sqlDatabase.name
output sqlDatabaseId string = sqlDatabase.id
