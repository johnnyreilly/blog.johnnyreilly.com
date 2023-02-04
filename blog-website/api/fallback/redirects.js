const redirectsDocusaurusDateToNoDate = require('./redirectsDocusaurusDateToNoDate');
const redirectsBlogger = require('./redirectsBlogger');
const redirectsBacklinks = require('./redirectsBacklinks');

const redirects = [
  ...redirectsDocusaurusDateToNoDate,
  ...redirectsBacklinks,
  ...redirectsBlogger,
];

module.exports = redirects;
