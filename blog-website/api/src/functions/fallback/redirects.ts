import { redirectsDocusaurusDateToNoDate } from './redirectsDocusaurusDateToNoDate.js';
import { redirectsBlogger } from './redirectsBlogger.js';
import { redirectsBacklinks } from './redirectsBacklinks.js';

export const redirects = [
  ...redirectsDocusaurusDateToNoDate,
  ...redirectsBacklinks,
  ...redirectsBlogger,
];
