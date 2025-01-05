// based on https://github.com/Azure/azure-functions-nodejs-samples/blob/main/ts/src/functions/httpTrigger3.ts
import type {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions';

import { redirect } from './redirect.js';
import { saveToDatabase } from './saveToDatabase.js';
import type { FunctionModule } from '../../functionModule.js';

export const GET: FunctionModule = {
  name: 'fallback',
  options: {
    route: 'fallback',
    methods: ['GET'],
    handler: fallback,
  },
};

export async function fallback(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  try {
    const originalUrl = request.headers.get('x-ms-original-url') || '';

    // 404 wordpress hack attempts
    if (
      originalUrl.includes('wp-includes') ||
      originalUrl.includes('wp-admin')
    ) {
      return {
        status: 404,
        body: 'Not Found',
      };
    }

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
