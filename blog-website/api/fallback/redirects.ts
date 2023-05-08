import { redirectsDocusaurusDateToNoDate } from './redirectsDocusaurusDateToNoDate';
import { redirectsBlogger } from './redirectsBlogger';
import { redirectsBacklinks } from './redirectsBacklinks';

export const redirects = [
  ...redirectsDocusaurusDateToNoDate,
  ...redirectsBacklinks,
  ...redirectsBlogger,
];
