---
slug: snapshot-testing-for-c
title: 'Snapshot Testing for C#'
authors: johnnyreilly
tags: [c#, automated testing]
hide_table_of_contents: false
description: 'Snapshot testing is an efficient test technique for comparing outputs with JSON. Its applicable to C# too, using Fluent Assertions and a helper tool.'
---

If you're a user of Jest, you've no doubt heard of and perhaps made use of [snapshot testing](https://jestjs.io/docs/en/snapshot-testing).

<!--truncate-->

Snapshot testing is an awesome tool that is generally discussed in the context of JavaScript React UI testing. But snapshot testing has a wider application than that. Essentially it is profoundly useful where you have functions which produce a complex structured output. It could be a React UI, it could be a list of FX prices. The type of data is immaterial; it's the amount of it that's key.

Typically there's a direct correlation between the size and complexity of the output of a method and the length of the tests that will be written for it. Let's say you're outputting a class that contains 20 properties. Congratulations! You get to write 20 assertions in one form or another for each test case. Or a single assertion whereby you supply the expected output by hand specifying each of the 20 properties. Either way, that's not going to be fun. And just imagine the time it would take to update multiple test cases if you wanted to change the behaviour of the method in question. Ouchy.

Time is money kid. What you need is snapshot testing. Say goodbye to handcrafted assertions and hello to JSON serialised output checked into source control. Let's unpack that a little bit. The usefulness of snapshot testing that I want in C# is predominantly about removing the need to write and maintain multiple assertions. Instead you write tests that compare the output of a call to your method with JSON serialised output you've generated on a previous occasion.

This approach takes less time to write, less time to maintain and the solid readability of JSON makes it more likely you'll pick up on bugs. It's so much easier to scan JSON than it is a list of assertions.

## Putting the Snapshot into C#

Now if you're writing tests in JavaScript or TypeScript then Jest already has your back with CLI snapshot generation and `shouldMatchSnapshot`. However getting to nearly the same place in C# is delightfully easy. What are we going to need?

First up, a serializer which can take your big bad data structures and render them as JSON. Also we'll use it to rehydrate our data structure into an object ready for comparison. We're going to use [Json.NET](https://www.newtonsoft.com/json).

Next up we need a way to compare our outputs with our rehydrated snapshots - we need a C# `shouldMatchSnapshot`. There's many choices out there, but for my money [Fluent Assertions](https://fluentassertions.com) is king of the hill.

Finally we're going to need Snapshot, a little helper utility I put together:

```cs
using System;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Test.Utilities {
    public static class Snapshot {
        private static readonly JsonSerializer StubSerializer = new JsonSerializer {
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
            NullValueHandling = NullValueHandling.Ignore
        };

        private static JsonTextWriter MakeJsonTextWriter(TextWriter sw) => new JsonTextWriter(sw) {
            Formatting = Formatting.Indented,
            IndentChar = ' ',
            Indentation = 2
        };

        /// <summary>
        /// Make yourself some JSON! Usage looks like this:
        /// Stubs.Make($"{System.AppDomain.CurrentDomain.BaseDirectory}..\\..\\..\\data.json", myData);
        /// </summary>
        public static void Make<T>(string stubPath, T data) {
            try {
                if (string.IsNullOrEmpty(stubPath))
                    throw new ArgumentNullException(nameof(stubPath));
                if (data == null)
                    throw new ArgumentNullException(nameof(data));

                using(var sw = new StreamWriter(stubPath))
                using(var writer = MakeJsonTextWriter(sw)) {
                    StubSerializer.Serialize(writer, data);
                }
            } catch (Exception exc) {
                throw new Exception($"Failed to make {stubPath}", exc);
            }
        }

        public static string Serialize<T>(T data) {
            using (var sw = new StringWriter())
            using(var writer = MakeJsonTextWriter(sw)) {
                StubSerializer.Serialize(writer, data);
                return sw.ToString();
            }
        }

        public static string Load(string filename) {
            var content = new StreamReader(
                File.OpenRead(filename)
            ).ReadToEnd();

            return content;
        }
    }
}
```

Let's look at the methods: `Make` and `Load`. Make is what we're going to use to create our snapshots. Load is what we're going to use to, uh, load our snapshots.

What does usage look like? Great question. Let's go through the process of writing a C# snapshot test.

## Taking Snapshot for a Spin

First of all, we're going to need a method to test that outputs a data structure which is more than just a scalar value. Let's use this:

```cs
public class Leopard {
    public string Name { get; set; }
    public int Spots { get; set; }
}

public class LeopardService {
    public Leopard[] GetTheLeopards() {
        return new Leopard[] {
            new Leopard { Spots = 42, Name = "Nimoy" },
            new Leopard { Spots = 900, Name = "Dotty" }
        };
    }
}
```

Yes - our trusty `LeopardService`. As you can see, the `GetTheLeopards` method returns an array of `Leopard`s. For now, let's write a test using `Snapshot`: (ours is an XUnit test; but `Snapshot` is agnostic of this)

```cs
[Fact]
public void GetTheLeopards_should_return_expected_Leopards() {
    // Arrange
    var leopardService = new LeopardService();

    // Act
    var leopards = leopardService.GetTheLeopards();

    // UNCOMMENT THE LINE BELOW *ONLY* WHEN YOU WANT TO GENERATE THE SNAPSHOT
    Snapshot.Make($"{System.AppDomain.CurrentDomain.BaseDirectory}..\\..\\..\\Snapshots\\leopardsSnapshot.json", leopards);

    // Assert
    var snapshotLeopards = JsonConvert.DeserializeObject<leopard[]>(Snapshot.Load("Snapshots/leopardsSnapshot.json"));
    snapshotLeopards.Should().BeEquivalentTo(leopards);
}
</leopard[]>
```

Before we run this for the first time we need to setup our testing project to be ready for snapshots. First of all we add a `Snapshot` folder to the test project. The we also add the following to the `.csproj`:

```xml
<ItemGroup>
    <Content Include="Snapshots\**">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
    </Content>
  </ItemGroup>
```

This includes the snapshots in the compile output for when tests are being run.

Now let's run the test. It will generate a `leopardsSnapshot.json` file:

```json
[
  {
    "name": "Nimoy",
    "spots": 42
  },
  {
    "name": "Dotty",
    "spots": 900
  }
]
```

With our snapshot in place, we comment out the `Snapshot.Make...` line and we have a passing test. Let's commit our code, push and go about our business.

## Time Passes...

Someone decides that the implementation of `GetTheLeopards` needs to change. Defying expectations it seems that Dotty the leopard should now have 90 spots. I know... Business requirements, right?

If we make that change we'd ideally expect our trusty test to fail. Let's see what happens:

```
----- Test Execution Summary -----

Leopard.Tests.Services.LeopardServiceTests.GetTheLeopards_should_return_expected_Leopards:
    Outcome: Failed
    Error Message:
    Expected item[1].Spots to be 90, but found 900.
```

Boom! We are protected!

Since this is a change we're completely happy with we want to update our `leopardsSnapshot.json` file. We could make our test pass by manually updating the JSON. That'd be fine. But why work when you don't have to? Let's uncomment our `Snapshot.Make...` line and run the test the once.

```json
[
  {
    "name": "Nimoy",
    "spots": 42
  },
  {
    "name": "Dotty",
    "spots": 90
  }
]
```

That's right, we have an updated snapshot! Minimal effort.

## Next Steps

This is a basic approach to getting the goodness of snapshot testing in C#. It could be refined further. To my mind the uncommenting / commenting of code is not the most elegant way to approach this and so there's some work that could be done around this area.

Happy snapshotting!
