const redirectsBlogger = require('./redirectsBlogger');
const redirectsBacklinks = require('./redirectsBacklinks');

const redirects = [...redirectsBacklinks, ...redirectsBlogger];

module.exports = redirects;
