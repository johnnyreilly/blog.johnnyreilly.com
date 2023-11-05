---
slug: the-surprisingly-happy-tale-of-visual
title: 'The Surprisingly Happy Tale of Visual Studio Online, Continous Integration and Chutzpah'
authors: johnnyreilly
tags: [automated testing, azure devops, javascript]
hide_table_of_contents: false
description: 'John recounts his experience with JavaScript unit testing using Jasmine and Chutzpah for integration with Visual Studio and Team Foundation Service.'
---

## Going off piste

<!--truncate-->

The post that follows is a slightly rambly affair which is pretty much my journal of the first steps of getting up and running with JavaScript unit testing. I will not claim that much of this blog is down to me. In fact in large part is me working my way through [Mathew Aniyan's excellent blog post on integrating Chutzpah with TFS](https://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx). But a few deviations from this post have made me think it worth keeping hold of this record for my benefit (if no-one else's).

That's the disclaimers out of the way now...

## ...Try, try, try again...

Getting started with JavaScript unit testing has not been the breeze I’d expected. Frankly I’ve found the docs out there not particularly helpful. But if at first you don't succeed then try, try, try again.

So after a number of failed attempts I’m going to give it another go. [Rushaine McBean](http://www.hanselminutes.com/412/getting-started-with-javascript-unit-testing-with-jasmine-and-rushaine-mcbean) says Jasmine is easiest so I'm going to follow her lead and give it a go.

Let’s new up a new (empty) ASP.NET project. Yes, I know ASP.NET has nothing to do with JavaScript unit testing but my end goal is to be able to run JS unit tests in Visual Studio and as part of Continuous Integration. Further to that, I'm anticipating a future where I have a solution that contains JavaScript unit tests and C# unit tests as well. It is indeed a bold and visionary Brave New World. We'll see how far we get.

First up, download Jasmine from [GitHub](http://jasmine.github.io/) \- I'll use [v2.0](https://github.com/pivotal/jasmine/blob/master/dist/jasmine-standalone-2.0.0.zip). Unzip it and fire up SpecRunner.html and whaddya know... It works!

As well it might. I’d be worried if it didn’t. So I’ll move the contents of the release package into my empty project. Now let’s see if we can get those tests running inside Visual Studio. I’d heard of [Chutzpah](https://chutzpah.codeplex.com/) which describes itself thusly:

> _“Chutzpah is an open source JavaScript test runner which enables you to run unit tests using QUnit, Jasmine, Mocha, CoffeeScript and TypeScript.” _

What I’m after is the Chutzpah test adapter for Visual Studio 2012/2013 which can be found [here](http://visualstudiogallery.msdn.microsoft.com/f8741f04-bae4-4900-81c7-7c9bfb9ed1fe). I download the VSIX and install. Pretty painless. Once I restart Visual Studio I can see my unit tests in the test explorer. Nice! Run them and...

All fail. This makes me sad. All the errors say “Can’t find variable: Player in file”. Hmmm. Why? Dammit I’m actually going to have to read the [documentation](https://chutzpah.codeplex.com/wikipage?title=Chutzpah%20File%20References&referringTitle=Documentation)... It turns out the issue can be happily resolved by adding these 3 references to the top of PlayerSpec.js:

```js
/// <reference path="../src/Player.js" />
/// <reference path="../src/Song.js" />
/// <reference path="SpecHelper.js" />
```

Now the tests pass.

The question is: can we get this working with Visual Studio Online?

Fortunately another has gone before me. Mathew Aniyan has written a [superb blog post called "Javascript Unit Tests on Team Foundation Service with Chutzpah"](https://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx). Using this post as a guide (it was written 18 months ago which is frankly aeons in the world of the web) I'm hoping that I'll be able to, without too many tweaks, get Javascript unit tests running on Team Foundation Service / Visual Studio Online ( / insert this weeks rebranding here).

First of all in Visual Studio Online I’ll create a new project called "GettingStartedWithJavaScriptUnitTesting" (using all the default options). Apparently _“Your project is created and your team is going to absolutely love this.”_ Hmmmm... I think I’ll be judge of that.

Let's navigate to the project. I'll fire up Visual Studio by clicking on the “Open in Visual Studio” link. Once fired up and all the workspace mapping is sorted I’ll move my project into the GettingStartedWithJavaScriptUnitTesting folder that now exists on my machine and add this to source control.

Back to Mathew's blog. It suggests renaming Chutzpah.VS2012.vsix to Chutzpah.VS2012.zip and checking certain files into TFS. I think Chutzpah has changed a certain amount since this was written. To be on the safe side I’ll create a new folder in the root of my project called Chutzpah.VS2012 and put the contents of Chutzpah.VS2012.zip in there and add it to TFS (being careful to ensure that no dll’s are excluded).

Then I'll follow steps 3 and 4 from the blog post:

> \*3\. In Visual Studio, Open Team Explorer & connect to Team Foundation Service. Bring up the Manage Build Controllers dialog. [Build –> Manage Build Controllers] Select Hosted Build Controller Click on Properties button to bring up the Build Controller Properties dialog.
>
> 4\. Change Version Control Path to custom Assemblies to refer to the folder where you checked in the binaries in step 2.
>
> -

In step 5 the blog tells me to edit my build definition. Well I don’t have one in this new project so let’s click on “New Build Definition”, create one and then follow step 5:

> \*5\. In Team Explorer, go to the Builds section and Edit your Build Definition which will run the javascript tests. Click on the Process tab Select the row named Automated Tests. Click on … button next to the value.
>
> -

Rather than following step 6 (which essentially nukes the running of any .NET tests you might have) I chose to add another row by clicking "Add". In the dialog presented I changed the Test assembly specification to \*\*\\\*.js and checked the "Fail build on test failure" checkbox.

Step 7 says:

> \*7\. Create your Web application in Visual Studio and add your Qunit or Jasmine unit tests to them. <u>Make sure that the js files (that contain the tests) are getting copied to the build output directory.</u>
>
> -

The picture below step 7 suggests that you should be setting your test / spec files to have a `Copy to Output Directory` setting of `Copy always`. **This did not work for me!!!** Instead, setting a `Build Action` of `Content` and a `Copy to Output Directory` setting of `Do not copy` did work.

Finally I checked everything into source control and queued a build. I honestly did not expect this to work. It couldn’t be this easy could it? And...

Wow! It did! Here’s me cynically expecting some kind of “permission denied” error and it actually works! Brilliant! Look up in the cloud it says the same thing!

Fantastic!

I realise that I haven’t yet written a single JavaScript unit test of my own and so I’ve still a way to go. What I have done is quietened those voices in my head that said “there’s not too much point having a unit test suite that isn’t plugged into continuous integration”. Although it's not documented here I'm happy to be able to report that I have been able to follow the self-same instructions for Team Foundation Service / Visual Studio Online and get CI working with TFS 2012 on our build server as well.

Having got up and running off the back of other peoples hard work I best try and write some of my own tests now....
