//@ts-check
const { parseURL } = require('ufo');

const routes = [
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

module.exports = async function (context, req) {
  context.log('2JavaScript HTTP trigger function processed a request.');
  /** @type string */ const originalUrl = req.headers['x-ms-original-url'];
  if (originalUrl) {
    // This URL has been proxied as there was no static file matching it.
    console.log(`x-ms-original-url ${originalUrl}`);

    const parsedURL = parseURL(originalUrl);
    const url = parsedURL.pathname + parsedURL.search;

    const matchedRoute = routes.find((route) => url.includes(route.route));

    if (matchedRoute) {
      console.log(`Proxying ${url} to ${matchedRoute.redirect}`);

      context.res = {
        status: 302,
        headers: { location: matchedRoute.redirect },
      };
      return;
    }
  }

  context.res = {
    status: 404,
    headers: { location: '/404.html' },
  };

  //   context.log('JavaScript HTTP trigger function processed a request.');

  //   const name = req.query.name || (req.body && req.body.name);
  //   const responseMessage = name
  //     ? 'Hello, ' + name + '. This HTTP triggered function executed successfully.'
  //     : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.';

  //   context.res = {
  //     // status: 200, /* Defaults to 200 */
  //     body: responseMessage,
  //   };
};
