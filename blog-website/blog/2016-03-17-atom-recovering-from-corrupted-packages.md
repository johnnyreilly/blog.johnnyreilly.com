---
title: "Atom - Recovering from Corrupted Packages"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: [apm, Atom, packages, corrupt]
hide_table_of_contents: false
---
Every now and then when I try and update my packages in [Atom](<https://atom.io/>) I find this glaring back at me:

 ![](https://4.bp.blogspot.com/-t69IWPvBvfw/VupxTQuJroI/AAAAAAAAA6c/LzSeSZ8axL0j6_vkjnYdMwlNhu5H4xdCw/s640/Screenshot%2B2016-03-17%2B06.17.03.png)

](<https://4.bp.blogspot.com/-t69IWPvBvfw/VupxTQuJroI/AAAAAAAAA6c/LzSeSZ8axL0j6_vkjnYdMwlNhu5H4xdCw/s1600/Screenshot%2B2016-03-17%2B06.17.03.png>)Ug. The problem is that my atom packages have become corrupt. Quite how I couldn't say. But that's the problem. Atom, as I know from bitter experience, will not recover from this. It just sits there feeling sorry for itself. However, getting back to where you belong is simpler than you imagine:

1. Shutdown Atom
2. In the file system go to `[Your name]/.atom` (and bear in mind this is Windows; Macs / Linux may be different) ![](https://3.bp.blogspot.com/--YVoZCafXII/VupysHGAoRI/AAAAAAAAA6o/xIYfPVYAk7QGlXlxBxxQn6JZh2KlUzHNg/s640/Screenshot%2B2016-03-17%2B06.17.53.png)

](<https://3.bp.blogspot.com/--YVoZCafXII/VupysHGAoRI/AAAAAAAAA6o/xIYfPVYAk7QGlXlxBxxQn6JZh2KlUzHNg/s1600/Screenshot%2B2016-03-17%2B06.17.53.png>)
3. You'll see an `.apm` folder that contains all your packages. Delete this.

<!-- -->

When you next fire up Atom these packages will automagically come back but this time they shouldn't be corrupt. Instead you should see the happiness of normality restored:

![](https://3.bp.blogspot.com/-jRAGtqbjKNQ/VupzSKpSd4I/AAAAAAAAA6w/xSi_VdF-_5UJD5nNkLZ8Z0ep6bHPXREnw/s640/Screenshot%2B2016-03-17%2B06.23.18.png)

](<https://3.bp.blogspot.com/-jRAGtqbjKNQ/VupzSKpSd4I/AAAAAAAAA6w/xSi_VdF-_5UJD5nNkLZ8Z0ep6bHPXREnw/s1600/Screenshot%2B2016-03-17%2B06.23.18.png>)
