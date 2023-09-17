---
slug: using-reflection-to-identify-unwanted-dependencies
title: 'Using Reflection to Identify Unwanted Dependencies'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'Learn how to identify unwelcome dependencies in complex web apps by walking a dependency tree using reflection-based tests.'
---

I having a web app which is fairly complex. It's made up of services, controllers and all sorts of things. So far, so unremarkable. However, I needed to ensure that the controllers did not attempt to access the database via any of their dependencies. Or their dependencies, dependencies. Or their dependencies. You get my point.

<!--truncate-->

The why is not important here. What's significant is the idea of walking a dependency tree and identifying, via a reflection based test, when such unwelcome dependencies occur, and where.

When they do occur the test should fail, like this:

```sh
[xUnit.net 00:00:01.6766691]     My.Web.Tests.HousekeepingTests.My_Api_Controllers_do_not_depend_upon_the_database [FAIL]
[xUnit.net 00:00:01.6782295]       Expected dependsUponTheDatabase.Any() to be False because My.Api.Controllers.ThingyController depends upon the database through My.Data.Services.OohItsAService, but found True.
```

What follows is an example of how you can accomplish this. It is exceedingly far from the most beautiful code I've ever written. But it works. One reservation I have about it is that it doesn't use the Dependency Injection mechanism used at runtime (AutoFac). If I had more time I would amend the code to use that instead; it would become an easier test to read if I did. Also it would better get round the limitations of the code below. Essentially the approach relies on the assumption of there being 1 interface and 1 implementation. That's often not true in complex systems. But this is good enough to roll with for now.

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using FluentAssertions;
using My.Data;
using My.Web.Controllers;
using Xunit;

namespace My.Web.Tests {
    public class OiYouThereGetOutTests {
        [Fact]
        public void My_Controllers_do_not_depend_upon_the_database() {
            var myConcreteTypes = GetMyAssemblies()
                .SelectMany(assembly => assembly.GetTypes())
                .ToArray();

            var controllerTypes = typeof(My.Web.Startup).Assembly.GetTypes()
                .Where(myWebType =>
                    myWebType != typeof(Microsoft.AspNetCore.Mvc.Controller) &&
                    typeof(Microsoft.AspNetCore.Mvc.Controller).IsAssignableFrom(myWebType));

            foreach (var controllerType in controllerTypes) {
                var allTheTypes = GetDependentTypes(controllerType, myConcreteTypes);
                allTheTypes.Count.Should().BeGreaterThan(0);
                var dependsUponTheDatabase = allTheTypes.Where(keyValue => keyValue.Key == typeof(MyDbContext));
                dependsUponTheDatabase.Any().Should().Be(false, because: $"{controllerType} depends upon the database through {string.Join(", ", dependsUponTheDatabase.Select(dod => dod.Value))}");
            }
        }

        private static Dictionary<Type, Type> GetDependentTypes(Type type, Type[] typesToCheck, Dictionary<Type, Type> typesSoFar = null) {
            var types = typesSoFar ?? new Dictionary<Type, Type>();
            foreach (var constructor in type.GetConstructors().Where(ctor => ctor.IsPublic)) {
                foreach (var parameter in constructor.GetParameters()) {
                    if (parameter.ParameterType.IsInterface) {
                        if (parameter.ParameterType.IsGenericType) {
                            foreach (var genericType in parameter.ParameterType.GenericTypeArguments) {
                                AddIfMissing(types, genericType, type);
                            }
                        } else {
                            var typesImplementingInterface = TypesImplementingInterface(parameter.ParameterType, typesToCheck);
                            foreach (var typeImplementingInterface in typesImplementingInterface) {
                                AddIfMissing(types, typeImplementingInterface, type);
                                AddIfMissing(types, GetDependentTypes(typeImplementingInterface, typesToCheck, types).Keys.ToList(), type);
                            }
                        }
                    } else {
                        AddIfMissing(types, parameter.ParameterType, type);
                        AddIfMissing(types, GetDependentTypes(parameter.ParameterType, typesToCheck, types).Keys.ToList(), type);
                    }
                }
            }
            return types;
        }

        private static void AddIfMissing(Dictionary<Type, Type> types, Type typeToAdd, Type parentType) {
            if (!types.Keys.Contains(typeToAdd))
                types.Add(typeToAdd, parentType);
        }

        private static void AddIfMissing(Dictionary<Type, Type> types, IList<Type> typesToAdd, Type parentType) {
            foreach (var typeToAdd in typesToAdd) {
                AddIfMissing(types, typeToAdd, parentType);
            }
        }

        private static Type[] TypesImplementingInterface(Type interfaceType, Type[] typesToCheck) =>
            typesToCheck.Where(type => !type.IsInterface && interfaceType.IsAssignableFrom(type)).ToArray();

        private static bool IsRealClass(Type testType) =>
            testType.IsAbstract == false &&
            testType.IsGenericType == false &&
            testType.IsGenericTypeDefinition == false &&
            testType.IsInterface == false;

        private static Assembly[] GetMyAssemblies() =>
            AppDomain
            .CurrentDomain
            .GetAssemblies()
            // Not strictly necessary but it reduces the amount of types returned
            .Where(assembly => assembly.GetName().Name.StartsWith("My"))
            .ToArray();
    }
}
```
