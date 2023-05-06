import { describe, expect, test } from '@jest/globals';

import { redirect } from './redirect';
import { Logger } from '@azure/functions';

describe('redirect', () => {
  test('blog.johnnyreilly.com should be redirected to johnnyreilly.com', () => {
    const mockLogger: jest.Mock<Logger> = jest.fn();

    expect(
      redirect(
        'https://blog.johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html',
        mockLogger as unknown as Logger
      )
    ).toEqual({
      status: 301,
      location:
        'https://johnnyreilly.com/simple-fading-in-and-out-using-css-transitions',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://blog.johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://blog.johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html to https://johnnyreilly.com/simple-fading-in-and-out-using-css-transitions'
    );
  });

  test('blog.johnnyreilly.com should be redirected to matches where possible', () => {
    const mockLogger = jest.fn();

    expect(
      redirect(
        'https://blog.johnnyreilly.com/2021/01/30/aspnet-serilog-and-application-insights',
        mockLogger as unknown as Logger
      )
    ).toEqual({
      status: 301,
      location:
        'https://johnnyreilly.com/aspnet-serilog-and-application-insights',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://blog.johnnyreilly.com/2021/01/30/aspnet-serilog-and-application-insights'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://blog.johnnyreilly.com/2021/01/30/aspnet-serilog-and-application-insights to https://johnnyreilly.com/aspnet-serilog-and-application-insights'
    );
  });

  test('redirects should be matched', () => {
    const mockLogger: jest.Mock<Logger> = jest.fn();

    expect(
      redirect(
        'https://johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html',
        mockLogger as unknown as Logger
      )
    ).toEqual({
      status: 301,
      location:
        'https://johnnyreilly.com/simple-fading-in-and-out-using-css-transitions',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/2013/12/simple-fading-in-and-out-using-css-transitions.html to https://johnnyreilly.com/simple-fading-in-and-out-using-css-transitions'
    );
  });

  test('blogger RSS redirects should be handled', () => {
    const mockLogger: jest.Mock<Logger> = jest.fn();

    expect(
      redirect(
        'https://johnnyreilly.com/feeds/posts/default?alt=rss',
        mockLogger as unknown as Logger
      )
    ).toEqual({
      status: 301,
      location: 'https://johnnyreilly.com/rss.xml',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/feeds/posts/default?alt=rss'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/feeds/posts/default?alt=rss to https://johnnyreilly.com/rss.xml'
    );
  });

  test('blogger Atom redirects should be handled', () => {
    const mockLogger: jest.Mock<Logger> = jest.fn();

    expect(
      redirect(
        'https://johnnyreilly.com/feeds/posts/default',
        mockLogger as unknown as Logger
      )
    ).toEqual({
      status: 301,
      location: 'https://johnnyreilly.com/atom.xml',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/feeds/posts/default'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/feeds/posts/default to https://johnnyreilly.com/atom.xml'
    );
  });

  test('blogger search redirects should be handled', () => {
    const mockLogger: jest.Mock<Logger> = jest.fn();

    expect(
      redirect(
        'https://johnnyreilly.com/search/label/uglifyjs',
        mockLogger as unknown as Logger
      )
    ).toEqual({
      status: 301,
      location: 'https://johnnyreilly.com/search?q=uglifyjs',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/search/label/uglifyjs'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/search/label/uglifyjs to https://johnnyreilly.com/search?q=uglifyjs'
    );
  });

  test('blogger archive year/month redirects should be handled', () => {
    const mockLogger: jest.Mock<Logger> = jest.fn();

    expect(
      redirect(
        'https://johnnyreilly.com/2020/12/',
        mockLogger as unknown as Logger
      )
    ).toEqual({
      status: 301,
      location: 'https://johnnyreilly.com/archive',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/2020/12/'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/2020/12/ to https://johnnyreilly.com/archive'
    );
  });

  test('blogger archive year redirects should be handled', () => {
    const mockLogger: jest.Mock<Logger> = jest.fn();

    expect(
      redirect(
        'https://johnnyreilly.com/2020/',
        mockLogger as unknown as Logger
      )
    ).toEqual({
      status: 301,
      location: 'https://johnnyreilly.com/archive',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/2020/'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/2020/ to https://johnnyreilly.com/archive'
    );
  });

  test('webp images that used to be png / jpg etc should be redirected where possible', () => {
    const mockLogger: jest.Mock<Logger> = jest.fn();

    expect(
      redirect(
        'https://johnnyreilly.com/assets/images/robski-dynamic-auth-9ac401590462e2bece9156353b92d187.png',
        mockLogger as unknown as Logger
      )
    ).toEqual({
      status: 301,
      location:
        'https://johnnyreilly.com/assets/images/robski-dynamic-auth-b50b7efd118b1c8ed1297a010749e0f4.webp',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/assets/images/robski-dynamic-auth-9ac401590462e2bece9156353b92d187.png'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/assets/images/robski-dynamic-auth-9ac401590462e2bece9156353b92d187.png to https://johnnyreilly.com/assets/images/robski-dynamic-auth-b50b7efd118b1c8ed1297a010749e0f4.webp'
    );
  });

  test('empty originalUrls should redirect to /404', () => {
    const mockLogger: jest.Mock<Logger> = jest.fn();

    expect(redirect('', mockLogger as unknown as Logger)).toEqual({
      status: 302,
      location: 'https://johnnyreilly.com/404',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'Redirecting  to https://johnnyreilly.com/404 as no explicit redirect exists'
    );
  });

  test('no explicit redirect should redirect to 404 with path in query', () => {
    const mockLogger: jest.Mock<Logger> = jest.fn();

    expect(
      redirect(
        'https://johnnyreilly.com/robots.txt',
        mockLogger as unknown as Logger
      )
    ).toEqual({
      status: 302,
      location:
        'https://johnnyreilly.com/404?originalUrl=https%3A%2F%2Fjohnnyreilly.com%2Frobots.txt',
    });

    expect(mockLogger.mock.calls[0][0]).toBe(
      'x-ms-original-url: https://johnnyreilly.com/robots.txt'
    );
    expect(mockLogger.mock.calls[1][0]).toBe(
      'Redirecting https://johnnyreilly.com/robots.txt to https://johnnyreilly.com/404?originalUrl=https%3A%2F%2Fjohnnyreilly.com%2Frobots.txt as no explicit redirect exists'
    );
  });
});
