---
slug: using-gulp-in-asp-net-instead-of-web-optimization
title: 'Using Gulp to inject scripts and styles tags directly into your HTML'
authors: johnnyreilly
tags: [asp.net, node.js]
hide_table_of_contents: false
description: 'Learn how to use Gulp to directly inject scripts and styles into your HTML, which speeds up app times and makes the setup simpler.'
---

This is very probably the dullest title for a blog post I've ever come up with. Read on though folks - it's definitely going to pick up...

<!--truncate-->

I [wrote last year](../2014-11-04-using-gulp-in-visual-studio-instead-of-web-optimization/index.md) about my first usage of Gulp in an ASP.Net project. I used Gulp to replace the Web Optimization functionality that is due to disappear when ASP.Net v5 ships. What I came up with was an approach that provided pretty much the same functionality; raw source in debug mode, bundling + minification in release mode.

It worked by having a launch page which was straight HTML. Embedded within this page was JavaScript that would, at runtime, load the required JavaScript / CSS and inject it dynamically into the document. This approach worked but it had a number of downsides:

1. Each time you fired up the app the following sequence of events would happen: - jQuery would load (purely there to simplify the making of various startup AJAX calls)

- the page would make an AJAX call to the server to load various startup data, including whether the app is running in debug or release mode
- Depending on the result of the startup data either the debug or release package manifest would be loaded.
- For each entry in the package manifest `script` and `link` tags would be created and added to the document. These would generate further requests to the server to load the resources.

Quite a lot going on here isn't there? Accordingly, initial startup time was slower than you might hope. 2. The "F" word: [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content). Flash Of Unstyled Content - whilst all the hard work of the page load was going on (before the CSS had been loaded) the page would look rather ... bare. Not a terrible thing but none too slick either. 3. The gulpfile built both the debug and the release package each time it was run. This meant the gulp task generally did double the work that it needed to do.

