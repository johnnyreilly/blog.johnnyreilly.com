---
slug: simple-technique-for-initialising
title: 'A Simple Technique for Initialising Properties with Internal Setters for Unit Testing'
authors: johnnyreilly
tags: [automated testing]
hide_table_of_contents: false
description: 'Refactoring a legacy app includes adding unit tests, but properties with internal setters pose a problem. John explores various approaches.'
---

I was recently working with my colleagues on refactoring a legacy application. We didn't have an immense amount of time available for this but the plan was to try and improve what was there as much as possible. In its initial state the application had no unit tests in place at all and so the plan was to refactor the code base in such a way as to make testing it a realistic proposition. To that end the [domain layer](http://en.wikipedia.org/wiki/Domain_layer) was being heavily adjusted and the GUI was being migrated from WebForms to MVC 3. The intention was to build up a pretty solid collection of unit tests. However, as we were working on this we realised we had a problem with properties on our models with [`internal`](<http://msdn.microsoft.com/en-us/library/7c5ka91b(v=vs.80).aspx>) setters...

<!--truncate-->

## Background

The entities of the project in question used an approach which would store pertinent bits of [normalised](http://en.wikipedia.org/wiki/Database_normalization) data for read-only purposes in related entities. I've re-read that sentence and realise it's as clear as mud. Here is an example to clarify:

```cs
public class Person
{
  public int Id { get; set; }
  public string FirstName { get; set; }
  public string LastName { get; set; }
  public string Address { get; set; }
  public DateTime DateOfBirth { get; set; }
  /* Other fascinating properties... */
}

public class Order
{
  public int Id { get; set; }
  public string ProductOrdered { get; set; }
  public string OrderedById { get; set; }
  public string OrderedByFirstName { get; internal set; }
  public string OrderedByLastName { get; internal set; }
}
```

In the example above you have 2 types of entity: `Person` and `Order`. The `Order` entity makes use of the the `Id`, `FirstName` and `LastName` properties of the `Person` entity in the properties `OrderedById`, `OrderedByFirstName` and `OrderedByLastName`. For persistence (ie saving to the database) purposes the only necessary `Person` property is `OrderedById` identity. `OrderedByFirstName` and `OrderedByLastName` are just "nice to haves" - essentially present to make implementing the GUI more straightforward.

To express this behaviour / intention in the object model the setters for `OrderedByFirstName` and `OrderedByLastName` are marked as `internal`. The implication of this is that properties like this can only be initialised within the current assembly - or any explicitly associated "friend" assemblies. In practice this meant that internally set properties were only populated when an object was read in from the database. It wasn't possible to set these properties in other assemblies which meant less code was written (<u>a good thing</u>

) - after all, why set a property when you don't need to?

Background explanation over. It may still be a little unclear but I hope you get the gist.

## What's our problem?

I was writing unit tests for the controllers in our main web application and was having problems with my arrangements. I was mocking the database calls in my controllers much in the manner that you might expect:

```ts
// Arrange
  var orderDb = new Mock<IOrderDb>();
  orderDb
    .Setup(x => x.GetOrder(It.IsAny<int>()))
    .Returns(new Order{
      Id = 123,
      ProductOrdered = "Packet of coffee",
      OrderedById = 987456,
      OrderedByFirstName = "John",
      OrderedByLastName = "Reilly"
    });
}
```

All looks fine doesn't it? It's not. Because `OrderedByFirstName` and `OrderedByLastName` have internal setters we are <u>unable</u>

to initialise them from within the context of our test project. So what to do?

We toyed with 3 approaches and since each has merits I thought it worth going through each of them:

