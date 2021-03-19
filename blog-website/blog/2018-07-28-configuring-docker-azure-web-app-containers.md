---
title: "Docker and Configuration on Azure Web App for Containers: Whither Colons?"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://blog.johnnyreilly.com/img/profile.jpg
tags: []
hide_table_of_contents: false
---
App Services have long been a super simple way to spin up a web app in Azure. The barrier to entry is low, maintenance is easy. It just works. App Services recently got a turbo boost in the form of [Azure App Service on Linux](<https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro>). Being able to deploy to Linux is exciting enough; but the real reason this is notable because [you can deploy Docker images that will be run as app services](<https://docs.microsoft.com/en-us/azure/app-service/containers/tutorial-custom-docker-image>).

 I cannot over-emphasise just how easy this makes getting a Docker image into Production. Yay Azure!

## The Mystery of Configuration

Applications need configuration. ASP.Net Core applications are typically configured by an `appsettings.json` file which might look like so:

```json
{
      "Parent": {
        "ChildOne": "I'm a little teapot",
        "ChildTwo": "Short and stout"
      }
    }
```

With a classic App Service you could override a setting in the `appsettings.json` by updating "Application settings" within the Azure portal. You'd do this in the style of creating an Application setting called `Parent:ChildOne` or `Parent:ChildTwo`. To be clear: using colons to target a specific piece of config.

![](https://3.bp.blogspot.com/-LUlgZrW9Yc0/W1wg5AbUQNI/AAAAAAAALVU/NeLfdpy7MOI0tAOX6EN-JH3SKDBwbbflACPcBGAYYCw/s640/appservice_classic.png)

You can read about this approach [here](<https://blogs.msdn.microsoft.com/waws/2018/06/12/asp-net-core-settings-for-azure-app-service/>). Now there's something I want you to notice; consider the colons below:

![](https://2.bp.blogspot.com/-0YSRmySfNc4/W1whJuEieaI/AAAAAAAALVc/k1zloq14lzASVQL6HjHCk-zzDTD2a8LAwCLcBGAs/s640/appservice_colons_fine.png)

If you try and follow the same steps when you're using Web App for Containers / i.e. [a Docker image deployed to an Azure App Service on Linux ](<https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro>) you **cannot** use colons:

![](https://2.bp.blogspot.com/-hPNAcxRce0o/W1whYT9tINI/AAAAAAAALVg/YCCKzRE4E8opV5VZYmVFmSiOBLRWbep1ACLcBGAs/s640/appservice_container_colons_bad.png)

When you hover over the error you see this message: `This field can only contain letters, numbers (0-9), periods ("."), and underscores ("_")`. Using `.` does not work alas.

## What do I do?

So it turns out you just can't configure App Services on Linux.

Jokes!

No, of course you can and here I can help. After more experimentation than I'd like to admit I happened upon the answer. Here it is:

Where you use `:` on a classic App Service, you should use a `__` (double underscore) on an App Service with containers. So `Parent__ChildOne` instead of `Parent:ChildOne`. It's as simple as that.



## Why is it like this?

Honestly? No idea. I can't find any information on the matter. Let me know if you find out.


