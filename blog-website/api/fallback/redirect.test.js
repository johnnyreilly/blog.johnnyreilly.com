const { describe, expect, test } = require('@jest/globals');

const redirect = require('./redirect');

describe('redirect', () => {
  test('blog.johnnyreilly.com should be redirected to johnnyreilly.com', () => {
    const mockLogger = jest.fn();

    expect(
      redirect(
        'https://blog.johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html',
        mockLogger
      )
    ).toEqual({
      status: 301,
      location:
        'https://johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://blog.johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://blog.johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html to https://johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html'
    );
  });

  test('redirects should be matched', () => {
    const mockLogger = jest.fn();

    expect(
      redirect(
        'https://johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html',
        mockLogger
      )
    ).toEqual({
      status: 301,
      location: '/simple-fading-in-and-out-using-css-transitions',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html to /simple-fading-in-and-out-using-css-transitions'
    );
  });

  test('blogger RSS redirects should be handled', () => {
    const mockLogger = jest.fn();

    expect(
      redirect(
        'https://johnnyreilly.com/feeds/posts/default?alt=rss',
        mockLogger
      )
    ).toEqual({
      status: 301,
      location: '/rss.xml',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/feeds/posts/default?alt=rss'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/feeds/posts/default?alt=rss to /rss.xml'
    );
  });

  test('blogger Atom redirects should be handled', () => {
    const mockLogger = jest.fn();

    expect(
      redirect('https://johnnyreilly.com/feeds/posts/default', mockLogger)
    ).toEqual({
      status: 301,
      location: '/atom.xml',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/feeds/posts/default'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/feeds/posts/default to /atom.xml'
    );
  });

  test('blogger search redirects should be handled', () => {
    const mockLogger = jest.fn();

    expect(
      redirect('https://johnnyreilly.com/search/label/uglifyjs', mockLogger)
    ).toEqual({
      status: 301,
      location: '/search?q=uglifyjs',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/search/label/uglifyjs'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/search/label/uglifyjs to /search?q=uglifyjs'
    );
  });

  test('blogger archive year/month redirects should be handled', () => {
    const mockLogger = jest.fn();

    expect(redirect('https://johnnyreilly.com/2020/12/', mockLogger)).toEqual({
      status: 301,
      location: '/archive',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/2020/12/'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/2020/12/ to /archive'
    );
  });

  test('blogger archive year redirects should be handled', () => {
    const mockLogger = jest.fn();

    expect(redirect('https://johnnyreilly.com/2020/', mockLogger)).toEqual({
      status: 301,
      location: '/archive',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/2020/'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/2020/ to /archive'
    );
  });

  test('webp images that used to be png / jpg etc should be redirected where possible', () => {
    const mockLogger = jest.fn();

    expect(
      redirect(
        'https://johnnyreilly.com/assets/images/robski-dynamic-auth-9ac401590462e2bece9156353b92d187.png',
        mockLogger
      )
    ).toEqual({
      status: 301,
      location:
        '/assets/images/robski-dynamic-auth-b50b7efd118b1c8ed1297a010749e0f4.webp',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/assets/images/robski-dynamic-auth-9ac401590462e2bece9156353b92d187.png'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/assets/images/robski-dynamic-auth-9ac401590462e2bece9156353b92d187.png to /assets/images/robski-dynamic-auth-b50b7efd118b1c8ed1297a010749e0f4.webp'
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

    expect(redirect('https://johnnyreilly.com/robots.txt', mockLogger)).toEqual(
      {
        status: 302,
        location:
          '/404?originalUrl=https%3A%2F%2Fjohnnyreilly.com%2Frobots.txt',
      }
    );

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/robots.txt'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/robots.txt to /404?originalUrl=https%3A%2F%2Fjohnnyreilly.com%2Frobots.txt as no explicit redirect exists'
    );
  });
});
