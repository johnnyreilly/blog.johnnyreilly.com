---
slug: team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project
title: 'Team Foundation Server, Continuous Integration and separate projects for JavaScript unit tests'
authors: johnnyreilly
tags: [automated testing, visual studio]
hide_table_of_contents: false
description: 'Learn how to run JavaScript tests on TFS/VSO by creating a separate unit test project to house tests, and installing Chutzpah on TFS/VSO.'
---

Do you like to separate out your unit tests from the project you are testing? I imagine so. My own practice when creating a new project in Visual Studio is to create a separate unit test project alongside whose responsibility is to house unit tests for that new project.

<!--truncate-->

When I check in code for that project I expect the continuous integration build to kick off and, as part of that, the unit tests to be run. When it comes to running .NET tests then Team Foundation Server (and it's cloud counterpart Visual Studio Online) has your back. When it comes to running JavaScript tests then... not so much.

This post will set out:

1. How to get JavaScript tests to run on TFS / VSO in a continuous integration scenario.
2. How to achieve this \***without**\* having to include your tests as part of web project.

To do this I will lean heavily (that's fancy language for "rip off entirely") on an [excellent blog post by Mathew Aniyan](https://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx) which covers point #1. My contribution is point #2.

## Points #1 and #2 in short order

First of all, install Chutzpah on TFS / VSO. You can do this by following [Steps 1 - 6 from Mathew Aniyan's post](https://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx). Instead of following steps 7 and 8 create a new unit test project in your solution.

<aside>This unit test project will effectively be a C# project that hosts no real C# code at all. Instead we're going to use it to house JavaScript tests. If there is another way to have a separate project which TFS / VSO can pick up on and run tests in then please let me know. As far as I'm aware though, this is the only game in town.</aside>

**Edit 29/05/2014:** Matthew Manela (creator of Chutzpah) has confirmed that this is the correct approach - thanks chap!

> [@johnny_reilly](https://twitter.com/johnny_reilly) Nope that is pretty much what you need to do.
>
> — Matthew Manela (@mmanela) [May 15, 2014](https://twitter.com/mmanela/statuses/466962743400996864)

<script async="" src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>

To our unit test project add your JavaScript unit tests. These should be marked in Visual Studio with a Build Action of "Content" and a Copy to Output Directory of "Do not copy". You should be able to run these tests locally using the Visual Studio Chutzpah extension - or indeed in some other JavaScript test runner. Then, and this is the important part, edit the csproj file of your unit test project and add this `Import Project` statement:

```xml
<Import Project="$(VSToolsPath)\WebApplications\Microsoft.WebApplication.targets" Condition="'$(VSToolsPath)' != ''" />
```

Ordering is important in this case. It matters that this new statement sits after the other `Import Project` statements. So you should end up with a csproj file that looks in part like this: (comments added by me for clarity)

```xml
<!-- Pre-existing Import Project statements start -->
  <Import Project="$(VSToolsPath)\TeamTest\Microsoft.TestTools.targets" Condition="Exists('$(VSToolsPath)\TeamTest\Microsoft.TestTools.targets')" />
  <Import Project="$(MSBuildToolsPath)\Microsoft.CSharp.targets" />
  <!-- Pre-existing Import Project statements end -->

  <!-- New addition start -->
  <Import Project="$(VSToolsPath)\WebApplications\Microsoft.WebApplication.targets" Condition="'$(VSToolsPath)' != ''" />
  <!-- New addition end -->
```

Check in your amended csproj and the unit tests to TFS / VSO. You should see the JavaScript unit tests being run as part of the build.
