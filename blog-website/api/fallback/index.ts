import type { AzureFunction, Context, HttpRequest } from '@azure/functions';
const redirect = require('./redirect');
const saveToDatabase = require('./saveToDatabase');

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const originalUrl = req.headers['x-ms-original-url'];

    const { status, location } = redirect(originalUrl, context.log);

    await saveToDatabase(originalUrl, { status, location }, context.log);

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
};

export default httpTrigger;
