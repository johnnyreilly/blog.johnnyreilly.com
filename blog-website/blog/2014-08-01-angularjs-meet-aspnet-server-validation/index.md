---
slug: angularjs-meet-aspnet-server-validation
title: 'AngularJS meet ASP.Net Server Validation'
authors: johnnyreilly
tags: [angularjs, asp.net, typescript]
hide_table_of_contents: false
description: 'Learn how to perform server-side validation in your AngularJS and ASP.Net project using a `serverError` directive and server response error messages.'
---

So. You're using AngularJS to build your front end with ASP.Net running on the server side. You're a trustworthy dev - you know that validation on the client will only get you so far. You need to validate on the server.

<!--truncate-->

My particular scenario is where you have a form which you are saving. Angular serves you well when it comes to hooking in your own client side validation. But it doesn't really ship with anything that supports **nicely** presenting server side validation on the client. Invariably when you look around you find people duplicating their server side validation on the client and presenting all their server side validation in a `&lt;div&gt;` at the top of the screen.

This works but it's not as helpful to the user as it might be. It groups together all the validation from the server into one place. What I want is field level validation from the server that's presented on a field level basis on the screen.

Let us travel together to this promised land...

## What do we need client side?

Well, let's start with a directive which I'll call `serverError`. This plants a validation message just _after_ the element being validated which is displayed when that element is declared invalid by the server. (That is to say when the `ngModel` has a `$error.server` set.) When the element is changed then the `$error.server` is unset in order that validation can be hidden and the form can be revalidated against the server.

I'm using TypeScript with Angular so for my JavaScript examples I'll give you both the TypeScript which I originally wrote and the generated JavaScript as well.

### TypeScript

```ts
interface serverErrorScope extends ng.IScope {
    name: string;
    serverError: { [field: string]: string };
}

app.directive("serverError", [function () {

  // Usage:
  // <input class="col-xs-12 col-sm-9"
  //        name="sage.name" ng-model="vm.sage.name" server-error="vm.errors" />
  var directive = {
    link: link,
    restrict: "A",
    require: "ngModel", // supply the ngModel controller as the 4th parameter in the link function
    scope: { // Pass in name and serverError to the scope
      name: "@",
      serverError: "="
    }
  };
  return directive;

  function link(scope: serverErrorScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ngModelController: ng.INgModelController) {

    // Bootstrap alert template for error
    var template = '<div class="alert alert-danger" role="alert">' +
                               '<i class="glyphicon glyphicon-warning-sign"></i> ' +
                               '%error%</div>';

    // Create an element to hold the validation message
    var decorator = angular.element('<div></div>');
    element.after(decorator);

    // Watch ngModelController.$error.server & show/hide validation accordingly
    scope.$watch(safeWatch(() => ngModelController.$error.server), showHideValidation);

    function showHideValidation(serverError: boolean) {

      // Display an error if serverError is true otherwise clear the element
      var errorHtml = "";
      if (serverError) {
        // Aliasing serverError and name to make it more obvious what their purpose is
        var errorDictionary = scope.serverError;
        var errorKey = scope.name;
        errorHtml = template.replace(/%error%/, errorDictionary[errorKey] || "Unknown error occurred...");
      }
      decorator.html(errorHtml);
    }

    // wipe the server error message upon keyup or change events so can revalidate with server
    element.on("keyup change", (event) => {
      scope.$apply(() => { ngModelController.$setValidity("server", true); });
    });
  }
}]);

// Thanks @Basarat! http://stackoverflow.com/a/24863256/761388
function safeWatch<t extends="" function="">(expression: T) {
  return () => {
    try {
      return expression();
    }
    catch (e) {
      return null;
    }
  };
}
</t>
```

### JavaScript

