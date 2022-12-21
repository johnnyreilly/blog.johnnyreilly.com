//@ts-check
const { parseURL } = require('ufo');
const routes = require('./routes');

async function fallback(context, req) {
  /** @type string */ const originalUrl = req.headers['x-ms-original-url'];
  if (originalUrl) {
    // This URL has been proxied as there was no static file matching it.
    context.log(`x-ms-original-url ${originalUrl}`);

    const parsedURL = parseURL(originalUrl);
    const url = parsedURL.pathname + parsedURL.search;

    const matchedRoute = routes.find((route) => url.includes(route.route));

    if (matchedRoute) {
      context.log(`Proxying ${url} to ${matchedRoute.redirect}`);

      context.res = {
        status: matchedRoute.statusCode,
        headers: { location: matchedRoute.redirect },
      };
      return;
    }
  }

  context.res = {
    status: 404,
    headers: { location: '/404.html' },
  };
}

module.exports = fallback;
