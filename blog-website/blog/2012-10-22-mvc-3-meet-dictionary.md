---
title: "MVC 3 meet Dictionary"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://blog.johnnyreilly.com/img/profile.jpg
tags: [MVC 3, Dictionary]
hide_table_of_contents: false
---
## Documenting a JsonValueProviderFactory Gotcha

 About a year ago I was involved in the migration of an ASP.NET WebForms application over to MVC 3. We'd been doing a lot of AJAX-y / Single Page Application-y things in the project and had come to the conclusion that MVC might be a slightly better fit since we intended to continue down this path.

During the migration we encountered a bug in MVC 3 concerning Dictionary deserialization. This bug has subsequently tripped me up a few more times as I failed to remember the nature of the problem correctly. So I've written the issue up here as an aide to my own lamentable memory.

Before I begin I should say that the problem *<u>has been resolved in MVC 4</u>

*. However given that I imagine many MVC 3 projects will not upgrade instantly there's probably some value in documenting the issue (and how to work around it). By the way, you can see my initial plea for assistance in [this StackOverflow question](<http://stackoverflow.com/q/6881440/761388>).

## The Problem

The problem is that deserialization of Dictionary objects does not behave in the expected and desired fashion. When you fire off a dictionary it arrives at your endpoint as the enormously unhelpful `null`. To see this for yourself you can try using this JavaScript:

<script src="https://gist.github.com/3931778.js?file=PostDictionaryTest.js"></script>

With this C#:

<script src="https://gist.github.com/3931778.js?file=HomeController.cs"></script>

You get a null `null` dictionary.

![](http://3.bp.blogspot.com/-Lsz_lrqsLF8/UIVcfCzfGrI/AAAAAAAAAVM/gkq0qsVZTMw/s400/MyDictionaryIsNull.png)

After a long time googling around on the topic I eventually discovered, much to my surprise, that I was actually tripping over a bug in MVC 3. It was filed by [Darin Dimitrov](<http://stackoverflow.com/users/29407/darin-dimitrov>) of Stack Overflow fame and I found details about it filed as an official bug [here](<http://connect.microsoft.com/VisualStudio/feedback/details/636647/make-jsonvalueproviderfactory-work-with-dictionary-types-in-asp-net-mvc>). To quote Darin:

"*The System.Web.Mvc.JsonValueProviderFactory introduced in ASP.NET MVC 3 enables action methods to send and receive JSON-formatted text and to model-bind the JSON text to parameters of action methods. Unfortunately it doesn't work with dictionaries*"

## The Workaround

My colleague found a workaround for the issue [here](<http://stackoverflow.com/a/5397743/761388>). There are 2 parts to this:

1. Dictionaries in JavaScript are simple JavaScript Object Literals. In order to workaround this issue it is necessary to `JSON.stringify` our Dictionary / JOL before sending it to the endpoint. This is done so a string can be picked up at the endpoint.
2. The signature of your action is switched over from a Dictionary reference to a string reference. Deserialization is then manually performed back from the string to a Dictionary within the Action itself.

<!-- -->

I've adapted my example from earlier to demonstrate this; first the JavaScript:

<script src="https://gist.github.com/3931778.js?file=PostDictionaryTestWorkaround.js"></script>

Then the C#:

<script src="https://gist.github.com/3931778.js?file=HomeControllerWorkaround.cs"></script>

And now we're able to get a dictionary:

![](http://1.bp.blogspot.com/-7_sHRAsZjbY/UIVnwqH7tRI/AAAAAAAAAVg/jkYd3aHKPF4/s400/MyDictionaryIsNotNull.png)

## Summary and a PS

So that's it; a little unglamourous but this works. I'm slightly surprised that that wasn't picked up before MVC 3 was released but at least it's been fixed for MVC 4. I look forward to this blog post being irrelevant and out of date ☺.

For what it's worth in my example above we're using the trusty old `System.Web.Script.Serialization.JavaScriptSerializer` to perform deserialization. My preference is actually to use [JSON.Nets](<http://james.newtonking.com/projects/json-net.aspx>) implementation but for the sake of simplicity I went with .NETs internal one here. To be honest, either is fine to my knowledge.


