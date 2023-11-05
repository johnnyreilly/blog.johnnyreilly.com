---
slug: react-select-with-less-typing-lag
title: 'react-select with less typing lag'
authors: johnnyreilly
tags: [react]
hide_table_of_contents: false
description: 'Fix lagging in `react-select`. Change `filterOption` to `ignoreAccents: false` for faster typing experience with 1000+ items.'
---

This is going out to all those people using [`react-select`](https://react-select.com) with 1000+ items to render. To those people typing into the select and saying out loud "it's _so_ laggy.... This can't be... It's 2019... I mean, right?" To the people who read this [GitHub issue](https://github.com/JedWatson/react-select/issues/3128) top to bottom 30 times and still came back unsure of what to do. This is for you.

<!--truncate-->

I'm lying. Mostly this goes out to me. I have a select box. I need it to render 2000+ items. I want it to be lovely. I want my users to be delighted as they use it. I want them to type in and (_this is the crucial part!_) for the control to feel responsive. Not laggy. Not like each keypress is going to Jupiter and back before it renders to the screen.

Amongst the various gems on the GitHub issue are shared CodeSandboxes illustrating ways to integrate react-select with react-window. That's great and they do improve things. However, they don't do much to improve the laggy typing feel. There's [brief mention](https://github.com/JedWatson/react-select/issues/3128#issuecomment-431397942) of a props tweak you can make to react-select; this:

```js
filterOption={createFilter({ ignoreAccents: false })}
```

What does this do? Well, this improves the typing lag experience _massively_. For why? Well, [if you look at the code](https://github.com/JedWatson/react-select/blob/292bad3298f2cafad6767f2134bd79a9c27e4073/src/filters.js#L21) you find that the default value is `ignoreAccents: true`. This default makes react-select invoke an expensive (and scary sounding) function called [`stripDiacritics`](https://github.com/JedWatson/react-select/blob/292bad3298f2cafad6767f2134bd79a9c27e4073/src/diacritics.js#L90). Not once but twice. Ouchy. And this kills performance.

But if you're okay with accents not being ignored (and _spoiler_: I am) then this is the option for you.

Here's a CodeSandbox which also includes the `ignoreAccents: false` tweak. Enjoy!

[![Edit johnnyreilly/react-window-with-react-select-less-laggy](play-codesandbox.svg)](https://codesandbox.io/s/zn70lqp31m?fontsize=14)

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select, { createFilter } from 'react-select';
import { FixedSizeList as List } from 'react-window';

import './styles.css';

const options = [];
for (let i = 0; i < 2500; i = i + 1) {
  options.push({ value: i, label: `Option ${i}` });
}

const height = 35;

class MenuList extends Component {
  render() {
    const { options, children, maxHeight, getValue } = this.props;
    const [value] = getValue();
    const initialOffset = options.indexOf(value) * height;

    return (
      <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </List>
    );
  }
}

const App = () => (
  <Select
    filterOption={createFilter({ ignoreAccents: false })} // this makes all the difference!
    components={{ MenuList }}
    options={options}
  />
);

ReactDOM.render(<App />, document.getElementById('root'));
```
