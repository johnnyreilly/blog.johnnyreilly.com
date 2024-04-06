---
slug: typescript-and-eslint-meet-fork-ts-checker-webpack-plugin
title: 'Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)'
authors: johnnyreilly
tags: [fork-ts-checker-webpack-plugin, webpack, javascript, typescript, eslint]
hide_table_of_contents: false
description: 'The `fork-ts-checker-webpack-plugin` adds support for ESLint. Replace TSLint with related packages in `package.json` and configure with `.eslintrc.js`.'
---

The `fork-ts-checker-webpack-plugin` has, since its inception, performed two classes of checking:

<!--truncate-->

1. Compilation errors which the TypeScript compiler surfaces up
2. Linting issues which TSLint reports

[You may have caught the announcement that TSLint is being deprecated and ESLint is the future of linting in the TypeScript world.](https://eslint.org/blog/2019/01/future-typescript-eslint) This plainly has a bearing on linting in `fork-ts-checker-webpack-plugin`.

[I've been beavering away at adding support for ESLint to the fork-ts-checker-webpack-plugin.](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/pull/305) I'm happy to say, the plugin now supports ESLint. Do you want to get your arms all around ESLint with `fork-ts-checker-webpack-plugin`? Read on!

## How do you migrate from TSLint to ESLint?

Well, first of all you need the latest and greatest `fork-ts-checker-webpack-plugin`. Support for ESLint shipped with [v1.4.0](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/releases/tag/v1.4.0).

You need to change the options you supply to the plugin in your `webpack.config.js` to look something like this:

```js
new ForkTsCheckerWebpackPlugin({ eslint: true });
```

You'll also need the various ESLint related packages to your `package.json`:

```js
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

- `eslint`
- `@typescript-eslint/parser`: The parser that will allow ESLint to lint TypeScript code
- `@typescript-eslint/eslint-plugin`: A plugin that contains ESLint rules that are TypeScript specific

If you want, you can pass options to ESLint using the `eslintOptions` option as well. These will be passed through to the underlying ESLint CLI Engine when it is instantiated. Docs on the supported options are [documented here](https://eslint.org/docs/developer-guide/nodejs-api#cliengine).

## Go Configure

Now you're ready to use ESLint, you just need to give it some configuration. Typically, an `.eslintrc.js` is what you want here.

```js
const path = require('path');
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
```

If you're a React person (and I am!) then you'll also need: `yarn add eslint-plugin-react`. Then enrich your `eslintrc.js` a little:

```js
const path = require('path');
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    '@typescript-eslint',
    'react',
    // 'prettier' commented as we don't want to run prettier through eslint because performance
  ],
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // 'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'prettier/react', // disables react-specific linting rules that conflict with prettier
    // 'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    // These rules don't add much value, are better covered by TypeScript and good definition files
    'react/no-direct-mutation-state': 'off',
    'react/no-deprecated': 'off',
    'react/no-string-refs': 'off',
    'react/require-render-return': 'off',

    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ], // also want to use with ".tsx"
    'react/prop-types': 'off', // Is this incompatible with TS props type?
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
```

You can add Prettier into the mix too. You can see how it is used in the above code sample. But given the impact that has on performance I wouldn't recommend it; hence it's commented out. [There's a good piece by Rob Cooper's for more details on setting up Prettier and VS Code with TypeScript and ESLint.](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

## Performance and Power Tools

It's worth noting that support for TypeScript in ESLint is still brand new. As such, the rule of "Make it Work, Make it Right, Make it Fast" applies.... ESLint with TypeScript still has some performance issues which should be ironed out in the fullness of time. You can [track them here](https://github.com/typescript-eslint/typescript-eslint/issues/389).

This is important to bear in mind as, when I converted a large codebase over to using ESLint, I discovered that initial performance of linting was terribly slow. Something that's worth doing right now is identifying which rules are costing you most timewise and tweaking based on whether you think they're earning their keep.

The [`TIMING` environment variable](https://eslint.org/docs/developer-guide/working-with-rules#per-rule-performance) can be used to provide a report on the relative cost performance wise of running each rule. A nice way to plug this into your workflow is to add the `cross-env` package to your project: `yarn add cross-env -D` and then add 2 scripts to your `package.json`:

```
"lint": "eslint ./",
"lint-rule-timings": "cross-env TIMING=1 yarn lint"
```

- `lint` \- just runs the linter standalone
- `lint-rule-timings` \- does the same but with the `TIMING` environment variable set to 1 so a report will be generated.

I'd advise, making use of `lint-rule-timings` to identify which rules are costing you performance and then turning `off` rules as you need to. Remember, different rules have different value.

[Finally, if you'd like to see how it's done, here's an example of porting from TSLint to ESLint.](https://github.com/TypeStrong/ts-loader/pull/960)
