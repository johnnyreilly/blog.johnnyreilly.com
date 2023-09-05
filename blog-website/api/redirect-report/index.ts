import type { AzureFunction, Context, HttpRequest } from '@azure/functions';

import { startOfWeek } from 'date-fns';
import { groupBy, orderBy } from 'lodash';

import { readFromDatabase } from './readFromDatabase';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {
  try {
    const dateFrom =
      req.query.dateFrom || startOfWeek(new Date()).toISOString();
    const dateTo = req.query.dateTo || new Date().toISOString();
    const raw = req.query.raw === 'true';

    const redirects = await readFromDatabase({
      log: context.log,
      dateFrom,
      dateTo,
    });

    if (raw) {
      context.res = {
        status: 200,
        body: orderBy(redirects, (x) => x.redirectedAt, 'desc'),
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
    context.res = {
      status: 200,
      body: redirectSummary,
    };
  } catch (error) {
    context.log.error('Problem with redirect report', error, req.headers);
  }
};

export default httpTrigger;
