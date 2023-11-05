---
slug: up-to-clouds
title: 'Up to the clouds!'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'Migrating ASP.NET Core app from on-prem to cloud with Kubernetes, Docker, Jenkins, Vault & Azure AD Single Sign-On for greater efficiency.'
---

This last four months has been quite the departure for me. Most typically I find myself building applications; for this last period of time I've been taking the platform that I work on, and been migrating it from running on our on premise servers to running in the cloud.

<!--truncate-->

This turned out to be much more difficult than I'd expected and for reasons that often surprised me. We knew where we wanted to get to, but not all of what we'd need to do to get there. So many things you can only learn by doing. Whilst these experiences are still fresh in my mind I wanted to document some of the challenges we faced.

## The mission

At the start of January, the team decided to make a concerted effort to take our humble ASP.NET Core application and migrate it to the cloud. We sat down with some friends from the DevOps team who are part of our organisation. We're fortunate in that these marvellous people are very talented engineers indeed. It was going to be a collaboration between our two teams of budding cloudmongers that would make this happen.

Now our application is young. It is not much more than a year old. However it is growing _fast_. And as we did the migration from on premise to the cloud, that wasn't going to stop. Development of the application was to continue as is, shipping new versions daily. Without impeding that, we were to try and get the application migrated to the cloud.

I would liken it to boarding a speeding train, fighting your way to the front, taking the driver hostage and then diverting the train onto a different track. It was challenging. Really, really challenging.

So many things had to change for us to get from on premise servers to the cloud, all the while keeping our application a going (and shipping) concern. Let's go through them one by one.

## Kubernetes and Docker

