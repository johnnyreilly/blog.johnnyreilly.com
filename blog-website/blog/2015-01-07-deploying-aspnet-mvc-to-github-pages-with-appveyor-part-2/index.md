---
slug: deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2
title: 'Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'To save time, automating open source projects is key. Using AppVeyor and creating static sites with tools like Wget can help update documentation.'
---

"Automation, automation, automation." Those were and are Tony Blair's priorities for keeping open source projects well maintained.

<!--truncate-->

OK, that's not quite true... But what is certainly true is that maintaining an open source project takes time. And there's only so much free time that anyone has. For that reason, wherever you can it makes sense to _AUTOMATE_!

[Last time](../2014-12-29-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1/index.md) we looked at how you can take an essentially static ASP.Net MVC site (in this case my jVUNDemo documentation site) and generate an entirely static version using Wget. This static site has been pushed to [GitHub Pages](https://pages.github.com/) and is serving as the documentation for [jQuery Validation Unobtrusive Native](http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/) (and for bonus points is costing me no money at all).

So what next? Well, automation clearly! If I make a change to jQuery Validation Unobtrusive Native then AppVeyor already bounds in and performs a [continuous integration build](https://ci.appveyor.com/project/JohnReilly/jquery-validation-unobtrusive-native) for me. It picks up the [latest source](https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native) from GitHub, pulls in my dependencies, performs a build and runs my tests. Lovely.

So the obvious thing to do is to take this process and plug in the generation of my static site and the publication thereof to GitHub pages. The minute a change is made to my project the documentation should be updated without me having to break sweat. That's the goal.

## GitHub Personal Access Token

In order to complete our chosen mission we're going to need a GitHub Personal Access Token. We're going to use it when we clone, update and push our GitHub Pages branch. To get one we biff over to Settings / Applications in GitHub and click the "Generate New Token" button.

![](GitHubApplicationSettings.webp)

The token I'm using for my project has the following scopes selected:

![](GitHub-Personal-Access-Token.webp)

## `appveyor.yml`

With our token in hand we turn our attention to AppVeyor build configuration. This is possible using a file called [`appveyor.yml`](http://www.appveyor.com/docs/build-configuration) stored in the root of your repo. You can also use the AppVeyor web UI to do this. However, for the purposes of ease of demonstration I'm using the file approach. The [jQuery Validation Unobtrusive Native `appveyor.yml`](https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/blob/master/appveyor.yml) looks like this:

```yml
---
#---------------------------------#
#      general configuration      #
#---------------------------------#

# version format
version: 1.0.{build}

#---------------------------------#
#    environment configuration    #
#---------------------------------#

# environment variables
environment:
  GithubEmail: johnny_reilly@hotmail.com
  GithubUsername: johnnyreilly
  GithubPersonalAccessToken:
    secure: T4M/N+e/baksVoeWoYKPWIpfahOsiSFw/+Zc81VuThZmWEqmrRtgEHUyin0vCWhl

branches:
  only:
    - master

install:
  - ps: choco install wget

build:
  verbosity: minimal

after_test:
  - ps: ./makeStatic.ps1 $env:APPVEYOR_BUILD_FOLDER
  - ps: ./pushStatic.ps1 $env:APPVEYOR_BUILD_FOLDER $env:GithubEmail $env:GithubUsername $env:GithubPersonalAccessToken
```

There's a number of things you should notice from the yml file:

- We create 3 environment variables: GithubEmail, GithubUsername and GithubPersonalAccessToken (more on this in a moment).
- We only build the master branch.
- We use [Chocolatey](https://chocolatey.org/packages/Wget) to install Wget which is used by the `makeStatic.ps1` Powershell script.
- After the tests have completed we run 2 Powershell scripts. First [`makeStatic.ps1`](https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/blob/master/makeStatic.ps1) which builds the static version of our site. This is the exact same script we discussed in the previous post - we're just passing it the build folder this time (one of AppVeyor's environment variables). Second, we run [`pushStatic.ps1`](https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/blob/master/pushStatic.ps1) which publishes the static site to GitHub Pages.

We pass 4 arguments to `pushStatic.ps1`: the build folder, my email address, my username and my personal access token. For the sake of security the GithubPersonalAccessToken has been encrypted as indicated by the `secure` keyword. This is a capability available in AppVeyor [here](https://ci.appveyor.com/tools/encrypt).

![](AppVeyor-encrypt.webp)

This allows me to mask my personal access token rather than have it available as free text for anyone to grab.

## `pushStatic.ps1`

Finally we can turn our attention to how our Powershell script `pushStatic.ps1` goes about pushing our changes up to GitHub Pages:

```ps
param([string]$buildFolder, [string]$email, [string]$username, [string]$personalAccessToken)

Write-Host "- Set config settings...."
git config --global user.email $email
git config --global user.name $username
git config --global push.default matching

Write-Host "- Clone gh-pages branch...."
cd "$($buildFolder)\..\"
mkdir gh-pages
git clone --quiet --branch=gh-pages https://$($username):$($personalAccessToken)@github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native.git .\gh-pages\
cd gh-pages
git status

Write-Host "- Clean gh-pages folder...."
Get-ChildItem -Attributes !r | Remove-Item -Recurse -Force

Write-Host "- Copy contents of static-site folder into gh-pages folder...."
copy-item -path ..\static-site\* -Destination $pwd.Path -Recurse

git status
$thereAreChanges = git status | select-string -pattern "Changes not staged for commit:","Untracked files:" -simplematch
if ($thereAreChanges -ne $null) {
    Write-host "- Committing changes to documentation..."
    git add --all
    git status
    git commit -m "skip ci - static site regeneration"
    git status
    Write-Host "- Push it...."
    git push --quiet
    Write-Host "- Pushed it good!"
}
else {
    write-host "- No changes to documentation to commit"
}
```

So what's happening here? Let's break it down:

- Git is configured with the passed in username and email address.
- A folder is created that sits alongside the build folder called "gh-pages".
- We clone the "gh-pages" branch of jQuery Validation Unobtrusive Native into our "gh-pages" directory. You'll notice that we are using our GitHub personal access token in the clone URL itself.
- We delete the contents of the "gh-pages" directory leaving it empty.
- We copy across the contents of the "static-site" folder (created by `makeStatic.ps1`) into the "gh-pages".
- We use `git status` to check if there are any changes. (This method is completely effective but a little crude to my mind - there's probably better approaches to this.... shout me in the comments if you have a suggestion.)
- If we have no changes then we do nothing.
- If we have changes then we stage them, commit them and push them to GitHub Pages. Then we sign off with an allusion to [80's East Coast hip-hop](<https://en.wikipedia.org/wiki/Push_It_(Salt-n-Pepa_song)>)... 'Cos that's how we roll.

With this in place, any changes to the docs will be automatically published out to our "gh-pages" branch. Our documentation will always be up to date thanks to the goodness of AppVeyor's Continuous Integration service.