I wanted to see if I could tackle these issues. I've recently been watching [John Papa](https://twitter.com/John_Papa)'s excellent [Pluralsight course on Gulp](http://www.pluralsight.com/courses/javascript-build-automation-gulpjs) and picked up a number of useful tips. With that in hand let's see what we can come up with...

## Death to dynamic loading

The main issue with the approach I've been using is the dynamic loading. It makes the app slower and more complicated. So the obvious solution is to have my gulpfile inject scripts and css into the template. To that end it's [wiredep](https://www.npmjs.com/package/wiredep) & [gulp-inject](https://www.npmjs.com/package/gulp-inject) to the rescue!

gulp-inject (as the name suggests) is used to inject `script` and `link` tags into source code. I'm using [Bower](http://bower.io/) as my client side package manager and so I'm going to use wiredep to determine the vendor scripts I need. It will determine what packages my app is using from looking at my `bower.json`, and give me a list of file paths in _dependency order_ (which I can then pass on to gulp-inject in combination with my own app script files). This means I don't have to think about ordering bower dependencies myself and I no longer need to separately maintain a list of these files within my gulpfile.

So, let's get the launch page (`index.html`) ready for gulp-inject:

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <style>
      .ng-hide {
        display: none !important;
      }
    </style>
    <title ng-bind="title">Proverb</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
    />

    <!-- inject:css -->
    <!-- endinject -->

    <link rel="icon" type="image/png" href="content/images/icon.png" />
  </head>
  <body>
    <div>
      <div ng-include="'app/layout/shell.html'"></div>
      <div id="splash-page" ng-show="false" class="dissolve-animation">
        <div class="page-splash">
          <div class="page-splash-message">Proverb</div>

          <div class="progress">
            <div
              class="progress-bar progress-bar-striped active"
              role="progressbar"
              style="width: 20%;"
            >
              <span class="sr-only">loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script>
      window.jQuery ||
        document.write('<script src="/build/jquery.min.js">\x3C/script>');
    </script>

    <!-- inject:js -->
    <!-- endinject -->

    <script>
      (function () {
        // Load startup data from the server
        $.getJSON('api/Startup').done(function (startUpData) {
          angularApp.start({
            thirdPartyLibs: {
              moment: window.moment,
              toastr: window.toastr,
              underscore: window._,
            },
            appConfig: startUpData,
          });
        });
      })();
    </script>
  </body>
</html>
```

The important thing to notice here are the `&lt;!-- inject:css --&gt;` and `&lt;!-- inject:js --&gt;` injection placeholders. It's here that our script and style tags will be injected into the template. You'll notice that jQuery is _not_ being injected - and that's because I've opted to use a CDN for jQuery and then only fallback to serving jQuery myself if the CDN fails.

The other thing to notice here is that our launch page has become oh so much simpler in comparison with the dynamic loading approach. Which is fab.

Now before we start looking at our gulpfile I want to split out the configuration into a standalone file called gulpfile.config.js:

```js
var tsjsmapjsSuffix = '.{ts,js.map,js}';

var bower = 'bower_components/';
var app = 'app/';

var config = {
  base: '.',
  buildDir: './build/',
  debug: 'debug',
  release: 'release',
  css: 'css',

  bootFile: app + 'index.html',
  bootjQuery: bower + 'jquery/dist/jquery.min.js',

  // The fonts we want Gulp to process
  fonts: [bower + 'fontawesome/fonts/*.*'],

  images: 'images/**/*.{gif,jpg,png}',

  // The scripts we want Gulp to process
  scripts: [
    // Bootstrapping
    app + 'app' + tsjsmapjsSuffix,
    app + 'config.route' + tsjsmapjsSuffix,

    // common Modules
    app + 'common/common' + tsjsmapjsSuffix,
    app + 'common/logger' + tsjsmapjsSuffix,
    app + 'common/spinner' + tsjsmapjsSuffix,

    // common.bootstrap Modules
    app + 'common/bootstrap/bootstrap.dialog' + tsjsmapjsSuffix,

    // directives
    app + 'directives/**/*' + tsjsmapjsSuffix,

    // services
    app + 'services/**/*' + tsjsmapjsSuffix,

    // controllers
    app + 'about/**/*' + tsjsmapjsSuffix,
    app + 'admin/**/*' + tsjsmapjsSuffix,
    app + 'dashboard/**/*' + tsjsmapjsSuffix,
    app + 'layout/**/*' + tsjsmapjsSuffix,
    app + 'sages/**/*' + tsjsmapjsSuffix,
    app + 'sayings/**/*' + tsjsmapjsSuffix,
  ],

  // The styles we want Gulp to process
  styles: ['content/styles.css'],

  wiredepOptions: {
    exclude: [/jquery/],
    ignorePath: '..',
  },
};

config.debugFolder = config.buildDir + config.debug + '/';
config.releaseFolder = config.buildDir + config.release + '/';

config.templateFiles = [
  app + '**/*.html',
  '!' + config.bootFile, // Exclude the launch page
];

module.exports = config;
```

Now to the meat of the matter - let me present the gulpfile:

```js
/// <vs AfterBuild='default' />
var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var ignore = require('gulp-ignore');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var del = require('del');
var path = require('path');
var templateCache = require('gulp-angular-templatecache');
var eventStream = require('event-stream');
var order = require('gulp-order');
var gulpUtil = require('gulp-util');
var wiredep = require('wiredep');
var inject = require('gulp-inject');

// Get our config
var config = require('./gulpfile.config.js');

/**
 * Get the scripts or styles the app requires by combining bower dependencies and app dependencies
 *
 * @param {string} jsOrCss Should be "js" or "css"
 */
function getScriptsOrStyles(jsOrCss) {
  var bowerScriptsAbsolute = wiredep(config.wiredepOptions)[jsOrCss];

  var bowerScriptsRelative = bowerScriptsAbsolute.map(
    function makePathRelativeToCwd(file) {
      return path.relative('', file);
    },
  );

  var appScripts = bowerScriptsRelative.concat(
    jsOrCss === 'js' ? config.scripts : config.styles,
  );

  return appScripts;
}

/**
 * Get the scripts the app requires
 */
function getScripts() {
  return getScriptsOrStyles('js');
}

/**
 * Get the styles the app requires
 */
function getStyles() {
  return getScriptsOrStyles('css');
}

/**
 * Get the scripts and the templates combined streams
 *
 * @param {boolean} isDebug
 */
function getScriptsAndTemplates(isDebug) {
  var options = isDebug ? { base: config.base } : undefined;
  var appScripts = gulp.src(getScripts(), options);

  //Get the view templates for $templateCache
  var templates = gulp
    .src(config.templateFiles)
    .pipe(templateCache({ module: 'app', root: 'app/' }));

  var combined = eventStream.merge(appScripts, templates);

  return combined;
}

gulp.task('clean', function (cb) {
  gulpUtil.log('Delete the build folder');

  return del([config.buildDir], cb);
});

gulp.task('boot-dependencies', ['clean'], function () {
  gulpUtil.log('Get dependencies needed for boot (jQuery and images)');

  var jQuery = gulp.src(config.bootjQuery);
  var images = gulp.src(config.images, { base: config.base });

  var combined = eventStream
    .merge(jQuery, images)
    .pipe(gulp.dest(config.buildDir));

  return combined;
});

gulp.task('inject-debug', ['styles-debug', 'scripts-debug'], function () {
  gulpUtil.log('Inject debug links and script tags into ' + config.bootFile);

  var scriptsAndStyles = [].concat(getScripts(), getStyles());

  return gulp
    .src(config.bootFile)
    .pipe(
      inject(
        gulp
          .src(
            [
              config.debugFolder + '**/*.{js,css}',
              '!build\\debug\\bower_components\\spin.js', // Exclude weird spin js path
            ],
            { read: false },
          )
          .pipe(order(scriptsAndStyles)),
      ),
    )
    .pipe(gulp.dest(config.buildDir));
});

gulp.task('inject-release', ['styles-release', 'scripts-release'], function () {
  gulpUtil.log('Inject release links and script tags into ' + config.bootFile);

  return gulp
    .src(config.bootFile)
    .pipe(
      inject(gulp.src(config.releaseFolder + '**/*.{js,css}', { read: false })),
    )
    .pipe(gulp.dest(config.buildDir));
});

gulp.task('scripts-debug', ['clean'], function () {
  gulpUtil.log('Copy across all JavaScript files to build/debug');

  return getScriptsAndTemplates(true).pipe(gulp.dest(config.debugFolder));
});

gulp.task('scripts-release', ['clean'], function () {
  gulpUtil.log('Concatenate & Minify JS for release into a single file');

  return getScriptsAndTemplates(false)
    .pipe(ignore.exclude('**/*.{ts,js.map}')) // Exclude ts and js.map files - not needed in release mode
    .pipe(concat('app.js')) // Make a single file
    .pipe(uglify()) // Make the file titchy tiny small
    .pipe(rev()) // Suffix a version number to it
    .pipe(gulp.dest(config.releaseFolder)); // Write single versioned file to build/release folder
});

gulp.task('styles-debug', ['clean'], function () {
  gulpUtil.log('Copy across all CSS files to build/debug');

  return gulp
    .src(getStyles(), { base: config.base })
    .pipe(gulp.dest(config.debugFolder));
});

gulp.task('styles-release', ['clean'], function () {
  gulpUtil.log('Copy across all files in config.styles to build/debug');

  return gulp
    .src(getStyles())
    .pipe(concat('app.css')) // Make a single file
    .pipe(minifyCss()) // Make the file titchy tiny small
    .pipe(rev()) // Suffix a version number to it
    .pipe(gulp.dest(config.releaseFolder + '/' + config.css)); // Write single versioned file to build/release folder
});

gulp.task('fonts-debug', ['clean'], function () {
  gulpUtil.log('Copy across all fonts in config.fonts to debug location');

  return gulp
    .src(config.fonts, { base: config.base })
    .pipe(gulp.dest(config.debugFolder));
});

gulp.task('fonts-release', ['clean'], function () {
  gulpUtil.log('Copy across all fonts in config.fonts to release location');

  return gulp
    .src(config.fonts)
    .pipe(gulp.dest(config.releaseFolder + '/fonts'));
});

gulp.task('build-debug', ['boot-dependencies', 'inject-debug', 'fonts-debug']);

gulp.task('build-release', [
  'boot-dependencies',
  'inject-release',
  'fonts-release',
]);

// Use the web.config to determine whether the default task should create a debug or a release build
// If the web.config contains this: '<compilation debug="true"' then we do a default build, otherwise
// we do a release build.  It's a little hacky but generally works
var fs = require('fs');
var data = fs.readFileSync(__dirname + '/web.config', 'UTF-8');
var inDebug = !!data.match(/<compilation debug="true"/);

gulp.task('default', [inDebug ? 'build-debug' : 'build-release']);
```

That's a big old lump of code. So let's go through this a task by task...

### clean

Deletes the `build` folder so we have a clean slate to build into.

### boot-dependencies

Copy across all files that are needed to allow the page to "boot" / startup. At present this is only jQuery and images.

### inject-debug and inject-release

This is the magic. This picks up the launch page (`index.html`), takes the JavaScript and CSS and injects the corresponding `script` and `link` tags into the page and writing it to the `build` folder. Either the original source code or the bundled / minified equivalent will be used depending on whether it's debug or release.

### scripts-debug and scripts-release

Here we collect up the following:

- the Bower specified JavaScript files
- the TypeScript + associated JavaScript files
- and we use our template files to construct a `templates.js` file to prime the Angular template cache

If it's the scripts-debug task we copy all these files into the `build/debug` folder. If it's the scripts-release task we also bundle, minify and strip the TypeScript out too and copy into the `build/release` folder.

### styles-debug and styles-release

Here we collect up the following:

- the Bower specified CSS files
- our own app CSS

If it's the styles-debug task we copy all these files into the `build/debug` folder. If it's the styles-release task we also bundle and minify and copy into the `build/release` folder.

### fonts-debug and fonts-release

Whether it's the debug or the release build we copy across the font-awesome assets and place them in a location which works for the associated CSS (as the CSS will depend upon font-awesome).

### build-debug, build-release and default

build-debug and build-release (as their name suggests) either perform a build for release or a build for debug. If you remember, the web optimization library in ASP.Net serves up the raw code ("debug" code) if the `compilation debug` flag in the `web.config` is set to `true`. If it is set to `false` then we get the bundled and minified code ("release" code) instead. Our default task tries its best to emulate this behaviour by doing a very blunt regex against the `web.config`. Simply, if it can match `&lt;compilation debug="true"` then it runs the debug build. Otherwise, the release build. It could be more elegant but there's a dearth of XML readers on npm that support synchronous parsing (which you kinda need for this scenario).

What I intend to do soon is switch from using the web.config to drive the gulp build to using the approach outlined [here](http://www.codecadwallader.com/2015/03/15/integrating-gulp-into-your-tfs-builds-and-web-deploy/). Namely plugging the build directly into Visual Studio's build process and using the type of build there.

Hopefully what I've written here makes it fairly clear how to use Gulp to directly inject scripts and styles directly into your HTML. If you want to look directly at the source then check out the Proverb.Web folder in [this repo](https://github.com/johnnyreilly/proverb-offline).
