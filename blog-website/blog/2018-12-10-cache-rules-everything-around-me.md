---
title: "Cache Rules Everything Around Me"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://blog.johnnyreilly.com/img/profile.jpg
tags: [asp net core, cache, wu-tang]
hide_table_of_contents: false
---
One thing that ASP.Net Core really got right was caching. `<a href="https://docs.microsoft.com/en-us/aspnet/core/performance/caching/memory">IMemoryCache</a>` is a caching implementation that does just what I want. I love it. I take it everywhere. I've introduced it to my family.

 ## TimeSpan, TimeSpan Expiration Y'all

To make usage of the `IMemoryCache`*even* more lovely I've written an extension method. I follow pretty much one cache strategy: `SetAbsoluteExpiration` and I just vary the expiration by an amount of time. This extension method implements that in a simple way; I call it `GetOrCreateForTimeSpanAsync` \- catchy right? It looks like this:

```cs
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;

namespace My.Helpers {

    public static class CacheHelpers {

        public static async Task<TItem> GetOrCreateForTimeSpanAsync<TItem>(
            this IMemoryCache cache,
            string key,
            Func<Task<TItem>> itemGetterAsync,
            TimeSpan timeToCache
        ) {
            if (!cache.TryGetValue(key, out object result)) {
                result = await itemGetterAsync();
                if (result == null)
                    return default(TItem);

                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    .SetAbsoluteExpiration(timeToCache);

                cache.Set(key, result, cacheEntryOptions);
            }

            return (TItem) result;
        }
    }
}
```

Usage looks like this:

```cs
private Task<superinterestingthing> GetSuperInterestingThingFromCache(Guid superInterestingThingId) => 
    _cache.GetOrCreateForTimeSpanAsync(
        key: $"{nameof(MyClass)}:GetSuperInterestingThing:{superInterestingThingId}",
        itemGetterAsync: () => GetSuperInterestingThing(superInterestingThingId),
        timeToCache: TimeSpan.FromMinutes(5)
    );
</superinterestingthing>
```

This helper allows the consumer to provide three things:

- The `key` key for the item to be cached with
- A `itemGetterAsync` which is the method that is used to retrieve a new value if an item cannot be found in the cache
- A `timeToCache` which is the period of time that an item should be cached



If an item can't be looked up by the `itemGetterAsync` then *nothing* will be cached and a the `default` value of the expected type will be returned. This is important because lookups can fail, and there's nothing worse than a lookup failing and you caching `null` as a result.

Go on, ask me how I know.

This is a simple, clear and helpful API which makes interacting with `IMemoryCache` even more lovely than it was. Peep it y'all.


