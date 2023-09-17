---
slug: hello-world-bicep
title: 'Hello World Bicep'
authors: johnnyreilly
tags: [bicep, azure]
image: ./hello-world-bicep.webp
hide_table_of_contents: false
description: 'Bicep simplifies Azure Resource Management through concise syntax. The "Hello World" example highlights how Bicep outperforms ARM templates.'
---

Bicep makes Azure Resource Management a great deal simpler than ARM templates. The selling point here is grokkability. This post takes a look at the ["Hello World" example recently added to the Bicep repo](https://github.com/Azure/bicep/pull/2011) to appreciate quite what a difference it makes.

![hello world bicep](hello-world-bicep.webp)

<!--truncate-->

## More than configuration

The ["Hello World"](https://github.com/Azure/bicep/tree/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world) added to the Bicep repo by [Chris Lewis](https://github.com/ChristopherGLewis) illustrates the simplest usage of Bicep:

> This bicep file takes a `yourName` parameter and adds that to a `hello` variable and returns the concatenated string as an ARM output.

This is, when you consider it, the very essence of a computer program. Taking an input, doing some computation and providing an output. When I think about ARM templates, (and because Bicep is transpiled into ARM templates I mentally bracket the two together) I tend to think about resources being deployed. I focus on _configuration_, not _computation_

This is an imperfect mental model. ARM templates can do so much more than deploy by slinging strings and numbers. Thanks to the wealth of [template functions](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-functions) that exist they have much more power. They can do computation.

The Hello World example focuses just on computation.

## From terse to verbose

The Hello World example is made up of two significant files:

1. `main.bicep` - the bicep code
2. `main.json` - the ARM template compiled from the Bicep file

The [`main.bicep`](https://github.com/Azure/bicep/blob/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world/main.bicep) file amounts to 3 lines of code (I have omitted the comment line):

```bicep
param yourName string
var hello = 'Hello World! - Hi'

output helloWorld string = '${hello} ${yourName}'
```

- the first line takes the _input_ of `yourName`
- the second line declares a `hello` variable
- the third line _computes_ the new value of `helloWorld` based upon `hello` and `yourName`, then passes it as _output_

Gosh is it ever simple. It's easy to read and it's simple to understand. Even if you don't know Bicep, if you've experience in another language you can likely guess what's happening.

Let's compare this with the [`main.json`](https://github.com/Azure/bicep/blob/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world/main.json) that `main.bicep` is transpiled into:

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "metadata": {
    "_generator": {
      "name": "bicep",
      "version": "dev",
      "templateHash": "6989941473549654446"
    }
  },
  "parameters": {
    "yourName": {
      "type": "string"
    }
  },
  "functions": [],
  "variables": {
    "hello": "Hello World! - Hi"
  },
  "resources": [],
  "outputs": {
    "helloWorld": {
      "type": "string",
      "value": "[format('{0} {1}', variables('hello'), parameters('yourName'))]"
    }
  }
}
```

The above ARM template expresses exactly the same thing as the Bicep alternative. But that 3 lines of logic has become 27 lines of JSON. We've lost something in the transition. Intent is no longer clear. We've gone from something easy to reason about, to something that is hard to reason about. You need to think a lot less to write the Bicep alternative and that's a _good_ thing.

I was chatting to someone recently who expressed it well by saying:

> ARM is the format that the resource providers understand, so really it’s the Azure equivalent of Assembler – and I don’t know anyone who enjoys coding in Assembler.

This is a great example of the value that Bicep provides. If you'd like to play with the Hello World a little, why not [take it for a spin in the Bicep playground](https://aka.ms/bicepdemo#eJzT1w9OzC3ISVXISM3JyVcozy/KSeEqSCxKzFWozC8t8kvMTVUoLinKzEvnKkssgqqyVVD3ADPCQcoVFXQVPDLVubjyS0sKSksgasAyUJ0g9SrVYOFaBZVqmLm16gCvlitr).
