---
title: "Creating Angular UI Routes in the Controller"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://blog.johnnyreilly.com/img/profile.jpg
tags: [ng-href, UI Router, Angular, ui-sref]
hide_table_of_contents: false
---
So you're creating a link with the Angular UI Router. You're passing more than a few parameters and it's getting kinda big. Something like this:

 ```xml
<a class="contains-icon" 
       ui-sref="Entity.Edit({ entityId: (vm.selectedEntityId ? vm.selectedEntityId: null), initialData: vm.initialData })">
         <i class="fa fa-pencil"></i>Edit
    </a>
```

See? It's too long to fit on the screen without wrapping. It's clearly mad and bad.

Generally I try to keep the logic in a view to a minimum. It makes the view harder to read, it makes behaviour of the app harder to reason about. Also, it's not testable and (if you're using some kind of static typing like TypeScript) it is entirely out of the realms that a compiler can catch. So what to do? Move the URL generation to the controller. That's what I decided to do after I had a typo in my view which I didn't catch until post-commit.

## `ui-sref` in the Controller

Actually, that's not exactly what you want to do. If you look at the [Angular UI Router docs](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-sref) you will see that `ui-sref` is:

> ...a directive that binds a link (`&lt;a&gt;` tag) to a state. If the state has an associated URL, the directive will automatically generate & update the href attribute via the [`$state.href()`](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state#methods_href) method.

So what we actually want to do is use the `$state.href()` method in our controller. To take our example above we'll create another method on our controller called `getEditUrl`

```js
export class EntityController {

    $state: angular.ui.IStateService;

    static $inject = ["$state"];
    constructor($state: angular.ui.IStateService) {
        this.$state = $state;
    }

    //... Other stuff

    getEditUrl() {
        return this.$state.href("Entity.Edit", { 
            selectedEntityId: this.selectedEntityId ? this.selectedEntityId: null, 
            initialData: this.initialData 
        });
    }
}
```

You can see I'm using TypeScript here; but feel free to strip out the type annotations and go with raw ES6 classes; that'll still give you testability if not static typing.

Now we've added the `getEditUrl` method we just need to reference it in our view:

```xml
<a class="contains-icon" ng-href="{{vm.getEditUrl()}}"><i class="fa fa-pencil"></i>Edit</a>
```

Note we've ditched usage of the `ui-sref` directive and gone with Angular's native `<a href="https://docs.angularjs.org/api/ng/directive/ngHref">ng-href</a>`. Within that directive we execute our `getEditUrl` as an expression which gives us our route. As a bonus, our view is much less cluttered and comprehensible as a result. How lovely.


