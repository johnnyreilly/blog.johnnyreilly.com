---
slug: taskwhenall-select-is-footgun
title: 'Task.WhenAll / Select is a footgun 👟🔫'
authors: johnnyreilly
tags: [c#]
hide_table_of_contents: false
description: 'The writer warns against LINQ code that causes concurrent API requests and shares plans for better metrics and a development container.'
---

This post differs from my typical fayre. Most often I write "here's how to do a thing". This is not that. It's more "don't do this thing I did". And maybe also, "how can we avoid a situation like this happening again in future?". On this topic I very much don't have all the answers - but by putting my thoughts down maybe I'll learn and maybe others will educate me. I would love that!

<!--truncate-->

## Doing things that don't scale

The platform that I work on once had zero users. We used to beg people to log in and see what we had built. Those days are (happily) but a memory. We're getting popular.

As our platform has grown in popularity it has revealed some bad choices we made. Approaches that look fine on the surface (and that work just dandy when you have no users) may start to cause problems as your number of users grows.

I wanted to draw attention to one approach in particular that impacted us severely. In this case "impacted us severely" is a euphemism for "brought the site down and caused a critical incident".

You don't want this to happen to you. Trust me. So, what follows is a cautionary tale. The purpose of which is simply this: reader, do you have code of this ilk in your codebase? If you do: out, damn'd spot! out, I say!

## So cool, so terrible

I love LINQ. I love a declarative / functional style of coding. It appeals to me on some gut level. I find it tremendously readable. Read any C# of mine and the odds are pretty good that you'll find some LINQ in the mix.

Imagine this scenario: you have a collection of user ids. You want to load the details of each user represented by their id from an API. You want to bag up all of those users into some kind of collection and send it back to the calling code.

Reading that, if you're like me, you're imagining some kind of map operation which loads the user details for each user id. Something like this:

```cs
var users = userIds.Select(userId => GetUserDetails(userId)).ToArray(); // users is User[]
```

Lovely. But you'll note that I'm loading users from an API. Oftentimes, APIs are asynchronous. Certainly, in my case they were. So rather than calling a `GetUserDetails` function I found myself calling a `GetUserDetailsAsync` function, behind which an HTTP request is being sent and, later, a response is being returned.

So how do we deal with this? [`Task.WhenAll`](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.whenall?view=netcore-3.1#System_Threading_Tasks_Task_WhenAll__1_System_Collections_Generic_IEnumerable_System_Threading_Tasks_Task___0___) my friends!

```cs
var userTasks = userIds.Select(userId => GetUserDetailsAsync(userId));
var users = await Task.WhenAll(tasks); // users is User[]
```

It worked great! Right up until to the point where it didn't. These sorts of shenanigans were fine when we had a minimal number of users... But there came a point where problems arose. It got to the point where that simple looking mapping operation became a cause of many, many, _many_ HTTP requests being fired concurrently. Then bad things started to happen. Not only did we realise we were launching a denial of service attack on the API we were consuming, we were bringing our own application to collapse.

Not a proud day.

## What is the problem?

Through log analysis, code reading and speculation, (with the help of the invaluable [Robski](https://www.linkedin.com/in/robert-grzankowski-53618114)) we came to realise that the cause of our woes was the `Task.WhenAll` / `Select` combination. Exercising that codepath was a surefire way to bring the application to its knees.

As I read around on the topic I happened upon [Mark Heath](https://www.twitter.com/mark_heath)'s excellent list of [Async antipatterns](https://markheath.net/post/async-antipatterns). Number #6 on the list is "Excessive parallelization". It describes a nearly identical scenario to my own:

> Now, this does "work", but what if there were 10,000 orders? We've flooded the thread pool with thousands of tasks, potentially preventing other useful work from completing. If `ProcessOrderAsync` makes downstream calls to another service like a database or a microservice, we'll potentially overload that with too high a volume of calls.

We're definitely overloading the API we're consuming with too high a volume of calls. I have to admit that I'm less clear on the direct reason that a `Task.WhenAll` / `Select` combination could prove fatal to our application. Mark suggests this approach will flood the thread pool with tasks. As I read around on `async` and `await` it's repeated again and again that a `Task` is not the same thing as a `Thread`. I have to hold my hands up here and say that I don't understand the implementation of `async` / `await` in C# well enough. [These docs are helpful but I still don't think the penny has fully dropped for me yet.](https://docs.microsoft.com/en-us/dotnet/standard/async-in-depth#deeper-dive-into-tasks-for-an-io-bound-operation) I will continue to read.

One thing we learned as we debugged the production k8s pod was that, prior to its collapse, our app appeared to be opening up 1 million connections to the API we were consuming. Which seemed a bit much. Worthy of investigation. It's worth saying that we're not certain this is exactly what is happening; we have less instrumentation in place than we'd like. But some fancy wc grepping on Robski's behalf suggested this was the case.

## What will we change in future?

A learning that came out of this for us was this: we need more metrics exposed. We don't understand our application's behaviour under load as well as we'd like. So we're planning to do some work with [App Metrics](https://www.app-metrics.io/) and [Grafana](https://grafana.com/) so we've a better idea of how our application performs. If you want to improve something, first measure it.

Another fly in the ointment was that we were unable to reproduce the issue when running locally. It's worth saying here that I develop on a Windows machine and, when deployed, our application runs in a (Linux) Docker container. So there's a difference and a distance between our development experience and our running one.

I'm planning to migrate to developing in a [devcontainer](https://code.visualstudio.com/docs/remote/containers) where that's possible. That should narrow the gap between our production experience and our development one. Reducing the difference between the two is always useful as it means you're less likely to get different behaviour (ie "problems") in production as compared to development. I'm curious as to whether I'll be able to replicate that behaviour in a devcontainer.

## What did we do right now?

To solve the immediate issue we were able to pivot away to a completely different approach. We moved aggregation from our ASP.NET Core web application to our TypeScript / React client with a (pretty sweet) custom hook. The topic for a subsequent blog post.

Moving to a different approach solved my immediate issue. But it left me puzzling. What was actually going wrong? Is it thread pool exhaustion? Is it something else? So many possibilities!

If anyone has any insights they'd like to share that would be incredible! I've also [asked a question on Stack Overflow](https://stackoverflow.com/questions/62490098/task-whenall-with-select-is-a-footgun-but-why/62490705) which has kindly had answers from generous souls. [James Skimming](https://twitter.com/jamesskimming)'s answer lead me to [Steve Gordon's excellent post on connection pooling](https://www.stevejgordon.co.uk/httpclient-connection-pooling-in-dotnet-core) which I'm still absorbing and seems like it could be relevant.
