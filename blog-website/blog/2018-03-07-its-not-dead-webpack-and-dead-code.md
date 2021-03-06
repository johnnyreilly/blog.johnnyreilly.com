---
title: "It's Not Dead: webpack and dead code elimination limitations"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: [webpack; dead code elimination; process.env.NODE_ENV; DefinePlugin]
hide_table_of_contents: false
---
Every now and then you can be surprised. Your assumptions turn out to be wrong.

 Webpack has long supported the notion of dead code elimination. webpack facilitates this through use of the `DefinePlugin`. The compile time value of `process.env.NODE_ENV` is set either to `'production'` or something else. If it's set to `'production'` then some dead code hackery can happen. [Libraries like React make use of this to serve up different, and crucially smaller, production builds.](<https://reactjs.org/docs/optimizing-performance.html#webpack>)

A (pre-webpack 4) production config file will typically contain this code:

```js
new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
}),
new UglifyJSPlugin(),
```

The result of the above config is that webpack will inject the value 'production' everywhere in the codebase where a `process.env.NODE_ENV` can be found. (In fact, as of webpack 4 setting this magic value is out-of-the-box behaviour for Production mode; yay the #0CJS!)

What this means is, if you've written:

```js
if (process.env.NODE_ENV !== 'production') {
  // Do a development mode only thing
}
```

webpack can and will turn this into

```js
if ('production' !== 'production') {
  // Do a development mode only thing
}
```

The [UglifyJSPlugin](<https://github.com/webpack-contrib/uglifyjs-webpack-plugin>) is there to minify the JavaScript in your bundles. As an added benefit, this plugin is smart enough to know that `'production' !== 'production'` is always `false`. And because it's smart, it chops the code. Dead code elimated.

You can read more about this [in the webpack docs](<https://webpack.js.org/guides/production/#specify-the-environment>).

## Limitations

Given what I've said, consider the following code:

```js
export class Config {
    // Other properties

    get isDevelopment() {
        return process.env.NODE_ENV !== 'production';
    }
}
```

This is a config class that exposes the expression `process.env.NODE_ENV !== 'production'` with the friendly name `isDevelopment`. You'd think that dead code elimination would be your friend here. It's not.

My personal expection was that dead code elimination would treat `Config.isDevelopment` and the expression `process.env.NODE_ENV !== 'production'` identically. Because they're identical.

However, this turns out not to be the case. Dead code elimination works just as you would hope when using the expression `process.env.NODE_ENV !== 'production'` directly in code. However webpack **only** performs dead code elimination for the **direct** usage of the `process.env.NODE_ENV !== 'production'` expression. I'll say that again: if you want dead code elimination then use the injected values; not an encapsulated version of them. It turns out you cannot rely on webpack flowing values through and performing dead code elimination on that basis.

The TL;DR: if you want to elimate dead code then \*always\* use `process.env.NODE_ENV !== 'production'`; don't abstract it. It doesn't work.

UglifyJS is smart. But not that smart.

<!--   In fact you can also use the <code>DefinePlugin</code> to chop dead code with other more friendly variables. Take the example below which injects a <code>boolean</code> called <code>IS_DEVELOPMENT</code>:</p> <pre class="prettyprint js">
new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    IS_DEVELOPMENT: JSON.stringify(true)
}),
new UglifyJSPlugin(),
</pre> -->


