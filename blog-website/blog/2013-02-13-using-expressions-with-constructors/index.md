---
slug: using-expressions-with-constructors
title: 'Using Expressions with Constructors'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'This article explains how John used LINQs expression to extend a validation class and automatically change the property name.'
---

Every now and then you think "x should be easy" - and it isn't. I had one of those situations this morning. Something I thought would take 5 minutes had me still pondering 30 minutes later. I finally cracked it (with the help of a colleague - thanks Marc!) and I wanted to note down what I did since I'm sure to forget this.

<!--truncate-->

## So what's the problem?

In our project we had a very simple validation class. It looked a bit like this:

```cs
    public class FieldValidation
    {
        public FieldValidation(string fieldName, string message)
        {
            FieldName = fieldName;
            Message = message;
        }

        public string FieldName { get; set; }
        public string Message { get; set; }
    }
```

I wanted to take this class and extend it to have a constructor which allowed me to specify a Type and subsequently an Expression of that Type that allowed me to specify a property. 10 points if you read the last sentence and understood it without reading it a second time.

Code is a better illustration; take a look below. I wanted to go from #1 to #2:

```cs
//#1 Specify field name up front - how we currently use this
var oldSchoolValidation = new FieldValidation(
  "WithAProperty", "Message of some kind...");

//#2 Field name driven directly by property - how we want to use this
var newSchoolValidation = new FieldValidation<AnObject>(
  x => x.WithAProperty, "Message of some kind...");

/// <summary>
/// Example class for demo
/// </summary>
public class AnObject
{
  public bool WithAProperty { get; set; }
}
```

"Why?" I hear you ask. Well we had a swathe of statements in the code which test each property for a problem and would create a `FieldValidation` with the very same property name if one was found. There's no real problem with that but I'm a man that likes to refactor. Property names change and I didn't want to have to remember to manually go through each `FieldValidation` keeping these in line. If I was using the actual property name to drive the creation of my `FieldValidations` then that problem disappears. And I like that.

## So what's the solution?

Well it's this:

```cs
    public class FieldValidation
    {
        public FieldValidation(string fieldName, string message)
        {
            FieldName = fieldName;
            Message = message;
        }

        public string FieldName { get; set; }
        public string Message { get; set; }
    }

    public class FieldValidation<T> : FieldValidation where T : class
    {
        public FieldValidation(
            Expression<Func<T, object>> expression,
            string message)
        {
            //Will work for reference types
            var body = expression.Body as MemberExpression;

            if (body == null)
            {
                //Will work for value types
                var uBody = (UnaryExpression)expression.Body;
                body = uBody.Operand as MemberExpression;
            }


            if (body == null)
                throw new ArgumentException("Invalid property expression");

            FieldName = body.Member.Name;
            Message = message;
        }
    }
```

As you can see we have taken the original FieldValidation class and added in a generic constructor which instead of taking `string fieldName` as a first argument it takes `Expression&lt;Func&lt;T, object&gt;&gt; expression`. LINQ's Expression magic is used to determine the supplied property name which is smashing. If you were wondering, the first `MemberExpression` code is used for _reference_ types. The `UnaryExpression` wrapping a `MemberExpression` code is used for _value_ types. A good explanation of this can be found [here](http://stackoverflow.com/a/12975480/761388).

My colleague directed me to [this crucial StackOverflow answer](http://stackoverflow.com/a/2916344) which provided some much needed direction when I was thrashing. And that's it; we're done, home free.
