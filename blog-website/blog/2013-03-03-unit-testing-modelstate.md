---
title: "Unit testing ModelState"
authors: johnnyreilly
tags: [asp.net mvc, Marc Talary, DataAnnotations, Controller, ModelState]
hide_table_of_contents: false
---
- Me: "It can't be done"
- Him: "Yes it can"
- Me: "No it can't"
- Him: "Yes it can, I've just done it"
- Me: "Ooooh! Show me ..."



 The above conversation (or one much like it) took place between my colleague Marc Talary and myself a couple of weeks ago. It was one of those faintly embarrassing situations where you state your case with absolute certainty only to subsequently discover that you were \***completely**\* wrong. Ah arrogance, thy name is Reilly...

The disputed situation in this case was ModelState validation in ASP.Net MVC. How can you unit test a models validation driven by `DataAnnotations`? If at all. Well it can be done, and here's how.

## Simple scenario

Let's start with a simple model:

<script src="https://gist.github.com/johnnyreilly/5069901.js?file=CarModel.cs"></script>

And let's have a controller which makes use of that model:

<script src="https://gist.github.com/johnnyreilly/5069901.js?file=CarController.cs"></script>

When I was first looking at unit testing this I was slightly baffled by the behaviour I witnessed. I took an invalid model (where the properties set on the model were violating the model's validation `DataAnnotations`):

<script src="https://gist.github.com/johnnyreilly/5069901.js?file=NaomiCampbell.cs"></script>

I passed the invalid model to the `Edit` controller action inside a unit test. My expectation was that the `ModelState.IsValid` code path would \***not**\* be followed as this was \***not**\* a valid model. So `ModelState.IsValid` should evaluate to `false`, right? Wrong!

Contrary to my expectation the validity of `ModelState` is not evaluated on the fly inside the controller. Rather it is determined during the model binding that takes place \***before**\* the actual controller action method is called. And that completely explains why during my unit test with an invalid model we find we're following the `ModelState.IsValid` code path.

## Back to the dispute

As this blog post started off I was slightly missing Marc's point. I thought he was saying we should be testing the `ModelState.IsValid == false` code path. And given that `ModelState` is determined before we reach the controller my view was that the only way to achieve this was through making use of `ModelState.AddModelError` in our unit test (you can read a good explanation of that [here](http://stackoverflow.com/a/3816143/761388)). And indeed we were already testing for this; we were surfacing errors via a `JsonResult` and so had a test in place to ensure that `ModelState` errors were transformed in the manner we would expect.

However, Marc's point was actually that we should have unit tests that enforced our design. That is to say, if we'd decided a certain property on a model was mandatory we should have a test that checked that this was indeed the case. If someone came along later and removed the `Required` data annotation then we wanted that test to fail.

It's worth saying, we didn't want a unit test to ensure that ASP.Net MVC worked as expected. Rather, where we had used DataAnnotations against our models to drive validation, we wanted to ensure the validation didn't disappear further down the track. Just to be clear: we wanted to test our code, not Microsoft's.

## Now I get to learn something

When I grasped Marc's point I thought that the the only way to write these tests would be to make use of reflection. And whilst we could certainly do that I wasn't entirely happy with that as a solution. To my mind it was kind of testing "at one remove", if you see what I mean. What I really wanted was to see that MVC was surfacing validations in the manner I might have hoped. And you can!

.... Drum roll... Ladies and gents may I present Marc's `ModelStateTestController`:

<script src="https://gist.github.com/johnnyreilly/5069901.js?file=ModelStateTestController.cs"></script>

This class is, as you can see, incredibly simple. It is a controller, it inherits from `System.Web.Mvc.Controller` and establishes a mock context in the constructor using MOQ. This controller exposes a single method: `TestTryValidateModel`. This method internally determines the controller's `ModelState` given the supplied object by calling off to Mvc's (protected) `TryValidateModel` method (`TryValidateModel` evaluates `ModelState`).

This simple class allows us to test the validations on a model in a simple fashion that stays close to the way our models will actually be used in the wild. It's pragmatic and it's useful.

## An example

Let me wrap up with an example unit test. The test below makes use of the `ModelStateTestController` to check the application of the DataAnnotations on our model:

<script src="https://gist.github.com/johnnyreilly/5069901.js?file=ModelStateUnitTests.cs"></script>

## Wrapping up

In a way I think it's a shame that `TryValidateModel` is a protected method. If it weren't it would be simplicity to write a unit test which tested the ModelState directly in context of the action method. It would be possible to get round this by establishing a base controller class which all our controllers would inherit from which implemented the `TestTryValidateModel` method from above. On the other hand maybe it's good to have clarity of the difference between testing model validations and testing controller actions. Something to ponder...


