//@ts-check
const { parseURL } = require('ufo');
const routes = require('./redirects');

/**
 * @typedef {Object} Redirect
 * @property {number} status - The X Coordinate
 * @property {string} location - The Y Coordinate
 */

const yearMonthRegex = /\/\d\d\d\d\/(\d\d\/)?/;

/**
 * Logic to handle redirects
 * @param {string} originalUrl eg https://blog.johnnyreilly.com/2019/06/typescript-webpack-you-down-with-pnp.html
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

    const parsedURL = parseURL(originalUrl);
    // parsedURL.pathname example: /2019/06/typescript-webpack-you-down-with-pnp.html

    const matchedRoute = routes.find((route) =>
      parsedURL.pathname.includes(route.route)
    );

    if (matchedRoute) {
      log(`Redirecting ${originalUrl} to ${matchedRoute.redirect}`);

      return {
        status: 301,
        location: matchedRoute.redirect,
      };
    }

    if (parsedURL.pathname.startsWith('/feeds/posts/default')) {
      // cater for https://blog.johnnyreilly.com/feeds/posts/default?alt=rss
      const atomOrRss = parsedURL.search.includes('alt=rss')
        ? '/rss.xml'
        : '/atom.xml';

      log(`Redirecting ${originalUrl} to ${atomOrRss}`);

      return {
        status: 301,
        location: atomOrRss,
      };
    }

    // cater for https://blog.johnnyreilly.com/search/label/uglifyjs
    if (parsedURL.pathname.startsWith('/search/label/')) {
      const bloggerSearchRedirect =
        '/search?q=' + parsedURL.pathname.replace('/search/label/', '');
      log(`Redirecting ${originalUrl} to ${bloggerSearchRedirect}`);

      return {
        status: 301,
        location: bloggerSearchRedirect,
      };
    }

    // cater for https://blog.johnnyreilly.com/2019/06/ or https://blog.johnnyreilly.com/2019/
    if (parsedURL.pathname.match(yearMonthRegex)) {
      const bloggerArchiveRedirect = '/archive';
      log(`Redirecting ${originalUrl} to ${bloggerArchiveRedirect}`);

      return {
        status: 301,
        location: bloggerArchiveRedirect,
      };
    }
  }

  const location = originalUrl
    ? `/404?originalUrl=${encodeURIComponent(originalUrl)}`
    : '/404';

  log(
    `Redirecting ${originalUrl} to ${location} as no explicit redirect exists`
  );

  return {
    status: 302,
    location,
  };
}

module.exports = redirect;
