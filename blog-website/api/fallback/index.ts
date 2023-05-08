import type { AzureFunction, Context, HttpRequest } from '@azure/functions';

import { redirect } from './redirect';
import { saveToDatabase } from './saveToDatabase';

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
