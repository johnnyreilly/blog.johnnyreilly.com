// see https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
module.exports = {
  extends: 'lighthouse:default',
  settings: {
    skipAudits: [
      //   'robots-txt',
      //   'canonical',
      //   'works-offline',
      'offline-start-url',
    ],
  },
};
