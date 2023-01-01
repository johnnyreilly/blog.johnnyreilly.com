//@ts-check
const redirect = require('./redirect');

/**
 *
 * @param { import("@azure/functions").Context } context
 * @param { import("@azure/functions").HttpRequest } req
 */
async function fallback(context, req) {
  try {
    const originalUrl = req.headers['x-ms-original-url'];

    const { status, location } = redirect(originalUrl, context.log);

    context.res = {
      status,
      headers: {
        location,
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
