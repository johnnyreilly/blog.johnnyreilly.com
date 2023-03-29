// useful ref https://github.com/Azure/azure-quickstart-templates/blob/master/quickstarts/microsoft.documentdb/cosmosdb-sql-rbac/main.bicep
@description('Name of the cosmosdb account')
param cosmosDbAccountName string

@description('user id')
param userId string

resource cosmosDbAccount 'Microsoft.DocumentDB/databaseAccounts@2022-08-15' existing = {
  name: cosmosDbAccountName
}

// Azure Cosmos DB exposes two built-in role definitions: https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-setup-rbac#built-in-role-definitions
var roleDefinitionCosmosDbDataReader = '00000000-0000-0000-0000-000000000001'
var roleDefinitionCosmosDbContributor = '00000000-0000-0000-0000-000000000002'

// grant access to the cosmos db account to your user
var roleAssignments = [
  {
    name: 'eng-contributor'
    principalId: userId
    roleDefinitionId: roleDefinitionCosmosDbContributor
    scopeType: 'DatabaseAccount'
  }
  {
    name: 'eng-reader'
    principalId: userId
    roleDefinitionId: roleDefinitionCosmosDbDataReader
    scopeType: 'DatabaseAccount'
  }
]

@batchSize(1) 
resource cosmosRole 'Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2022-02-15' = [for roleAssignment in roleAssignments : {
  name: guid(roleAssignment.name, roleAssignment.roleDefinitionId, roleAssignment.principalId)
  parent: cosmosDbAccount
  properties: {
    roleDefinitionId: roleAssignment.roleDefinitionId
    principalId: roleAssignment.principalId
    scope: cosmosDbAccount.id
  }
}]
