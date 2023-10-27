// based on https://github.com/Azure/azure-functions-nodejs-samples/blob/main/ts/src/functions/httpTrigger3.ts
import type {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions';
import { app } from '@azure/functions';

import { redirect } from './redirect';
import { saveToDatabase } from './saveToDatabase';

export async function fallback(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  try {
    const originalUrl = request.headers.get('x-ms-original-url') || '';

    const { status, location } = redirect(originalUrl, context);

    await saveToDatabase(originalUrl, { status, location }, context);

    return {
      status,
      headers: {
        location,
      },
    };
  } catch (error) {
    context.error(
      'Problem with fallback',
      error,
      request.headers.get('x-ms-original-url'),
    );
    return {
      status: 500,
      body: 'something went wrong',
    };
  }
}

app.http('fallback', {
  methods: ['GET'],
  handler: fallback,
});
