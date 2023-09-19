---
slug: instant-stubs-with-jsonnet
title: 'Instant Stubs with JSON.Net (just add hot water)'
authors: johnnyreilly
tags: [automated testing, asp.net]
hide_table_of_contents: false
description: 'A utility class can create stubs to test an untested system with complex I/O. Serializing complex data to JSON files eases the process.'
---

I'd like you to close your eyes and imagine a scenario. You're handed a prototype system. You're told it works. It has no documentation. It has 0 unit tests. The hope is that you can take it on, refactor it, make it better and (crucially) not break it. Oh, and you don't really understand what the code does or why it does it either; information on that front is, alas, sorely lacking.

<!--truncate-->

This has happened to me; it's alas not that unusual. The common advice handed out in this situation is: "add unit tests before you change it". That's good advice. We need to take the implementation that embodies the correctness of the system and create unit tests that set that implementation in stone. However, what say the system that you're hoping to add tests to takes a number of large and complex inputs from some external source and produces a similarly large and complex output?

You could start with integration tests. They're good but slow and crucially they depend upon the external inputs being available and unchanged (which is perhaps unlikely). What you could do (what I have done) is debug a working working system. At each point that an input is obtained I have painstakingly transcribed the data which allows me to subsequently hand code stub data. There comes a point when this is plainly untenable; it's just too much data to transcribe. At this point the temptation is to think "it's okay; I can live without the tests. I'll just be super careful with my refactoring... It'll be fine It'll be fine It'll be fine It'll be fine".

Actually, it probably won't be fine. And even if it is (miracles do happen) you're going to be fairly stressed as you wonder if you've been careful enough. What if there was another way? A way that wasn't quite so hard but that allowed you to add tests without requiring 3 months hand coding....

## Instant Stubs

What I've come up with is a super simple utility class for creating stubs / fakes. (I'm aware the naming of such things [can be a little contentious](http://martinfowler.com/articles/mocksArentStubs.html).)

```cs
using Newtonsoft.Json;
using System;
using System.IO;

namespace MakeFakeData.UnitTests
{
  public static class Stubs
  {
    private static JsonSerializer _serializer = new JsonSerializer { NullValueHandling = NullValueHandling.Ignore };

    public static void Make<T>(string stubPath, T data)
    {
      try
      {
        if (string.IsNullOrEmpty(stubPath))
          throw new ArgumentNullException(nameof(stubPath));
        if (data == null)
          throw new ArgumentNullException(nameof(data));

        using (var sw = new StreamWriter(stubPath))
        using (var writer = new JsonTextWriter(sw) {
            Formatting = Formatting.Indented,
            IndentChar = ' ',
            Indentation = 2})
        {
          _serializer.Serialize(writer, data);
        }
      }
      catch (Exception exc)
      {
        throw new Exception($"Failed to make {stubPath}", exc);
      }
    }

    public static T Load<T>(string stubPath)
    {
      try
      {
        if (string.IsNullOrEmpty(stubPath))
          throw new ArgumentNullException(nameof(stubPath));

        using (var file = File.OpenText(stubPath))
        using (var reader = new JsonTextReader(file))
        {
          return _serializer.Deserialize<T>(reader);
        }
      }
      catch (Exception exc)
      {
        throw new Exception($"Failed to load {stubPath}", exc);
      }
    }
  }
}
```

As you can see this class uses [JSON.Net](http://www.newtonsoft.com/json) and exposes 2 methods:

<dl><dt>Make</dt><dd>Takes a given piece of data and uses JSON.Net to serialise it as JSON to a file. (nb I choose to format the JSON for readability and exclude null values; both totally optional)</dd><dt>Load</dt><dd>Takes the given path and loads the associated JSON file and deserialises it back into an object.</dd></dl>

The idea is this: we take our working implementation and, wherever it extracts data from an external source, we insert a temporary statement like this:

```cs
var data = _dataService.GetComplexData();

    // Just inserted so we can generate the stub data...
    Stubs.Make($"{System.AppDomain.CurrentDomain.BaseDirectory}\\data.json", data);
```

The next time you run the implementation you'll find the app generates a `data.json` file containing the complex data serialized to JSON. Strip out your `Stubs.Make` statements from the implementation and we're ready for the next stage.

## Using your JSON

What you need to do now is to take the new and shiny `data.json` file and move it to your unit test project. It needs to be included within the unit test project. Also, for each JSON file you have, the `Build Action` in VS needs to be set to `Content` and the `Copy to Output Directory` to `Copy if newer`.

Then within your unit tests you can write code like this:

```ts
var dummyData = Stubs.Load<ComplexDataType>('Stubs/data.json');
```

Which pulls in your data from the JSON file and deserialises it into the original types. With this in hand you can plug together a unit test based on an existing implementation which depends on external data much faster than the hand-cranked method of old.

Finally, before the wildebeest of TDD descend upon me howling and wailing, let me say again; I anticipate this being useful when you're trying to add tests to something that already exists but is untested. Clearly it would be better not to be in this situaion in the first place.
