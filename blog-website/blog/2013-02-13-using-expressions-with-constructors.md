---
title: "Using Expressions with Constructors"
authors: johnnyreilly
tags: [Expression, Constructors, Generic]
hide_table_of_contents: false
---
Every now and then you think "x should be easy" - and it isn't. I had one of those situations this morning. Something I thought would take 5 minutes had me still pondering 30 minutes later. I finally cracked it (with the help of a colleague - thanks Marc!) and I wanted to note down what I did since I'm sure to forget this.

 ## So what's the problem?

In our project we had a very simple validation class. It looked a bit like this:

<script src="https://gist.github.com/johnnyreilly/4944545.js?file=FieldValidationBefore.cs"></script>

I wanted to take this class and extend it to have a constructor which allowed me to specify a Type and subsequently an Expression of that Type that allowed me to specify a property. 10 points if you read the last sentence and understood it without reading it a second time.

Code is a better illustration; take a look below. I wanted to go from #1 to #2:

<script src="https://gist.github.com/johnnyreilly/4944545.js?file=HowItIsUsed.cs"></script>

"Why?" I hear you ask. Well we had a swathe of statements in the code which test each property for a problem and would create a `FieldValidation` with the very same property name if one was found. There's no real problem with that but I'm a man that likes to refactor. Property names change and I didn't want to have to remember to manually go through each `FieldValidation` keeping these in line. If I was using the actual property name to drive the creation of my `FieldValidations` then that problem disappears. And I like that.

## So what's the solution?

Well it's this:

<script src="https://gist.github.com/johnnyreilly/4944545.js?file=FieldValidationAfter.cs"></script>

As you can see we have taken the original FieldValidation class and added in a generic constructor which instead of taking `string fieldName` as a first argument it takes `Expression&lt;Func&lt;T, object&gt;&gt; expression`. LINQ's Expression magic is used to determine the supplied property name which is smashing. If you were wondering, the first `MemberExpression` code is used for *reference* types. The `UnaryExpression` wrapping a `MemberExpression` code is used for *value* types. A good explanation of this can be found [here](http://stackoverflow.com/a/12975480/761388).

My colleague directed me to [this crucial StackOverflow answer](http://stackoverflow.com/a/2916344) which provided some much needed direction when I was thrashing. And that's it; we're done, home free.


