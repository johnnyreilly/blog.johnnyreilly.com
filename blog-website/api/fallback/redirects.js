//@ts-check
const brokenBacklinkGeneratedRedirects = [
  {
    route: '/2019/10/definitely-typed-movie.html',
    redirect: '/definitely-typed-the-movie',
    statusCode: 301,
  },
  {
    route: '/2019/10/08/definitely-typed-movie',
    redirect: '/definitely-typed-the-movie',
    statusCode: 301,
  },
  {
    route: '/2019/06/typescript-webpack-you-down-with-pnp.html',
    redirect: '/2019/06/07/typescript-webpack-you-down-with-pnp',
    statusCode: 301,
  },
  {
    route:
      '/2019/07/typescript-and-eslint-meet-fork-ts-checker-webpack-plugin.html',
    redirect:
      '/2019/07/13/typescript-and-eslint-meet-fork-ts-checker-webpack-plugin',
    statusCode: 301,
  },
  {
    route: '/2012/04/making-pdfs-from-html-in-c-using.html',
    redirect: '/2012/04/05/making-pdfs-from-html-in-c-using',
    statusCode: 301,
  },
  {
    route: '/2012/09/globalize-and-jquery-validate.html/',
    redirect: '/2012/09/06/globalize-and-jquery-validate',
    statusCode: 301,
  },
  {
    route: '/2014/05/typescript-jsdoc-and-intellisense.html/',
    redirect: '/2014/05/05/typescript-jsdoc-and-intellisense',
    statusCode: 301,
  },
  {
    route: '/2015/02/using-gulp-in-asp-net-instead-of-web-optimization.html/',
    redirect: '/2015/02/17/using-gulp-in-asp-net-instead-of-web-optimization',
    statusCode: 301,
  },
  {
    route: '/2015/10/jquery-validation-globalize-hits-10.html/',
    redirect: '/2015/10/05/jquery-validation-globalize-hits-10',
    statusCode: 301,
  },
  {
    route: '/2015/12/es6-typescript-babel-react-flux-karma.html/',
    redirect: '/2015/12/16/es6-typescript-babel-react-flux-karma',
    statusCode: 301,
  },
  {
    route: '/2016/05/the-mysterious-case-of-webpack-angular-and-jquery.html/',
    redirect: '/2016/05/24/the-mysterious-case-of-webpack-angular-and-jquery',
    statusCode: 301,
  },
  {
    route: '/2016/11/my-subconscious-is-better-developer.html/',
    redirect: '/2016/11/12/my-subconscious-is-better-developer',
    statusCode: 301,
  },
  {
    route: '/2017/02/typescript-types-and-repeatable-builds.html/',
    redirect: '/2017/02/14/typescript-types-and-repeatable-builds',
    statusCode: 301,
  },
  {
    route: '/2017/06/windows-defender-step-away-from-npm.html',
    redirect: '/2017/06/11/windows-defender-step-away-from-npm',
    statusCode: 301,
  },
  {
    route: '/2017/11/the-typescript-webpack-pwa.html/',
    redirect: '/2017/11/19/the-typescript-webpack-pwa',
    statusCode: 301,
  },
  {
    route: '/2018/01/finding-webpack-4-use-map.html/',
    redirect: '/2018/01/29/finding-webpack-4-use-map',
    statusCode: 301,
  },
  {
    route: '/2018/03/its-not-dead-webpack-and-dead-code.html/',
    redirect: '/2018/03/07/its-not-dead-webpack-and-dead-code',
    statusCode: 301,
  },
  {
    route: '/2018/07/cypress-and-auth0.html/',
    redirect: '/2018/07/09/cypress-and-auth0',
    statusCode: 301,
  },
  {
    route: '/2018/12/you-might-not-need-thread-loader.html/',
    redirect: '/2018/12/22/you-might-not-need-thread-loader',
    statusCode: 301,
  },
  {
    route: '/2019/04/react-select-with-less-typing-lag.html/',
    redirect: '/2019/04/27/react-select-with-less-typing-lag',
    statusCode: 301,
  },
  {
    route: '/2019/05/typescript-and-high-cpu-usage-watch.html/',
    redirect: '/2019/05/23/typescript-and-high-cpu-usage-watch',
    statusCode: 301,
  },
  {
    route:
      '/2020/01/ef-core-31-breaks-left-join-with-no-navigation-property.html/',
    redirect:
      '/2020/01/02/ef-core-31-breaks-left-join-with-no-navigation-property',
    statusCode: 301,
  },
  {
    route: '/2020/01/license-to-kill-your-pwa.html/',
    redirect: '/2020/01/21/license-to-kill-your-pwa',
    statusCode: 301,
  },
  {
    route: '/2020/01/from-create-react-app-to-pwa.html/',
    redirect: '/2020/01/31/from-create-react-app-to-pwa',
    statusCode: 301,
  },
  {
    route: '/2020/02/web-workers-comlink-typescript-and-react.html/',
    redirect: '/2020/02/21/web-workers-comlink-typescript-and-react',
    statusCode: 301,
  },
  {
    route: '/2020/03/dual-boot-authentication-with-aspnetcore.html/',
    redirect: '/2020/03/22/dual-boot-authentication-with-aspnetcore',
    statusCode: 301,
  },
  {
    route: '/2020/03/offline-storage-in-pwa.html/',
    redirect: '/2020/03/29/offline-storage-in-pwa',
    statusCode: 301,
  },
  {
    route: '/2020/05/from-react-window-to-react-virtual.html/',
    redirect: '/2020/05/10/from-react-window-to-react-virtual',
    statusCode: 301,
  },
  {
    route: '/2020/06/taskwhenall-select-is-footgun.html/',
    redirect: '/2020/06/21/taskwhenall-select-is-footgun',
    statusCode: 301,
  },
  {
    route: '/2020/10/autofac-6-integration-tests-and-generic-hosting.html/',
    redirect: '/2020/10/02/autofac-6-integration-tests-and-generic-hosting',
    statusCode: 301,
  },
  {
    route: '/2020/11/bulletproof-uniq-with-typescript.html/',
    redirect: '/2020/11/14/bulletproof-uniq-with-typescript',
    statusCode: 301,
  },
  {
    route: '/2020/12/nullable-reference-types-csharp-strictnullchecks.html/',
    redirect: '/2020/12/20/nullable-reference-types-csharp-strictnullchecks',
    statusCode: 301,
  },
  {
    route:
      '/2020/12/prettier-your-csharp-with-dotnet-format-and-lint-staged.html/',
    redirect:
      '/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged',
    statusCode: 301,
  },
  {
    route: '/2021/01/create-react-app-with-ts-loader-and-craco.html/',
    redirect: '/2021/01/02/create-react-app-with-ts-loader-and-craco',
    statusCode: 301,
  },
  {
    route: '/2021/01/strongly-typing-react-query-s-usequeries.html/',
    redirect: '/2021/01/03/strongly-typing-react-query-s-usequeries',
    statusCode: 301,
  },
  {
    route: '/2021/01/azure-easy-auth-and-roles-with-dotnet-and-core.html/',
    redirect: '/2021/01/14/azure-easy-auth-and-roles-with-dotnet-and-core',
    statusCode: 301,
  },
  {
    route: '/2021/01/aspnet-serilog-and-application-insights.html/',
    redirect: '/2021/01/30/aspnet-serilog-and-application-insights',
    statusCode: 301,
  },
  {
    route:
      '/2021/02/goodbye-client-affinity-hello-data-protection-with-azure.html/',
    redirect:
      '/2021/02/27/goodbye-client-affinity-hello-data-protection-with-azure',
    statusCode: 301,
  },
];

