const { describe, expect, test } = require('@jest/globals');

const redirect = require('./redirect');

describe('redirect', () => {
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
  });

  test('blogger Atom redirects should be handled', () => {
    const mockLogger = jest.fn();

    expect(
      redirect('https://blog.johnnyreilly.com/feeds/posts/default', mockLogger)
    ).toEqual({
      status: 301,
      location: '/atom.xml',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://blog.johnnyreilly.com/feeds/posts/default'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://blog.johnnyreilly.com/feeds/posts/default to /atom.xml'
    );
  });

  test('blogger search redirects should be handled', () => {
    const mockLogger = jest.fn();

    expect(
      redirect(
        'https://blog.johnnyreilly.com/search/label/uglifyjs',
        mockLogger
      )
    ).toEqual({
      status: 301,
      location: '/search?q=uglifyjs',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://blog.johnnyreilly.com/search/label/uglifyjs'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://blog.johnnyreilly.com/search/label/uglifyjs to /search?q=uglifyjs'
    );
  });

  test('empty originalUrls should redirect to /404', () => {
    const mockLogger = jest.fn();

    expect(redirect('', mockLogger)).toEqual({
      status: 302,
      location: '/404',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'Redirecting  to /404 as no explicit redirect exists'
    );
  });

  test('no explicit redirect should redirect to 404 with path in query', () => {
    const mockLogger = jest.fn();

    expect(
      redirect('https://blog.johnnyreilly.com/robots.txt', mockLogger)
    ).toEqual({
      status: 302,
      location:
        '/404?originalUrl=https%3A%2F%2Fblog.johnnyreilly.com%2Frobots.txt',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://blog.johnnyreilly.com/robots.txt'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://blog.johnnyreilly.com/robots.txt to /404?originalUrl=https%3A%2F%2Fblog.johnnyreilly.com%2Frobots.txt as no explicit redirect exists'
    );
  });
});
