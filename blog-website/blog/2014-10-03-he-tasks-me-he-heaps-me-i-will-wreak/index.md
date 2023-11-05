---
slug: he-tasks-me-he-heaps-me-i-will-wreak
title: 'He tasks me; he heaps me.... I will wreak that MOQ upon him.'
authors: johnnyreilly
tags: [automated testing]
hide_table_of_contents: false
description: 'Use Moq to simplify async testing, with ReturnAsync method. For testing a class that consumes async API, mock it using Task.Delay with Moqs Returns.'
---

Enough with the horrific misquotes - this is about Moq and async (that's my slight justification for robbing Herman Melville).

<!--truncate-->

It's pretty straightforward to use Moq to do async testing thanks to it's marvellous `ReturnsAsync` method. That means it's really easy to test a class that consumes an async API. Below is an example of a class that does just that: (it so happens that this class is a Web API controller but that's pretty irrelevant to be honest)

```cs
namespace Proverb.Web.Controllers
{
    // ISageService included inline for ease of explanation
    public interface ISageService
    {
        Task<int> DeleteAsync(int id);
    }

    public class SageController : ApiController
    {
        ISageService _sageService;

        public SageController(ISageService userService)
        {
            _sageService = userService;
        }

        public async Task<IHttpActionResult> Delete(int id)
        {
            int deleteCount = await _sageService.DeleteAsync(id);

            if (deleteCount == 0)
                return NotFound();
            else
                return Ok();
        }
   }
}
```

To mock the `_sageService.DeleteAsync` method it's as easy as this:

```cs
namespace Proverb.Web.Tests.ASPNet.Controllers
{
    [TestClass]
    public class SageControllerTests
    {
        private Mock<ISageService> _sageServiceMock;
        private SageController _controller;

        [TestInitialize]
        public void Initialise()
        {
            _sageServiceMock = new Mock<ISageService>();

            _controller = new SageController(_sageServiceMock.Object);
        }

        [TestMethod]
        public async Task Delete_returns_a_NotFound()
        {
            _sageServiceMock
                .Setup(x => x.DeleteAsync(_sage.Id))
                .ReturnsAsync(0); // This makes me *so* happy...

            IHttpActionResult result = await _controller.Delete(_sage.Id);

            var notFound = result as NotFoundResult;
            Assert.IsNotNull(notFound);
            _sageServiceMock.Verify(x => x.DeleteAsync(_sage.Id));
        }

        [TestMethod]
        public async Task Delete_returns_an_Ok()
        {
            _sageServiceMock
                .Setup(x => x.DeleteAsync(_sage.Id))
                .ReturnsAsync(1); // I'm still excited now!

            IHttpActionResult result = await _controller.Delete(_sage.Id);

            var ok = result as OkResult;
            Assert.IsNotNull(ok);
            _sageServiceMock.Verify(x => x.DeleteAsync(_sage.Id));
        }
    }
}
```

## But wait.... What if there's like... Nothing?

Nope, I'm not getting into metaphysics. Something more simple. What if the `async` API you're consuming returns just a `Task`? Not a `Task` of `int` but a simple old humble `Task`.

So to take our example we're going from this:

```cs
public interface ISageService
    {
        Task<int> DeleteAsync(int id);
    }
```

To this:

```ts
public interface ISageService
    {
        Task DeleteAsync(int id);
    }
```

Your initial thought might be "well that's okay, I'll just lop off the `ReturnsAsync` statements and I'm home free". That's what I thought anyway.... And I was \***WRONG**\*! A moments thought and you realise that there's still a return type - it's just `Task` now. What you want to do is something like this:

```cs
_sageServiceMock
                .Setup(x => x.DeleteAsync(_sage.Id))
                .ReturnsAsync(void); // This'll definitely work... Probably
```

No it won't - `void` is not a real type and much as you might like it to, this is not going to work.

So right now you're thinking, well Moq probably has my back - it'll have something like `ReturnsTask`, right? Wrong! It's intentional it turns out - there's a discussion on [GitHub about the issue](https://github.com/Moq/moq4/issues/117). And in that discussion there's just what we need. We can use `Task.Delay` or `Task.FromResult` alongside Moq's good old `Returns` method and we're home free!

## Here's one I made earlier...

```cs
namespace Proverb.Web.Controllers
{
    // ISageService again included inline for ease of explanation
    public interface ISageService
    {
        Task DeleteAsync(int id);
    }

    public class SageController : ApiController
    {
        ISageService _sageService;

        public SageController(ISageService userService)
        {
            _sageService = userService;
        }

        public async Task<IHttpActionResult> Delete(int id)
        {
            await _sageService.DeleteAsync(id);

            return Ok();
        }
   }
}
```

```cs
namespace Proverb.Web.Tests.ASPNet.Controllers
{
    [TestClass]
    public class SageControllerTests
    {
        private Mock<ISageService> _sageServiceMock;
        private SageController _controller;

        readonly Task TaskOfNowt = Task.Delay(0);
        // Or you could use this equally valid but slightly more verbose approach:
        //readonly Task TaskOfNowt = Task.FromResult<object>(null);

        [TestInitialize]
        public void Initialise()
        {
            _sageServiceMock = new Mock<ISageService>();

            _controller = new SageController(_sageServiceMock.Object);
        }

        [TestMethod]
        public async Task Delete_returns_an_Ok()
        {
            _sageServiceMock
                .Setup(x => x.DeleteAsync(_sage.Id))
                .Returns(TaskOfNowt); // Feels good doesn't it?

            IHttpActionResult result = await _controller.Delete(_sage.Id);

            var ok = result as OkResult;
            Assert.IsNotNull(ok);
            _sageServiceMock.Verify(x => x.DeleteAsync(_sage.Id));
        }
    }
}
```
