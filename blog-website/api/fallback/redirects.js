const redirectsBlogger = require('./redirectsBlogger');
const brokenBacklinks = require('./redirectsBacklinks');

const redirects = [...brokenBacklinks, ...redirectsBlogger];

module.exports = redirects;
