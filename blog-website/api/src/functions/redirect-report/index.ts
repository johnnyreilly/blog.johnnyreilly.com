// based on https://github.com/Azure/azure-functions-nodejs-samples/blob/main/ts/src/functions/httpTrigger3.ts
import type {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions';

import { startOfWeek } from 'date-fns';
import { groupBy, orderBy } from 'lodash';

import { readFromDatabase } from './readFromDatabase.js';
import type { FunctionModule } from '../../functionModule.js';

export const GET: FunctionModule = {
  name: 'redirect-report',
  options: {
    route: 'redirect-report',
    methods: ['GET'],
    handler: redirectReport,
  },
};

export async function redirectReport(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  try {
    const dateFrom =
      request.query.get('dateFrom') || startOfWeek(new Date()).toISOString();
    const dateTo = request.query.get('dateTo') || new Date().toISOString();
    const raw = request.query.get('raw') === 'true';

    context.info(
      `Running redirect report with raw: ${raw} between ${dateFrom} and ${dateTo}`,
      request.query,
    );

    const redirects = await readFromDatabase({
      context,
      dateFrom,
      dateTo,
    });

    if (raw) {
      return {
        status: 200,
        jsonBody: orderBy(redirects, (x) => x.redirectedAt, 'desc'),
      };
    }

    const groupedBy = groupBy(redirects, (x) => x.originalUrl);
    const redirectSummary = orderBy(
      Object.entries(groupedBy).map(([originalUrl, redirects]) => {
        const first = redirects[0];
        return {
          originalUrl,
          redirectedTo: first.redirectUrl,
          statusCode: first.statusCode,
          count: redirects.length,
        };
      }),
      (x) => x.count,
      'desc',
    );

    return {
      status: 200,
      jsonBody: redirectSummary,
    };
  } catch (error) {
    context.error('Problem with redirect report', error, request.headers);
    return {
      status: 500,
      body: 'something went wrong',
    };
  }
}
