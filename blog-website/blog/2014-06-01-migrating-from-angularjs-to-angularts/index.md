---
slug: migrating-from-angularjs-to-angularts
title: 'Migrating from AngularJS to AngularTS - a walkthrough'
authors: johnnyreilly
tags: [angularjs, automated testing, typescript]
hide_table_of_contents: false
description: 'Learn how to migrate an AngularJS app from JavaScript to TypeScript in this walkthrough on a simple website/app for sending prayer requests.'
---

It started with nuns. Don't all good stories start that way? One of my (many) aunts is a Poor Clare nun. At some point in the distant past I was cajoled into putting together a simple website for her convent. This post is a walkthrough of how to migrate from AngularJS using JavaScript to AngularJS using TypeScript. It just so happens that the AngularJS app in question is the one that belongs to my mother's sister's convent.

<!--truncate-->

## TL;DR - grab what you need

For reference the complete "before" and "after" projects can be found on GitHub [here](https://github.com/johnnyreilly/AngularJS2AngularTS). This is available so people can see clearly what changes have been made in the migration.

The content of the site is available for <u>reference only</u>

. (Not that I can really imagine people creating their own "Poor Clares" site and hawking it to convents around the globe but I thought I'd make the point.)

## Background

I've been quietly maintaining this website / app for quite a while now. It's a very simple site; 95% of it is static content about the convent. The one piece of actual functionality is a page which allows the user of the website to send a prayer request to the nuns at the convent.

Behind the scenes this sends 2 emails:

- The first back to the person who submitted the prayer request assuring them that they will be prayed for.
- The second to the convent telling them the details of what the person would like prayer for.

<aside><em>It's not accidental that I am not sharing the location of my aunt's website in this post. Given the inherent mischievousness of most developers (I should know, I am one) I harbour a fear that readers of this post might go away and submit many an insincere prayer request (or worse) to the convent. If that's you I don't intend to help you. You're clever, you'll find the site if you are so minded. But please know that the nuns who read any of your prayer requests are wonderful people (nuns get a bad rep) and that they love you. They *<strong>will</strong>* pray for you. They're good like that. I appeal to your better nature on this.</em></aside>

Right now you are probably thinking this is an unusual post. Perhaps it is, but bear with me.

Over time the website has had many incarnations. It's been table-based layout, it's used Kendo UI, it's used Bootstrap. It's been static HTML, it's been ASP.Net WebForms, it's been ASP.Net MVC and it's currently built using **AngularJS** with **MVC** on the back-end to handle bundling / minification and dispatching of emails.

I decided to migrate this AngularJS app to use TypeScript. As I did that I thought I'd document the process for anyone else who might be considering doing something similar. As it happens this is a particularly good candidate for migration as there's a full unit test suite for the app (written with Jasmine). Once I've finished the migration these unit tests should pass, just as they do currently.

You are probably thinking to yourself "but TypeScript is just about adding compile-time annotations right? How could the unit tests not pass after migration?" Fair point, well made. Well that is generally true but I have something slightly different planned when we get to the controllers - you'll see what I mean...

It's also a good candidate for documenting a walkthrough as it's a particularly small and simple Angular app. It consists of just **3 controllers**, **2 services** and **1 app**.

Before I kick off I thought I'd list a couple of guidelines / caveats on this post:

- I don't intend to say much about the architecture of this application - I want to focus on the migration from JavaScript to TypeScript.
- The choices that I make for the migration path do not necessarily reflect the "one true way". Rather, they are pragmatic choices that I am making - there may be alternatives approaches here and there that could be used instead.
- I love Visual Studio - it's my IDE of choice and the one I am using as I perform the migration. Some of the points that I will make are Visual Studio specific - I will try and highlight that when appropriate.

## Typings

The first thing we're going to need to get going are the Angular typing files which can be found on Definitely Typed [here](https://github.com/borisyankov/DefinitelyTyped/tree/master/angularjs). Since these typings are made available over [NuGet](https://www.nuget.org/packages/angularjs.TypeScript.DefinitelyTyped/) I'm going to pull them in with a wave of my magic `Install-Package angularjs.TypeScript.DefinitelyTyped`.

As well as pulling in the typing files Visual Studio 2013 has also made some tweaks to my `PoorClaresAngular.csproj` file which it tells me about.

And these are the TypeScript specific additions that Visual Studio has made to `PoorClaresAngular.csproj`:

```xml
<Import
   Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.Default.props"
   Condition="Exists('$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.Default.props')" />

  <TypeScriptToolsVersion>1.0</TypeScriptToolsVersion>

  <Import
   Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets"
   Condition="Exists('$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets')" />
```

I'm going to add one extra of my own:

```xml
<TypeScriptNoImplicitAny>True</TypeScriptNoImplicitAny>
```

This prevents you having variables of type `any` in your TypeScript codebase without you implicitly specifying the type. You can live without this but I've found it's useful to catch where you're missing out on the benefit of static typing. Further to that, this option can be particularly useful when performing a migration. It will become obvious why this is the case as we go on.

I decline the kind opportunity to further search NuGet as I'm already on my way typing-wise. So let's review what has happened. Below you can see the typing files that have been pulled in and that the project and packages files were amended.

## Changing JS files to TS files

This really should be as simple as changing all the JavaScript files underneath the `js` directory to have the suffix `ts`.

And if you're not using Visual Studio it is. But if you are using Visual Studio there's a certain amount of fiddling required to include the generated `.js` and `.js.map` files associated with each `.ts` file. The easiest (hah!) thing to do is to crack open the project and wherever you find a `&lt;TypeScriptCompile Include="js\somePath.ts" /&gt;` to add in 2 `Content` statements, one for each generated file which states the dependency on the TypeScript file. For example:

```xml
<TypeScriptCompile Include="js\services\siteSectionService.ts" />
    <Content Include="js\services\siteSectionService.js">
      <DependentUpon>siteSectionService.ts</DependentUpon>
    </Content>
    <Content Include="js\services\siteSectionService.js.map">
      <DependentUpon>siteSectionService.ts</DependentUpon>
    </Content>
```

It's a bit of a pain to have to do this at the moment. Hopefully the Visual Studio tooling will catch up so this sort of tweaking becomes unnecessary.

## Recap

So, where are we? Well, we've got our project ready for TypeScript, we've pulled in the Angular typings from Definitely Typed and we've turned all our JavaScript files in the `js` directory into TypeScript files.

Now we can actually start working through our TypeScript files and ensuring we're all typed correctly. Please note that because I'm working in Visual Studio I get the benefit of implicit referencing; I don't have to explicitly state the typing files each TypeScript file relies on at the head of the file (eg `/// &lt;reference path="angularjs/angular.d.ts" /&gt;`). If you aren't working in Visual Studio then you'd need to add these yourself.

## TypeScriptify `app.ts`

Opening up `app.ts` we're presented with a few red squigglies.

These red squigglies are the direct result of my earlier opting in to `NoImplicitAny`. So in my view it's already paid for itself as it's telling me where I could start using typings. So to get things working nicely I'll give `$routeProvider` the type of `ng.route.IRouteProvider` and I'll explicitly specify the type of `any` for the 2 `params` parameters:

```ts
// ...
    function ($routeProvider: ng.route.IRouteProvider) {

        function getTheConventTemplateUrl(params: any) {
            var view = params.view || "home";
            return "partials/theConvent/" + view + ".html";
        }

        function getMainTemplateUrl(params: any) {
            var view = params.view || "home";
            return "partials/main/" + view + ".html";
        }

        // ...
    }
    // ...
```

## TypeScriptify `siteSectionService.ts`

Opening up `siteSectionService.ts` we're only presented with a single squiggly, and for the same reason as last time.

This error is easily remedied by giving `path` the type of `string`.

What's more interesting / challenging is thinking about how we want to enforce the definition of `siteSectionService`. Remember, this is a service and as such it will be re-used elsewhere in the application (in both `navController` and `mainController`). What we need is an interface that describes what our (revealing module pattern) service exposes:

```ts
'use strict';

interface ISiteSectionService {
  getSiteSection: () => string;
  determineSiteSection: (path: string) => void;
}

angular.module('poorClaresApp.services').factory(
  'siteSectionService',

  [
    // No dependencies at present
    function (): ISiteSectionService {
      var siteSection = 'home';

      function getSiteSection() {
        return siteSection;
      }

      function determineSiteSection(path: string) {
        var newSiteSection = 'home';

        if (path.indexOf('/theConvent/') !== -1) {
          newSiteSection = 'theConvent';
        } else if (path !== '/') {
          newSiteSection = 'main';
        }

        siteSection = newSiteSection;
      }

      return {
        getSiteSection: getSiteSection,
        determineSiteSection: determineSiteSection,
      };
    },
  ],
);
```

As you can see the `ISiteSectionService ` interface is marked as the return type of the function. This ensures that what we return from the function satisfies that definition. Also, it allows us to re-use that interface elsewhere (as we will do later).

## TypeScriptify `prayerRequestService.ts`

Opening up `prayerRequestService.ts` we're again in `NoImplicitAny` country.

This is fixed up by defining `$http` as `ng.IHttpService` and `email` and `prayFor` as `string`.

As with `siteSectionService` we need to create an interface to define what `prayerRequestService` exposes. This leaves us with this:

```ts
'use strict';

interface IPrayerRequestService {
  sendPrayerRequest: (
    email: string,
    prayFor: string,
  ) => ng.IPromise<{
    success: boolean;
    text: string;
  }>;
}

angular.module('poorClaresApp.services').factory(
  'prayerRequestService',

  [
    '$http',
    function ($http: ng.IHttpService): IPrayerRequestService {
      var url = '/PrayerRequest';

      function sendPrayerRequest(email: string, prayFor: string) {
        var params = { email: email, prayFor: prayFor };

        return $http.post(url, params).then(function (response) {
          return {
            success: response.data.success,
            text: response.data.text,
          };
        });
      }

      return {
        sendPrayerRequest: sendPrayerRequest,
      };
    },
  ],
);
```

## TypeScriptify `prayerRequestController.ts`

Opening up `prayerRequestController.ts` leads me to the conclusion that I have **no interesting way left** of telling you that we once more need to supply types for our parameters. Let's take it as read that the same will happen on all remaining files as well eh? Hopefully by now it's fairly clear that this option is useful, even if only for a migration. I say this because using it forces you to think about what typings should be applied to your code.

We'll define `$scope` as `ng.IScope`, `prayerRequestService` as `IPrayerRequestService` (which we created just now) and `prayerRequest` as `{ email: string; prayFor: string }`. Which leaves me with this:

```ts
'use strict';

angular.module('poorClaresApp.controllers').controller(
  'PrayerRequestController',

  [
    '$scope',
    'prayerRequestService',
    function ($scope: ng.IScope, prayerRequestService: IPrayerRequestService) {
      var vm = this;

      vm.send = function (prayerRequest: { email: string; prayFor: string }) {
        vm.message = {
          success: true,
          text: 'Sending...',
        };

        prayerRequestService
          .sendPrayerRequest(prayerRequest.email, prayerRequest.prayFor)
          .then(function (response) {
            vm.message = {
              success: response.success,
              text: response.text,
            };
          })
          .then(null, function (error) {
            // IE 8 friendly alias for catch
            vm.message = {
              success: false,
              text: 'Sorry your email was not sent',
            };
          });
      };
    },
  ],
);
```

I could move on but let's go for bonus points (and now you'll see why the unit test suite is so handy). To quote the Angular documentation:

> In Angular, a Controller is a JavaScript constructor function that is used to augment the Angular Scope.

So let's see if we can swap over our vanilla contructor function for a TypeScript class. This will (in my view) better express the intention of the code. To do this I am essentially following the example laid down by my Definitely Typed colleague [Basarat](https://twitter.com/basarat). I highly recommend his [screencast on the topic](https://www.youtube.com/watch?v=WdtVn_8K17E). Also kudos to [Andrew Davey](https://twitter.com/andrewdavey) whose [post on the topic](http://aboutcode.net/2013/10/20/typescript-angularjs-controller-classes.html) also fed into this.

```ts
'use strict';

module poorClaresApp.controllers {
  class PrayerRequestController {
    static $inject = ['$scope', 'prayerRequestService'];
    constructor(
      private $scope: ng.IScope,
      private prayerRequestService: IPrayerRequestService,
    ) {}

    message: { success: boolean; text: string };

    send(prayerRequest: { email: string; prayFor: string }) {
      this.message = {
        success: true,
        text: 'Sending...',
      };

      this.prayerRequestService
        .sendPrayerRequest(prayerRequest.email, prayerRequest.prayFor)
        .then((response) => {
          this.message = {
            success: response.success,
            text: response.text,
          };
        })
        .then(null, (error) => {
          // IE 8 friendly alias for catch
          this.message = {
            success: false,
            text: 'Sorry your email was not sent',
          };
        });
    }
  }

  angular
    .module('poorClaresApp.controllers')
    .controller('PrayerRequestController', PrayerRequestController);
}
```

My only reservation with this approach is that we have to declare the TypeScript class outside the `angular.module...` statement. To avoid cluttering up global scope I've placed our class in a module called `poorClaresApp.controllers` which maps nicely to our Angular module name. It would be nice if I could place the class definition in an [IIFE](http://en.wikipedia.org/wiki/Immediately-invoked_function_expression) to completely keep this completely isolated but TypeScript doesn't allow for that syntax (for reasons I'm unclear about - the output would be legal JavaScript).

For a small class this seems to add a little noise but as classes grow in complexity I think this approach will quickly start to pay dividends. There are a few things worth noting about the above approach:

- The required injectable parameters have moved into the class definition in the form of the `static $inject` statement. I personally like that this no longer sits outside the code it relates to.
- Because we're using TypeScript arrow functions (which preserve the outer "this" context) we are now free to dispose of the `var vm = this;` mechanism we're were previously using for the same purpose. Much more intuitive code to my mind.
- We are not actually using `$scope` at all in this controller - maybe it should be removed entirely in the long run.

## TypeScriptify `navController.ts`

`navController` can be simply converted like so:

```ts
'use strict';

interface INavControllerScope extends ng.IScope {
  isCollapsed: boolean;
  siteSection: string;
}

angular.module('poorClaresApp.controllers').controller(
  'NavController',

  [
    '$scope',
    'siteSectionService',
    function (
      $scope: INavControllerScope,
      siteSectionService: ISiteSectionService,
    ) {
      $scope.isCollapsed = true;
      $scope.siteSection = siteSectionService.getSiteSection();

      $scope.$watch(
        siteSectionService.getSiteSection,
        function (newValue, oldValue) {
          $scope.siteSection = newValue;
        },
      );
    },
  ],
);
```

I'd draw your attention to the creation of a the `INavControllerScope` interface that extends the default Angular $scope of `ng.IScope` with 2 extra properties.

Let's also switch this over to the class based approach (there is less of a reason to on this occasion just looking at the size of the codebase but I'm all about consistency of approach):

```ts
'use strict';

module poorClaresApp.controllers {
  interface INavControllerScope extends ng.IScope {
    isCollapsed: boolean;
    siteSection: string;
  }

  class NavController {
    static $inject = ['$scope', 'siteSectionService'];
    constructor(
      private $scope: INavControllerScope,
      private siteSectionService: ISiteSectionService,
    ) {
      $scope.isCollapsed = true;
      $scope.siteSection = siteSectionService.getSiteSection();

      $scope.$watch(
        siteSectionService.getSiteSection,
        function (newValue, oldValue) {
          $scope.siteSection = newValue;
        },
      );
    }
  }

  angular
    .module('poorClaresApp.controllers')
    .controller('NavController', NavController);
}
```

## TypeScriptify `mainController.ts`

Finally, `mainController` can be converted as follows:

```ts
'use strict';

angular.module('poorClaresApp.controllers').controller(
  'MainController',

  [
    '$location',
    'siteSectionService',
    function (
      $location: ng.ILocationService,
      siteSectionService: ISiteSectionService,
    ) {
      siteSectionService.determineSiteSection($location.path());
    },
  ],
);
```

Again it's just a case of assigning the undeclared types. For completeness lets also switch this over to the class based approach:

```ts
'use strict';

module poorClaresApp.controllers {
  class MainController {
    static $inject = ['$location', 'siteSectionService'];
    constructor(
      private $location: ng.ILocationService,
      private siteSectionService: ISiteSectionService,
    ) {
      siteSectionService.determineSiteSection($location.path());
    }
  }

  angular
    .module('poorClaresApp.controllers')
    .controller('MainController', MainController);
}
```
