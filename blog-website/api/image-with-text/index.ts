import type { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {
  try {
    const headers = req.headers;

    const headersJson = JSON.stringify(headers, null, 2);

    context.res = {
      status: 200,
      body: headersJson,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    context.log.error('Problem with returning headers', error);
  }
};

export default httpTrigger;
