---
slug: es6-typescript-babel-react-flux-karma
title: 'ES6 + TypeScript + Babel + React + Flux + Karma: The Secret Recipe'
authors: johnnyreilly
tags: [react, ts-loader, webpack, javascript, automated testing]
hide_table_of_contents: false
description: 'Learn how to set up a powerful TypeScript-React workflow with webpack, gulp, Karma, and inject in this comprehensive article.'
---

I wrote [a while ago](../2015-09-10-things-done-changed/index.md) about how I was using some different tools in a current project:

<!--truncate-->

- React with JSX
- Flux
- ES6 with Babel
- Karma for unit testing

I have fully come to love and appreciate all of the above. I really like working with them. However. There was still an ache in my soul and a thorn in my side. Whilst I love the syntax of ES6 and even though I've come to appreciate the clarity of JSX, I have been missing something. Perhaps you can guess? It's static typing.

It's actually been really good to have the chance to work without it because it's made me realise what a productivity boost having static typing actually is. The number of silly mistakes burning time that a compiler could have told me.... Sigh.

But the pain is over. The dark days are gone. It's possible to have strong typing, courtesy of TypeScript, plugged into this workflow. It's yours for the taking. Take it. Take it now!

## What a Guy Wants

I decided a couple of months ago what I wanted to have in my setup:

