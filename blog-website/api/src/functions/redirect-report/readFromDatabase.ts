import type { InvocationContext } from '@azure/functions';

import { CosmosClient } from '@azure/cosmos';

import type { RedirectInDb } from '../fallback/types.js';
import {
  cosmosDbDatabaseName,
  cosmosDbRedirectsContainerName,
} from '../../constants.js';

const key = process.env.COSMOS_KEY || '<cosmos key>';
const endpoint = process.env.COSMOS_ENDPOINT || '<cosmos endpoint>';

/*
sample query 

SELECT * from 
(
    SELECT c.originalUrl, c.redirectUrl, c.statusCode, count(1) as numRedirects
    FROM c 
    GROUP BY c.originalUrl, c.redirectUrl, c.statusCode
) as redirects
where redirects.numRedirects > 1

*/

/**
 * Save redirect to database
 * @param originalUrl eg https://johnnyreilly.com/2019/06/typescript-webpack-you-down-with-pnp.html
 * @param redirect
 * @param log
 */
export async function readFromDatabase({
  context,
  dateFrom,
  dateTo,
}: {
  context: InvocationContext;
  dateFrom: string;
  dateTo: string;
}): Promise<RedirectInDb[]> {
  try {
    context.log(
      `Reading redirects from database, dateFrom: ${dateFrom}, dateTo: ${dateTo}`,
    );

    const client = new CosmosClient({
      key,
      endpoint,
    });
    const database = client.database(cosmosDbDatabaseName);
    const container = database.container(cosmosDbRedirectsContainerName);

    const querySpec = {
      query:
        'SELECT r.originalUrl, r.redirectUrl, r.statusCode, r.redirectedAt FROM releases r WHERE r.redirectedAt >= @dateFrom AND r.redirectedAt <= @dateTo',
      parameters: [
        {
          name: '@dateFrom',
          value: dateFrom,
        },
        {
          name: '@dateTo',
          value: dateTo,
        },
      ],
    };

    const iterator = container.items.query<RedirectInDb>(querySpec);
    const results: RedirectInDb[] = [];
    while (iterator.hasMoreResults()) {
      const { resources } = await iterator.fetchNext();
      results.push(...resources);
    }

    return results;
  } catch (error) {
    context.error(
      `Problem reading redirects from database, dateFrom: ${dateFrom}, dateTo: ${dateTo}`,
      error,
    );
    throw new Error(
      `Problem reading redirects from database, dateFrom: ${dateFrom}, dateTo: ${dateTo}`,
    );
  }
}
