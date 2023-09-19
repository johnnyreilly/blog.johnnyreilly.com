---
slug: ef-core-31-breaks-left-join-with-no-navigation-property
title: 'EF Core 3.1 breaks left join with no navigation property'
authors: johnnyreilly
tags: [sql server]
hide_table_of_contents: false
description: 'When upgrading from .NET Core 2.2 to 3.1, an invalid LEFT JOIN error was encountered. The issue was resolved by adding Navigation property.'
---

Just recently my team took on the challenge of upgrading our codebase from .NET Core 2.2 to .NET Core 3.1. Along the way we encountered a quirky issue which caused us much befuddlement. Should you be befuddled too, then maybe this can help you.

<!--truncate-->

Whilst running our app, we started encountering an error with an Entity Framework Query that looked like this:

```cs
var stuffWeCareAbout = await context.Things
    .Include(thing => thing.ThisIsFine)
    .Include(thing => thing.Problematic)
    .Where(thing => thing.CreatedOn > startFromThisTime && thing.CreatedOn < endAtThisTime)
    .OrderByDescending(thing => thing.CreatedOn)
    .ToArrayAsync();
```

## Join me!

As EF Core tried to join from the `Things` table to the `Problematic` table (some obfuscation in table names here), that which worked in .NET Core 2.2 was _not_ working in .NET Core 3.1. Digging into the issue, we discovered EF Core was generating an invalid `LEFT JOIN`:

```sql
fail: Microsoft.EntityFrameworkCore.Database.Command[20102]
      Failed executing DbCommand (18ms) [Parameters=[@__startFromThisTime_0='?' (DbType = DateTime2), @__endAtThisTime_1='?' (DbType = DateTime2)], CommandType='Text', CommandTimeout='30']
      SELECT [o].[ThingId], [o].[AnonymousId], [o].[CreatedOn],  [o].[Status], [o].[UpdatedOn], [o0].[Id], [o0].[ThingId], [o0].[Name], [o1].[ThingId], [o1].[Status], [o1].[CreatedOn], [o1].[ThingThingId], [o1].[SentOn]
      FROM [Things] AS [o]
      LEFT JOIN [ThisIsFines] AS [o0] ON [o].[ThingId] = [o0].[ThingId]
      LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]
      WHERE ([o].[CreatedOn] @__startFromThisTime_0) AND ([o].[CreatedOn] < @__endAtThisTime_1)
      ORDER BY [o].[CreatedOn] DESC, [o].[ThingId], [o1].[ThingId], [o1].[Status]
Microsoft.EntityFrameworkCore.Database.Command: Error: Failed executing DbCommand (18ms) [Parameters=[@__startFromThisTime_0='?' (DbType = DateTime2), @__endAtThisTime_1='?' (DbType = DateTime2)], CommandType='Text', CommandTimeout='30']
SELECT [o].[ThingId], [o].[AnonymousId], [o].[CreatedOn], [o].[Status], [o].[UpdatedOn], [o0].[Id], [o0].[ThingId], [o0].[Name], [o1].[ThingId], [o1].[Status], [o1].[CreatedOn], [o1].[ThingThingId], [o1].[SentOn]
FROM [Things] AS [o]
LEFT JOIN [ThisIsFines] AS [o0] ON [o].[ThingId] = [o0].[ThingId]
LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]
WHERE ([o].[CreatedOn] @__startFromThisTime_0) AND ([o].[CreatedOn] < @__endAtThisTime_1)
ORDER BY [o].[CreatedOn] DESC, [o].[ThingId], [o1].[ThingId], [o1].[Status]
```

Do you see it? Probably not; it took us a while too... The issue lay here:

```sql
LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]
```

This should actually have been:

```sql
LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingId]
```

For some reason EF Core was looking for `ThingThingId` where it should have looked for `ThingId`. But why?

## Navigation properties to the rescue!

This was the `Problematic` class:

```cs
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Treasury.Data.Entities
{
    public class Problematic
    {
        [ForeignKey("Thing")]
        [Required]
        public Guid ThingId { get; set; }
        [Required]
        public DateTime CreatedOn { get; set; }
        public DateTime SentOn { get; set; }
    }
}
```

If you look closely you'll see it has a `ForeignKey` but _no_ accompanying Navigation property. So let's add one:

```cs
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Our.App
{
    public class Problematic
    {
        [ForeignKey("Thing")]
        [Required]
        public Guid ThingId { get; set; }
        [Required]
        public DateTime CreatedOn { get; set; }
        public DateTime SentOn { get; set; }

        /* THIS NAVIGATION PROPERTY IS WHAT WE NEEDED!!! */
        public virtual Thing Thing { get; set; }
    }
}
```

With this in place our app starts generating the SQL we need.
