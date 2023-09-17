---
slug: rendering-partial-view-to-string
title: 'Rendering Partial View to a String'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'John solves a problem with Partial Views in ASP.NET MVC, allowing simplified code and multiple view nesting.'
---

## Well done that man!

<!--truncate-->

Every now and then I'm thinking to myself "_wouldn't it be nice if you could do x..._" And then I discover that someone else has thought the self same thoughts and better yet they have the answer! I had this situation recently and discovered the wonderful Kevin Craft had been there, done that and made the T-shirt. Here's his blog: [http://craftycodeblog.com/2010/05/15/asp-net-mvc-render-partial-view-to-string/](http://craftycodeblog.com/2010/05/15/asp-net-mvc-render-partial-view-to-string/) I wanted to talk about how this simple post provided me with an elegant solution to something I've found niggling and unsatisfactory for a while now... ## How it helped

Just last week I was thinking about `Partial Views`. Some background. I'm working on an ASP.NET MVC 3 project which provides users with a nice web interface to manage the workflow surrounding certain types of financial asset. The user is presented with a web page which shows a kind of grid to the user. As the user hovers over a row they are presented with a context menu which allows them to perform certain workflow actions. If they perform an action then that row will need to be updated to reflect this. Back in the day this would have been achieved by doing a full postback to the server. At the server the action would be taken, the persistent storage updated and then the whole page would be served up to the user again with the relevant row of HTML updated but everything else staying as is. Now there's nothing wrong with this approach as such. I mean it works just fine. But in my case since I knew that it was only that single row of HTML that was going to be updated and so I was loath to re-render the whole page. It seemed a waste to get so much data back from the server when only a marginal amount was due to change. And also I didn't want the user to experience the screen refresh flash. Looks ugly. Now in the past when I've had a solution to this problem which from a UI perspective is good but from a development perspective slightly unsatisfactory. I would have my page call a controller method (via `jQuery.ajax`) to perform the action. This controller would return a `JsonResult` indicating success or failure and any data necessary to update the screen. Then in the `success` function I would manually update the HTML on the screen using the data provided. Now this solution works but there's a problem. [Can you tell what it is yet?](http://en.wikipedia.org/wiki/Rolf_Harris) It's not very DRY. I'm repeating myself. When the page is initially rendered I have a `View` which renders (in this example) all the relevant HTML for the screen \*including\* the HTML for my rows of data. And likewise I have my JavaScript method for updating the screen too. So with this solution I have duplicated my GUI logic. If I update 1, I need to update the other. It's not a massive hardship but it is, as I say, unsatisfactory. I was recently thinking that it would be nice if I could refactor my row HTML into a `Partial View` which I could then use in 2 places: 1. In my standard `View` as I iterated through each element for display and 2. Nested inside a `JsonResult`...

The wonderful thing about approach 2 is that it allows me to massively simplify my `success` to this:

```js
$('myRowSelector').empty().html(data.RowHTML); //Where RowHTML is the property that
//contains my stringified PartialView
```

and if I later make changes to the `Partial View` these changes will not require me to make any changes to my JavaScript at all. Brilliant! And entirely satisfactory. On the grounds that someone else might have had the same idea I did a little googling around. Sure enough I discovered [Kevin Craft's post](http://craftycodeblog.com/2010/05/15/asp-net-mvc-render-partial-view-to-string/) which was just the ticket. It does exactly what I'd hoped. Besides being a nice and DRY solution this approach has a number of other advantages as well: - Given it's a `Partial View` the Visual Studio IDE provides a nice experience when coding it up with regards to intellisense / highlighting etc. Not something available when you're hand coding up a string which contains the HTML you'd like passed back...

- A wonderful debug experience. You can debug the rendering of a `Partial View` being rendered to a string in the same way as if the ASP.NET MVC framework was serving it up. I could have lived without this but it's fantastic to have it available.
- It's possible to nest \***multiple**\* `Partial Views` within your `JsonResult`. THIS IS WONDERFUL!!! This means that if several parts of your screen need to be updated (perhaps the row and a status panel as well) then as long as both are refactored into a `Partial View` you can generate them on the fly and pass them back.

Excellent stuff!

```

```
