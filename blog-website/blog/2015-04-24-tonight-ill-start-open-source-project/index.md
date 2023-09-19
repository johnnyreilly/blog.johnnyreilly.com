---
slug: tonight-ill-start-open-source-project
title: "Tonight I'll Start an Open Source Project..."
authors: johnnyreilly
tags: [angularjs, asp.net]
hide_table_of_contents: false
description: 'A new AngularJS validation mechanism aims to propagate data annotations on ASP.NET MVC server models into ng-* directive attributes in HTML.'
---

### Further posts on this topic

<!--truncate-->

- [NgValidationFor Baby Steps](../2015-05-11-ngvalidationfor-baby-steps/index.md)

I'm excited. Are you? I'm babysitting for a friend, I've my laptop, time to kill and (crucially) an idea...

## The Idea

You're likely aware of the various form element directives that AngularJS offers. For instance the [input directive](https://docs.angularjs.org/api/ng/directive/input):

> HTML input element control. When used together with ngModel, it provides data-binding, input state control, and _validation_.

You'll notice that I emphasised the word "validation" there. That's important - that's my idea. I'm using AngularJS to build SPA's and for the server side I'm using ASP.Net MVC / Web API. Crucially, my templates are actually ASP.Net MVC Partial Views. That's key.

When I send data back from my SPA back to the server it gets unmarshalled / deserialized into a C# class (view model) of some kind. When data goes the other way it's flowing back from a JSON'd view model and being used by my Angular code.

Now historically if I was building a fairly vanilla MVC app then I'd be making use of all the `TextboxFor` extension methods etc to generate my input elements. For example, with a view model like this:

```cs
using System.ComponentModel.DataAnnotations;

namespace App.ViewModels
{
 public class RequiredModel
 {
  [Required]
  public string RequiredField{ get; set; }
 }
}
```

I'd have a view like this:

```html
@model App.ViewModels.RequiredModel @using (Html.BeginForm()) {
<div class="row">
  @Html.LabelFor(x => x.TextBox, "Something must be entered:")
  @Html.TextBoxFor(x => x.TextBox, true)
</div>
}
```

And that would generate HTML like this:

```html
<form action="/Demo/Required" method="post">
  <div class="row">
    <label for="TextBox">Something must be entered:</label>
    <input
      data-msg-required="The TextBox field is required."
      data-rule-required="true"
      id="TextBox"
      name="TextBox"
      type="text"
      value=""
    />
  </div>
</form>
```

If you look at the HTML you'll see that the `Required` data annotations have been propogated into the HTML in the HTML in the form of `data-rule-*` and `data-msg-*` attributes. The code above is built using my [jQuery.Validation.Unobtrusive.Native project](http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/) which in turn was inspired by / based upon the [Unobtrusive Client Validation in ASP.NET MVC](http://bradwilson.typepad.com/blog/2010/10/mvc3-unobtrusive-validation.html). That's right - I've done this before - or at least something quite like it.

There's clearly a strong crossover between AngularJS's input directive parameters and unobtrusive client validation. I'm planning to take the principles (and maybe some of the code) that I used on that project and see if I can't make something useful with it here. [Server side validation is jolly important](../2014-08-01-angularjs-meet-aspnet-server-validation/index.md) but I can probably save a few compute cycles on the server by making use of client side validation as well. If I'm right then I should able to come up with a mechanism that saves me from manually duplicating my server validation on the client.

## The Aim

I want to be able to use HTML Helpers to propogate validation metadata from the server view models into angular form validation directive attributes. Quite a mouthful I know. What does that actually mean? Well I've got 2 ideas. Possibly I want to be able to code something like this:

```html
@model App.ViewModels.RequiredModel @using (Html.BeginForm()) {
<div class="row">
  @Html.LabelFor(x => x.TextBox, "Something must be entered:")
  @Html.NgTextBoxFor(x => x.TextBox)
</div>
}
```

And have HTML like this generated:

```html
<form action="/Demo/Required" method="post">
  <div class="row">
    <label for="TextBox">Something must be entered:</label>
    <input
      ng-required="true"
      id="TextBox"
      name="TextBox"
      type="text"
      value=""
    />
  </div>
</form>
```

The reservation I have about this approach is that it rather takes you away from the HTML. Yes it works (and to your seasoned MVC-er it will feel quite natural in some ways) but it feels rather heavy handed. But I'd like what I'm building to be easy for users to plug into existing code without a ton of rework. So, the other idea I'm toying with is having HTML helpers that just return a string of attributes. So if I had an angular form that looked like this:

```html
<div ng-controller="ExampleController">
  <form>
    <div class="row">
      <label
        >Something must be entered:
        <input name="RequiredField" type="text" value="" />
      </label>
    </div>
  </form>
</div>
```

I could tweak it to push in the validation directive attributes like this:

```html
@model App.ViewModels.RequiredModel
<div ng-controller="ExampleController">
  <form>
    <div class="row">
      <label
        >Something must be entered:
        <input
          name="RequiredField"
          type="text"
          value=""
          @Html.NgValidationFor(x=""
        />
        x.RequiredField) />
      </label>
    </div>
  </form>
</div>
```

And end up with HTML like this:

```html
<div ng-controller="ExampleController">
  <form>
    <div class="row">
      <label
        >Something must be entered:
        <input name="RequiredField" type="text" value="" ng-required="true" />
      </label>
    </div>
  </form>
</div>
```

This is a simplified example of course - it's likely that any number of validation directive attributes might be returned from `NgValidationFor`. And crucially if these attributes were changed on the server view model then the validation changes would automatically end up in the client HTML with this approach.

## The Approach

At least to start off with I'm going to aim at creating the second of my approaches. I may come back and implement the first at some point but I think the second is a better place to start.

I'm kind of surprised no-one else has built this already actually - but I'm not aware of anything. I've had a little duckduckgo around and found no takers. The closest I've come is the excellent [BreezeJS](http://www.breezejs.com/sites/all/apidocs/classes/Validator.html). BreezeJS does way more than I want it to - I'm planning to restrict the scope of this project to simply turning data annotations on my ASP.Net MVC server models into `ng-*` directive attributes in HTML. That's it.

So, general housekeeping.... I'm going to host this project on [GitHub](http://www.github.com), I'm going to have Continuous Integration with [AppVeyor](http://www.appveyor.com/) and I'm planning to publish this via [NuGet](http://www.nuget.org/) (when and if I've created something useful).

I just need a name and I'll begin. What shall I call it? Some options:

- Angular ASP.Net MVC Extensions
- angular-aspnet-mvc-extensions
- Angular MVC Element Extensions
- Angular Validation Html Helpers
- NgValidationFor (the name of the HTML helper I made up)

Hmmmm.... None of them is particularly lighting my fire. The first four are all a bit [RonSeal](https://en.wikipedia.org/wiki/Ronseal) \- which is fine.... Ug. The last one... It's a bit more pithy. Okay - I'll go with "NgValidationFor" at least for now. If something better occurs I can always change my mind.

[And we're off!](https://github.com/johnnyreilly/NgValidationFor)