const routeGeneratedRedirects = [
  {
    route: '/2012/01/standing-on-shoulders-of-giants.html',
    redirect: '/2012/01/07/standing-on-shoulders-of-giants',
    statusCode: 301,
  },
  {
    route: '/2012/01/jqgrid-its-just-far-better-grid.html',
    redirect: '/2012/01/14/jqgrid-its-just-far-better-grid',
    statusCode: 301,
  },
  {
    route: '/2012/01/what-on-earth-is-jquery-and-why-should.html',
    redirect: '/2012/01/24/what-on-earth-is-jquery-and-why-should',
    statusCode: 301,
  },
  {
    route: '/2012/01/javascript-getting-to-know-beast.html',
    redirect: '/2012/01/30/javascript-getting-to-know-beast',
    statusCode: 301,
  },
  {
    route: '/2012/02/potted-history-of-using-ajax-on.html',
    redirect: '/2012/02/05/potted-history-of-using-ajax-on',
    statusCode: 301,
  },
  {
    route: '/2012/02/wcf-transport-windows-authentication.html',
    redirect: '/2012/02/15/wcf-transport-windows-authentication',
    statusCode: 301,
  },
  {
    route: '/2012/02/joy-of-json.html',
    redirect: '/2012/02/23/joy-of-json',
    statusCode: 301,
  },
  {
    route: '/2012/03/jquery-unobtrusive-remote-validation.html',
    redirect: '/2012/03/03/jquery-unobtrusive-remote-validation',
    statusCode: 301,
  },
  {
    route: '/2012/03/striving-for-javascript-convention.html',
    redirect: '/2012/03/12/striving-for-javascript-convention',
    statusCode: 301,
  },
  {
    route: '/2012/03/using-pubsub-observer-pattern-to.html',
    redirect: '/2012/03/17/using-pubsub-observer-pattern-to',
    statusCode: 301,
  },
  {
    route: '/2012/03/wcf-moving-from-config-to-code-simple.html',
    redirect: '/2012/03/22/wcf-moving-from-config-to-code-simple',
    statusCode: 301,
  },
  {
    route: '/2012/04/making-pdfs-from-html-in-c-using.html',
    redirect: '/2012/04/05/making-pdfs-from-html-in-c-using',
    statusCode: 301,
  },
  {
    route: '/2012/04/simple-technique-for-initialising.html',
    redirect: '/2012/04/16/simple-technique-for-initialising',
    statusCode: 301,
  },
  {
    route: '/2012/04/jshint-customising-your-hurt-feelings.html',
    redirect: '/2012/04/23/jshint-customising-your-hurt-feelings',
    statusCode: 301,
  },
  {
    route: '/2012/04/beg-steal-or-borrow-decent-javascript.html',
    redirect: '/2012/04/28/beg-steal-or-borrow-decent-javascript',
    statusCode: 301,
  },
  {
    route: '/2012/05/globalizejs-number-and-date.html',
    redirect: '/2012/05/07/globalizejs-number-and-date',
    statusCode: 301,
  },
  {
    route: '/2012/05/dad-didnt-buy-any-games.html',
    redirect: '/2012/05/30/dad-didnt-buy-any-games',
    statusCode: 301,
  },
  {
    route: '/2012/06/reasons-to-be-cheerful-why-now-is-good.html',
    redirect: '/2012/06/04/reasons-to-be-cheerful-why-now-is-good',
    statusCode: 301,
  },
  {
    route: '/2012/07/how-im-structuring-my-javascript-in-web.html',
    redirect: '/2012/07/01/how-im-structuring-my-javascript-in-web',
    statusCode: 301,
  },
  {
    route: '/2012/07/rendering-partial-view-to-string.html',
    redirect: '/2012/07/16/rendering-partial-view-to-string',
    statusCode: 301,
  },
  {
    route: '/2012/08/jquery-unobtrusive-validation.html',
    redirect: '/2012/08/06/jquery-unobtrusive-validation',
    statusCode: 301,
  },
  {
    route: '/2012/08/closedxml-real-sdk-for-excel.html',
    redirect: '/2012/08/16/closedxml-real-sdk-for-excel',
    statusCode: 301,
  },
  {
    route: '/2012/08/how-to-attribute-encode-partialview-in.html',
    redirect: '/2012/08/24/how-to-attribute-encode-partialview-in',
    statusCode: 301,
  },
  {
    route: '/2012/09/globalize-and-jquery-validate.html',
    redirect: '/2012/09/06/globalize-and-jquery-validate',
    statusCode: 301,
  },
  {
    route: '/2012/09/giving-odata-to-crm-40.html',
    redirect: '/2012/09/24/giving-odata-to-crm-40',
    statusCode: 301,
  },
  {
    route: '/2012/10/unit-testing-and-entity-framework-filth.html',
    redirect: '/2012/10/03/unit-testing-and-entity-framework-filth',
    statusCode: 301,
  },
  {
    route: '/2012/10/using-web-optimization-with-mvc-3.html',
    redirect: '/2012/10/05/using-web-optimization-with-mvc-3',
    statusCode: 301,
  },
  {
    route: '/2012/10/mvc-3-meet-dictionary.html',
    redirect: '/2012/10/22/mvc-3-meet-dictionary',
    statusCode: 301,
  },
  {
    route: '/2012/11/xsdxml-schema-generator-xsdexe-taking.html',
    redirect: '/2012/11/02/xsdxml-schema-generator-xsdexe-taking',
    statusCode: 301,
  },
  {
    route: '/2012/11/a-nicer-net-api-for-bloombergs-open-api.html',
    redirect: '/2012/11/13/a-nicer-net-api-for-bloombergs-open-api',
    statusCode: 301,
  },
  {
    route: '/2013/01/html-to-pdf-using-wcf-service.html',
    redirect: '/2013/01/03/html-to-pdf-using-wcf-service',
    statusCode: 301,
  },
  {
    route: '/2013/01/twitterbootstrapmvc4-meet-bootstrap.html',
    redirect: '/2013/01/09/twitterbootstrapmvc4-meet-bootstrap',
    statusCode: 301,
  },
  {
    route: '/2013/01/twitterbootstrapmvc4-meet-bootstrap_14.html',
    redirect: '/2013/01/14/twitterbootstrapmvc4-meet-bootstrap_14',
    statusCode: 301,
  },
  {
    route: '/2013/02/using-expressions-with-constructors.html',
    redirect: '/2013/02/13/using-expressions-with-constructors',
    statusCode: 301,
  },
  {
    route: '/2013/02/unit-testing-mvc-controllers-mocking.html',
    redirect: '/2013/02/18/unit-testing-mvc-controllers-mocking',
    statusCode: 301,
  },
  {
    route: '/2013/03/unit-testing-modelstate.html',
    redirect: '/2013/03/03/unit-testing-modelstate',
    statusCode: 301,
  },
  {
    route: '/2013/03/decimalmodelbinder-for-nullable-decimals.html',
    redirect: '/2013/03/11/decimalmodelbinder-for-nullable-decimals',
    statusCode: 301,
  },
  {
    route: '/2013/04/death-to-compatibility-mode.html',
    redirect: '/2013/04/01/death-to-compatibility-mode',
    statusCode: 301,
  },
  {
    route: '/2013/04/making-ie-10s-clear-field-x-button-and.html',
    redirect: '/2013/04/09/making-ie-10s-clear-field-x-button-and',
    statusCode: 301,
  },
  {
    route: '/2013/04/ie-10-install-torches-javascript.html',
    redirect: '/2013/04/17/ie-10-install-torches-javascript',
    statusCode: 301,
  },
  {
    route: '/2013/04/a-navigation-animation-for-your-users.html',
    redirect: '/2013/04/26/a-navigation-animation-for-your-users',
    statusCode: 301,
  },
  {
    route: '/2013/05/how-im-using-cassette.html',
    redirect: '/2013/05/04/how-im-using-cassette',
    statusCode: 301,
  },
  {
    route: '/2013/06/how-im-using-cassette-part-2.html',
    redirect: '/2013/06/06/how-im-using-cassette-part-2',
    statusCode: 301,
  },
  {
    route: '/2013/06/jquery-validate-native-unobtrusive-validation.html',
    redirect: '/2013/06/26/jquery-validate-native-unobtrusive-validation',
    statusCode: 301,
  },
  {
    route: '/2013/07/how-im-using-cassette-part-3-typescript.html',
    redirect: '/2013/07/06/how-im-using-cassette-part-3-typescript',
    statusCode: 301,
  },
  {
    route: '/2013/08/announcing-jquery-validation.html',
    redirect: '/2013/08/08/announcing-jquery-validation',
    statusCode: 301,
  },
  {
    route: '/2013/08/using-bootstrap-tooltips-to-display.html',
    redirect: '/2013/08/17/using-bootstrap-tooltips-to-display',
    statusCode: 301,
  },
  {
    route:
      '/2013/10/migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native.html',
    redirect:
      '/2013/10/04/migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native',
    statusCode: 301,
  },
  {
    route:
      '/2013/10/getting-typescript-compile-on-save-and-continous-integration-to-play-nice.html',
    redirect:
      '/2013/10/30/getting-typescript-compile-on-save-and-continous-integration-to-play-nice',
    statusCode: 301,
  },
  {
    route:
      '/2013/11/typescript-dont-forget-build-action-for-implicit-referencing.html',
    redirect:
      '/2013/11/04/typescript-dont-forget-build-action-for-implicit-referencing',
    statusCode: 301,
  },
  {
    route: '/2013/11/rolling-your-own-confirm-mechanism.html',
    redirect: '/2013/11/26/rolling-your-own-confirm-mechanism',
    statusCode: 301,
  },
  {
    route: '/2013/12/simple-fading-in-and-out-using-css-transitions.html',
    redirect: '/2013/12/04/simple-fading-in-and-out-using-css-transitions',
    statusCode: 301,
  },
  {
    route: '/2013/12/nuget-and-webmatrix-how-to-install.html',
    redirect: '/2013/12/13/nuget-and-webmatrix-how-to-install',
    statusCode: 301,
  },
  {
    route: '/2014/01/upgrading-to-typescript-095-personal.html',
    redirect: '/2014/01/09/upgrading-to-typescript-095-personal',
    statusCode: 301,
  },
  {
    route: '/2014/01/integration-testing-with-entity.html',
    redirect: '/2014/01/24/integration-testing-with-entity',
    statusCode: 301,
  },
  {
    route: '/2014/02/wpf-and-mystic-meg-or-playing.html',
    redirect: '/2014/02/12/wpf-and-mystic-meg-or-playing',
    statusCode: 301,
  },
  {
    route: '/2014/02/typescript-and-requirejs-keep-it-simple.html',
    redirect: '/2014/02/27/typescript-and-requirejs-keep-it-simple',
    statusCode: 301,
  },
  {
    route: '/2014/03/caching-and-cache-busting-with-requirejs.html',
    redirect: '/2014/03/05/caching-and-cache-busting-with-requirejs',
    statusCode: 301,
  },
  {
    route: '/2014/03/knockout-globalize-valuenumber-binding.html',
    redirect: '/2014/03/11/knockout-globalize-valuenumber-binding',
    statusCode: 301,
  },
  {
    route: '/2014/03/the-surprisingly-happy-tale-of-visual.html',
    redirect: '/2014/03/17/the-surprisingly-happy-tale-of-visual',
    statusCode: 301,
  },
  {
    route: '/2014/04/typescript-instance-methods.html',
    redirect: '/2014/04/01/typescript-instance-methods',
    statusCode: 301,
  },
  {
    route: '/2014/05/typescript-jsdoc-and-intellisense.html',
    redirect: '/2014/05/05/typescript-jsdoc-and-intellisense',
    statusCode: 301,
  },
  {
    route:
      '/2014/05/team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project.html',
    redirect:
      '/2014/05/15/team-foundation-server-continuous-integration-and-javascript-unit-tests-in-unit-test-project',
    statusCode: 301,
  },
  {
    route: '/2014/06/migrating-from-angularjs-to-angularts.html',
    redirect: '/2014/06/01/migrating-from-angularjs-to-angularts',
    statusCode: 301,
  },
  {
    route: '/2014/06/dates-DataAnnotations-and-data-impedance-mismatch.html',
    redirect: '/2014/06/20/dates-DataAnnotations-and-data-impedance-mismatch',
    statusCode: 301,
  },
  {
    route: '/2014/07/hottowel-angular-meet-typescript.html',
    redirect: '/2014/07/03/hottowel-angular-meet-typescript',
    statusCode: 301,
  },
  {
    route: '/2014/08/angularjs-meet-aspnet-server-validation.html',
    redirect: '/2014/08/01/angularjs-meet-aspnet-server-validation',
    statusCode: 301,
  },
  {
    route: '/2014/08/getting-more-RESTful-with-Web-API.html',
    redirect: '/2014/08/08/getting-more-RESTful-with-Web-API',
    statusCode: 301,
  },
  {
    route: '/2014/08/my-unrequited-love-for-isolate-scope.html',
    redirect: '/2014/08/12/my-unrequited-love-for-isolate-scope',
    statusCode: 301,
  },
  {
    route: '/2014/09/running-javascript-unit-tests-in-appveyor.html',
    redirect: '/2014/09/06/running-javascript-unit-tests-in-appveyor',
    statusCode: 301,
  },
  {
    route: '/2014/09/unit-testing-angular-controller-with.html',
    redirect: '/2014/09/10/unit-testing-angular-controller-with',
    statusCode: 301,
  },
  {
    route: '/2014/09/migrating-jasmine-tests-to-typescript.html',
    redirect: '/2014/09/13/migrating-jasmine-tests-to-typescript',
    statusCode: 301,
  },
  {
    route: '/2014/10/he-tasks-me-he-heaps-me-i-will-wreak.html',
    redirect: '/2014/10/03/he-tasks-me-he-heaps-me-i-will-wreak',
    statusCode: 301,
  },
  {
    route:
      '/2014/10/caching-and-cache-busting-in-angularjs-with-http-interceptors.html',
    redirect:
      '/2014/10/06/caching-and-cache-busting-in-angularjs-with-http-interceptors',
    statusCode: 301,
  },
  {
    route:
      '/2014/11/using-gulp-in-visual-studio-instead-of-web-optimization.html',
    redirect:
      '/2014/11/04/using-gulp-in-visual-studio-instead-of-web-optimization',
    statusCode: 301,
  },
  {
    route: '/2014/11/Coded-UI-IE-11-and-the-runas-problem.html',
    redirect: '/2014/11/26/Coded-UI-IE-11-and-the-runas-problem',
    statusCode: 301,
  },
  {
    route: '/2014/12/whats-in-a-name.html',
    redirect: '/2014/12/05/whats-in-a-name',
    statusCode: 301,
  },
  {
    route: '/2014/12/gulp-npm-long-paths-and-visual-studio-fight.html',
    redirect: '/2014/12/12/gulp-npm-long-paths-and-visual-studio-fight',
    statusCode: 301,
  },
  {
    route:
      '/2014/12/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1.html',
    redirect:
      '/2014/12/29/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1',
    statusCode: 301,
  },
  {
    route:
      '/2015/01/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2.html',
    redirect:
      '/2015/01/07/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2',
    statusCode: 301,
  },
  {
    route: '/2015/01/typescript-using-functions-with-union-types.html',
    redirect: '/2015/01/20/typescript-using-functions-with-union-types',
    statusCode: 301,
  },
  {
    route: '/2015/02/the-convent-with-continuous-delivery.html',
    redirect: '/2015/02/11/the-convent-with-continuous-delivery',
    statusCode: 301,
  },
  {
    route: '/2015/02/using-gulp-in-asp-net-instead-of-web-optimization.html',
    redirect: '/2015/02/17/using-gulp-in-asp-net-instead-of-web-optimization',
    statusCode: 301,
  },
  {
    route: '/2015/02/hey-tsconfigjson-where-have-you-been.html',
    redirect: '/2015/02/27/hey-tsconfigjson-where-have-you-been',
    statusCode: 301,
  },
  {
    route: '/2015/03/partialview-tostring.html',
    redirect: '/2015/03/20/partialview-tostring',
    statusCode: 301,
  },
  {
    route: '/2015/04/how-to-activate-your-emoji-keyboard-on.html',
    redirect: '/2015/04/17/how-to-activate-your-emoji-keyboard-on',
    statusCode: 301,
  },
  {
    route: '/2015/04/tonight-ill-start-open-source-project.html',
    redirect: '/2015/04/24/tonight-ill-start-open-source-project',
    statusCode: 301,
  },
  {
    route: '/2015/05/a-tale-of-angular-html5mode-aspnet-mvc.html',
    redirect: '/2015/05/05/a-tale-of-angular-html5mode-aspnet-mvc',
    statusCode: 301,
  },
  {
    route: '/2015/05/ngvalidationfor-baby-steps.html',
    redirect: '/2015/05/11/ngvalidationfor-baby-steps',
    statusCode: 301,
  },
  {
    route: '/2015/05/angular-ui-bootstrap-datepicker-weirdness.html',
    redirect: '/2015/05/23/angular-ui-bootstrap-datepicker-weirdness',
    statusCode: 301,
  },
  {
    route: '/2015/06/Back-to-the-Future-with-Code-First-Migrations.html',
    redirect: '/2015/06/19/Back-to-the-Future-with-Code-First-Migrations',
    statusCode: 301,
  },
  {
    route: '/2015/06/npm-please-stop-hurting-visual-studio.html',
    redirect: '/2015/06/29/npm-please-stop-hurting-visual-studio',
    statusCode: 301,
  },
  {
    route: '/2015/07/upgrading-to-globalize-1x-for-dummies.html',
    redirect: '/2015/07/30/upgrading-to-globalize-1x-for-dummies',
    statusCode: 301,
  },
  {
    route: '/2015/08/top-one-nice-one-get-sorted.html',
    redirect: '/2015/08/13/top-one-nice-one-get-sorted',
    statusCode: 301,
  },
  {
    route: '/2015/09/things-done-changed.html',
    redirect: '/2015/09/10/things-done-changed',
    statusCode: 301,
  },
  {
    route: '/2015/09/authoring-npm-modules-with-typescript.html',
    redirect: '/2015/09/23/authoring-npm-modules-with-typescript',
    statusCode: 301,
  },
  {
    route: '/2015/10/jquery-validation-globalize-hits-10.html',
    redirect: '/2015/10/05/jquery-validation-globalize-hits-10',
    statusCode: 301,
  },
  {
    route: '/2015/10/the-names-have-been-changed.html',
    redirect: '/2015/10/23/the-names-have-been-changed',
    statusCode: 301,
  },
  {
    route: '/2015/11/iqueryable-ienumerable-hmmm.html',
    redirect: '/2015/11/30/iqueryable-ienumerable-hmmm',
    statusCode: 301,
  },
  {
    route: '/2015/12/es6-typescript-babel-react-flux-karma.html',
    redirect: '/2015/12/16/es6-typescript-babel-react-flux-karma',
    statusCode: 301,
  },
  {
    route: '/2015/12/live-reload-considered-harmful.html',
    redirect: '/2015/12/20/live-reload-considered-harmful',
    statusCode: 301,
  },
  {
    route: '/2016/01/usestaticfiles-for-aspnet-vold.html',
    redirect: '/2016/01/01/usestaticfiles-for-aspnet-vold',
    statusCode: 301,
  },
  {
    route: '/2016/01/coded-ui-and-curse-of-docking-station.html',
    redirect: '/2016/01/14/coded-ui-and-curse-of-docking-station',
    statusCode: 301,
  },
  {
    route: '/2016/02/tfs-2012-net-45-and-c-6.html',
    redirect: '/2016/02/01/tfs-2012-net-45-and-c-6',
    statusCode: 301,
  },
  {
    route: '/2016/02/visual-studio-tsconfigjson-and-external.html',
    redirect: '/2016/02/19/visual-studio-tsconfigjson-and-external',
    statusCode: 301,
  },
  {
    route: '/2016/02/creating-angular-ui-routes-in-controller.html',
    redirect: '/2016/02/29/creating-angular-ui-routes-in-controller',
    statusCode: 301,
  },
  {
    route: '/2016/03/tfs-2012-meet-powershell-karma-and-buildnumber.html',
    redirect: '/2016/03/04/tfs-2012-meet-powershell-karma-and-buildnumber',
    statusCode: 301,
  },
  {
    route: '/2016/03/atom-recovering-from-corrupted-packages.html',
    redirect: '/2016/03/17/atom-recovering-from-corrupted-packages',
    statusCode: 301,
  },
  {
    route: '/2016/03/elvis-and-king-concat.html',
    redirect: '/2016/03/22/elvis-and-king-concat',
    statusCode: 301,
  },
  {
    route: '/2016/04/instant-stubs-with-jsonnet.html',
    redirect: '/2016/04/25/instant-stubs-with-jsonnet',
    statusCode: 301,
  },
  {
    route: '/2016/05/inlining-angular-templates-with-webpack.html',
    redirect: '/2016/05/13/inlining-angular-templates-with-webpack',
    statusCode: 301,
  },
  {
    route: '/2016/05/the-mysterious-case-of-webpack-angular-and-jquery.html',
    redirect: '/2016/05/24/the-mysterious-case-of-webpack-angular-and-jquery',
    statusCode: 301,
  },
  {
    route: '/2016/06/create-es2015-map-from-array-in-typescript.html',
    redirect: '/2016/06/02/create-es2015-map-from-array-in-typescript',
    statusCode: 301,
  },
  {
    route: '/2016/07/using-webpacks-defineplugin-with-typescript.html',
    redirect: '/2016/07/23/using-webpacks-defineplugin-with-typescript',
    statusCode: 301,
  },
  {
    route: '/2016/08/the-ternary-operator-meets-destructuring.html',
    redirect: '/2016/08/19/the-ternary-operator-meets-destructuring',
    statusCode: 301,
  },
  {
    route: '/2016/09/integration-tests-with-sql-server.html',
    redirect: '/2016/09/12/integration-tests-with-sql-server',
    statusCode: 301,
  },
  {
    route: '/2016/09/typescript-20-es2016-and-babel.html',
    redirect: '/2016/09/22/typescript-20-es2016-and-babel',
    statusCode: 301,
  },
  {
    route: '/2016/10/react-component-curry.html',
    redirect: '/2016/10/05/react-component-curry',
    statusCode: 301,
  },
  {
    route: '/2016/11/but-you-cant-die-i-love-you-ts-loader.html',
    redirect: '/2016/11/01/but-you-cant-die-i-love-you-ts-loader',
    statusCode: 301,
  },
  {
    route: '/2016/11/my-subconscious-is-better-developer.html',
    redirect: '/2016/11/12/my-subconscious-is-better-developer',
    statusCode: 301,
  },
  {
    route: '/2016/12/webpack-syncing-enhanced-resolve.html',
    redirect: '/2016/12/11/webpack-syncing-enhanced-resolve',
    statusCode: 301,
  },
  {
    route: '/2016/12/using-ts-loader-with-webpack-2.html',
    redirect: '/2016/12/19/using-ts-loader-with-webpack-2',
    statusCode: 301,
  },
  {
    route: '/2017/01/webpack-configuring-loader-with-query.html',
    redirect: '/2017/01/01/webpack-configuring-loader-with-query',
    statusCode: 301,
  },
  {
    route: '/2017/01/webpack-resolveloader-alias-with-query.html',
    redirect: '/2017/01/06/webpack-resolveloader-alias-with-query',
    statusCode: 301,
  },
  {
    route: '/2017/02/hands-free-https.html',
    redirect: '/2017/02/01/hands-free-https',
    statusCode: 301,
  },
  {
    route: '/2017/02/typescript-types-and-repeatable-builds.html',
    redirect: '/2017/02/14/typescript-types-and-repeatable-builds',
    statusCode: 301,
  },
  {
    route: '/2017/02/under-duck-afternoon-in-open-source.html',
    redirect: '/2017/02/23/under-duck-afternoon-in-open-source',
    statusCode: 301,
  },
  {
    route: '/2017/03/debugging-aspnet-core-in-vs-or-code.html',
    redirect: '/2017/03/28/debugging-aspnet-core-in-vs-or-code',
    statusCode: 301,
  },
  {
    route: '/2017/03/im-looking-for-work.html',
    redirect: '/2017/03/30/im-looking-for-work',
    statusCode: 301,
  },
  {
    route: '/2017/04/setting-build-version-using-appveyor.html',
    redirect: '/2017/04/25/setting-build-version-using-appveyor',
    statusCode: 301,
  },
  {
    route: '/2017/05/typescript-spare-rod-spoil-code.html',
    redirect: '/2017/05/20/typescript-spare-rod-spoil-code',
    statusCode: 301,
  },
  {
    route: '/2017/06/windows-defender-step-away-from-npm.html',
    redirect: '/2017/06/11/windows-defender-step-away-from-npm',
    statusCode: 301,
  },
  {
    route: '/2017/07/dynamic-import-ive-been-await-ing-you.html',
    redirect: '/2017/07/02/dynamic-import-ive-been-await-ing-you',
    statusCode: 301,
  },
  {
    route: '/2017/07/a-haiku-on-problem-with-semver-us.html',
    redirect: '/2017/07/29/a-haiku-on-problem-with-semver-us',
    statusCode: 301,
  },
  {
    route: '/2017/08/karma-from-phantomjs-to-headless-chrome.html',
    redirect: '/2017/08/27/karma-from-phantomjs-to-headless-chrome',
    statusCode: 301,
  },
  {
    route: '/2017/08/oh-glamour-of-open-source.html',
    redirect: '/2017/08/30/oh-glamour-of-open-source',
    statusCode: 301,
  },
  {
    route: '/2017/09/typescript-webpack-super-pursuit-mode.html',
    redirect: '/2017/09/07/typescript-webpack-super-pursuit-mode',
    statusCode: 301,
  },
  {
    route: '/2017/09/fork-ts-checker-webpack-plugin-code.html',
    redirect: '/2017/09/12/fork-ts-checker-webpack-plugin-code',
    statusCode: 301,
  },
  {
    route: '/2017/10/working-with-extrahop-on-webpack-and-ts.html',
    redirect: '/2017/10/19/working-with-extrahop-on-webpack-and-ts',
    statusCode: 301,
  },
  {
    route: '/2017/10/typescript-definitions-webpack-and-module-types.html',
    redirect: '/2017/10/20/typescript-definitions-webpack-and-module-types',
    statusCode: 301,
  },
  {
    route: '/2017/11/the-typescript-webpack-pwa.html',
    redirect: '/2017/11/19/the-typescript-webpack-pwa',
    statusCode: 301,
  },
  {
    route: '/2017/12/ts-loader-2017-retrospective.html',
    redirect: '/2017/12/24/ts-loader-2017-retrospective',
    statusCode: 301,
  },
  {
    route: '/2018/01/auth0-typescript-and-aspnet-core.html',
    redirect: '/2018/01/14/auth0-typescript-and-aspnet-core',
    statusCode: 301,
  },
  {
    route: '/2018/01/webpack-4-ts-loader-fork-ts-checker.html',
    redirect: '/2018/01/28/webpack-4-ts-loader-fork-ts-checker',
    statusCode: 301,
  },
  {
    route: '/2018/01/finding-webpack-4-use-map.html',
    redirect: '/2018/01/29/finding-webpack-4-use-map',
    statusCode: 301,
  },
  {
    route: '/2018/02/ts-loader-400-fork-ts-checker-webpack.html',
    redirect: '/2018/02/25/ts-loader-400-fork-ts-checker-webpack',
    statusCode: 301,
  },
  {
    route: '/2018/03/its-not-dead-webpack-and-dead-code.html',
    redirect: '/2018/03/07/its-not-dead-webpack-and-dead-code',
    statusCode: 301,
  },
  {
    route: '/2018/03/uploading-images-to-cloudinary-with-fetch.html',
    redirect: '/2018/03/25/uploading-images-to-cloudinary-with-fetch',
    statusCode: 301,
  },
  {
    route: '/2018/03/its-not-dead-2-mobx-react-devtools-and-the-undead.html',
    redirect: '/2018/03/26/its-not-dead-2-mobx-react-devtools-and-the-undead',
    statusCode: 301,
  },
  {
    route: '/2018/04/using-reflection-to-identify-unwanted-dependencies.html',
    redirect: '/2018/04/28/using-reflection-to-identify-unwanted-dependencies',
    statusCode: 301,
  },
  {
    route: '/2018/05/compromising-guide-for-developers.html',
    redirect: '/2018/05/13/compromising-guide-for-developers',
    statusCode: 301,
  },
  {
    route: '/2018/06/vsts-yaml-up.html',
    redirect: '/2018/06/16/vsts-yaml-up',
    statusCode: 301,
  },
  {
    route: '/2018/06/vsts-and-ef-core-migrations.html',
    redirect: '/2018/06/24/vsts-and-ef-core-migrations',
    statusCode: 301,
  },
  {
    route: '/2018/07/cypress-and-auth0.html',
    redirect: '/2018/07/09/cypress-and-auth0',
    statusCode: 301,
  },
  {
    route:
      '/2018/07/azure-app-service-web-app-containers-asp-net-nested-configuration.html',
    redirect:
      '/2018/07/28/azure-app-service-web-app-containers-asp-net-nested-configuration',
    statusCode: 301,
  },
  {
    route: '/2018/08/typescript-webpack-alias-goodbye-relative-paths.html',
    redirect: '/2018/08/21/typescript-webpack-alias-goodbye-relative-paths',
    statusCode: 301,
  },
  {
    route: '/2018/09/semantic-versioning-and-definitely-typed.html',
    redirect: '/2018/09/15/semantic-versioning-and-definitely-typed',
    statusCode: 301,
  },
  {
    route: '/2018/09/ts-loader-project-references-first-blood.html',
    redirect: '/2018/09/23/ts-loader-project-references-first-blood',
    statusCode: 301,
  },
  {
    route: '/2018/10/font-awesome-brand-icons-react.html',
    redirect: '/2018/10/07/font-awesome-brand-icons-react',
    statusCode: 301,
  },
  {
    route: '/2018/10/making-a-programmer.html',
    redirect: '/2018/10/27/making-a-programmer',
    statusCode: 301,
  },
  {
    route: '/2018/11/snapshot-testing-for-c.html',
    redirect: '/2018/11/17/snapshot-testing-for-c',
    statusCode: 301,
  },
  {
    route: '/2018/12/cache-rules-everything-around-me.html',
    redirect: '/2018/12/10/cache-rules-everything-around-me',
    statusCode: 301,
  },
  {
    route: '/2018/12/you-might-not-need-thread-loader.html',
    redirect: '/2018/12/22/you-might-not-need-thread-loader',
    statusCode: 301,
  },
  {
    route: '/2019/01/github-actions-and-yarn.html',
    redirect: '/2019/01/05/github-actions-and-yarn',
    statusCode: 301,
  },
  {
    route: '/2019/01/typescript-and-webpack-watch-it.html',
    redirect: '/2019/01/13/typescript-and-webpack-watch-it',
    statusCode: 301,
  },
  {
    route: '/2019/02/aspnet-core-allowlist-proxying-http-requests.html',
    redirect: '/2019/02/22/aspnet-core-allowlist-proxying-http-requests',
    statusCode: 301,
  },
  {
    route: '/2019/03/fork-ts-checker-webpack-plugin-v1.html',
    redirect: '/2019/03/06/fork-ts-checker-webpack-plugin-v1',
    statusCode: 301,
  },
  {
    route: '/2019/03/google-analytics-api-and-aspnet-core.html',
    redirect: '/2019/03/22/google-analytics-api-and-aspnet-core',
    statusCode: 301,
  },
  {
    route: '/2019/03/template-tricks-for-dainty-dom.html',
    redirect: '/2019/03/24/template-tricks-for-dainty-dom',
    statusCode: 301,
  },
  {
    route: '/2019/04/react-select-with-less-typing-lag.html',
    redirect: '/2019/04/27/react-select-with-less-typing-lag',
    statusCode: 301,
  },
  {
    route: '/2019/05/typescript-and-high-cpu-usage-watch.html',
    redirect: '/2019/05/23/typescript-and-high-cpu-usage-watch',
    statusCode: 301,
  },
  {
    route: '/2019/06/typescript-webpack-you-down-with-pnp.html',
    redirect: '/2019/06/07/typescript-webpack-you-down-with-pnp',
    statusCode: 301,
  },
  {
    route:
      '/2019/07/typescript-and-eslint-meet-fork-ts-checker-webpack-plugin.html',
    redirect:
      '/2019/07/13/typescript-and-eslint-meet-fork-ts-checker-webpack-plugin',
    statusCode: 301,
  },
  {
    route: '/2019/08/asp-net-authentication-hard-coding-claims.html',
    redirect: '/2019/08/02/asp-net-authentication-hard-coding-claims',
    statusCode: 301,
  },
  {
    route: '/2019/08/symbiotic-definitely-typed.html',
    redirect: '/2019/08/17/symbiotic-definitely-typed',
    statusCode: 301,
  },
  {
    route: '/2019/09/coming-soon-definitely-typed.html',
    redirect: '/2019/09/14/coming-soon-definitely-typed',
    statusCode: 301,
  },
  {
    route: '/2019/09/start-me-up-ts-loader-meet-tsbuildinfo.html',
    redirect: '/2019/09/30/start-me-up-ts-loader-meet-tsbuildinfo',
    statusCode: 301,
  },
  {
    route: '/2019/12/teams-notification-webhooks.html',
    redirect: '/2019/12/18/teams-notification-webhooks',
    statusCode: 301,
  },
  {
    route:
      '/2020/01/ef-core-31-breaks-left-join-with-no-navigation-property.html',
    redirect:
      '/2020/01/02/ef-core-31-breaks-left-join-with-no-navigation-property',
    statusCode: 301,
  },
  {
    route: '/2020/01/license-to-kill-your-pwa.html',
    redirect: '/2020/01/21/license-to-kill-your-pwa',
    statusCode: 301,
  },
  {
    route: '/2020/01/from-create-react-app-to-pwa.html',
    redirect: '/2020/01/31/from-create-react-app-to-pwa',
    statusCode: 301,
  },
  {
    route: '/2020/02/web-workers-comlink-typescript-and-react.html',
    redirect: '/2020/02/21/web-workers-comlink-typescript-and-react',
    statusCode: 301,
  },
  {
    route: '/2020/03/dual-boot-authentication-with-aspnetcore.html',
    redirect: '/2020/03/22/dual-boot-authentication-with-aspnetcore',
    statusCode: 301,
  },
  {
    route: '/2020/03/offline-storage-in-pwa.html',
    redirect: '/2020/03/29/offline-storage-in-pwa',
    statusCode: 301,
  },
  {
    route: '/2020/04/up-to-clouds.html',
    redirect: '/2020/04/04/up-to-clouds',
    statusCode: 301,
  },
  {
    route: '/2020/05/from-react-window-to-react-virtual.html',
    redirect: '/2020/05/10/from-react-window-to-react-virtual',
    statusCode: 301,
  },
  {
    route: '/2020/05/autofac-webapplicationfactory-integration-tests.html',
    redirect: '/2020/05/21/autofac-webapplicationfactory-integration-tests',
    statusCode: 301,
  },
  {
    route: '/2020/06/taskwhenall-select-is-footgun.html',
    redirect: '/2020/06/21/taskwhenall-select-is-footgun',
    statusCode: 301,
  },
  {
    route: '/2020/07/devcontainers-and-ssl-interception.html',
    redirect: '/2020/07/11/devcontainers-and-ssl-interception',
    statusCode: 301,
  },
  {
    route: '/2020/08/devcontainers-aka-performance-in-secure.html',
    redirect: '/2020/08/09/devcontainers-aka-performance-in-secure',
    statusCode: 301,
  },
  {
    route: '/2020/09/why-your-team-needs-newsfeed.html',
    redirect: '/2020/09/04/why-your-team-needs-newsfeed',
    statusCode: 301,
  },
  {
    route: '/2020/10/autofac-6-integration-tests-and-generic-hosting.html',
    redirect: '/2020/10/02/autofac-6-integration-tests-and-generic-hosting',
    statusCode: 301,
  },
  {
    route: '/2020/10/safari-empty-download-content-type.html',
    redirect: '/2020/10/19/safari-empty-download-content-type',
    statusCode: 301,
  },
  {
    route: '/2020/10/azure-devops-node-api-git-api-getrefs-wiki-api.html',
    redirect: '/2020/10/31/azure-devops-node-api-git-api-getrefs-wiki-api',
    statusCode: 301,
  },
  {
    route: '/2020/11/throttle-data-requests-with-react-hooks.html',
    redirect: '/2020/11/10/throttle-data-requests-with-react-hooks',
    statusCode: 301,
  },
  {
    route: '/2020/11/bulletproof-uniq-with-typescript.html',
    redirect: '/2020/11/14/bulletproof-uniq-with-typescript',
    statusCode: 301,
  },
  {
    route: '/2020/11/images-in-markdown-for-azure-devops-marketplace.html',
    redirect: '/2020/11/28/images-in-markdown-for-azure-devops-marketplace',
    statusCode: 301,
  },
  {
    route: '/2020/12/azure-pipelines-task-lib-and-isoutput-setvariable.html',
    redirect: '/2020/12/09/azure-pipelines-task-lib-and-isoutput-setvariable',
    statusCode: 301,
  },
  {
    route: '/2020/12/nullable-reference-types-csharp-strictnullchecks.html',
    redirect: '/2020/12/20/nullable-reference-types-csharp-strictnullchecks',
    statusCode: 301,
  },
  {
    route: '/2020/12/how-to-make-azure-ad-403.html',
    redirect: '/2020/12/21/how-to-make-azure-ad-403',
    statusCode: 301,
  },
  {
    route:
      '/2020/12/prettier-your-csharp-with-dotnet-format-and-lint-staged.html',
    redirect:
      '/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged',
    statusCode: 301,
  },
  {
    route: '/2020/12/azure-pipelines-meet-jest.html',
    redirect: '/2020/12/30/azure-pipelines-meet-jest',
    statusCode: 301,
  },
  {
    route: '/2021/01/create-react-app-with-ts-loader-and-craco.html',
    redirect: '/2021/01/02/create-react-app-with-ts-loader-and-craco',
    statusCode: 301,
  },
  {
    route: '/2021/01/strongly-typing-react-query-s-usequeries.html',
    redirect: '/2021/01/03/strongly-typing-react-query-s-usequeries',
    statusCode: 301,
  },
  {
    route: '/2021/01/azure-easy-auth-and-roles-with-dotnet-and-core.html',
    redirect: '/2021/01/14/azure-easy-auth-and-roles-with-dotnet-and-core',
    statusCode: 301,
  },
  {
    route:
      '/2021/01/azure-easy-auth-and-roles-with-net-and-microsoft-identity-web.html',
    redirect:
      '/2021/01/17/azure-easy-auth-and-roles-with-net-and-microsoft-identity-web',
    statusCode: 301,
  },
  {
    route:
      '/2021/01/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app.html',
    redirect:
      '/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app',
    statusCode: 301,
  },
  {
    route: '/2021/01/aspnet-serilog-and-application-insights.html',
    redirect: '/2021/01/30/aspnet-serilog-and-application-insights',
    statusCode: 301,
  },
  {
    route: '/2021/02/arm-templates-security-role-assignments.html',
    redirect: '/2021/02/08/arm-templates-security-role-assignments',
    statusCode: 301,
  },
  {
    route:
      '/2021/02/azure-app-service-health-checks-and-zero-downtime-deployments.html',
    redirect:
      '/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments',
    statusCode: 301,
  },
  {
    route:
      '/2021/02/easy-auth-tokens-survive-releases-on-linux-azure-app-service.html',
    redirect:
      '/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service',
    statusCode: 301,
  },
  {
    route:
      '/2021/02/goodbye-client-affinity-hello-data-protection-with-azure.html',
    redirect:
      '/2021/02/27/goodbye-client-affinity-hello-data-protection-with-azure',
    statusCode: 301,
  },
  {
    route: '/2021/03/generate-typescript-and-csharp-clients-with-nswag.html',
    redirect: '/2021/03/06/generate-typescript-and-csharp-clients-with-nswag',
    statusCode: 301,
  },
  {
    route: '/2021/03/managed-identity-azure-sql-entity-framework.html',
    redirect: '/2021/03/10/managed-identity-azure-sql-entity-framework',
    statusCode: 301,
  },
  {
    route: '/2021/03/rss-update-we-moved-to-docusaurus.html',
    redirect: '/2021/03/17/rss-update-we-moved-to-docusaurus',
    statusCode: 301,
  },
  {
    route: '/2021/03/bicep-meet-azure-pipelines.html',
    redirect: '/2021/03/20/bicep-meet-azure-pipelines',
    statusCode: 301,
  },
  {
    route: '/2021/03/bicep-meet-azure-pipelines-2.html',
    redirect: '/2021/03/23/bicep-meet-azure-pipelines-2',
    statusCode: 301,
  },
  {
    route: '/2021/04/hello-world-bicep.html',
    redirect: '/2021/04/10/hello-world-bicep',
    statusCode: 301,
  },
  {
    route: '/2021/04/ts-loader-goes-webpack-5.html',
    redirect: '/2021/04/20/ts-loader-goes-webpack-5',
    statusCode: 301,
  },
  {
    route: '/2021/04/service-now-api-and-typescript-conditional-types.html',
    redirect: '/2021/04/24/service-now-api-and-typescript-conditional-types',
    statusCode: 301,
  },
  {
    route: '/2021/05/blog-archive-for-docusaurus.html',
    redirect: '/2021/05/01/blog-archive-for-docusaurus',
    statusCode: 301,
  },
  {
    route: '/2021/05/create-pipeline-with-azure-devops-api.html',
    redirect: '/2021/05/08/create-pipeline-with-azure-devops-api',
    statusCode: 301,
  },
  {
    route: '/2021/05/azurite-and-table-storage-dev-container.html',
    redirect: '/2021/05/15/azurite-and-table-storage-dev-container',
    statusCode: 301,
  },
  {
    route: '/2021/06/azure-functions-dotnet-5-query-params-di-bicep.html',
    redirect: '/2021/06/11/azure-functions-dotnet-5-query-params-di-bicep',
    statusCode: 301,
  },
  {
    route: '/2021/06/react-18-and-typescript.html',
    redirect: '/2021/06/30/react-18-and-typescript',
    statusCode: 301,
  },
  {
    route: '/2021/07/c-sharp-9-azure-functions-in-process.html',
    redirect: '/2021/07/01/c-sharp-9-azure-functions-in-process',
    statusCode: 301,
  },
  {
    route: '/2021/07/output-connection-strings-and-keys-from-azure-bicep.html',
    redirect: '/2021/07/07/output-connection-strings-and-keys-from-azure-bicep',
    statusCode: 301,
  },
  {
    route: '/2021/07/webpack-esbuild-why-not-both.html',
    redirect: '/2021/07/11/webpack-esbuild-why-not-both',
    statusCode: 301,
  },
  {
    route: '/2021/07/directory-build-props-c-sharp-9-for-all.html',
    redirect: '/2021/07/14/directory-build-props-c-sharp-9-for-all',
    statusCode: 301,
  },
  {
    route: '/2021/08/typescript-abstract-classes-and-constructors.html',
    redirect: '/2021/08/01/typescript-abstract-classes-and-constructors',
    statusCode: 301,
  },
  {
    route: '/2021/08/typescript-4-4-more-readable-code.html',
    redirect: '/2021/08/14/typescript-4-4-more-readable-code',
    statusCode: 301,
  },
  {
    route: '/2021/08/bicep-azure-static-web-apps-azure-devops.html',
    redirect: '/2021/08/15/bicep-azure-static-web-apps-azure-devops',
    statusCode: 301,
  },
  {
    route: '/2021/08/bicep-syntax-highlighting-with-prismjs.html',
    redirect: '/2021/08/19/bicep-syntax-highlighting-with-prismjs',
    statusCode: 301,
  },
  {
    route: '/2021/09/google-apis-authentication-with-typescript.html',
    redirect: '/2021/09/10/google-apis-authentication-with-typescript',
    statusCode: 301,
  },
  {
    route: '/2021/09/permissioning-azure-pipelines-bicep-role-assignments.html',
    redirect:
      '/2021/09/12/permissioning-azure-pipelines-bicep-role-assignments',
    statusCode: 301,
  },
  {
    route: '/2021/10/structured-data-seo-and-react.html',
    redirect: '/2021/10/15/structured-data-seo-and-react',
    statusCode: 301,
  },
  {
    route: '/2021/10/docusaurus-meta-tags-and-google-discover.html',
    redirect: '/2021/10/18/docusaurus-meta-tags-and-google-discover',
    statusCode: 301,
  },
  {
    route: '/2021/10/nswag-generated-c-sharp-client-property-name-clash.html',
    redirect: '/2021/10/31/nswag-generated-c-sharp-client-property-name-clash',
    statusCode: 301,
  },
  {
    route: '/2021/11/azure-standard-tests-with-bicep.html',
    redirect: '/2021/11/18/azure-standard-tests-with-bicep',
    statusCode: 301,
  },
  {
    route: '/2021/11/typescript-vs-jsdoc-javascript.html',
    redirect: '/2021/11/22/typescript-vs-jsdoc-javascript',
    statusCode: 301,
  },
  {
    route:
      '/2021/12/azure-static-web-app-deploy-previews-with-azure-devops.html',
    redirect:
      '/2021/12/05/azure-static-web-app-deploy-previews-with-azure-devops',
    statusCode: 301,
  },
  {
    route: '/2021/12/open-graph-sharing-previews-guide.html',
    redirect: '/2021/12/12/open-graph-sharing-previews-guide',
    statusCode: 301,
  },
  {
    route: '/2021/12/azure-container-apps-bicep-and-github-actions.html',
    redirect: '/2021/12/19/azure-container-apps-bicep-and-github-actions',
    statusCode: 301,
  },
  {
    route:
      '/2021/12/azure-container-apps-build-and-deploy-with-bicep-and-github-actions.html',
    redirect:
      '/2021/12/27/azure-container-apps-build-and-deploy-with-bicep-and-github-actions',
    statusCode: 301,
  },
  {
    route: '/2021/12/azure-cli-show-query-output-properties.html',
    redirect: '/2021/12/28/azure-cli-show-query-output-properties',
    statusCode: 301,
  },
  {
    route: '/2021/12/preload-fonts-with-docusaurus.html',
    redirect: '/2021/12/29/preload-fonts-with-docusaurus',
    statusCode: 301,
  },
];

const redirects = [
  ...brokenBacklinkGeneratedRedirects,
  ...routeGeneratedRedirects,
];

module.exports = redirects;