```js
app.directive('serverError', [
  function () {
    // Usage:
    // <input class="col-xs-12 col-sm-9"
    //        name="sage.name" ng-model="vm.sage.name" server-error="vm.errors" />
    var directive = {
      link: link,
      restrict: 'A',
      require: 'ngModel',
      scope: {
        name: '@',
        serverError: '=',
      },
    };
    return directive;

    function link(scope, element, attrs, ngModelController) {
      // Bootstrap alert template for error
      var template =
        '<div class="alert alert-danger" role="alert">' +
        '<i class="glyphicon glyphicon-warning-sign"></i> ' +
        '%error%</div>';

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
          // Aliasing serverError and name to make it more obvious what their purpose is
          var errorDictionary = scope.serverError;
          var errorKey = scope.name;
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
```

If you look closely at this directive you'll see it is restricted to be used as an attribute and it depends on 2 things:

1. The value that the `server-error` attribute is set to should be an object which will contain key / values where the keys represent fields that are being validated.
2. The element being validated must have a name property (which will be used to look up the validation message in the `server-error` error "dictionary".

Totally not clear, right? Let's have an example. Here is my "sageEdit" screen which you saw the screenshot of earlier:

```html
<section class="mainbar" ng-controller="sageEdit as vm">
  <section class="matter">
    <div class="container-fluid">
      <form name="form" novalidate role="form">
        <div>
          <button
            class="btn btn-info"
            ng-click="vm.save()"
            ng-disabled="!vm.canSave"
          >
            <i class="glyphicon glyphicon-save"></i>Save
          </button>
          <span ng-show="vm.hasChanges" class="dissolve-animation ng-hide">
            <i class="glyphicon glyphicon-asterisk orange"></i>
          </span>
        </div>
        <div class="widget wblue">
          <div data-cc-widget-header title="{{vm.title}}"></div>
          <div class="widget-content form-horizontal">
            <div class="form-group">
              <label class="col-xs-12 col-sm-2">Name</label>
              <input
                class="col-xs-12 col-sm-9"
                name="sage.name"
                ng-model="vm.sage.name"
                server-error="vm.errors"
              />
            </div>
            <div class="form-group">
              <label class="col-xs-12 col-sm-2">Username</label>
              <input
                class="col-xs-12 col-sm-9"
                name="sage.userName"
                ng-model="vm.sage.userName"
                server-error="vm.errors"
              />
            </div>
            <div class="form-group">
              <label class="col-xs-12 col-sm-2">Email</label>
              <input
                class="col-xs-12 col-sm-9"
                type="email"
                name="sage.email"
                ng-model="vm.sage.email"
                server-error="vm.errors"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</section>
```

If you look closely at where `server-error` is used we have a name attribute set (eg "sage.email") and we're passing in something called `<em>vm.</em>errors` as the `server-error` attribute value. That's because we're using the "controller as" syntax and our controller is called `vm`.

On that controller we're going to have a dictionary style object called `errors`. If you wanted to you could put that object on the scope instead and omit the "vm." prefix. You could call it `wrongThingsWhatISpottedWithYourModel` or `barry` \- whatever floats your boat really. You get my point; it's flexible.

Let's take a look at our sageEdit Angular controller:

### TypeScript

```ts
module controllers {
  'use strict';

  interface sageEditRouteParams extends ng.route.IRouteParamsService {
    id: number;
  }

  interface sageEditScope extends ng.IScope {
    form: ng.IFormController;
  }

  class SageEdit {
    errors: { [field: string]: string };
    log: loggerFunction;
    logError: loggerFunction;
    logSuccess: loggerFunction;
    sage: sage;
    title: string;

    private _isSaving: boolean;

    static $inject = [
      '$location',
      '$routeParams',
      '$scope',
      'common',
      'datacontext',
    ];
    constructor(
      private $location: ng.ILocationService,
      private $routeParams: sageEditRouteParams,
      private $scope: sageEditScope,
      private common: common,
      private datacontext: datacontext,
    ) {
      this.errors = {};
      this.log = common.logger.getLogFn(controllerId);
      this.logError = common.logger.getLogFn(controllerId, 'error');
      this.logSuccess = common.logger.getLogFn(controllerId, 'success');
      this.sage = undefined;
      this.title = 'Sage Edit';

      this._isSaving = false;

      this.activate();
    }

    // Prototype methods

    activate() {
      var id = this.$routeParams.id;
      var dataPromises: ng.IPromise<any>[] = [this.getSage(id)];

      this.common
        .activateController(dataPromises, controllerId, this.title)
        .then(() => {
          this.log('Activated Sage Edit View');
          this.title = 'Sage Edit: ' + this.sage.name;
        });
    }

    getSage(id: number) {
      return this.datacontext.sage.getById(id).then((sage) => {
        this.sage = sage;
      });
    }

    save() {
      this.errors = {}; //Wipe server errors
      this._isSaving = true;
      this.datacontext.sage.save(this.sage).then((response) => {
        if (response.success) {
          this.sage = response.entity;
          this.logSuccess(
            'Saved ' + this.sage.name + ' [' + this.sage.id + ']',
          );
          this.$location.path('/sages/detail/' + this.sage.id);
        } else {
          this.logError('Failed to save', response.errors);

          angular.forEach(response.errors, (errors, field) => {
            (<ng.INgModelController>this.$scope.form[field]).$setValidity(
              'server',
              false,
            );
            this.errors[field] = errors.join(',');
          });
        }

        this._isSaving = false;
      });
    }

    // Properties

    get hasChanges(): boolean {
      return this.$scope.form.$dirty;
    }

    get canSave(): boolean {
      return this.hasChanges && !this._isSaving && this.$scope.form.$valid;
    }
  }

  var controllerId = 'sageEdit';
  angular.module('app').controller(controllerId, SageEdit);
}
```

### JavaScript

```js
var controllers;
(function (controllers) {
  'use strict';

  var SageEdit = (function () {
    function SageEdit($location, $routeParams, $scope, common, datacontext) {
      this.$location = $location;
      this.$routeParams = $routeParams;
      this.$scope = $scope;
      this.common = common;
      this.datacontext = datacontext;
      this.errors = {};
      this.log = common.logger.getLogFn(controllerId);
      this.logError = common.logger.getLogFn(controllerId, 'error');
      this.logSuccess = common.logger.getLogFn(controllerId, 'success');
      this.sage = undefined;
      this.title = 'Sage Edit';

      this._isSaving = false;

      this.activate();
    }
    // Prototype methods
    SageEdit.prototype.activate = function () {
      var _this = this;
      var id = this.$routeParams.id;
      var dataPromises = [this.getSage(id)];

      this.common
        .activateController(dataPromises, controllerId, this.title)
        .then(function () {
          _this.log('Activated Sage Edit View');
          _this.title = 'Sage Edit: ' + _this.sage.name;
        });
    };

    SageEdit.prototype.getSage = function (id) {
      var _this = this;
      return this.datacontext.sage.getById(id).then(function (sage) {
        _this.sage = sage;
      });
    };

    SageEdit.prototype.save = function () {
      var _this = this;
      this.errors = {}; //Wipe server errors
      this._isSaving = true;
      this.datacontext.sage.save(this.sage).then(function (response) {
        if (response.success) {
          _this.sage = response.entity;
          _this.logSuccess(
            'Saved ' + _this.sage.name + ' [' + _this.sage.id + ']',
          );

          _this.$location.path('/sages/detail/' + _this.sage.id);
        } else {
          _this.logError('Failed to save', response.errors);

          angular.forEach(response.errors, function (errors, field) {
            _this.$scope.form[field].$setValidity('server', false);
            _this.errors[field] = errors.join(',');
          });
        }

        _this._isSaving = false;
      });
    };

    Object.defineProperty(SageEdit.prototype, 'hasChanges', {
      // Properties
      get: function () {
        return this.$scope.form.$dirty;
      },
      enumerable: true,
      configurable: true,
    });

    Object.defineProperty(SageEdit.prototype, 'canSave', {
      get: function () {
        return this.hasChanges && !this._isSaving && this.$scope.form.$valid;
      },
      enumerable: true,
      configurable: true,
    });
    SageEdit.$inject = [
      '$location',
      '$routeParams',
      '$scope',
      'common',
      'datacontext',
    ];
    return SageEdit;
  })();

  var controllerId = 'sageEdit';
  angular.module('app').controller(controllerId, SageEdit);
})(controllers || (controllers = {}));
```

Okay - this is a shedload of code and most of it isn't relevant to you. I share it as I like to see things in context. Let's focus in on the important bits that you should take away. Firstly, our controller has a property called `errors`.

Secondly, when we attempt to save our server sends back a JSON payload which, given a validation failure, looks something like this:

```json
{
  "success": false,
  "errors": {
    "sage.name": ["The Name field is required."],
    "sage.userName": [
      "The UserName field is required.",
      "The field UserName must be a string with a minimum length of 3 and a maximum length of 30."
    ],
    "sage.email": ["The Email field is not a valid e-mail address."]
  }
}
```

So let's pare back our `save` function to the bare necessities (those simple bare necessities, forget about your worries and your strife...):

### TypeScript

```ts
save() {

      this.errors = {}; //Wipe server errors

      this.datacontext.sage.save(this.sage).then(response => {

        if (response.success) {
          this.sage = response.entity;
        }
        else {
          angular.forEach(response.errors, (errors, field) => {
            (<ng.INgModelController>this.$scope.form[field]).$setValidity("server", false);
            this.errors[field] = errors.join(",");
          });
        }
      });
    }
```

### JavaScript

```js
SageEdit.prototype.save = function () {
  var _this = this;
  this.errors = {}; //Wipe server errors
  this.datacontext.sage.save(this.sage).then(function (response) {
    if (response.success) {
      _this.sage = response.entity;
    } else {
      angular.forEach(response.errors, function (errors, field) {
        _this.$scope.form[field].$setValidity('server', false);
        _this.errors[field] = errors.join(',');
      });
    }
  });
};
```

At the point of save we wipe any server error messages that might be stored on the client. Then, if we receive back a payload with errors we store those errors and set the validity of the relevant form element to false. This will trigger the display of the message by our directive.

That's us done for the client side. You're no doubt now asking yourself this question:

## How can I get ASP.Net to send me this information?

So glad you asked. We've a simple model that looks like this which has a number of data annotations:

```cs
public class Sage
{
  public int Id { get; set; }

  [Required]
  public string Name { get; set; }

  [Required]
  [StringLength(30, MinimumLength = 3)]
  public string UserName { get; set; }

  [EmailAddress]
  public string Email { get; set; }
}
```

When we save we post back to a Web API controller that looks like this:

```cs
public class SageController : ApiController
{
  // ...

  public IHttpActionResult Post(User sage)
  {
    if (!ModelState.IsValid) {

      return Ok(new
      {
        Success = false,
        Errors = ModelState.ToErrorDictionary()
      });
    }

    sage = _userService.Save(sage);

    return Ok(new
    {
      Success = true,
      Entity = sage
    });
  }

  // ...
}
```

As you can see, when `ModelState` is not valid we send back a dictionary of the `ModelState` error messages keyed by property name. We generate this with an extension method I wrote called `ToErrorDictionary`:

```cs
public static class ModelStateExtensions
{
  public static Dictionary<string, IEnumerable<string>> ToErrorDictionary(
    this System.Web.Http.ModelBinding.ModelStateDictionary modelState, bool camelCaseKeyName = true)
  {
    var errors = modelState
      .Where(x => x.Value.Errors.Any())
      .ToDictionary(
        kvp => CamelCasePropNames(kvp.Key),
        kvp => kvp.Value.Errors.Select(e => e.ErrorMessage)
      );

    return errors;
  }

  private static string CamelCasePropNames(string propName)
  {
    var array = propName.Split('.');
    var camelCaseList = new string[array.Length];
    for (var i = 0; i < array.Length; i++)
    {
      var prop = array[i];
      camelCaseList[i] = prop.Substring(0, 1).ToLower() + prop.Substring(1, prop.Length - 1);
    }
    return string.Join(".", camelCaseList);
  }
}
```

That's it - your solution front to back. It would be quite easy to hook other types of validation in server-side (database level checks etc). I hope you find this useful.
