import type { InvocationContext } from '@azure/functions';

import { parseURL } from 'ufo';
import { imagePaths } from './imagePaths.js';
import { redirects } from './redirects.js';

const yearMonthRegex = /\/\d\d\d\d\/(\d\d\/)?/;
const baseUrl = 'https://johnnyreilly.com';

/**
 * Logic to handle redirects
 * @param originalUrl eg https://johnnyreilly.com/2019/06/typescript-webpack-you-down-with-pnp.html
 * @param log
 * @returns
 */
export function redirect(originalUrl: string, context: InvocationContext) {
  if (originalUrl) {
    // This URL has been proxied as there was no static file matching it.
    context.log(`x-ms-original-url: ${originalUrl}`);

    const parsedURL = parseURL(originalUrl);
    // parsedURL.pathname example: /2019/06/typescript-webpack-you-down-with-pnp.html

    const matchedRoute = redirects.find((route) =>
      parsedURL.pathname.includes(route.route),
    );

    if (matchedRoute) {
      return redirect301({
        context,
        originalUrl,
        redirectUrl: matchedRoute.redirect,
      });
    }

    if (parsedURL.pathname.startsWith('/feeds/posts/default')) {
      // cater for https://johnnyreilly.com/feeds/posts/default?alt=rss
      const atomOrRss = parsedURL.search.includes('alt=rss')
        ? '/rss.xml'
        : '/atom.xml';

      return redirect301({ context, originalUrl, redirectUrl: atomOrRss });
    }

    // cater for https://johnnyreilly.com/search/label/uglifyjs
    if (parsedURL.pathname.startsWith('/search/label/')) {
      const bloggerSearchRedirect =
        '/search?q=' + parsedURL.pathname.replace('/search/label/', '');

      return redirect301({
        context,
        originalUrl,
        redirectUrl: bloggerSearchRedirect,
      });
    }

    // cater for https://johnnyreilly.com/2019/06/ or https://johnnyreilly.com/2019/
    if (parsedURL.pathname.match(yearMonthRegex)) {
      const bloggerArchiveRedirect = '/blog';
      return redirect301({
        context,
        originalUrl,
        redirectUrl: bloggerArchiveRedirect,
      });
    }

    // cater for https://johnnyreilly.com/assets/images/auth0-enable-password-grant-type-d1ee245b0e059914635e5dada9942ab4.png
    if (parsedURL.pathname.startsWith('/assets/images/')) {
      const fileNameWithoutHashAndSuffix = parsedURL.pathname.substring(
        0,
        parsedURL.pathname.lastIndexOf('-'),
      );

      const likelyImageRedirect = imagePaths.find((imageFile) =>
        imageFile.includes(fileNameWithoutHashAndSuffix),
      );

      if (likelyImageRedirect) {
        return redirect301({
          context,
          originalUrl,
          redirectUrl: likelyImageRedirect,
        });
      }
    }
  }

  const location = originalUrl
    ? `${baseUrl}/404?originalUrl=${encodeURIComponent(originalUrl)}`
    : `${baseUrl}/404`;

  context.log(
    `Redirecting ${originalUrl} to ${location} as no explicit redirect exists`,
  );

  return {
    status: 302,
    location,
  };
}

/**
 * Redirects to a new URL with a 301 status code
 * @param {Redirect301Params} redirect301Params
 */
function redirect301({
  redirectUrl,
  context,
  originalUrl,
}: {
  redirectUrl: string;
  context: InvocationContext;
  originalUrl: string;
}) {
  const redirectUrlWithBase = `${baseUrl}${redirectUrl}`;
  context.log(`Redirecting ${originalUrl} to ${redirectUrlWithBase}`);

  return {
    status: 301,
    location: redirectUrlWithBase,
  };
}
