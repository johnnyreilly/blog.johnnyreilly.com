// see https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
module.exports = {
  extends: 'lighthouse:default',
  settings: {
    skipAudits: [
      //   'robots-txt',
      'canonical', // for staging sites this will always be incorrect
      //   'works-offline',
      'offline-start-url',
    ],
  },
};
