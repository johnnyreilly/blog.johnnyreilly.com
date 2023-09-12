---
slug: dates-DataAnnotations-and-data-impedance-mismatch
title: 'A folk story wherein we shall find dates, DataAnnotations & data impedance mismatch'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'This article offers developers an attribute-based solution to prevent datetime errors, ensuring that DateTime properties only include dates.'
---

If you ever take a step back from what you're doing it can sometimes seem pretty abstract. Here's an example. I was looking at an issue in an app that I was supporting. The problem concerned a field which was to store a date value. Let's call it, for the sake of argument, `valuation_date`. (Clearly in reality the field name was entirely different... Probably.) This field was supposed to represent a specific date, like June 15th 2012 or 19th August 2014. To be clear, a date and \***not**\* in any way, a time.

<!--truncate-->

`valuation_date` was stored in a SQL database as a [`datetime`](http://msdn.microsoft.com/en-gb/library/ms187819.aspx). That's right a date with a time portion. I've encountered this sort of scenario many times on systems I've inherited. Although there is a [`date`](http://msdn.microsoft.com/en-gb/library/bb630352.aspx) type in SQL it's pretty rarely used. I think it only shipped in SQL Server with 2008 which may go some way to explaining this. Anyway, I digress...

`valuation_date` was read into a field in a C# application called `ValuationDate` which was of type [`DateTime`](http://msdn.microsoft.com/en-us/library/system.datetime.aspx). As the name suggests this is also a date with a time portion. After a travelling through various layers of application this ended up being serialized as JSON and sent across the wire where it became a JavaScript variable by the name of `valuationDate` which had the type [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). Despite the deceptive name this is also, you guessed it, a date with a time portion. (Fine naming work there JavaScript!)

You can probably guess where I'm going with this... Despite our (cough) rock solid naming convention, the situation had arisen where actual datetimes had snuck in. That's right, in the wilds of production, records with `valuation_date`s with time components had been spotted. My mission was to hunt them, kill them and stop them reproducing...

## A Primitive Problem

Dates is a sticky topic in many languages. As I mentioned, SQL Server has a [`date`](http://msdn.microsoft.com/en-gb/library/bb630352.aspx) data type. C# has [`DateTime`](http://msdn.microsoft.com/en-gb/library/system.datetime.aspx). If you want to operate on Dates alone then you're best off talking looking at Jon Skeet's [NodaTime](http://nodatime.org/) \- though most people start with `DateTime` and stick with it. (After all, it's native.) As to JavaScript, well primitive-wise there's no alternative to `Date` \- but [`Moment.js`](http://momentjs.com/) may help.

My point is that it is a long standing issue in the development world. We represent data in types that aren't entirely meant for the purpose that they are used. It's not just restricted to dates, numbers have a comparable story around the issue of [decimals and doubles](http://csharpindepth.com/Articles/General/Decimal.aspx). As a result of data type issues, developers experience problems. Like the one I was facing.

## An Attribute Solution

The source of the problem turned out to be the string JavaScript [`Date constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) in an earlier version of Internet Explorer. The fix was switching away from using the JavaScript Date constructor in favour of using Moment.js's more dependable ability to parse strings into dates. Happy days we're working once more! Some quick work to put together a SQL script to fix up the data and we have ourselves our patch!

But we didn't want to get bitten again. We wanted ourselves a little [belts and braces](http://dictionary.cambridge.org/dictionary/british/belt-and-braces). What do do? Hang on a minute, lads – I've got a great idea... It's `<a href="http://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.validationattribute(v=vs.110).aspx">ValidationAttribute</a>` time!

We whipped ourselves up an attribute that looked like this:

```cs
using System;
using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace My.Attributes
{
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, Inherited = false, AllowMultiple = false)]
    public class DateOnlyAttribute: ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value != null)
            {
                if (value is DateTime)
                {
                    // Date but not Time check
                    var date = (DateTime) value;
                    if (date.TimeOfDay != TimeSpan.Zero)
                    {
                        return new ValidationResult(date.ToString("O", CultureInfo.InvariantCulture) + " is not a date - it is a date with a time", new[] { validationContext.MemberName });
                    }
                }
                else
                {
                    return new ValidationResult("DateOnlyAttribute can only be used on DateTime? and DateTime", new[] { validationContext.MemberName });
                }
            }

            return ValidationResult.Success;
        }
    }
}
```

This attribute does 2 things:

1. Most importantly it fails validation for any `DateTime` or `DateTime?` that includes a time portion. It only allows through DateTimes where the clock strikes midnight. It's optimised for Cinderella.
2. It fails validation if the attribute is applied to any property which is not a `DateTime` or `DateTime?`.

You can decorate `DateTime` or `DateTime?` properties on your model with this attribute like so:

```cs
namespace My.Models
{
    public class ImAModelYouKnowWhatIMean
    {
        public int Id { get; set; }

        [DateOnlyAttribute]
        public DateTime ValuationDate { get; set; }

        // Other properties...
    }
}
```

And if you're using MVC (or anything that makes use of the validation data annotations) then you'll now find that you are nicely protected from DateTimes masquerading as dates. Should they show up you'll find that `ModelState.IsValid` is false and you can kick them to the curb with alacrity!
