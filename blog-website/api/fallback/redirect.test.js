const redirect = require('./redirect');

test('redirects should be matched', () => {
  const mockLogger = jest.fn();

  expect(
    redirect(
      'https://blog.johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html',
      mockLogger
    )
  ).toEqual({
    status: 301,
    location: '/2013/12/04/simple-fading-in-and-out-using-css-transitions',
  });

  expect(mockLogger.mock.calls[0][0]).toBe(
    'x-ms-original-url: https://blog.johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html'
  );
  expect(mockLogger.mock.calls[1][0]).toBe(
    'Redirecting https://blog.johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html to /2013/12/04/simple-fading-in-and-out-using-css-transitions'
  );
});

test('blogger RSS redirects should be handled', () => {
  const mockLogger = jest.fn();

  expect(
    redirect(
      'https://blog.johnnyreilly.com/feeds/posts/default?alt=rss',
      mockLogger
    )
  ).toEqual({
    status: 301,
    location: '/rss.xml',
  });

  expect(mockLogger.mock.calls[0][0]).toBe(
    'x-ms-original-url: https://blog.johnnyreilly.com/feeds/posts/default?alt=rss'
  );
  expect(mockLogger.mock.calls[1][0]).toBe(
    'Redirecting https://blog.johnnyreilly.com/feeds/posts/default?alt=rss to /rss.xml'
  );
  expect(1).toBe(2);
});

//https://blog.johnnyreilly.com/feeds/posts/default?alt=rss
