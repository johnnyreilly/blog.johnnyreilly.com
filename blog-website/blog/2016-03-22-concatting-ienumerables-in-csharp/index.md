---
slug: concatting-ienumerables-in-csharp
title: 'Concatting IEnumerables in C#'
authors: johnnyreilly
tags: [c#]
hide_table_of_contents: false
description: 'Author proposes clean alternatives to `IEnumerable`s concatenation which entail creating custom extensions & using nulls for null-conditional operator.'
---

I hate LINQ's [`Enumerable.Concat`](https://msdn.microsoft.com/en-us/library/bb302894%28v=vs.110%29.aspx?f=255&MSPPError=-2147217396) when bringing together `IEnumerable`s. Not the behaviour (I love that!) but rather how code ends up looking when you use it. Consider this:

<!--truncate-->

```cs
var concatenated = myCollection?.Select(x => new ConcatObj(x)) ?? new ConcatObj[0].Concat(
   myOtherCollection?.Select(x => new ConcatObj(x)) ?? new ConcatObj[0]
);
```

In this example I'm bringing together 2 collections, either of which may be null (more on that later). I think we can all agree this doesn't represent a world of readability. I've also had to create a custom class `ConcatObj` because you can't create an empty array for an anonymous type in C#.

## Attempt #1: `ConcatMany`

After toying around with a bunch of different ideas I created this extension method:

```cs
public static class FunctionalExtensions
{
    public static IEnumerable<T> ConcatMany<T>(
        this IEnumerable<T> original,
        params IEnumerable<T>[] enumerablesToConcat) => original.Concat(
            enumerablesToConcat.Where(e => e != null).SelectMany(c => c)
        );
}
```

Thanks to the joy of `params` this extension allows me to bring together multiple IEnumerables into a single one but has the advantage of considerably cleaner calling code:

```cs
var concatenated = Enumerable.Empty<ConcatObj>().ConcatMany(
    myCollection?.Select(x => new ConcatObj(x)),
    myOtherCollection?.Select(x => new ConcatObj(x))
    );
```

For my money this is more readable and intent is clearer. Particularly as the number of contributing IEnumerables goes up. The downside is that I can’t use anonymous objects because you need to tell the compiler what the type is when using `<a href="https://msdn.microsoft.com/en-us/library/bb341042%28v=vs.110%29.aspx?f=255&amp;MSPPError=-2147217396">Enumerable.Empty</a>`.

Wouldn't it be nice to have both:

1. Readable code and
2. Anonymous objects?

## Attempt #2: `EnumerableExtensions.Create`

After batting round a few ideas (thanks Matt) I settled on this implementation:

```cs
public static class EnumerableExtensions
{
    public static IEnumerable<TSource> Create<TSource>(params IEnumerable<TSource>[] enumerables)
    {
        return Concat(enumerables.Where(e => e != null));
    }

    private static IEnumerable<TSource> Concat<TSource>(IEnumerable<IEnumerable<TSource>> enumerables)
    {
        foreach (var enumerable in enumerables)
        {
            foreach (var item in enumerable)
            {
                yield return item;
            }
        }
    }
}
```

Which allows for calling code like this:

```cs
var concatenated = EnumerableExtensions.Create(
    myCollection?.Select(x => new { Anonymous = x.Types }),
    myOtherCollection?.Select(x => new { Anonymous = x.Types })
);
```

That's right; anonymous types are back! Strictly speaking the `Concat` method above could be converted into a single `SelectMany` (and boy does ReSharper like telling me) but I'm quite happy with it as is. And to be honest, I so rarely get to use `yield` in my own code; I thought it might be nice to give it a whirl 😊

## What Gives Elvis?

If you look closely at the implementation you'll notice that I purge all `null`s when I'm bringing together the `Enumerable`s. For why? Some may legitimately argue this is a bad idea. However, there is method in my "bad practice".

I've chosen to treat `null` as "not important" for this use case. I'm doing this because it emerges that ASP.NET MVC deserialises empty collections as nulls. (See [here](http://aspnetwebstack.codeplex.com/SourceControl/latest#src/System.Web.Mvc/ValueProviderResult.cs) and play spot the `return null;`) Which is a pain. But thanks to the null purging behaviour of `EnumerableExtensions.Create` I can trust in the [null-conditional (Elvis)](https://csharp.today/c-6-features-null-conditional-and-and-null-coalescing-operators/) operator to not do me wrong.
