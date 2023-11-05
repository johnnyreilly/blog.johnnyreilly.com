---
slug: nullable-reference-types-csharp-strictnullchecks
title: "Nullable reference types; CSharp's very own strictNullChecks"
authors: johnnyreilly
tags: [c#]
hide_table_of_contents: false
description: 'C# introduces nullable reference types similar to TypeScripts `strictNullChecks`. Enabling raises warnings and solves null reference risks.'
---

'Tis the season to play with new compiler settings! I'm a very keen TypeScript user and have been merrily using [`strictNullChecks`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#--strictnullchecks) since it shipped. I was dimly aware that C# was also getting a similar feature by the name of [nullable reference types](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/nullable-reference-types).

<!--truncate-->

It's only now that I've got round to taking at look at this marvellous feature. I thought I'd share what moving to nullable reference types looked like for me; and what code changes I found myself making as a consequence.

## Turning on nullable reference types

To turn on nullable reference types in a C# project you should pop open the `.csproj` file and ensure it contains a `<Nullable>enable</Nullable>`. So if you had a .NET Core 3.1 codebase it might look like this:

```xml
<PropertyGroup>
    <TargetFramework>netcoreapp3.1</TargetFramework>
    <Nullable>enable</Nullable>
</PropertyGroup>
```

When you compile from this point forward, possible null reference types are reported as warnings. Consider this C#:

```cs
[ApiController]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;

    public UserController(ILogger<UserController> logger)
    {
        _logger = logger;
    }

    [AllowAnonymous]
    [HttpGet("UserName")]
    public string GetUserName()
    {
        if (User.Identity.IsAuthenticated) {
            _logger.LogInformation("{User} is getting their username", User.Identity.Name);
            return User.Identity.Name;
        }

        _logger.LogInformation("The user is not authenticated");
        return null;
    }
}
```

A `dotnet build` results in this:

```shell
dotnet build --configuration release

Microsoft (R) Build Engine version 16.7.1+52cd83677 for .NET
Copyright (C) Microsoft Corporation. All rights reserved.

  Determining projects to restore...
  Restored /Users/jreilly/code/app/src/server-app/Server/app.csproj (in 471 ms).
Controllers/UserController.cs(38,24): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]
Controllers/UserController.cs(42,20): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]
  app -> /Users/jreilly/code/app/src/server-app/Server/bin/release/netcoreapp3.1/app.dll
  app -> /Users/jreilly/code/app/src/server-app/Server/bin/release/netcoreapp3.1/app.Views.dll

Build succeeded.

Controllers/UserController.cs(38,24): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]
Controllers/UserController.cs(42,20): warning CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]
    2 Warning(s)
    0 Error(s)
```

You see the two `"Possible null reference return."` warnings? Bingo

## Fail the build with `WarningsAsErrors`

This is good - information is being surfaced up. But it's a warning. I could ignore it. I like compilers to get really up in my face and force me to make a change. I'm not into warnings; I'm into errors. Know what works for you. If you're similarly minded, you can upgrade nullable reference warnings to errors by tweaking the `.csproj` a touch further. Add yourself a `<WarningsAsErrors>nullable</WarningsAsErrors>` element. So maybe your `.csproj` now looks like this:

```xml
<PropertyGroup>
    <TargetFramework>netcoreapp3.1</TargetFramework>
    <Nullable>enable</Nullable>
    <WarningsAsErrors>nullable</WarningsAsErrors>
</PropertyGroup>
```

And a `dotnet build` will result in this:

```shell
dotnet build --configuration release

Microsoft (R) Build Engine version 16.7.1+52cd83677 for .NET
Copyright (C) Microsoft Corporation. All rights reserved.

  Determining projects to restore...
  Restored /Users/jreilly/code/app/src/server-app/Server/app.csproj (in 405 ms).
Controllers/UserController.cs(38,24): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]
Controllers/UserController.cs(42,20): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]

Build FAILED.

Controllers/UserController.cs(38,24): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]
Controllers/UserController.cs(42,20): error CS8603: Possible null reference return. [/Users/jreilly/code/app/src/server-app/Server/app.csproj]
    0 Warning(s)
    2 Error(s)
```

Yay! Errors!

## What do they mean?

"`Possible null reference return`" isn't the clearest of errors. What does that actually amount to? Well, it amounts to the compiler saying "you're a liar! (maybe)". Let's look again at the code where this error is reported:

```cs
[AllowAnonymous]
[HttpGet("UserName")]
public string GetUserName()
{
    if (User.Identity.IsAuthenticated) {
        _logger.LogInformation("{User} is getting their username", User.Identity.Name);
        return User.Identity.Name;
    }

    _logger.LogInformation("The user is not authenticated");
    return null;
}
```

We're getting that error reported where we're returning `null` and where we're returning `User.Identity.Name` which _may_ be `null`. And we're getting that because as far as the compiler is concerned `string` has changed. Before we turned on nullable reference types the compiler considered `string` to mean `string` _OR_`null`. Now, `string` means `string`.

This is the same sort of behaviour as TypeScripts `strictNullChecks`. With TypeScript, before you turn on `strictNullChecks`, as far as the compiler is concerned, `string` means `string`_OR_`null`_OR_`undefined` (JavaScript didn't feel one null-ish value was enough and so has two - don't ask). Once `strictNullChecks` is on, `string` means `string`.

It's a lot clearer. And that's why the compiler is getting antsy. The method signature is `string`, but it can see `null` potentially being returned. It doesn't like it. By and large that's good. We want the compiler to notice this as that's the entire point. We want to catch accidental `null`s before they hit a user. This is _great_! However, what do you do if have a method (as we do) that legitimately returns a `string` or `null`?

## Widening the type to include `null`

We change the signature from this:

```cs
public string GetUserName()
```

To this:

```cs
public string? GetUserName()
```

That's right, the simple addition of `?` marks a reference type (like a string) as potentially being `null`. Adding that means that we're potentially returning `null`, but we're sure about it; there's intention here - it's not accidental. Wonderful!
