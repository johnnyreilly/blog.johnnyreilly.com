// useful ref https://github.com/Azure/azure-quickstart-templates/blob/master/quickstarts/microsoft.documentdb/cosmosdb-sql-rbac/main.bicep
@description('Name of the cosmosdb account')
param cosmosDbAccountName string

@description('role definition id')
param roleDefinitionId string

@description('principal id')
param principalId string

resource cosmosDbAccount 'Microsoft.DocumentDB/databaseAccounts@2023-04-15' existing = {
  name: cosmosDbAccountName
}

resource roleDefinition 'Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2023-04-15' existing = {
  parent: cosmosDbAccount
  name: roleDefinitionId
}

resource cosmosRole 'Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2023-04-15' = {
  name: guid(roleDefinition.id, principalId)
  parent: cosmosDbAccount
  properties: {
    roleDefinitionId: roleDefinition.id
    principalId: principalId
    scope: cosmosDbAccount.id
  }
}
