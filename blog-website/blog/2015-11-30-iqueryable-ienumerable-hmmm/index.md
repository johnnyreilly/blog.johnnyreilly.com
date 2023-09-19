---
slug: iqueryable-ienumerable-hmmm
title: 'IQueryable... IEnumerable... Hmmm...'
authors: johnnyreilly
tags: [c#]
hide_table_of_contents: false
description: 'The debate surrounding passing IQueryable<T> as IEnumerable<T> is discussed. Changing the method signature is proposed as a solution.'
---

So there I was, tip-tapping away at my keyboard when I became aware of the slowly loudening noise of a debate. It wasn't about poverty, war, civil rights or anything like that. No; this was far more contentious. It was about the behaviour of `<a href="https://msdn.microsoft.com/en-gb/library/bb351562(v=vs.100).aspx">IQueryable&lt;T&gt;</a>` when mixed with `<a href="https://msdn.microsoft.com/en-gb/library/9eekhta0(v=vs.100).aspx">IEnumerable&lt;T&gt;</a>`. I know, right, how could I not get involved?

<!--truncate-->

The code that was being debated was a database query that was being facilitated by Entity Framework. Now let me ask you a question: what is the problem with the methods below?

```cs
private IEnumerable<Sage> GetSagesWithSayings()
{
    IQueryable<Sage> sageWithSayings =
        from s in DbContext.Sages.Include(x => x.Sayings)
        select s;

    return sageWithSayings;
}

public IEnumerable<Sage> GetSagesWithSayingsBornWithinTheLast100Years()
{
    var aHundredYearsAgo = DateTime.Now.AddYears(-100);
    var sageWithSayings = GetSagesWithSayings().Where(x => x.DateOfBirth > aHundredYearsAgo);

    return sageWithSayings;
}
```

I've rather emphasised the problem by expressly declaring types in the `GetSagesWithSayings` method. More typically the `IQueryable&lt;Sage&gt;` would be hiding itself beneath a `var` making the problem less obvious. But you get the point; it's something to do with an `IQueryable&lt;Sage&gt;` being passed back as an `IEnumerable&lt;Sage&gt;`.

The debate was raging around what this piece of code (or one much like it) actually did. One side positing "it'll get every record from the database and then throw away what it doesn't need in C#-land..." The opposing view being "are you sure about that? Doesn't it just get the records from the last hundred years from the database?"

So it comes down the SQL that ends up being generated. On the one hand it's going to get everything from the Sages table...

```sql
select ...
from Sages ...
```

Or does it include a filter clause as well?

```sql
select ...
from Sages ...
where DateOfBirth > '1915-11-30'
```

You probably know the answer... It gets everything. Every record is brought back from the database and those that are older than 100 years are then casually thrown away. So kinda wasteful. That's the problem. But why? And what does that tell us?

## LINQ to Objects vs LINQ to ... ?

> The term "LINQ to Objects" refers to the use of LINQ queries with any `IEnumerable` or `IEnumerable&lt;T&gt;` collection directly, without the use of an intermediate LINQ provider or API such as LINQ to SQL or LINQ to XML.

> The `<a href="https://msdn.microsoft.com/en-gb/library/bb351562(v=vs.100).aspx">IQueryable&lt;T&gt;</a>` interface is intended for implementation by query providers.
>
> This interface inherits the `<a href="https://msdn.microsoft.com/en-gb/library/9eekhta0(v=vs.100).aspx">IEnumerable&lt;T&gt;</a>` interface so that if it represents a query, the results of that query can be enumerated. Enumeration forces the expression tree associated with an `<a href="https://msdn.microsoft.com/en-gb/library/bb351562(v=vs.100).aspx">IQueryable&lt;T&gt;</a>` object to be executed. Queries that do not return enumerable results are executed when the `<a href="https://msdn.microsoft.com/en-gb/library/bb549414(v=vs.100).aspx">Execute&lt;TResult&gt;(Expression)</a>` method is called.
>
> The definition of "executing an expression tree" is specific to a query provider. For example, it may involve translating the expression tree to a query language appropriate for an underlying data source.

I know - check me out with my "quotes".

Now, `IEnumerable` and `IQueryable` are similar; for instance they are both considered "lazy" as they offer deferred execution. But there is an important difference between `IEnumerable` and `IQueryable`; namely that `IQueryable` hands off information about a query to another provider in order that they may decide how to do the necessary work. `IEnumerable` does not; its work is done in memory by operating on the data it has.

So let's apply this to our issue. We have an `IQueryable&lt;Sage&gt;` and we return it as an `IEnumerable&lt;Sage&gt;`. By doing this we haven't changed the underlying type; it's still an `IQueryable&lt;Sage&gt;`. But by upcasting to `IEnumerable&lt;Sage&gt;` we have told the compiler that we don't have an `IQueryable&lt;Sage&gt;`. We've lied. I trust you're feeling guilty.

No doubt whoever raised you told you not to tell lies. This was probably the very situation they had in mind. The implications of our dirty little fib come back to haunt us when we start to chain on subsequent filters. So when we perform our filter of `.Where(x =&gt; x.DateOfBirth &gt; aHundredYearsAgo)` the compiler isn't going to get LINQ to Entities's extension methods in on this. No, it's going to get the LINQ to object extension methods instead.

This is the cause of our problem. When it comes to execution we're not getting the database to do the heavy lifting because we've moved away from using `IQueryable`.

## Fixing the Problem

There are 2 courses of action open to you. The obvious course of action (and 99% of the time what you'd look to do) is change the signature of the `` method to return an IQueryable like so:

```cs
private IQueryable<Sage> GetSagesWithSayings()
    var sageWithSayings = // I prefer 'var', don't you?
        from s in DbContext.Sages.Include(x => x.Sayings)
        select s;

    return sageWithSayings;
}
```

The other alternative is what I like to think of as "the escape hatch": `<a href="https://msdn.microsoft.com/en-gb/library/bb353734(v=vs.100).aspx">AsQueryable</a>`. This takes an `IEnumerable`, checks if it's actually an `IQueryable` slumming it and casts back to that if it is. You might use this in a situation where you didn't have control over the data access code. Using it looks like this: (and would work whether `GetSagesWithSayings` was returning `IEnumerable`_or_`IQueryable`)

```cs
public IEnumerable<Sage> GetSagesWithSayingsBornWithinTheLast100Years()
{
    var aHundredYearsAgo = DateTime.Now.AddYears(-100);
    var sageWithSayings =GetSagesWithSayings().AsQueryable().Where(x => x.DateOfBirth > aHundredYearsAgo);

    return sageWithSayings;
}
```
