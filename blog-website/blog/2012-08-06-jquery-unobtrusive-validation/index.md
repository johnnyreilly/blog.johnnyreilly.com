---
slug: jquery-unobtrusive-validation
title: 'jQuery Unobtrusive Validation (+ associated gotchas)'
authors: johnnyreilly
tags: [jquery]
hide_table_of_contents: false
description: 'Implement unobtrusive jQuery validation in your MVC application using HTML 5 data attributes to simplify code maintenance and reduce mistakes.'
---

I was recently working on a project which had client side validation manually set up which essentially duplicated the same logic on the server. Like many things this had started out small and grown and grown until it became arduos and tedious to maintain.

<!--truncate-->

Time to break out the unobtrusive jQuery validation.

If you’re not aware of this, as part of MVC 3 Microsoft leveraged the pre-existing [jQuery Validate library](http://bassistance.de/jquery-plugins/jquery-plugin-validation/) and introduced an “unobtrusive” extension to this which allows the library to be driven by HTML 5 data attributes. I have mentioned this lovely extension before but I haven't been using it for the last 6 months or so. And coming back to it I realised that I had forgotten a few of the details / quirks.

First up, "where do these HTML 5 data attributes come from?" I hear you cry. Why from the [Validation attributes that live in System.ComponentModel.DataAnnotations](http://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.validationattribute.aspx).

Let me illustrate. This decoration:

```cs
[Required(),
   Range(0.01, Double.MaxValue, ErrorMessage = "A positive value is required for Price"),
   Display(Name = "My Price")]
  public double Price { get; set; }
```

specifies that the Price field on the model is required, that it requires a positive numeric value and that it’s official name is “My Price”. As a result of this decoration, when you use syntax like this in your view:

```xml
@Html.LabelFor(x => x.Price)
  @Html.TextBoxFor(x => x.Price, new { id = "itsMyPrice", type = "number" })
```

You end up with this HTML:

```xml
<label for="Price">My Price</label>
  <input data-val="true" data-val-number="The field My Price must be a number." data-val-range="A positive value is required for My Price" data-val-range-max="1.79769313486232E+308" data-val-range-min="0.01" data-val-required="The My Price field is required." id="itsMyPrice" name="Price" type="number" value="">
```

As you can see MVC has done the hard work of translating these data annotations into HTML 5 data attributes so you don’t have to. With this in place you can apply your validation in 1 place (the model) and 1 place only. This reduces the code you need to write exponentially. It also reduces duplication and therefore reduces the likelihood of mistakes.

To validate a form it’s as simple as this:

```js
$('form').validate();
```

Or if you wanted to validate a single element:

```js
$('form').validate().element('elementSelector');
```

Or if you wanted to prevent default form submission until validation was passed:

```js
$('form').submit(function (event) {
  var isValid = $(this).validate().valid();

  return isValid; //True will allow submission, false will not
});
```

See what I mean? Simple!

If you want to read up on this further I recommend these links:

- [The home of jQuery Validate](http://bassistance.de/jquery-plugins/jquery-plugin-validation/) \- by the way it seems to be important to work with the latest version (1.9 at time of writing). I found some strange AJAX issues when using 1.7...
- [Brad Wilson's walkthrough of unobtrusive client validation](http://bradwilson.typepad.com/blog/2010/10/mvc3-unobtrusive-validation.html)
- [An example of how to implement your own custom validation both server side \*and\* client side](http://www.devtrends.co.uk/blog/the-complete-guide-to-validation-in-asp.net-mvc-3-part-2)
- [How to apply unobtrusive jQuery validation to dynamic content](http://xhalent.wordpress.com/2011/01/24/applying-unobtrusive-validation-to-dynamic-content/) \- handy if you're creating HTML on the client which you want to be validated.
- And finally, a workaround for [a bug in MVC 3](http://aspnet.codeplex.com/workitem/7629) which means that data attributes aren’t emitted when using DropDownListFor for nested objects: [http://forums.asp.net/t/1649193.aspx/1/10](http://forums.asp.net/t/1649193.aspx/1/10). In fact because I've only seen this on a forum I've copied and the pasted the code there to below because I feared it being lost: **Update: It turns out the self-same issue exists for TextAreaFor as well. Details of this and a workaround can be found [here](http://aspnet.codeplex.com/workitem/8576)... **

```cs
/// <summary>
    /// MVC HtmlHelper extension methods - html element extensions
    /// These are drop down list extensions that work round a bug in MVC 3: http://aspnet.codeplex.com/workitem/7629
    /// These workarounds were taken from here: http://forums.asp.net/t/1649193.aspx/1/10
    /// </summary>
    public static class DropDownListExtensions
    {
        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]
        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList)
        {
            return SelectListFor(htmlHelper, expression, selectList, null /* optionLabel */, null /* htmlAttributes */);
        }


        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]
        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, object htmlAttributes)
        {
            return SelectListFor(htmlHelper, expression, selectList, null /* optionLabel */, new RouteValueDictionary(htmlAttributes));
        }


        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]
        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, IDictionary<string, object> htmlAttributes)
        {
            return SelectListFor(htmlHelper, expression, selectList, null /* optionLabel */, htmlAttributes);
        }


        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]
        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, string optionLabel)
        {
            return SelectListFor(htmlHelper, expression, selectList, optionLabel, null /* htmlAttributes */);
        }


        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]
        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, string optionLabel, object htmlAttributes)
        {
            return SelectListFor(htmlHelper, expression, selectList, optionLabel, new RouteValueDictionary(htmlAttributes));
        }


        [SuppressMessage("Microsoft.Design", "CA1011:ConsiderPassingBaseTypesAsParameters", Justification = "Users cannot use anonymous methods with the LambdaExpression type")]
        [SuppressMessage("Microsoft.Design", "CA1006:DoNotNestGenericTypesInMemberSignatures", Justification = "This is an appropriate nesting of generic types")]
        public static MvcHtmlString SelectListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, IEnumerable<SelectListItem> selectList, string optionLabel, IDictionary<string, object> htmlAttributes)
        {
            if (expression == null)
            {
                throw new ArgumentNullException("expression");
            }


            ModelMetadata metadata = ModelMetadata.FromLambdaExpression(expression, htmlHelper.ViewData);


            IDictionary<string, object> validationAttributes = htmlHelper
                .GetUnobtrusiveValidationAttributes(ExpressionHelper.GetExpressionText(expression), metadata);


            if (htmlAttributes == null)
                htmlAttributes = validationAttributes;
            else
                htmlAttributes = htmlAttributes.Concat(validationAttributes).ToDictionary(k => k.Key, v => v.Value);


            return SelectExtensions.DropDownListFor(htmlHelper, expression, selectList, optionLabel, htmlAttributes);
        }
    }
```
