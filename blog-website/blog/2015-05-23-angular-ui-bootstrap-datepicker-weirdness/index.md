---
slug: angular-ui-bootstrap-datepicker-weirdness
title: 'Angular UI Bootstrap Datepicker Weirdness'
authors: johnnyreilly
tags: [angularjs, javascript]
hide_table_of_contents: false
description: 'Add a calendar glyph to your Angular UI Bootstrap Datepicker popup by passing along $event and calling stopPropagation() to avoid an issue.'
---

The [Angular UI Bootstrap Datepicker](https://angular-ui.github.io/bootstrap/#/datepicker) is fan-dabby-dozy. But it has a ... pecularity. You can use the picker like this:

<!--truncate-->

```html
<div ng-app="peskyDatepicker">
  <div ng-controller="DatepickerDemoCtrl as vm">
    <input
      type="text"
      class="form-control"
      datepicker-popup="mediumDate"
      is-open="vm.valuationDatePickerIsOpen"
      ng-click="vm.valuationDatePickerOpen()"
      ng-model="vm.valuationDate"
    />
  </div>
</div>
```

```js
angular
  .module('peskyDatepicker', ['ui.bootstrap'])
  .controller('DatepickerDemoCtrl', [
    function () {
      var vm = this;

      vm.valuationDate = new Date();
      vm.valuationDatePickerIsOpen = false;

      vm.valuationDatePickerOpen = function () {
        this.valuationDatePickerIsOpen = true;
      };
    },
  ]);
```

The above code produces a textbox which, when clicked upon, renders the datepicker popup (which vanishes upon date selection). This works because the `ng-click` directive calls the `valuationDatePickerOpen` function on the controller which sets the `valuationDatePickerIsOpen` property to be `true` and that property happens to be bound to the `is-open` attribute. Your knee bone connected to your thigh bone, Your thigh bone connected to your hip bone... This makes sense. This works. Great.

But I want something a little prettier - I want to use the lovely calendar glyph to trigger the datepicker popup like in the docs. That should be really easy right? I just tweak the HTML to add a calendar button and the associated `ng-click="vm.valuationDatePickerOpen()"`:

```html
<div ng-app="peskyDatepicker">
  <div ng-controller="DatepickerDemoCtrl as vm">
    <p class="input-group">
      <input
        type="text"
        class="form-control"
        datepicker-popup="mediumDate"
        is-open="vm.valuationDatePickerIsOpen"
        ng-click="vm.valuationDatePickerOpen()"
        ng-model="vm.valuationDate"
      />
      <span class="input-group-btn">
        <button
          type="button"
          class="btn btn-default"
          ng-click="vm.valuationDatePickerOpen()"
        >
          <i class="glyphicon glyphicon-calendar"></i>
        </button>
      </span>
    </p>
  </div>
</div>
```

Miraculously, this _doesn't_ work. Which is strange - I mean it ought to... The same `ng-click` directive is sat on our new calendar button as is in place on the datepicker itself. So what's happening? Well let's do some investigation. If you take a look at the docs you'll see that their example with the calendar glyph is subtly different to our own. Namely, when the opener function is invoked, the official docs pass along `$event`. To what end? Well, the docs opener function does something that our own does not. This:

```js
$scope.open = function ($event) {
  $event.preventDefault();
  $event.stopPropagation();

  $scope.opened = true;
};
```

Ignore all the `$scope` malarkey - I want you to pay attention to what is happening with `$event`. `preventDefault` and `stopPropogation` are being called. This is probably relevant.

I decided to do a little experimentation. I created a Plunk which demonstrates the datepicker and uses `$watch` to track what happens to `valuationDatePickerIsOpen`. The Plunk featured 2 calendar glyphs - the left one doesn't pass along `$event` to `valuationDatePickerOpen` when it is clicked and the right one does. When `$event` is passed we call `preventDefault` and `stopPropogation`.

<iframe src="https://embed.plnkr.co/dJyF531w0QRGiAScRf15/preview" width="100%" height="450"></iframe>

After a little experimentation of my own I discovered that calling `$event.stopPropogation()` is the magic bullet. Without that in place `valuationDatePickerIsOpen` gets set to `true` and then immediately back to `false` again. I do not know why. There may be an entirely sane reason for this - if so then please do post a comment and let me know. It wouldn't hurt for the Angular UI Bootstrap Datepicker docs to mention this. [Perhaps it's time to submit a PR....](https://github.com/angular-ui/bootstrap/issues/3705)
