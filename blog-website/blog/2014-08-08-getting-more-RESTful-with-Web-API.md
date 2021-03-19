---
title: "Getting more RESTful with Web API and IHttpActionResult"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://blog.johnnyreilly.com/img/profile.jpg
tags: [Web API 2, IHttpActionResult]
hide_table_of_contents: false
---
Up until, well yesterday really, I tended to have my Web API action methods all returning [200](<http://en.wikipedia.org/wiki/HTTP_200#2xx_Success>)'s no matter what. Successful request? 200 for you sir! Some validation error in the model? 200 for you too ma'am - but I'll wrap up the validation errors and send them back too. Database error? 200 and and an error message.

 It kind of looked like this (this example taken from a [previous post](<http://icanmakethiswork.blogspot.co.uk/2014/08/angularjs-meet-aspnet-server-validation.html>)):

```cs
public class SageController : ApiController
{
  // ...

  public IHttpActionResult Post(User sage)
  {
    if (!ModelState.IsValid) {

      return Ok(new {
        Success = false,
        Errors = ModelState.ToErrorDictionary()
      });
    }

    sage = _userService.Save(sage);

    return Ok(new {
      Success = true,
      Entity = sage
    });
  }

  // ...
}
```

Well I'm no RESTafarian but this felt a little... wrong. Like I wasn't fully embracing the web. I didn't want to have to include my own `Success` flag to indicate whether the request was good or not. I decided that I'd rather have it at least a little more webby. To that end, I decided I'd like to have 2xx success status codes for genuine success only and 4xx client error status codes for failures.

Lose the wrapper - embrace the web. This post is about doing just that.

## Web API 2 - Bad Job on on the BadRequest Helper

Web API 2 ships with a whole host of API helper methods. Things like `Ok` (which you can see me using above) and `BadRequest`. `BadRequest` was what I had in mind to use in place of `Ok` where I had some kind of error I wanted to report to the client like so:

```cs
public class SageController : ApiController
{
  // ...

  public IHttpActionResult Post(User sage)
  {
    if (!ModelState.IsValid) {

      return BadRequest(new  { 
        Errors = ModelState.ToErrorDictionary()
      });
    }

    sage = _userService.Save(sage);

    return Ok(new {
      Entity = sage
    });
  }

  // ...
}
```

Looks good right? No more need for my `Success` flag. Terser. Less code is better code. Unfortunately the built in `BadRequest` helper method doesn't have the flexibility of the `Ok` helper method - it doesn't allow you to send anything back you want. Fortunately this is easily remedied with a short extension method for `ApiController`:

```cs
using System.Net;
using System.Web.Http;
using System.Web.Http.Results;

namespace System.Web.Http
{
    public static class ControllerExtensions
    {
        public static IHttpActionResult BadRequest<T>(this ApiController controller, T obj)
        {
            return new NegotiatedContentResult<T>(HttpStatusCode.BadRequest, obj, controller);
        }
    }
}
```

With this in place I can then tweak my implementation to hook into the extension method:

```cs
public class SageController : ApiController
{
  // ...

  public IHttpActionResult Post(User sage)
  {
    if (!ModelState.IsValid) {
      // See how we have "this." before BadRequest so the Extension method is invoked
      return this.BadRequest(new  { 
        Errors = ModelState.ToErrorDictionary()
      });
    }

    sage = _userService.Save(sage);

    return Ok(new {
      Entity = sage
    });
  }

  // ...
}
```

And now we have have an endpoint that serves up 2xx status codes or 4xx status codes just as I'd hoped. Obviously this change in the way my action methods are returning will have implications for the consuming client (in my case an app built using AngularJS and $q). Essentially I can now use my `then` to handle the successes and my `catch` to handle the errors.


