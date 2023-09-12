---
slug: atom-recovering-from-corrupted-packages
title: 'Atom - Recovering from Corrupted Packages'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'Atom packages corrupt? Locate `.apm` folder at `[Your name]/.atom`, then delete. On reopening Atom, packages will be restored.'
---

Every now and then when I try and update my packages in [Atom](https://atom.io/) I find this glaring back at me:

![](Screenshot-2016-03-17-06.17.03.webp)

<!--truncate-->

Ug. The problem is that my atom packages have become corrupt. Quite how I couldn't say. But that's the problem. Atom, as I know from bitter experience, will not recover from this. It just sits there feeling sorry for itself. However, getting back to where you belong is simpler than you imagine:

1. Shutdown Atom
2. In the file system go to `[Your name]/.atom` (and bear in mind this is Windows; Macs / Linux may be different)

![](Screenshot-2016-03-17-06.17.53.webp)

3. You'll see an `.apm` folder that contains all your packages. Delete this.

When you next fire up Atom these packages will automagically come back but this time they shouldn't be corrupt. Instead you should see the happiness of normality restored:

![](Screenshot-2016-03-17-06.23.18.webp)
