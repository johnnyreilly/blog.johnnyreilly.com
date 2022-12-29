//@ts-check
const { parseURL } = require('ufo');
const routes = require('./redirects');

async function fallback(context, req) {
  try {
    /** @type string */ const originalUrl = req.headers['x-ms-original-url'];
    if (originalUrl) {
      // This URL has been proxied as there was no static file matching it.
      context.log(`x-ms-original-url: ${originalUrl}`);

      const parsedURL = parseURL(originalUrl);
      // parsedURL.pathname example: /2018/01/01/azure-functions-redirects.html

      const matchedRoute = routes.find((route) =>
        parsedURL.pathname.includes(route.route)
      );

      if (matchedRoute) {
        context.log(`Redirecting ${originalUrl} to ${matchedRoute.redirect}`);

        context.res = {
          status: matchedRoute.statusCode,
          headers: { location: matchedRoute.redirect },
        };
        return;
      }

      // cater for https://blog.johnnyreilly.com/search/label/uglifyjs
      if (parsedURL.pathname.startsWith('/search/label/')) {
        const bloggerSearchRedirect =
          '/search?q=' + parsedURL.pathname.replace('/search/label/', '');
        context.log(`Redirecting ${originalUrl} to ${bloggerSearchRedirect}`);

        context.res = {
          status: 301,
          headers: {
            location: bloggerSearchRedirect,
          },
        };
        return;
      }
    }

    context.log(
      `No explicit redirect for ${originalUrl} so will redirect to /404`
    );

    context.res = {
      status: 302,
      headers: {
        location: originalUrl
          ? `/404?originalUrl=${encodeURIComponent(originalUrl)}`
          : '/404',
      },
    };
  } catch (error) {
    context.log.error(
      'Problem with fallback',
      error,
      req.headers['x-ms-original-url']
    );
  }
}

module.exports = fallback;
