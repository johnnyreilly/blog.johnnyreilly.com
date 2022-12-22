//@ts-check
const { parseURL } = require('ufo');
const routes = require('./redirects');

async function fallback(context, req) {
  /** @type string */ const originalUrl = req.headers['x-ms-original-url'];
  if (originalUrl) {
    // This URL has been proxied as there was no static file matching it.
    context.log(`x-ms-original-url: ${originalUrl}`);

    const parsedURL = parseURL(originalUrl);

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
  }

  context.res = {
    status: 302,
    headers: {
      location: originalUrl
        ? `/404?originalUrl=${encodeURIComponent(originalUrl)}`
        : '404',
    },
  };
}

module.exports = fallback;
