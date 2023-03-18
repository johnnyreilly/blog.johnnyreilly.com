const { parseURL } = require('ufo');
const imagePaths = require('./imagePaths');
const routes = require('./redirects');

/**
 * @typedef {Object} Redirect
 * @property {number} status - The X Coordinate
 * @property {string} location - The Y Coordinate
 */

const yearMonthRegex = /\/\d\d\d\d\/(\d\d\/)?/;
const baseUrl = 'https://johnnyreilly.com';

/**
 * Logic to handle redirects
 * @param {string} originalUrl eg https://johnnyreilly.com/2019/06/typescript-webpack-you-down-with-pnp.html
 * @param {(log: string) => void} log
 * @returns {Redirect}
 */
function redirect(
  /** @type string */ originalUrl,
  /** @type {(log: string) => void} */ log
) {
  if (originalUrl) {
    // This URL has been proxied as there was no static file matching it.
    log(`x-ms-original-url: ${originalUrl}`);

    // we will redirect https://blog.johnnyreilly.com/... to https://johnnyreilly.com/...
    const isBlogJohnnyReillyCom = originalUrl.startsWith(
      'https://blog.johnnyreilly.com'
    );

    const parsedURL = parseURL(
      isBlogJohnnyReillyCom
        ? originalUrl.replace('blog.johnnyreilly.com', 'johnnyreilly.com')
        : originalUrl
    );
    // parsedURL.pathname example: /2019/06/typescript-webpack-you-down-with-pnp.html

    const matchedRoute = routes.find((route) =>
      parsedURL.pathname.includes(route.route)
    );

    if (matchedRoute) {
      return redirect301({
        log,
        originalUrl,
        redirectUrl: matchedRoute.redirect,
      });
    }

    if (parsedURL.pathname.startsWith('/feeds/posts/default')) {
      // cater for https://johnnyreilly.com/feeds/posts/default?alt=rss
      const atomOrRss = parsedURL.search.includes('alt=rss')
        ? '/rss.xml'
        : '/atom.xml';

      return redirect301({ log, originalUrl, redirectUrl: atomOrRss });
    }

    // cater for https://johnnyreilly.com/search/label/uglifyjs
    if (parsedURL.pathname.startsWith('/search/label/')) {
      const bloggerSearchRedirect =
        '/search?q=' + parsedURL.pathname.replace('/search/label/', '');

      return redirect301({
        log,
        originalUrl,
        redirectUrl: bloggerSearchRedirect,
      });
    }

    // cater for https://johnnyreilly.com/2019/06/ or https://johnnyreilly.com/2019/
    if (parsedURL.pathname.match(yearMonthRegex)) {
      const bloggerArchiveRedirect = '/archive';
      return redirect301({
        log,
        originalUrl,
        redirectUrl: bloggerArchiveRedirect,
      });
    }

    // cater for https://johnnyreilly.com/assets/images/auth0-enable-password-grant-type-d1ee245b0e059914635e5dada9942ab4.png
    if (parsedURL.pathname.startsWith('/assets/images/')) {
      const fileNameWithoutHashAndSuffix = parsedURL.pathname.substring(
        0,
        parsedURL.pathname.lastIndexOf('-')
      );

      const likelyImageRedirect = imagePaths.find((imageFile) =>
        imageFile.includes(fileNameWithoutHashAndSuffix)
      );

      if (likelyImageRedirect) {
        return redirect301({
          log,
          originalUrl,
          redirectUrl: likelyImageRedirect,
        });
      }
    }
  }

  const location = originalUrl
    ? `${baseUrl}/404?originalUrl=${encodeURIComponent(originalUrl)}`
    : `${baseUrl}/404`;

  log(
    `Redirecting ${originalUrl} to ${location} as no explicit redirect exists`
  );

  return {
    status: 302,
    location,
  };
}

/**
 * @typedef {Object} Redirect301Params
 * @property {string} redirectUrl
 * @property {(log: string) => void} log
 * @property {string} originalUrl
 */

/**
 *
 * @param {Redirect301Params} redirect301Params
 * @returns
 */
function redirect301({ redirectUrl, log, originalUrl }) {
  const redirectUrlWithBase = `${baseUrl}${redirectUrl}`;
  log(`Redirecting ${originalUrl} to ${redirectUrlWithBase}`);

  return {
    status: 301,
    location: redirectUrlWithBase,
  };
}

module.exports = redirect;
