import type { AzureFunction, Context, HttpRequest } from '@azure/functions';

import { readFromDatabase } from './readFromDatabase';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    await readFromDatabase(context.log);

    context.res = {
      status: 200,
      body: 'OK',
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
