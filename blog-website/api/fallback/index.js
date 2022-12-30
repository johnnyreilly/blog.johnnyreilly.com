//@ts-check
const redirect = require('./redirect');

async function fallback(context, req) {
  try {
    /** @type string */ const originalUrl = req.headers['x-ms-original-url'];

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
