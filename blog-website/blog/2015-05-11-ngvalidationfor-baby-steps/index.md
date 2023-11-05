---
slug: ngvalidationfor-baby-steps
title: 'NgValidationFor Baby Steps'
authors: johnnyreilly
tags: [angularjs, asp.net]
hide_table_of_contents: false
description: 'The NgValidationFor project translates data annotations to Angular validation directive attributes while minimising dependencies.'
---

I thought as I start the [NgValidationFor project](../2015-04-24-tonight-ill-start-open-source-project/index.md) I'd journal my progress. I'm writing this with someone particular in mind: me. Specifically, me in 2 years who will no doubt wonder why I made some of the choices I did. Everyone else, move along now - nothing to see. Unless the inner workings of someone else's mind are interesting to you... In which case: welcome!

<!--truncate-->

## Getting up and running

I've got a project on [GitHub](https://github.com/johnnyreilly/NgValidationFor) and I'm starting to think about implementations. One thing that bit me on [jVUN](http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/) was being tied to a specific version of ASP.Net MVC. For each major release of ASP.Net MVC I needed separate builds / NuGet packages and the like. A pain. Particularly when it came to bug fixes for prior versions - the breaking changes with each version of MVC meant far more work was required when it came to shipping fixes for MVC 4 / MVC 3.

So with that in mind I'm going to try and limit my dependencies. I'm not saying I will never depend upon ASP.Net MVC - I may if I think it becomes useful to give the users a nicer API or if there's another compelling reason. But to start with I'm just going to focus on the translation of data annotations to Angular validation directive attributes.

To that end I'm going to begin with just a class library and an associated test project. I'm going to try and minimise the dependencies that NgValidationFor has. At least initially I may even see if I can sensibly avoid depending on `System.Web` (mindful of the upcoming ASP.Net 5 changes). Let's see.

A little time passes.......

## So what have we got?

My first efforts have resulted in the implementation of the `<a href="https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.requiredattribute(v=vs.110).aspx">RequiredAttribute</a>`. This is the [code right now](https://github.com/johnnyreilly/NgValidationFor/tree/6cf862a7638d3ed933cd0e075a1807b1414847da). It's made up of:

1. NgValidationFor.Core - the core part of the project which converts data annotations into AngularJS 1.x validation directive attributes.
2. NgValidationFor.Core.UnitTests - the unit tests for the core
3. NgValidationFor.Documentation - this is an ASP.Net MVC project which will become a documentation site for NgValidationFor. It also doubles as a way for me to try out NgValidationFor.
4. NgValidationFor.Documentation.UnitTests - unit tests for the documentation (there's none yet as I'm still spiking - but when I'm a little clearer, they will be)

How can it be used? Well fairly easily. Take this simple model:

```cs
using System.ComponentModel.DataAnnotations;

namespace NgValidationFor.Documentation.Models
{
    public class RequiredDemoModel
    {
        [Required]
        public string RequiredField { get; set; }
    }
}
```

When used in an MVC View for which `RequiredDemoModel` is the Model, NgValiditionFor can be used thusly:

```html
@using NgValidationFor.Core @using NgValidationFor.Documentation.Models @model
RequiredDemoModel
<input
  type="text"
  name="userName"
  ng-model="user.name"
  @Html.Raw(Model.GetAttributes(x=""
/>
Model.RequiredField)) >
```

Which results in this HTML:

```html
<input type="text" name="userName" ng-model="user.name" required="required" />
```

Tada!!!! It works.

## So what now?

Yes it works, but I'm not going to pretend it's pretty. I don't like having to wrap the usage of NgValidationFor with `Html.Raw(...)`. I'm having to do that because `GetAttributes` returns a `string`. This string is then HTML encoded by MVC. To avoid my quotation marks turning into `&amp;quot;` I need to actually be exposing an `<a href="https://msdn.microsoft.com/en-us/library/system.web.ihtmlstring(v=vs.110).aspx">IHtmlString</a>`. So I'm going to need to depend upon `System.Web`. That's not so bad - at least I'm not tied to a specific MVC version.

I'm not too keen on the implementation I've come up with for NgValidationFor either. It's a single static method at the minute which does everything. It breaks the [Single Responsibility Priniciple](https://en.wikipedia.org/wiki/Single_responsibility_principle) and the [Open/Closed Principle](https://en.wikipedia.org/wiki/Open/closed_principle). I need to take a look at that - I want people to be able to extend this and I need to think about a good and simple way to achieve that.

Finally, usage. `Model.GetAttributes(x =&gt; Model.RequiredField)` feels wrong to me. I think I'm happy with having this used as an extension method but it needs to be clearer what's happening. Perhaps `Model.NgValidationFor(x =&gt; Model.RequiredField)` would be better. I need to try a few things out and come up with a nicer way to use NgValidationFor.