Our application was built using ASP.NET Core. A technology that is entirely cloud friendly (that's one of the reasons we picked it). We were running on a collection of hand installed, hand configured Windows servers. That had to change. We wanted to move our application to run on Kubernetes; so we didn't have to manually configure servers. Rather k8s would manage the provisioning and deployment of containers running our application. Worth saying now: I knew _nothing_ about Kubernetes. Or nearly nothing. I learned a bunch along the way, but, as I've said, this was a collaboration between our team and the mighty site reliability engineers of the DevOps team. They knew a _lot_ about this k8s stuff and moreoften than not, our team stood back and let them work their magic.

In order that we could migrate to running in k8s, we first needed to containerise our application. We needed a `Dockerfile`. There followed a good amount of experimentation as we worked out how to build ourselves images. There's an art to building an optimal Docker image.

So that we can cover a lot of ground, this post will remain relatively high level. So here's a number of things that we encountered along the way that are worth considering:

- Multi-stage builds were an absolute necessity for us. We'd build the front end of our app (React / TypeScript) using one stage with a [Node base image](https://hub.docker.com/_/node). Then we'd build our app using a [.NET Core SDK base image](https://hub.docker.com/_/microsoft-dotnet-core-sdk/). Finally, we'd use a [ASP.Net](https://hub.docker.com/_/microsoft-dotnet-core-aspnet) image to run the app; copying in the output of previous stages.
- Our application accesses various SQL Server databases. We struggled to get our application to connect to them. The issue related to the SSL configuration of our runner image. The fix was simple but frustrating; use a `-bionic` image as it has the configuration you need. We found that gem [here](https://github.com/dotnet/SqlClient/issues/222#issuecomment-535802822).
- Tests. Automated tests. We want to run them in our build; but how? Once more multi-stage builds to the rescue. We'd build our application, then in a separate stage we'd run the tests; copying in the app from the build stage. If the tests failed, the build failed. If they passed then the intermediate stage containing the tests would be discarded by Docker. No unnecessary bloat of the image; all that testing goodness still; now in containerised form!

## Jenkins

Our on premise world used TeamCity for our continuous integration needs and Octopus for deployment. We liked these tools well enough; particularly Octopus. However, the DevOps team were very much of the mind that we should be use Jenkins instead. And [Pipeline](https://jenkins.io/doc/book/pipeline/). It was here that we initially struggled. To quote the docs:

> Jenkins Pipeline (or simply "Pipeline" with a capital "P") is a suite of plugins which supports implementing and integrating continuous delivery pipelines into Jenkins.

Whilst continuous delivery is super cool, and is something our team was interested in, we weren't ready for it yet. We didn't yet have the kind of automated testing in place that gave us the confidence that we'd need to move to it. One day, but not today. For now there was still some manual testing done on each release, prior to shipping. Octopus suited us very well here as it allowed us to deploy, on demand, a build of our choice to a given environment. So the question was: what to do? Fortunately the immensely talented Aby Egea came up with a mechanism that supported that very notion. A pipeline that would, optionally, deploy our build to a specified environment. So we were good!

One thing we got to really appreciate about Jenkins was that the build is scripted with a [Jenkinsfile](https://jenkins.io/doc/book/pipeline/jenkinsfile/). This was in contrast to our TeamCity world where it was all manually configured. [Configuration as code](https://jenkins.io/projects/jcasc/) is truly a wonderful thing as your build pipeline becomes part of your codebase; open for everyone to see and understand. If anyone wants to change the build pipeline it has to get code reviewed like everything else. It was as code in our `Jenkinsfile` that the deployment mechanism lived.

## Vault

Another thing that we used Octopus for was secrets. Applications run on configuration; these are settings that drive the behaviour of your application. A subset of configuration is "secrets". Secrets are configuration that can't be stored in source code; they would represent a risk if they did. For instance a database connection string. We'd been merrily using Octopus for this; as Octopus deploys an application to a server it enriches the `appsettings.json` file with any required secrets.

Without Octopus in the mix, how were we to handle our secrets? The answer is with [Hashicorp Vault](https://www.vaultproject.io/). We'd store our secrets in there and, thanks to clever work by [Robski](https://uk.linkedin.com/in/robert-grzankowski-53618114) of the DevOps team, when our container was brought up by Kubernetes, it would mount into the filesystem an `appsettings.Vault.json` file which we read thanks to our trusty friend [`.AddJsonFile`](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-3.1#json-configuration-provider) with `optional: true`. (As the file didn't exist in our development environment.)

Hey presto! Safe secrets in k8s.

## Networking

Our on premise servers sat on the company network. They could see _everything_ that there was to see. All the other servers around them on the network, bleeping and blooping. The opposite was true in AWS. There was nothing to see. Nothing to access. As it should be. It's safer that way should a machine become compromised. For each database and each API our application depended upon, we needed to specifically allowlist access.

## Kerberos

There's always a fly in the ointment. A nasty surprise on a dark night. Ours was realising that our application depended upon an API that was secured using [Windows Authentication](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/security/authentication/windowsauthentication/). Our application was accessing it by running under a service account which had been permissioned to access it. However, in AWS, our application wasn't running as under a service account on the company network. Disappointingly, in the short term the API was not going to support an alternate authentication mechanism.

What to do? Honestly it wasn't looking good. We were considering proxying through one of our Windows servers just to get access to that API. I was tremendously disappointed. At this point our hero arrived; one [JMac](https://twitter.com/foldr) hacked together a Kerberos sidecar approach one weekend. You can see a similar approach [here](https://github.com/edseymour/kinit-sidecar). This got us to a point that allowed us to access the API we needed to.

I'm kind of amazed that there isn't better documentation out there around have a Kerberos sidecar in a k8s setup. Tragically Windows Authentication is a widely used authentication mechanism. That being the case, having good docs to show how you can get a Kerberos sidecar in place would likely greatly advance the ability of enterprises to migrate to the cloud. The best docs I've found are [here](https://blog.openshift.com/kerberos-sidecar-container/). It is super hard though. _So hard!_

## Hangfire

We were using [Hosted Services](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-3.1&tabs=visual-studio) to perform background task running in our app. The nature of our background tasks meant that it was important to only run a single instance of a background task at a time. Or bad things would happen. This was going to become a problem since we had ambitions to be able to horizontally scale our application; to add new pods as running our app as demand determined.

So we started to use [Hangfire](https://www.hangfire.io/) to perform task running in our app. With Hangfire, when a job is picked up it gets locked so other servers can't pick it up. That's what we need.

Hangfire is pretty awesome. However it turns out that there's quirks when you move to a containerised environment. We have a number of recurring jobs that are scheduled to run at certain dates and times. In order that Hangfire can ascertain what time it is, it needs a timezone. It turns out that timezones on Windows != timezones in Docker / Linux.

This was a problem because, as we limbered up for the great migration, we were trying to run our cloud implementation side by side with our on premise one. And Windows picked a fight with Linux over timezones. You can see others bumping into this condition [here](https://github.com/HangfireIO/Hangfire/issues/1268). We learned this the hard way; jobs mysteriously stopping due to timezone related errors. Windows Hangfire not able to recognise Linux Hangfire timezones and vica versa.

The TL;DR is that we had to do a hard switch with Hangfire; it couldn't run side by side. Not the end of the world, but surprising.

## Azure Active Directory Single Sign-On

Historically our application had used two modes of authentication; Windows Authentication and cookies. Windows Authentication doesn't generally play nicely with Docker. It's doable, but it's not the hill you want to die on. So we didn't; we swapped out Windows Authentication for [Azure AD SSO](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/what-is-single-sign-on) and didn't look back.

We also made some changes so our app would support cookies auth alongside Azure AD auth; [I've written about this previously](../2020-03-22-dual-boot-authentication-with-aspnetcore/index.md).

## Do the right thing and tell people about it

We're there now; we've made the move. It was a difficult journey but one worth making; it sets up our platform for where we want to take it in the future. Having infrastructure as code makes all kinds of approaches possible that weren't before. Here's some things we're hoping to get out of the move:

- blue green deployments - shipping without taking down our platform
- provision environments on demand - currently we have a highly contended situation when it comes to test environments. With k8s and AWS we can look at spinning up environments as we need them and throwing them away also
- autoscaling for need - we can start to look at spinning up new containers in times of high load and removing excessive containers in times of low load

We've also become more efficient as a team. We are no longer maintaining servers, renewing certificates, installing software, RDPing onto boxes. All that time and effort we can plough back into making awesome experiences for our users.

There's a long list of other benefits and it's very exciting indeed! It's not enough for us to have done this though. It's important that we tell the story of what we've done and how and why we've done it. That way people have empathy for the work. Also they can start to think about how they could start to reap similar benefits themselves. By talking to others about the road we've travelled, we can save them time and help them to travel a similar road. This is good for them and it's good for us; it helps our relationships and it helps us all to move forwards together.

A rising tide lifts all boats. By telling others about our journey, we raise the water level. Up to the clouds!
