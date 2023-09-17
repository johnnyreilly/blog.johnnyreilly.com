---
slug: unit-testing-and-entity-framework-filth
title: 'Unit Testing and Entity Framework: The Filth and the Fury'
authors: johnnyreilly
tags: [automated testing, sql server]
hide_table_of_contents: false
description: 'Controversy arises over Unit Testing with Entity Framework & MOQ. A simple class could be used to wrap all Entity Framework code.'
---

Just recently I've noticed that there appears to be something of a controversy around Unit Testing and Entity Framework. I first came across it as I was Googling around for useful posts on using MOQ in conjunction with EF. I've started to notice the topic more and more and as I have mixed feelings on the subject (that is to say I don't have a settled opinion) I thought I'd write about this and see if I came to any kind of conclusion...

<!--truncate-->

## The Setup

It started as I was working on a new project. We were using ASP.NET MVC 3 and Entity Framework with DbContext as our persistence layer. Rather than crowbarring the tests in afterwards the intention was to write tests to support the ongoing development. Not quite test driven development but certainly [test supported development](http://blog.troyd.net/Test+Supported+Development+TSD+Is+NOT+Test+Driven+Development+TDD.aspx). (Let's not get into the internecine conflict as to whether this is black belt testable code or not - it isn't but he who pays the piper etc.) Oh and we were planning to use MOQ as our mocking library.

It was the first time I'd used DbContext rather than ObjectContext and so I thought I'd do a little research on how people were using DbContext with regards to testability. I had expected to find that there was some kind of consensus and an advised way forwards. I didn't get that at all. Instead I found a number of conflicting opinions.

## Using the Repository / Unit of Work Patterns

One thread of advice that came out was that people advised using the Repository / Unit of Work patterns as wrappers when it came to making testable code. This is kind of interesting in itself as to the best of my understanding ObjectSet / ObjectContext and DbSet / DbContext are both in themselves implementations of the Repository / Unit of Work patterns. So the advice was to build a Repository / Unit of Work pattern to wrap an existing Repository / Unit of Work pattern.

Not as mad as it sounds. The reason for the extra abstraction is that ObjectContext / DbContext in the raw are not MOQ-able.

## Or maybe I'm wrong, maybe you can MOQ DbContext?

No you can't. Well that's not true. You can and it's documented [here](http://romiller.com/2012/02/14/testing-with-a-fake-dbcontext/) but there's a "but". You need to be using Entity Frameworks Code First approach; actually coding up your DbContext yourself. Before I'd got on board the project had already begun and we were already some way down the road of using the Database First approach. So this didn't seem to be a go-er really.

The best article I found on testability and Entity Framework was [this one](http://msdn.microsoft.com/en-us/library/ff714955.aspx) by [K. Scott Allen](http://odetocode.com/) which essentially detailed how you could implement the Repository / Unit of Work patterns on top of ObjectSet / ObjectContext. In the end I adapted this to do the same thing sat on top of DbSet / DbContext instead.

With this in place I had me my testable code. I was quite happy with this as it seemed quite intelligible. My new approach looked similar to the existing DbSet / DbContext code and so there wasn't a great deal of re-writing to do. Sorted, right?

## Here come the nagging doubts...

I did wonder, given that I found a number of articles about applying the Repository / Unit of Work patterns on top of ObjectSet / ObjectContext that there didn't seem to be many examples to do the same for DbSet / DbContext. (I did find a few examples of this but none that felt satisfactory to me for a variety of reasons.) This puzzled me.

I also started to notice that a 1 man war was being waged against the approach I was using by [Ladislav Mrnka](http://www.ladislavmrnka.com/about/). Here are a couple of examples of his crusade:

- [An answer on StackOverflow](http://stackoverflow.com/a/6904479/761388) (there's quite a few similar answers around on StackOverflow saying similar)
- [A comment on Rowan Millers post about fake DbContexts](http://romiller.com/2012/02/14/testing-with-a-fake-dbcontext/#div-comment-1620)

Ladislav is quite strongly of the opinion that wrapping DbSet / DbContext (and I presume ObjectSet / ObjectContext too) in a further Repository / Unit of Work is an antipattern. To quote him: _"The reason why I don’t like it is leaky abstraction in Linq-to-entities queries ... In your test you have Linq-to-Objects which is superset of Linq-to-entities and only subset of queries written in L2O is translatable to L2E"_. It's worth looking at [Jon Skeets explanation of "leaky abstractions"](http://www.youtube.com/watch?v=gNeSZYke-_Q) which he did for TekPub.

As much as I didn't want to admit it - I have come to the conclusion Ladislav probably has a point for a number of reasons:

### 1\. Just because it compiles and passes unit tests don't imagine that means it works...

Unfortunately, a LINQ query that looks right, compiles and has passing unit tests written for it doesn't necessarily work. You can take a query that fails when executed against Entity Framework and come up with test data that will pass that unit test. As Ladislav rightly points out: `LINQ-to-Objects != LINQ-to-Entities`.

So in this case unit tests of this sort don't provide you with any security. What you need are \*\*<u>integration</u>

\*\* tests. Tests that run against an instance of the database and demonstrate that LINQ will actually translate queries / operations into valid SQL.

### 2\. Complex queries

You can write some pretty complex LINQ queries if you want. This is made particularly easy if you're using [comprehension syntax](https://blogs.msdn.com/b/ericlippert/archive/2009/12/07/query-transformations-are-syntactic.aspx). Whilst these queries may be simple to write it can be uphill work to generate test data to satisfy this. So much so that at times it can feel you've made a rod for your own back using this approach.

### 3\. Lazy Loading

By default Entity Framework employs lazy loading. This a useful approach which reduces the amount of data that is transported. Sometimes this approach forces you to specify up front if you require a particular entity through use of `Include` statements. This again doesn't lend itself to testing particularly well.

## Where does this leave us?

Having considered all of the above for a while and tried out various different approaches I think I'm coming to the conclusion that Ladislav is probably right. Implementing the Repository / Unit of Work patterns on top of ObjectSet / ObjectContext or DbSet / DbContext doesn't seem a worthwhile effort in the end.

So what's a better idea? I think that in the name of simplicity you might as well have a simple class which wraps all of your Entity Framework code. This class could implement an interface and hence be straightforwardly MOQ-able (or alternatively all methods could be virtual and you could forego the interface). Along with this you should have integration tests in place which test the execution of the actual Entity Framework code against a test database.

Now I should say this approach is not necessarily my final opinion. It seems sensible and practical. I think it is likely to simplify the tests that are written around a project. It will certainly be more reliable than just having unit tests in place.

In terms of the project I'm working on at the moment we're kind of doing this in a halfway house sense. That is to say, we're still using our Repository / Unit of Work wrappers for DbSet / DbContext but where things move away from simple operations we're adding extra methods to our Unit of Work class or Repository classes which wrap this functionality and then testing it using our integration tests.

I'm open to the possibility that my opinion may be modified further. And I'd be very interested to know what other people think on the subject.

## Update

It turns out that I'm not alone in thinking about this issue and indeed others have expressed this rather better than me - take a look at Jimmy Bogard's post for an example: [http://lostechies.com/jimmybogard/2012/09/20/limiting-your-abstractions/](http://lostechies.com/jimmybogard/2012/09/20/limiting-your-abstractions/).

## Updated 2

I've also recently watched the following Pluralsight course by Julie Lerman: [http://pluralsight.com/training/Courses/TableOfContents/efarchitecture#efarchitecture-m3-archrepo](http://pluralsight.com/training/Courses/TableOfContents/efarchitecture#efarchitecture-m3-archrepo). In this course Julie talks about different implementations of the Repository and Unit of Work patterns in conjunction with Entity Framework. Julie is in favour of using this approach but in this module she elaborates on different "flavours" of these patterns that you might want to use for different reasons (bounded contexts / reference contexts etc). She makes a compelling case and helpfully she is open enough to say that this a point of contention in the community. At the end of watching this I think I felt happy that our "halfway house" approach seems to fit and seems to work. More than anything else Julie made clear that there isn't one definitively "true" approach. Rather many different but similar approaches for achieving the same goal. Good stuff Julie!
