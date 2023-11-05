---
slug: my-unrequited-love-for-isolate-scope
title: 'My Unrequited Love for Isolate Scope'
authors: johnnyreilly
tags: [angularjs, typescript, javascript]
hide_table_of_contents: false
description: 'A new version of the serverError directive is presented without isolated scope after discovering directives can only create one isolated scope.'
---

[I wrote a little while ago about creating a directive to present server errors on the screen in an Angular application](../2014-08-01-angularjs-meet-aspnet-server-validation/index.md). In my own (not so humble opinion), it was really quite nice. I was particularly proud of my usage of isolate scope. However, pride comes before a fall.

<!--truncate-->

It turns out that using isolate scope in a directive is not always wise. Or rather – not always possible. And this is why:

```
Error: [$compile:multidir] Multiple directives [datepickerPopup, serverError] asking for new/isolated scope on: <input name="sage.dateOfBirth" class="col-xs-12 col-sm-9" type="text" value="" ng-click="vm.dateOfBirthDatePickerOpen()" server-error="vm.errors" ng-model="vm.sage.dateOfBirth" is-open="vm.dateOfBirthDatePickerIsOpen" datepicker-popup="dd MMM yyyy">
```

Ug. What happened here? Well, I had a date field that I was using my serverError directive on. Nothing too controversial there. The problem came when I tried to plug in [UI Bootstrap’s datepicker](http://angular-ui.github.io/bootstrap/) as well. That’s right the directives are fighting. Sad face.

To be more precise, it turns out that only one directive on an element is allowed to create an isolated scope. So if I want to use UI Bootstrap’s datepicker (and I do) – well my serverError directive is toast.

## A New Hope

So ladies and gentlemen, let me present serverError 2.0 – this time without isolated scope:

### serverError.ts

```ts
(function () {
  'use strict';

  var app = angular.module('app');

  // Plant a validation message to the right of the element when it is declared invalid by the server
  app.directive('serverError', [
    function () {
      // Usage:
      // <input class="col-xs-12 col-sm-9"
      //        name="sage.name" ng-model="vm.sage.name" server-error="vm.errors" />

      var directive = {
        link: link,
        restrict: 'A',
        require: 'ngModel', // supply the ngModel controller as the 4th parameter in the link function
      };
      return directive;

      function link(
        scope: ng.IScope,
        element: ng.IAugmentedJQuery,
        attrs: ng.IAttributes,
        ngModelController: ng.INgModelController,
      ) {
        // Extract values from attributes (deliberately not using isolated scope)
        var errorKey: string = attrs['name']; // eg "sage.name"
        var errorDictionaryExpression: string = attrs['serverError']; // eg "vm.errors"

        // Bootstrap alert template for error
        var template =
          '<div class="alert alert-danger col-xs-9 col-xs-offset-2" role="alert"><i class="glyphicon glyphicon-warning-sign larger"></i> %error%</div>';

        // Create an element to hold the validation message
        var decorator = angular.element('<div></div>');
        element.after(decorator);

        // Watch ngModelController.$error.server & show/hide validation accordingly
        scope.$watch(
          safeWatch(() => ngModelController.$error.server),
          showHideValidation,
        );

        function showHideValidation(serverError: boolean) {
          // Display an error if serverError is true otherwise clear the element
          var errorHtml = '';
          if (serverError) {
            var errorDictionary: { [field: string]: string } = scope.$eval(
              errorDictionaryExpression,
            );
            errorHtml = template.replace(
              /%error%/,
              errorDictionary[errorKey] || 'Unknown error occurred...',
            );
          }
          decorator.html(errorHtml);
        }

        // wipe the server error message upon keyup or change events so can revalidate with server
        element.on('keyup change', (event) => {
          scope.$apply(() => {
            ngModelController.$setValidity('server', true);
          });
        });
      }
    },
  ]);

  // Thanks @Basarat! http://stackoverflow.com/a/24863256/761388
  function safeWatch<T extends Function>(expression: T) {
    return () => {
      try {
        return expression();
      } catch (e) {
        return null;
      }
    };
  }
})();
```

### serverError.js

```js
(function () {
  'use strict';

  var app = angular.module('app');

  // Plant a validation message to the right of the element when it is declared invalid by the server
  app.directive('serverError', [
    function () {
      // Usage:
      // <input class="col-xs-12 col-sm-9"
      //        name="sage.name" ng-model="vm.sage.name" server-error="vm.errors" />
      var directive = {
        link: link,
        restrict: 'A',
        require: 'ngModel',
      };
      return directive;

      function link(scope, element, attrs, ngModelController) {
        // Extract values from attributes (deliberately not using isolated scope)
        var errorKey = attrs['name'];
        var errorDictionaryExpression = attrs['serverError'];

        // Bootstrap alert template for error
        var template =
          '<div class="alert alert-danger col-xs-9 col-xs-offset-2" role="alert"><i class="glyphicon glyphicon-warning-sign larger"></i> %error%</div>';

        // Create an element to hold the validation message
        var decorator = angular.element('<div></div>');
        element.after(decorator);

        // Watch ngModelController.$error.server & show/hide validation accordingly
        scope.$watch(
          safeWatch(function () {
            return ngModelController.$error.server;
          }),
          showHideValidation,
        );

        function showHideValidation(serverError) {
          // Display an error if serverError is true otherwise clear the element
          var errorHtml = '';
          if (serverError) {
            var errorDictionary = scope.$eval(errorDictionaryExpression);
            errorHtml = template.replace(
              /%error%/,
              errorDictionary[errorKey] || 'Unknown error occurred...',
            );
          }
          decorator.html(errorHtml);
        }

        // wipe the server error message upon keyup or change events so can revalidate with server
        element.on('keyup change', function (event) {
          scope.$apply(function () {
            ngModelController.$setValidity('server', true);
          });
        });
      }
    },
  ]);

  // Thanks @Basarat! http://stackoverflow.com/a/24863256/761388
  function safeWatch(expression) {
    return function () {
      try {
        return expression();
      } catch (e) {
        return null;
      }
    };
  }
})();
```

This version of the serverError directive is from a users perspective identical to the previous version. But it doesn’t use isolated scope – this means it can be used in concert with other directives which do.

It works by pulling the `name` and `serverError` values off the attrs parameter. `name` is just a string - the value of which never changes so it can be used as is. `serverError` is an expression that represents the error dictionary that is used to store the server error messages. This is accessed through use of `scope.$eval` as an when it needs to.

## My Plea

What I’ve outlined here works. I’ll admit that usage of `$eval` makes me feel a little bit dirty (I’ve got [“eval is evil”](http://www.jslint.com/lint.html#evil) running through my head). Whilst it works, I’m not sure what I’ve done is necessarily best practice. After all [the Angular docs themselves say](https://docs.angularjs.org/guide/directive):

> **\*Best Practice:** Use the scope option to create isolate scopes when making components that you want to reuse throughout your app. \*

But as we’ve seen this isn’t always an option. I’ve written this post to document my own particular struggle and ask the question “is there a better way?” If you know then please tell me!
