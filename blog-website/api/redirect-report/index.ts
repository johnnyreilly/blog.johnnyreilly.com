import type { AzureFunction, Context, HttpRequest } from '@azure/functions';

import { startOfWeek } from 'date-fns';

import { readFromDatabase } from './readFromDatabase';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {
  try {
    const dateFrom =
      req.query.dateFrom || startOfWeek(new Date()).toISOString();
    const dateTo = req.query.dateTo || new Date().toISOString();

    const redirects = await readFromDatabase({
      log: context.log,
      dateFrom,
      dateTo,
    });

    context.res = {
      status: 200,
      body: redirects,
    };
  } catch (error) {
    context.log.error('Problem with redirect report', error, req.headers);
  }
};

export default httpTrigger;