1. To the MOQumentation Batman!: [http://code.google.com/p/moq/wiki/QuickStart](http://code.google.com/p/moq/wiki/QuickStart)! Looking at the MOQ documentation it states the following:

   _Mocking internal types of another project: add the following assembly attributes (typically to the AssemblyInfo.cs) to the project containing the internal types:_

   ```cs
   // This assembly is the default dynamic assembly generated Castle DynamicProxy,
   // used by Moq. Paste in a single line.
   [assembly:InternalsVisibleTo("DynamicProxyGenAssembly2,PublicKey=0024000004800000940000000602000000240000525341310004000001000100c547cac37abd99c8db225ef2f6c8a3602f3b3606cc9891605d02baa56104f4cfc0734aa39b93bf7852f7d9266654753cc297e7d2edfe0bac1cdcf9f717241550e0a7b191195b7667bb4f64bcb8e2121380fd1d9d46ad2d92d2d15605093924cceaf74c4861eff62abf69b9291ed0a340e113be11e6a7d3113e92484cf7045cc7")]
   [assembly: InternalsVisibleTo("The.NameSpace.Of.Your.Unit.Test")] //I'd hope it was shorter than that...
   ```

   This looked to be exactly what we needed and in most situations it would make sense to go with this. Unfortunately for us there was a gotcha. Certain core shared parts of our application platform were [GAC](http://en.wikipedia.org/wiki/Global_Assembly_Cache)'d. A requirement for GAC-ing an assembly is that it is [signed](http://msdn.microsoft.com/en-us/library/xc31ft41.aspx).

   The upshot of this was that if we wanted to use the `InternalsVisibleTo` approach then we would need to sign our web application test project. We weren't particularly averse to that and initially did so without much thought. It was then we remembered that every assembly referenced by a signed assembly must also be signed as well. We didn't really want to sign our main web application purely for testing purposes. We could and if there weren't viable alternatives we well might have. But it just seemed like the wrong reason to be taking that decision. Like using a sledgehammer to crack a nut.

2. The next approach we took was using mock objects. Instead of using our objects straight we would mock them as below:

   ```cs
   //Create mock and set internal properties
         var orderMock = new Mock<Order>();
         orderMock.SetupGet(x => x.OrderedByFirstName).Returns("John");
         orderMock.SetupGet(x => x.OrderedByLastName).Returns("Reilly");

         //Set up standard properties
         orderMock.SetupAllProperties();
         var orderStub = orderMock.Object;
         orderStub.Id = 123;
         orderStub.ProductOrdered = "Packet of coffee";
         orderStub.OrderedById = 987456;
   ```

   Now this approach worked fine but had a couple of snags:

   - As you can see it's pretty verbose and much less clear to read than it was previously.
   - It required that we add the `virtual` keyword to all our internally set properties like so:

     ```cs
     public class Order
     {
       // ....
       public virtual string OrderedByFirstName { get; internal set; }
       public virtual string OrderedByLastName { get; internal set; }
       // ...
     }
     ```

   - Our standard constructor already initialised the value of our internally set properties. So adding `virtual` to the internally set properties generated [ReSharper](http://www.jetbrains.com/resharper/) warnings aplenty about virtual properties being initialised in the constructor. Fair enough.

   Because of the snags it still felt like we were in nutcracking territory...

3. ... and this took us to the approach that we ended up adopting: a special mocking constructor for each class we wanted to test, for example:

   ```cs
   /// <summary>
   /// Mocking constructor used to initialise internal properties
   /// </summary>
   public Order(string orderedByFirstName = null, string orderedByLastName = null)
   : this()
   {
   OrderedByFirstName = orderedByFirstName;
   OrderedByLastName = orderedByLastName;
   }

   ```

   Thanks to the ever lovely [Named and Optional Arguments](http://msdn.microsoft.com/en-us/library/dd264739.aspx) feature of C# combined with [Object Initializers](http://msdn.microsoft.com/en-us/library/bb397680.aspx) it meant it was possible to write quite expressive, succinct code using this approach; for example:

   ```cs
   var order = new Order(
           orderedByFirstName: "John",
           orderedByLastName: "Reilly"
         )
         {
           Id = 123,
           ProductOrdered = "Packet of coffee",
           OrderedById = 987456
         };
   ```

   Here we're calling the mocking constructor to set the internally set properties and subsequently initialising the other properties using the object initialiser mechanism.

   Implementing these custom constructors wasn't a massive piece of work and so we ended up settling on this technique for initialising internal properties.
