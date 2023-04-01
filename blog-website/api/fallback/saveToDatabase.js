/**
 * @typedef { import("@azure/functions").Logger } Logger
 * @typedef { import('./types').Redirect } Redirect
 */

const { CosmosClient } = require('@azure/cosmos');

const key = process.env.COSMOS_KEY || '<cosmos key>';
const endpoint = process.env.COSMOS_ENDPOINT || '<cosmos endpoint>';
const cosmosDbDatabaseName = 'sitedb';
const cosmosDbContainerName = 'redirects';

/**
 * Save redirect to database
 * @param {string} originalUrl eg https://johnnyreilly.com/2019/06/typescript-webpack-you-down-with-pnp.html
 * @param {Redirect} redirect
 * @param {Logger} log
 * @returns {Promise<void>}
 */
async function saveToDatabase(originalUrl, redirect, log) {
  try {
    log(`Saving redirect to database: ${originalUrl} -> ${redirect.location}`);

    const client = new CosmosClient({
      key,
      endpoint,
    });
    const database = client.database(cosmosDbDatabaseName);
    const container = database.container(cosmosDbContainerName);

    await container.items.create({
      originalUrl,
      redirectUrl: redirect.location,
      statusCode: redirect.status,
      redirectedAt: new Date().toISOString(),
    });

    log(`Saved redirect to database: ${originalUrl} -> ${redirect.location}`);
  } catch (error) {
    log.error('Problem saving redirect to database', error);
  }
}

module.exports = saveToDatabase;
