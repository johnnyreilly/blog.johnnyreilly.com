---
slug: its-not-dead-2-mobx-react-devtools-and-the-undead
title: "It's Not Dead 2: mobx-react-devtools and the undead"
authors: johnnyreilly
tags: [webpack]
hide_table_of_contents: false
description: 'Using `mobx-react-devtools` with `process.env.NODE_ENV` caused problems with webpack production mode. A different approach fixed the issue.'
---

I spent today digging through our webpack 4 config trying to work out why a production bundle contained code like this:

```js
if("production"!==e.env.NODE_ENV){//...
```

My expectation was that with webpack 4 and `'mode': 'production'` this meant that behind the scenes all `process.env.NODE_ENV` statements should be converted to `'production'`. Subsequently Uglify would automatically get its groove on with the resulting `if("production"!=="production") ...` and et voilà!... Strip the dead code.

It seemed that was not the case. I was seeing (regrettably) undead code. And who here actually likes the undead?

<!--truncate-->

## Who Betrayed Me?

My beef was with webpack. It done did me wrong. Or... So I thought. webpack did nothing wrong. It is pure and good and unjustly complained about. It was my other love: [mobx](https://github.com/mobxjs/mobx). Or to be more specific: [mobx-react-devtools](https://github.com/mobxjs/mobx-react-devtools).

It turns out that the way you use `mobx-react-devtools` reliably makes the difference. It's the cause of the stray `("production"!==e.env.NODE_ENV)` statements in our bundle output. After a **long** time I happened upon [this issue](https://github.com/mobxjs/mobx-react-devtools/issues/66#issuecomment-365151531) which contained a gem by one [Giles Butler](https://github.com/gilesbutler). His suggested way to reference `mobx-react-devtools` is (as far as I can tell) the solution!

On a dummy project I had the `mobx-react-devtools` advised code in place:

```js
import * as React from 'react';
import { Layout } from './components/layout';
import DevTools from 'mobx-react-devtools';

export const App: React.SFC<{}> = (_props) => (
  <div className="ui container">
    <Layout />
    {process.env.NODE_ENV !== 'production' ? (
      <DevTools position={{ bottom: 20, right: 20 }} />
    ) : null}
  </div>
);
```

With this I had a build size of 311kb. Closer examination of my bundle revealed that my `bundle.js` was riddled with `("production"!==e.env.NODE_ENV)` statements. Sucks, right?

Then I tried this instead:

```js
import * as React from 'react';
import { Layout } from './components/layout';
const { Fragment } = React;

const DevTools =
  process.env.NODE_ENV !== 'production'
    ? require('mobx-react-devtools').default
    : Fragment;

export const App: React.SFC<{}> = (_props) => (
  <div className="ui container">
    <Layout />
    <DevTools position={{ bottom: 20, right: 20 }} />
  </div>
);
```

With this approach I got a build size of 191kb. This was thanks to the dead code being actually stripped. That's a saving of 120kb!

## Perhaps We Change the Advice?

There's a suggestion that the README should be changed to reflect this advice - until that happens, I wanted to share this solution. Also, I've a nagging feeling that I've missed something pertinent here; if someone knows something that I should... Tell me please!
