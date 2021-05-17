---
title: "Atom - Recovering from Corrupted Packages"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://blog.johnnyreilly.com/img/profile.jpg
tags: [apm, Atom, packages, corrupt]
hide_table_of_contents: false
---
Every now and then when I try and update my packages in [Atom](https://atom.io/) I find this glaring back at me:

 ![](../static/blog/2016-03-17-atom-recovering-from-corrupted-packages/Screenshot%2B2016-03-17%2B06.17.03.png)

Ug. The problem is that my atom packages have become corrupt. Quite how I couldn't say. But that's the problem. Atom, as I know from bitter experience, will not recover from this. It just sits there feeling sorry for itself. However, getting back to where you belong is simpler than you imagine:

1. Shutdown Atom
2. In the file system go to `[Your name]/.atom` (and bear in mind this is Windows; Macs / Linux may be different) ![](../static/blog/2016-03-17-atom-recovering-from-corrupted-packages/Screenshot%2B2016-03-17%2B06.17.53.png)


3. You'll see an `.apm` folder that contains all your packages. Delete this.



When you next fire up Atom these packages will automagically come back but this time they shouldn't be corrupt. Instead you should see the happiness of normality restored:

![](../static/blog/2016-03-17-atom-recovering-from-corrupted-packages/Screenshot%2B2016-03-17%2B06.23.18.png)


