@description('The name of the cosmos DB account')
param cosmosDbAccountName string

@description('Cosmosdb database name')
param databaseName string

@description('Name of Container')
param containerName string

@allowed([
  'DatabaseAccount'
  'SqlDatabase'
  'Container'
])
@description('The scope of the role assignment')
param scopeType string = 'DatabaseAccount'

@description('The service principal')
param principalId string

@description('The role definition name')
param roleDefinitionName string

resource cosmosDbAccount 'Microsoft.DocumentDB/databaseAccounts@2021-06-15' existing = {
  name: cosmosDbAccountName
}

resource sqlDatabase 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2021-04-15' existing = if (scopeType == 'SqlDatabase' || scopeType == 'Container') {
  parent: cosmosDbAccount
  name: databaseName
}

resource container 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2021-06-15' existing = if (scopeType == 'Container') {
  parent: sqlDatabase
  name: containerName
}

var scopes = {
  DatabaseAccount: cosmosDbAccount.id
  SqlDatabase: (scopeType == 'SqlDatabase' || scopeType == 'Container') ? '${cosmosDbAccount.id}/dbs/${sqlDatabase.name}' : ''
  Container: (scopeType == 'Container') ? '${cosmosDbAccount.id}/dbs/${sqlDatabase.name}/colls/${container.name}' : '' 
}

resource roleDefinition 'Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2022-02-15-preview' existing = {
  parent: cosmosDbAccount
  name: roleDefinitionName
}

resource sqlRoleAssignment 'Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2022-02-15-preview' = {
  name: guid(cosmosDbAccount.id, roleDefinition.id, principalId)
  parent: cosmosDbAccount
  properties: {
    roleDefinitionId: roleDefinition.id
    principalId: principalId
    scope: scopes[scopeType]
  }
}
