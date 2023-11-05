---
slug: react-component-curry
title: 'React Component Curry'
authors: johnnyreilly
tags: [react]
hide_table_of_contents: false
description: 'React 0.14 introduces stateless functional components to reduce code for components where state isnt required, while also allowing for currying.'
---

Everyone loves curry don't they? I don't know about you but I'm going for one on Friday.

<!--truncate-->

When React 0.14 shipped, it came with a new way to write React components. Rather than as an ES2015 class or using `React.createClass` there was now another way: stateless functional components.

These are components which have no state (the name gives it away) and a simple syntax; they are a function which takes your component props as a single parameter and they return JSX. Think of them as the render method of a standard component just with props as a parameter.

The advantage of these components is that they can reduce the amount of code you have to write for a component which requires no state. This is even more true if you're using ES2015 syntax as you have arrow functions and destructuring to help.Embrace the terseness!

## Mine's a Balti

There is another advantage of this syntax. If you have a number of components which share similar implementation you can easily make component factories by currying:

```jsx
function iconMaker(fontAwesomeClassName: string) {
  return (props) => <i className={`fa ${fontAwesomeClassName}`} />;
}

const ThumbsUpIcon = iconMaker('fa-thumbs-up');
const TrophyIcon = iconMaker('fa-trophy');

// Somewhere in else inside a render function:

<p>
  This is totally <ThumbsUpIcon />
  .... You should win a <TrophyIcon />
</p>;
```

So our `iconMaker` is a function which, when called with a [Font Awesome](http://fontawesome.io/) class name produces a function which, when invoked, will return a the HTML required to render that icon. This is a super simple example, a bhaji if you will, but you can imagine how useful this technique can be when you've more of a banquet in mind.