1. I want to be able to write React / JSX in TypeScript. Naturally I couldn't achieve that by myself but handily the TypeScript team decided to add support for JSX with [TypeScript 1.6](https://blogs.msdn.com/b/typescript/archive/2015/09/16/announcing-typescript-1-6.aspx). Ooh yeah.
2. I wanted to be able to write ES6. When I realised [the approach for writing ES6 and having the transpilation handled by TypeScript wasn't clear](https://github.com/Microsoft/TypeScript/issues/3956) I had another idea. I thought ["what if I write ES6 and hand off the transpilation to Babel?"](https://github.com/Microsoft/TypeScript/issues/4765) i.e. Use TypeScript for type checking, not for transpilation. I realised that [James Brantly had my back](http://www.jbrantly.com/es6-modules-with-typescript-and-webpack/#configuringwebpack) here already. Enter [webpack](https://webpack.github.io/) and [ts-loader](https://github.com/TypeStrong/ts-loader).
3. Debugging. Being able to debug my code is non-negotiable for me. If I can't debug it I'm less productive. (I'm also bitter and twisted inside.) I should say that I wanted to be able to debug my _original_ source code. Thanks to the magic of [sourcemaps](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?usp=sharing), that mad thing is possible.
4. Karma for unit testing. I've become accustomed to writing my tests in ES6 and running them on a continual basis with [Karma](https://karma-runner.github.io/0.13/index.html). This allows for a rather good debugging story as well. I didn't want to lose this when I moved to TypeScript. I didn't.

So I've talked about what I want and I've alluded to some of the solutions that there are. The question now is how to bring them all together. This post is, for the most part, going to be about correctly orchestrating a number of [gulp tasks](http://gulpjs.com/) to achieve the goals listed above. If you're after the [Blue Peter "here's one I made earlier"](https://en.wikipedia.org/wiki/Blue_Peter) moment then take a look at [the es6-babel-react-flux-karma repo](https://github.com/Microsoft/TypeScriptSamples/tree/master/es6-babel-react-flux-karma) in the [Microsoft/TypeScriptSamples repo on Github](https://github.com/Microsoft/TypeScriptSamples).

## gulpfile.js

```js
/* eslint-disable no-var, strict, prefer-arrow-callback */
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var eslint = require('gulp-eslint');
var webpack = require('./gulp/webpack');
var staticFiles = require('./gulp/staticFiles');
var tests = require('./gulp/tests');
var clean = require('./gulp/clean');
var inject = require('./gulp/inject');

var lintSrcs = ['./gulp/**/*.js'];

gulp.task('delete-dist', function (done) {
  clean.run(done);
});

gulp.task('build-process.env.NODE_ENV', function () {
  process.env.NODE_ENV = 'production';
});

gulp.task(
  'build-js',
  ['delete-dist', 'build-process.env.NODE_ENV'],
  function (done) {
    webpack.build().then(function () {
      done();
    });
  },
);

gulp.task(
  'build-other',
  ['delete-dist', 'build-process.env.NODE_ENV'],
  function () {
    staticFiles.build();
  },
);

gulp.task('build', ['build-js', 'build-other', 'lint'], function () {
  inject.build();
});

gulp.task('lint', function () {
  return gulp.src(lintSrcs).pipe(eslint()).pipe(eslint.format());
});

gulp.task('watch', ['delete-dist'], function () {
  process.env.NODE_ENV = 'development';
  Promise.all([
    webpack.watch(), //,
    //less.watch()
  ])
    .then(function () {
      gutil.log(
        'Now that initial assets (js and css) are generated inject will start...',
      );
      inject.watch(postInjectCb);
    })
    .catch(function (error) {
      gutil.log('Problem generating initial assets (js and css)', error);
    });

  gulp.watch(lintSrcs, ['lint']);
  staticFiles.watch();
  tests.watch();
});

gulp.task('watch-and-serve', ['watch'], function () {
  postInjectCb = stopAndStartServer;
});

var postInjectCb = null;
var serverStarted = false;
function stopAndStartServer() {
  if (serverStarted) {
    gutil.log('Stopping server');
    connect.serverClose();
    serverStarted = false;
  }
  startServer();
}

function startServer() {
  gutil.log('Starting server');
  connect.server({
    root: './dist',
    port: 8080,
  });
  serverStarted = true;
}
```

Let's start picking this apart; what do we actually have here? Well, we have 2 gulp tasks that I want you to notice:

<dl><dt>build</dt><dd><p>This is likely the task you would use when deploying. It takes all of your source code, builds it, provides cache-busting filenames (eg <code>main.dd2fa20cd9eac9d1fb2f.js</code>), injects your shell SPA page with references to the files and deploys everything to the <code>./dist/</code> directory. So that's TypeScript, static assets like images and CSS all made ready for Production.</p><p>The build task also implements this advice:</p><blockquote cite="https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html">When deploying your app, set the <code>NODE_ENV</code> environment variable to <code>production</code> to use the production build of React which does not include the development warnings and runs significantly faster. </blockquote></dd><dt>watch-and-serve</dt><dd><p>This task represents "development mode" or "debug mode". It's what you'll likely be running as you develop your app. It does the same as the build task but with some important distinctions.</p><ul><li>As well as building your source it also runs your tests using Karma</li><li>This task is not triggered on a once-only basis, rather your files are watched and each tweak of a file will result in a new build and a fresh run of your tests. Nice eh?</li><li>It spins up a simple web server and serves up the contents of <code>./dist</code> (i.e. your built code) in order that you can easily test out your app.</li><li>In addition, whilst it builds your source it does <em>not</em> minify your code and it emits sourcemaps. For why? For debugging! You can go to <code>http://localhost:8080/</code> in your browser of choice, fire up the dev tools and you're off to the races; debugging like gangbusters. It also doesn't bother to provide cache-busting filenames as Chrome dev tools are smart enough to not cache localhost.</li><li>Oh and Karma.... If you've got problems with a failing test then head to <code>http://localhost:9876/</code> and you can debug the tests in your dev tools.</li><li>Finally, it runs ESLint in the console. Not all of my files are TypeScript; essentially the build process (aka "gulp-y") files are all vanilla JS. So they're easily breakable. ESLint is there to provide a little reassurance on that front.</li></ul></dd></dl>

Now let's dig into each of these in a little more detail

## WebPack

Let's take a look at what's happening under the covers of `webpack.build()` and `webpack.watch()`.

[WebPack](https://github.com/webpack/webpack) with [ts-loader](https://github.com/TypeStrong/ts-loader) and [babel-loader](https://github.com/babel/babel-loader) is what we're using to compile our ES6 TypeScript. ts-loader uses the TypeScript compiler to, um, compile TypeScript and emit ES6 code. This is then passed on to the babel-loader which transpiles it from ES6 down to ES-old-school. It all gets brought together in 2 files; `main.js` which contains the compiled result of the code written by us and `vendor.js` which contains the compiled result of 3rd party / vendor files. The reason for this separation is that vendor files are likely to change fairly rarely whilst our own code will constantly be changing. This separation allows for quicker compile times upon file changes as, for the most part, the vendor files will not need to included in this process.

Our `gulpfile.js` above uses the following task:

```js
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var webpackConfig = require('../webpack.config.js');

function buildProduction(done) {
  // modify some webpack config options
  var myProdConfig = Object.create(webpackConfig);
  myProdConfig.output.filename = '[name].[hash].js';

  myProdConfig.plugins = myProdConfig.plugins.concat(
    // make the vendor.js file with cachebusting filename
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  );

  // run webpack
  webpack(myProdConfig, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log(
      '[webpack:build]',
      stats.toString({
        colors: true,
      }),
    );

    if (done) {
      done();
    }
  });
}

function createDevCompiler() {
  // show me some sourcemap love people
  var myDevConfig = Object.create(webpackConfig);
  myDevConfig.devtool = 'inline-source-map';
  myDevConfig.debug = true;

  myDevConfig.plugins = myDevConfig.plugins.concat(
    // Make the vendor.js file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
    }),
    new WebpackNotifierPlugin({
      title: 'webpack build',
      excludeWarnings: true,
    }),
  );

  // create a single instance of the compiler to allow caching
  return webpack(myDevConfig);
}

function buildDevelopment(done, devCompiler) {
  // run webpack
  devCompiler.run(function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build-dev', err);
    }
    gutil.log(
      '[webpack:build-dev]',
      stats.toString({
        chunks: false, // dial down the output from webpack (it can be noisy)
        colors: true,
      }),
    );

    if (done) {
      done();
    }
  });
}

function bundle(options) {
  var devCompiler;

  function build(done) {
    if (options.shouldWatch) {
      buildDevelopment(done, devCompiler);
    } else {
      buildProduction(done);
    }
  }

  if (options.shouldWatch) {
    devCompiler = createDevCompiler();

    gulp.watch('src/**/*', function () {
      build();
    });
  }

  return new Promise(function (resolve, reject) {
    build(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve('webpack built');
      }
    });
  });
}

module.exports = {
  build: function () {
    return bundle({ shouldWatch: false });
  },
  watch: function () {
    return bundle({ shouldWatch: true });
  },
};
```

Hopefully this is fairly self-explanatory; essentially `buildDevelopment` performs the development build (providing sourcemap support) and `buildProduction` builds for Production (providing minification support). Both are driven by this `webpack.config.js`:

```js
/* eslint-disable no-var, strict, prefer-arrow-callback */
'use strict';

var path = require('path');

module.exports = {
  cache: true,
  entry: {
    // The entry point of our application; the script that imports all other scripts in our SPA
    main: './src/main.tsx',

    // The packages that are to be included in vendor.js
    vendor: ['babel-polyfill', 'events', 'flux', 'react'],
  },

  // Where the output of our compilation ends up
  output: {
    path: path.resolve(__dirname, './dist/scripts'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
  },

  module: {
    loaders: [
      {
        // The loader that handles ts and tsx files.  These are compiled
        // with the ts-loader and the output is then passed through to the
        // babel-loader.  The babel-loader uses the es2015 and react presets
        // in order that jsx and es6 are processed.
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader',
      },
      {
        // The loader that handles any js files presented alone.
        // It passes these to the babel-loader which (again) uses the es2015
        // and react presets.
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  plugins: [],
  resolve: {
    // Files with the following extensions are fair game for webpack to process
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
};
```

## Inject

Your compiled output needs to be referenced from some kind of HTML page. So we've got this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>ES6 + Babel + React + Flux + Karma: The Secret Recipe</title>

    <!-- inject:css -->
    <!-- endinject -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div id="content"></div>
    <!-- inject:js -->
    <!-- endinject -->
  </body>
</html>
```

Which is no more than a boilerplate HTML page with a couple of key features:

- a single `&lt;div /&gt;` element in the `&lt;body /&gt;` which is where our React app is going to be rendered.
- `&lt;!-- inject:css --&gt;` and `&lt;!-- inject:js --&gt;` placeholders where css and js is going to be injected by `gulp-inject`.
- a single `&lt;link /&gt;` to the Bootstrap CDN. This sample app doesn't actually serve up any css generated as part of the project. It could but it doesn't. When it comes to injection time no css will actually be injected. This has been left in place as, more typically, a project would have some styling served up.

This is fed into our inject task in `inject.build()` and `inject.watch()`. They take css and javascript and, using our shell template, create a new page which has the css and javascript dropped into their respective placeholders:

```js
'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var glob = require('glob');

function injectIndex(options) {
  var postInjectCb = options.postInjectCb;
  var postInjectCbTriggerId = null;
  function run() {
    var target = gulp.src('./src/index.html');
    var sources = gulp.src(
      [
        //'./dist/styles/main*.css',
        './dist/scripts/vendor*.js',
        './dist/scripts/main*.js',
      ],
      { read: false },
    );

    return target
      .on('end', function () {
        // invoke postInjectCb after 1s
        if (postInjectCbTriggerId || !postInjectCb) {
          return;
        }

        postInjectCbTriggerId = setTimeout(function () {
          postInjectCb();
          postInjectCbTriggerId = null;
        }, 1000);
      })
      .pipe(
        inject(sources, {
          ignorePath: '/dist/',
          addRootSlash: false,
          removeTags: true,
        }),
      )
      .pipe(gulp.dest('./dist'));
  }

  var jsCssGlob = 'dist/**/*.{js,css}';

  function checkForInitialFilesThenRun() {
    glob(jsCssGlob, function (er, files) {
      var filesWeNeed = [
        'dist/scripts/main',
        'dist/scripts/vendor' /*, 'dist/styles/main'*/,
      ];

      function fileIsPresent(fileWeNeed) {
        return files.some(function (file) {
          return file.indexOf(fileWeNeed) !== -1;
        });
      }

      if (filesWeNeed.every(fileIsPresent)) {
        run('initial build');
      } else {
        checkForInitialFilesThenRun();
      }
    });
  }

  checkForInitialFilesThenRun();

  if (options.shouldWatch) {
    gulp.watch(jsCssGlob, function (evt) {
      if (evt.path && evt.type === 'changed') {
        run(evt.path);
      }
    });
  }
}

module.exports = {
  build: function () {
    return injectIndex({ shouldWatch: false });
  },
  watch: function (postInjectCb) {
    return injectIndex({ shouldWatch: true, postInjectCb: postInjectCb });
  },
};
```

This also triggers the server to serve up the new content.

## Static Files

Your app will likely rely on a number of static assets; images, fonts and whatnot. This script picks up the static assets you've defined and places them in the `dist` folder ready for use:

```js
'use strict';

var gulp = require('gulp');
var cache = require('gulp-cached');

var targets = [
  // In my own example I don't use any of the targets below, they
  // are included to give you more of a feel of how you might use this
  { description: 'FONTS', src: './fonts/*', dest: './dist/fonts' },
  { description: 'STYLES', src: './styles/*', dest: './dist/styles' },
  { description: 'FAVICON', src: './favicon.ico', dest: './dist' },
  { description: 'IMAGES', src: './images/*', dest: './dist/images' },
];

function copy(options) {
  // Copy files from their source to their destination
  function run(target) {
    gulp
      .src(target.src)
      .pipe(cache(target.description))
      .pipe(gulp.dest(target.dest));
  }

  function watch(target) {
    gulp.watch(target.src, function () {
      run(target);
    });
  }

  targets.forEach(run);

  if (options.shouldWatch) {
    targets.forEach(watch);
  }
}

module.exports = {
  build: function () {
    return copy({ shouldWatch: false });
  },
  watch: function () {
    return copy({ shouldWatch: true });
  },
};
```

## Karma

Finally, we're ready to get our tests set up to run continually with Karma. `tests.watch()` triggers the following task:

```js
'use strict';

var Server = require('karma').Server;
var path = require('path');
var gutil = require('gulp-util');

module.exports = {
  watch: function () {
    // Documentation: https://karma-runner.github.io/0.13/dev/public-api.html
    var karmaConfig = {
      configFile: path.join(__dirname, '../karma.conf.js'),
      singleRun: false,

      plugins: [
        'karma-webpack',
        'karma-jasmine',
        'karma-mocha-reporter',
        'karma-sourcemap-loader',
        'karma-phantomjs-launcher',
        'karma-phantomjs-shim',
      ], // karma-phantomjs-shim only in place until PhantomJS hits 2.0 and has function.bind
      reporters: ['mocha'],
    };

    new Server(karmaConfig, karmaCompleted).start();

    function karmaCompleted(exitCode) {
      gutil.log('Karma has exited with:', exitCode);
      process.exit(exitCode);
    }
  },
};
```

When running in watch mode it's possible to debug the tests by going to: `http://localhost:9876/`. It's also possible to run the tests standalone with a simple `npm run test`. Running them like this also outputs the results to an [XML file in JUnit format](http://stackoverflow.com/q/442556/761388); this can be useful for integrating into CI solutions that don't natively pick up test results.

Whichever approach we use for running tests, we use the following `karma.conf.js` file to configure Karma:

```js
/* eslint-disable no-var, strict */
'use strict';

var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  // Documentation: https://karma-runner.github.io/0.13/config/configuration-file.html
  config.set({
    browsers: ['PhantomJS'],

    files: [
      'test/import-babel-polyfill.js', // This ensures we have the es6 shims in place from babel
      'test/**/*.tests.ts',
      'test/**/*.tests.tsx',
    ],

    port: 9876,

    frameworks: ['jasmine', 'phantomjs-shim'],

    logLevel: config.LOG_INFO, //config.LOG_DEBUG

    preprocessors: {
      'test/import-babel-polyfill.js': ['webpack', 'sourcemap'],
      'src/**/*.{ts,tsx}': ['webpack', 'sourcemap'],
      'test/**/*.tests.{ts,tsx}': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'eval-source-map', //'inline-source-map', - inline-source-map doesn't work at present
      debug: true,
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },

    webpackMiddleware: {
      quiet: true,
      stats: {
        colors: true,
      },
    },

    // reporter options
    mochaReporter: {
      colors: {
        success: 'bgGreen',
        info: 'cyan',
        warning: 'bgBlue',
        error: 'bgRed',
      },
    },

    junitReporter: {
      outputDir: 'test-results', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '',
    },
  });
};
```

As you can see, we're still using our webpack configuration from earlier to configure much of how the transpilation takes place.

And that's it; we have a workflow for developing in TypeScript using React with tests running in an automated fashion. I appreciated this has been a rather long blog post but I hope I've clarified somewhat how this all plugs together and works. Do leave a comment if you think I've missed something.

## Babel 5 -> Babel 6

This post has actually been sat waiting to be published for some time. I'd got this solution up and running with Babel 5. Then they shipped Babel 6 and (as is the way with "breaking changes") [broke sourcemap support](https://phabricator.babeljs.io/T2864) and thus torpedoed this workflow. Happily that's now [been resolved](https://github.com/babel/babel/pull/3108). But if you should experience any wonkiness - it's worth checking that you're using the latest and greatest of Babel 6.
