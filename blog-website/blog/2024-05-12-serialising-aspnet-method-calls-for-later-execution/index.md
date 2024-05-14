---
slug: serialising-aspnet-method-calls-for-later-execution
title: 'Serialising ASP.NET method calls for later execution'
authors: johnnyreilly
image: ./title-image.png
tags: [azure, c#]
description: 'How can we take a method call, serialise it, perhaps store it in a database, and then later rehydrate and execute?'
hide_table_of_contents: false
---

Let's start with "why". Imagine you have an operation that you'd like to perform, but you need an explicit record of what method is to be executed, and it needs to be approved by a third party before execution takes place.

Now you could, if course, build a mechanism to manually cater for each method call. But that's a lot of work and given we potentially want to do this a lot, wouldn't scale particularly well. What would start as a simple mechanism would grow and grow very quickly.

So how can we take a method call, serialise it, perhaps store it in a database, and then later rehydrate and execute?

![title image reading "Serialising ASP.NET method calls for later execution" with the C# logo](title-image.png)

<!--truncate-->

## What does serialising our method call require?

To serialise a method call, what do we need to store? Three things:

1. The type of object that contains the method we want to subsequently invoke
2. The method on that object
3. The parameter values that will be passed to the method when it is called

Pretty simple, right? It's worth highlighting that there is an underlying assumption for this approach:

_The method call does not depend on the object being in a specific state_

So if, before calling a method on that object you can to, for example, call another method called `OpenConnection` then this approach would not work. Likewise if subsequent cleanup was required, this approach would not work. I'm not sure this an entirely accurate analogy, but think of each method call as needing to be an atomic operation and you're probably heading in the right direction.

How then, can we serialise our method call?

## How do we serialise our method call?

First of all, we need a data structure to store the information we need. We could use a `record` like this:

```cs
public record MethodCall(string ServiceName, string MethodName, object[] Parameters);
```

This record will store the name of the service, the name of the method, and the parameters that will be passed to the method when it is called.

Next we need an example service that we can call. Here's a simple example:

```cs
public interface IOurService
{
    Task<bool> DoAThing(string name, decimal amount, bool isApproved);
}
```

An implementation of this service would be registered with the DI container when the application starts up. We don't need to know anything about the implementation of the service, just that it exists and that we can call methods on it.

If we consider a call to this method, it might look like this:

```cs
IOurService.DoAThing("the name", 100m, true);
```

The above can be represented as a `MethodCall` like this:

```cs
MethodCall methodCall = new (
    ServiceName: typeof(IOurService).FullName ?? throw new InvalidOperationException("Service name cannot be null"),
    MethodName: nameof(IOurService.DoAThing),
    Parameters: [ "the name", 100m, true]
);
```

I'm not going to do so in this post, but the `MethodCall` could be stored in a database. This is powerful because it means that we can store the method call, and then later rehydrate it and execute it.

## How do we deserialise our method call and execute it?

Now that we've looked at how to serialise a method call, let's look at how we can deserialise and execute it. We need a class that can take a `MethodCall` and execute it. Herewith the `MethodCallInvoker` class that does just that:

```cs
public class MethodCallInvoker(
    IServiceProvider serviceProvider,
    MethodCall operation
)
{
    public async Task<object?> InvokeAsync()
    {
        Type? serviceType = Type.GetType(operation.ServiceName ?? throw new InvalidOperationException("Service name cannot be null"));
        object? service = serviceProvider.GetService(serviceType ?? throw new InvalidOperationException("Service type cannot be null"));
        MethodInfo? serviceMethod = serviceType.GetMethod(operation.MethodName) ?? throw new InvalidOperationException("Method info cannot be null");

        List<object> parameters = [];
        ParameterInfo[] requiredParameters = serviceMethod.GetParameters();
        for (int i = 0; i < requiredParameters.Length; i++)
        {
            ParameterInfo requiredParameter = requiredParameters[i];
            object? suppliedParameter = operation.Parameters[i];

            bool suppliedValueIsOfCorrectType = requiredParameter.ParameterType == suppliedParameter.GetType();

            if (suppliedValueIsOfCorrectType)
                parameters.Add(operation.Parameters[i]);
            else
                // Convert.ChangeType is used to convert the supplied parameter to the required type eg from double to decimal
                parameters.Add(Convert.ChangeType(suppliedParameter, requiredParameter.ParameterType, CultureInfo.InvariantCulture));
        }

        Task? task = (Task?)serviceMethod.Invoke(service, [..parameters]) ?? throw new InvalidOperationException($"Method {operation.MethodName} did not return a task");

        await task;

        object? result = null;
        if (task.GetType().IsGenericType && task.GetType().GetGenericTypeDefinition() == typeof(Task<>))
        {
            // Get the result using reflection
            PropertyInfo? resultProperty = task.GetType().GetProperty("Result");
            result = resultProperty?.GetValue(task);
        }

        return result;
    }
}
```

The `MethodCallInvoker` class takes an `IServiceProvider` and a `MethodCall` in its constructor. Remember that the `IServiceProvider` can be used to get a service that has been registered with the DI container. By giving the `MethodCallInvoker` the `IServiceProvider`, we can get the service that we need to call the method on. The `InvokeAsync` method uses reflection to get the service, and the method that needs to be called.

We then do some more reflection gymnastics to ensure that the parameters that are passed to the method are of the correct type. When it deserialises the parameters, the converter will make a best guess on the types of the parameters. If a parameter is not of the correct type, it uses `Convert.ChangeType` to convert the parameter to the correct type. The canonical example of this is converting a `double` to a `decimal`.

Now it is ready to call the method. Because it's likely that these will be `async` methods, we expect them to return a `Task`. It's possible there may be a value returned as well, and if there is we unwrap it and return it.

## How do we use the `MethodCallInvoker`?

Let's do an end to end demonstration of how to serialise a method call, deserialise it and execute it. Here's how you can do it:

```cs
MethodCall methodCall = new (
    ServiceName: typeof(IOurService).FullName ?? throw new InvalidOperationException("Service name cannot be null"),
    MethodName: nameof(IOurService.DoAThing),
    Parameters: [ "the name", 100m, true]
);
string json = Newtonsoft.Json.JsonConvert.SerializeObject(methodCall);
MethodCall deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<MethodCall>(json) ?? throw new Exception("Problem deserializing");
object? result = await new MethodCallInvoker(_serviceProvider, deserialized).InvokeAsync();
```

The above code serialises the `MethodCall` to a JSON string, deserialises it back to a `MethodCall`, and then uses the `MethodCallInvoker` to execute the method.

Why are we using `Newtonsoft.Json` for our serialisation / deserialisation? We don't have to, but let's say we're persisting this method call to a Cosmos DB, Cosmos uses JSON.NET for JSON handling. Otherwise I'd likely use `System.Text.Json`.

## Conclusion

In this post, we've looked at how we can serialise a method call (which could be stored in a database), and then later rehydrate and execute it. We've seen how we can use reflection to get the service and method that we need to call, and how we can convert the parameters to the correct type.
