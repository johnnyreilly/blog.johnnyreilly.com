---
title: "Back to the Future with Code First Migrations"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://blog.johnnyreilly.com/img/profile.jpg
tags: [Emmett Brown, Entity Framework, Code First Migrations]
hide_table_of_contents: false
---
Code First Migrations. They look a little like this in Visual Studio:

 ![](../static/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations/Migrations.png)

The thing I want you to notice about the image above is not the pithily named migrations. It isn't the natty opacity on everything but the migration files (which I can assure you took me to the very limits of my [GIMP](<http://www.gimp.org/>) expertise). No, whilst exciting in themselves what I want you to think about is *the order in which migrations are applied*. Essentially how the `__MigrationHistory` table in SQL Server ends up being populated in this manner:

![](../static/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations/MigrationHistory.png)

Because, myself, I didn't really think about this until it came time for me to try and change the ordering of some migrations manually. Do you know how migrations end up the order they do? I bet you don't. But either way, let's watch and see what happens to the pre-enlightenment me as I attempt to take a migration which appears *before* a migration I have created locally and move it to *after* that same migration.

## Great Scott! It's clearly filename driven

That's right - it's blindingly obvious to me. All I need do is take the migration I want to move forwards in time and rename it in Visual Studio. So take our old migration ("2014 is so passé darling"):

![](../static/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations/Screenshot%2B2015-06-19%2B13.07.50.png)

And rename it to make it new and shiny ("2015! Gorgeous - I love it sweetie!"):

![](../static/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations/Screenshot%2B2015-06-19%2B13.08.46.png)

Perfection right? Wrong! What you've done makes not the slightest jot of difference.

## Whoa, this is heavy! Gimme the project file

How could I be so dim? I mean it makes perfect sense - before the days of [TypeScript's tsconfig.json ](<http://blog.icanmakethiswork.io/2015/02/hey-tsconfigjson-where-have-you-been.html>) the default ordering of `*.ts` files being passed to the TypeScript compiler was determined by the ordering of the `*.ts` files in the `.csproj` file. It must be the same for Code First Migrations.

So, simply spin up [Notepad++](<https://notepad-plus-plus.org/>) and let's play hack the XML until each file is referenced in the required order.

Well, I'm glad we sorted that out. A quick test to reassure myself of my astuteness. Drum roll.... Fail!! Things are just as they were. Shame on you John Reilly, shame on you.

## Designer.cs... Your kids are gonna love it

![](../static/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations/Screenshot%2B2015-06-19%2B13.35.40.png)

I want you to look very carefully at this and tell me what you see. We're looking at the mysterious `201508121401253_AddSagacityToSage.Designer.cs` file that sits underneath the main `201508121401253_AddSagacityToSage.cs` file. What could it be.... Give in?

The `IMigrationMetadata.Id` property is returning `<u>201408121401253</u>_AddSagacityToSage`. That is the *old* date! Remember? The passé one. If you change that property to line up with the file name change you're done. It works.

![](../static/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations/where-were-going.jpg)

Let's say it together: "Automatic Migrations? Where we're going, we don't need Automatic Migrations."


