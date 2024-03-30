---
slug: azure-cosmosdb-container-item-generics
title: 'Azure Cosmos DB: container items and generics'
authors: johnnyreilly
tags: [azure, c#]
image: ./title-image.png
hide_table_of_contents: false
description: 'Learn how to use generics to store and retrieve different types of object in an Azure Cosmos DB Container.'
---

Cosmos DB is a great database for storing objects. But what if you want to store different types of object in the same container? This post demonstrates how you can use generics to store and retrieve different types of object in an Azure Cosmos DB Container. We're going to use C# for this example.

![title image reading "Azure Cosmos DB: container items and generics" with the Cosmos DB logo](title-image.png)

<!--truncate-->

There's a chicken and egg problem with storing and retrieving different types of object in the same container in Cosmos DB. The problem is that you need to know the type of the object in order to retrieve it. But you can't know the type of the object until you've retrieved it. The mechanism I've come to use makes use of generics and a `type` property on the object to solve this problem.

load list of items without knowing the type: `data` will be `object?`

```json
{
  "id": "overview",
  "itemName": "vw-beetle",
  "type": "car",
  "data": {
    "Wheels": 4,
    "Colour": "blue"
  },
  "createdAt": "2024-03-28T10:55:57.860484+00:00",
  "createdBy": "john.reilly",
  "updatedAt": "2024-03-28T14:31:37.9882095+00:00",
  "updatedBy": "john.reilly",
  "_rid": "NisFAIjrg3wFAAAAAAAAAA==",
  "_self": "dbs/NisFAA==/colls/NisFAIjrg3w=/docs/NisFAIjrg3wFAAAAAAAAAA==/",
  "_etag": "\"bd005ad6-0000-0c00-0000-66057f4a0000\"",
  "_attachments": "attachments/",
  "_ts": 1711636298
}
```

```cs title="DatabaseMyItemService.cs"
using System.Net;

using Microsoft.Azure.Cosmos;

using ContainerApp.Model.Database;
using ContainerApp.Utilities;

namespace ContainerApp.Services;

public class DatabaseMyItemService : IDatabaseMyItemService
{
    public const string DatabaseName = "my-database";

    public const string ContainerNameMyItems = "my-items";

    private readonly CosmosClient _client;
    private readonly ILogger<DatabaseMyItemService> _logger;

    public DatabaseMyItemService(ILogger<DatabaseMyItemService> logger, AppSettings appSettings)
    {
        _client = new CosmosClient(connectionString: appSettings.CosmosConnectionString);
        _logger = logger;
    }

    public async Task<MyItem<TData>?> UpsertItem<TData>(MyItem<TData> myItem)
    {
        try
        {
            _logger.LogInformation($"Upserting {nameof(MyItem)} with {nameof(myItem.itemName)}: {{{nameof(myItem.itemName)}}}", myItem.itemName);

            var container = _client
                .GetDatabase(DatabaseName)
                .GetContainer(ContainerNameMyItems);

            MyItem<TData>? savedItem = await container.UpsertItemAsync(myItem, new PartitionKey(myItem.itemName));

            return savedItem;
        }
        catch (CosmosException ex)
        {
            _logger.LogError(ex, $"Problem upserting {nameof(MyItem)} with {nameof(myItem.itemName)}: {{{nameof(myItem.itemName)}}}", myItem.itemName);
            throw new Exception($"Problem upserting {nameof(MyItem)} with {nameof(myItem.itemName)}: {myItem.itemName}", ex);
        }
    }

    public async Task<MyItem<TData>?> GetItem<TData>(string itemName)
    {
        try
        {
            _logger.LogInformation($"Looking up {nameof(MyItem)} with {nameof(itemName)}: {{{nameof(itemName)}}}", itemName);

            var container = _client
                .GetDatabase(DatabaseName)
                .GetContainer(ContainerNameMyItems);

            // In this simplified example we're intentionally using id as partition key - https://stackoverflow.com/questions/54636852/implications-of-using-id-for-the-partition-key-in-cosmosdb
            MyItem<TData>? myItem = await container.ReadItemAsync<MyItem<TData>>(itemName, new PartitionKey(itemName));

            return myItem;
        }
        catch (CosmosException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
        {
            return null;
        }
    }

    public async Task<List<MyItem>> GetItems(string itemName)
    {
        try
        {
            _logger.LogInformation($"Looking up {nameof(MyItem)}s by {nameof(itemName)}: {{{nameof(itemName)}}}", itemName);

            var container = _client
                .GetDatabase(DatabaseName)
                .GetContainer(ContainerNameMyItems);

            List<MyItem> myItems = await container.GetItemQueryIterator<MyItem>(
                new QueryDefinition(
                    "SELECT * FROM c WHERE c.itemName = @itemName"
                ).WithParameter("@itemName", itemName)
            ).ReadAllToListAsync();

            return myItems;
        }
        catch (CosmosException ex)
        {
            _logger.LogError(ex, $"Problem getting {nameof(MyItem)}s by {nameof(itemName)}: {{{nameof(itemName)}}}", itemName);
            throw new Exception($"Problem getting {nameof(MyItem)}s by {nameof(itemName)}: {itemName}", ex);
        }
    }
}
```

Here's the `MyItem` record that we're using in the above code:

```cs title="MyItem.cs"
namespace ContainerApp.Model.Database;

#pragma warning disable IDE1006

public record MyItem(
    string id,
    /// <summary>
    /// This is the partition key
    /// </summary>
    string itemName,
    string type,
    DateTimeOffset createdAt,
    string createdBy,
    DateTimeOffset updatedAt,
    string updatedBy
) : MyItem<object>(id, creditReviewPackName, itemName, type, null, createdAt, createdBy, updatedAt, updatedBy);

public record MyItem<TData>(
    string id,
    /// <summary>
    /// This is the partition key
    /// </summary>
    string itemName,
    string type,
    TData? data,
    DateTimeOffset createdAt,
    string createdBy,
    DateTimeOffset updatedAt,
    string updatedBy
);

#pragma warning restore IDE1006
```

```cs
    public static ItemViewModel ItemToItemViewModel(Item item)
    {
        var data = item.data is not Newtonsoft.Json.Linq.JObject dataJObject
            ? null
            : System.Text.Json.JsonSerializer.Deserialize<object>(dataJObject.ToString());

        return new(
            ItemName: item.itemName,
            Type: item.type,
            Data: data,
            CreatedAt: item.createdAt,
            CreatedBy: item.createdBy,
            UpdatedAt: item.updatedAt,
            UpdatedBy: item.updatedBy
        );
    }
```
