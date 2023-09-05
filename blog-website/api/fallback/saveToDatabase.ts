import type { Redirect, RedirectInDb } from './types';
import type { Logger } from '@azure/functions';

import { CosmosClient } from '@azure/cosmos';
import { format } from 'date-fns';
import {
  cosmosDbDatabaseName,
  cosmosDbRedirectsContainerName,
} from '../constants';

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
export async function saveToDatabase(
  originalUrl: string,
  redirect: Redirect,
  log: Logger,
): Promise<void> {
  try {
    log(`Saving redirect to database: ${originalUrl} -> ${redirect.location}`);

    const client = new CosmosClient({
      key,
      endpoint,
    });
    const database = client.database(cosmosDbDatabaseName);

    const now = new Date();

    const redirectInDb: RedirectInDb = {
      originalUrl,
      redirectUrl: redirect.location,
      statusCode: redirect.status,
      redirectedAt: now.toISOString(),
    };

    const redirectsContainer = database.container(
      cosmosDbRedirectsContainerName,
    );
    const savedRedirects = await redirectsContainer.items.create(redirectInDb);
    log(
      `Saved redirect to database: ${originalUrl} -> ${redirect.location}`,
      savedRedirects,
    );
  } catch (error) {
    log.error('Problem saving redirect to database', error);
  }
}
