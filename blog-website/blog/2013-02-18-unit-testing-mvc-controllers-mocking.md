---
title: 'Unit testing MVC controllers / Mocking UrlHelper'
authors: johnnyreilly
tags: [MVC, unit testing, AreaRegistration.RegisterAllAreas(), MOQ, UrlHelper]
hide_table_of_contents: false
---

## I have put a name to my pain...

And it is unit testing ASP.Net MVC controllers.

Well perhaps that's unfair. I have no problem unit testing MVC controllers.... **until** it comes to making use of the "innards" of MVC. Let me be more specific. This week I had a controller action that I needed to test. It looked a little like this:

<script src="https://gist.github.com/johnnyreilly/4959924.js?file=DemoController.cs"></script>

Looks fine right? It's an action that takes a simple object as an argument. That's ok. It returns a JsonResult. No worries. The JsonResult consists of an anonymous class. De nada. The anonymous class has one property that is driven by the controllers `UrlHelper`. Yeah that shouldn't be an issue... **Hold your horses sunshine - you're going nowhere!**

## Getting disillusioned

Yup, the minute you start pumping in asserts around that `UrlHelper` driven property you're going to be mighty disappointed. What, you didn't expect the result to be `null`? Damn shame.

Despite [articles](http://msdn.microsoft.com/en-us/magazine/dd942838.aspx) on MSDN about how the intention is for MVC to be deliberately testable the sad fact of the matter is that there is a yawning hole around the testing support for controllers in ASP.Net MVC. Whenever you try to test something that makes use of controller "gubbins" you have **serious** problems. And unfortunately I didn't find anyone out there who could offer the whole solution.

After what I can best describe as a day of pain I found a way to scratch my particular itch. I found a way to write unit tests for controllers that made use of UrlHelper. As a bonus I managed to include the unit testing of Routes and Areas (well kind of) too.

## MvcMockControllers updated

This solution is heavily based on the work of Scott Hanselman who [wrote and blogged about `MvcMockHelpers`](http://www.hanselman.com/blog/ASPNETMVCSessionAtMix08TDDAndMvcMockHelpers.aspx) back in 2008. Essentially I've taken this and tweaked it so I could achieve my ends. My version of `MvcMockHelpers` looks a little like this:

<script src="https://gist.github.com/johnnyreilly/4959924.js?file=MvcMockHelpers.cs"></script>

## What I want to test

I want to be able to unit test the controller `Edit` method I mentioned earlier. This method calls the `Action` method on the controllers `Url` member (which is, in turn, a `UrlHelper`) to generate a URL for passing pack to the client. The URL generated should fit with the routing mechanism I have set up. In this case the route we expect a URL for was mapped by the following area registration:

<script src="https://gist.github.com/johnnyreilly/4959924.js?file=DemoAreaRegistration.cs"></script>

## Enough of the waffle - show me a unit test

Now to the meat; here's a unit test which demonstrates how this is used:

<script src="https://gist.github.com/johnnyreilly/4959924.js?file=UnitTestingAnAreaUsingUrlHelper.cs"></script>

Let's go through this unit test and breakdown what's happening:

1. Arrange
2. Act
3. Assert

The most interesting thing you'll note is the controller's UrlHelper is now generating a URL as we might have hoped. The URL is generated making use of our routing, yay! Finally we're also managing to unit test a route registered by our area.
