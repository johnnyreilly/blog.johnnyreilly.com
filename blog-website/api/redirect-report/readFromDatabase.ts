import type { Logger } from '@azure/functions';

import { CosmosClient } from '@azure/cosmos';

const key = process.env.COSMOS_KEY || '<cosmos key>';
const endpoint = process.env.COSMOS_ENDPOINT || '<cosmos endpoint>';
const cosmosDbDatabaseName = 'sitedb';
const cosmosDbContainerName = 'redirects';

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
export async function readFromDatabase(log: Logger): Promise<void> {
  try {
    log(`Reading database: ${endpoint} -> ${key}`);

    const client = new CosmosClient({
      key,
      endpoint,
    });
    const database = client.database(cosmosDbDatabaseName);
    const container = database.container(cosmosDbContainerName);

    // await container.items.create({
    //   originalUrl,
    //   redirectUrl: redirect.location,
    //   statusCode: redirect.status,
    //   redirectedAt: new Date().toISOString(),
    // });

    // log(`Saved redirect to database: ${originalUrl} -> ${redirect.location}`);
  } catch (error) {
    log.error('Problem saving redirect to database', error);
  }
}
