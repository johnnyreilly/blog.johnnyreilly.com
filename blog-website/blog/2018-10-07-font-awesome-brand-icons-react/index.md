---
slug: font-awesome-brand-icons-react
title: 'Brand New Fonting Awesomeness'
authors: johnnyreilly
tags: [react]
hide_table_of_contents: false
description: 'Learn how to use brand icons with Font Awesome 5 in React with these helpful instructions on @fortawesome/free-brands-svg-icons.'
---

Love me some [Font Awesome](https://fontawesome.com). Absolutely wonderful. However, I came a cropper when following the instructions [on using the all new Font Awesome 5 with React](https://fontawesome.com/how-to-use/on-the-web/using-with/react). The instructions for standard icons work _fine_. But if you want to use brand icons then this does not help you out much. There's 2 problems:

<!--truncate-->

1. Font Awesome's brand icons are not part of [`@fortawesome/free-solid-svg-icons`](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons) package
2. The method of icon usage illustrated (i.e. with the `FontAwesomeIcon` component) doesn't work. It doesn't render owt.

## Brand Me Up Buttercup

You want brands? Well you need the [`@fortawesome/free-brands-svg-icons`](https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons). Obvs, right?

```sh
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-brands-svg-icons
yarn add @fortawesome/react-fontawesome
```

Now usage:

```jsx
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export const Framework = () => (
  <div>
    Favorite Framework: <FontAwesomeIcon icon={faReact} />
  </div>
);
```

Here we've ditched the "library / magic-string" approach from the documentation for one which explicitly imports and uses the required icons. I suspect this will be good for tree-shaking as well but, hand-on-heart, I haven't rigorously tested that. I'm not sure why the approach I'm using isn't documented actually. Mysterious! I've seen no ill-effects from using it but perhaps YMMV. Proceed with caution...

## Update: It is documented!

Yup - information on this approach is out there; but it's less obvious than you might hope. [Read all about it here.](https://github.com/FortAwesome/react-fontawesome#explicit-import) For what it's worth, the explicit import approach seems to be playing second fiddle to the library / magic-string one. I'm not too sure why. For my money, explicit imports are clearer, less prone to errors and better setup for optimisation. Go figure...

Feel free to set me straight in the comments!
