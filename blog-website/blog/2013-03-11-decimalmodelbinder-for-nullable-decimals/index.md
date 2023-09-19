---
slug: decimalmodelbinder-for-nullable-decimals
title: 'DecimalModelBinder for nullable Decimals'
authors: johnnyreilly
tags: [globalize, asp.net]
hide_table_of_contents: false
description: 'John forgot that MVCs ModelBinding doesnt handle regionalised numbers well. Provides solution found on Phil Haacks post.'
---

My memory appears to be a sieve. Twice in the last year I've forgotten that MVCs ModelBinding doesn't handle regionalised numbers terribly well. Each time I've thought "hmmmm.... best Google that" and lo and behold come upon this post on the issue by the fantastic Phil Haack:

<!--truncate-->

[http://haacked.com/archive/2011/03/19/fixing-binding-to-decimals.aspx](http://haacked.com/archive/2011/03/19/fixing-binding-to-decimals.aspx)

This post has got me 90% of the way there, the last 10% being me tweaking it so the model binder can handle nullable decimals as well.

In the expectation I that I may forget this again I thought I'd note down my tweaks now and hopefully save myself sometime when I'm next looking at this next...

```cs
using System;
using System.Globalization;
using System.Web.Mvc;

namespace My.ModelBinders
{
    /// <summary>
    /// Thank you Phil Haack: used to model bind multiple culture decimals
    /// http://haacked.com/archive/2011/03/19/fixing-binding-to-decimals.aspx
    ///
    /// Use by adding these 2 lines to Application_Start in Global.asax.cs:
    ///
    /// System.Web.Mvc.ModelBinders.Binders.Add(typeof(decimal), new ModelBinders.DecimalModelBinder());
    /// System.Web.Mvc.ModelBinders.Binders.Add(typeof(decimal?), new ModelBinders.DecimalModelBinder());
    /// </summary>
    public class DecimalModelBinder : IModelBinder
    {
        public object BindModel(ControllerContext controllerContext,
            ModelBindingContext bindingContext)
        {
            ValueProviderResult valueResult = bindingContext.ValueProvider
                .GetValue(bindingContext.ModelName);
            ModelState modelState = new ModelState { Value = valueResult };
            object actualValue = null;
            try
            {
                //Check if this is a nullable decimal and a null or empty string has been passed
                var isNullableAndNull = (bindingContext.ModelMetadata.IsNullableValueType &&
                                         string.IsNullOrEmpty(valueResult.AttemptedValue));

                //If not nullable and null then we should try and parse the decimal
                if (!isNullableAndNull)
                {
                    actualValue = decimal.Parse(valueResult.AttemptedValue, NumberStyles.Any, CultureInfo.CurrentCulture);
                }
            }
            catch (FormatException e)
            {
                modelState.Errors.Add(e);
            }

            bindingContext.ModelState.Add(bindingContext.ModelName, modelState);
            return actualValue;
        }
    }
}
```

## And now a question...

Why hasn't MVC got an out-of-the-box model binder that does this anyway? In Phil Haack's original post it looks like they were considering putting this into MVC itself at some point:

"_... In that case, the DefaultModelBinder chokes on the value. This is unfortunate because jQuery Validate allows that value just fine. I’ll talk to the rest of my team about whether we should fix this in the next version of ASP.NET MVC, but for now it’s good to know there’s a workaround..._"

If anyone knows the reason this never made it into core I'd love to know. Maybe there's a good reason?
