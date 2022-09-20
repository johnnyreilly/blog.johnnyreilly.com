---
title: 'React: storing state in URL with URLSearchParams'
authors: johnnyreilly
tags: [React, QueryString, URLSearchParams, TypeScript, React Router]
hide_table_of_contents: false
---

The React [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate) hook is a great way to persist state inside the context of a component in React. This post demonstrates a simple React hook that stores state in the URL querystring, building on top of React Routers `useSearchParams` hook.

## `useState`

Usage of the `useState` hook looks like this:

```ts
const [greeting, setGreeting] = useState('hello world');

// ....

setGreeting('hello John'); // will set greeting to 'hello John'
```

However, there is a disadvantage to using `useState`; that state is not persistent and not shareable. So if you want someone else to see what you can see in an application, you're reliant on them carrying out the same actions that got your application into its current state. Doing that can be time consuming and error prone. Wouldn't it be great if there was a simple way to share state?

## A stateful URL

An effective way to share state between users, without needing a backend for persistence, is with the URL. A URL can contain the required state in the form of the route and the querystring / search parameters. The search parameters are particularly powerful as they are entirely generic and customisable.

Thanks to the [URLSearchParams API](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams), it's possible to manipulate the querystring _without_ round-tripping to the server. This is a primitive upon which we can build; as long as the URL limit (around [2000 chars](https://stackoverflow.com/a/417184/761388)) is not exceeded, we're free to persist state in your URL. Consider:

https://our-app.com?greeting=hi

The URL above is storing a single piece of state; the `greeting`. Consider:

https://our-app.com?greeting=hi&name=john

The URL above is going further and storing multiple pieces of state; the `greeting` and `name`.

## `useSearchParams`

If you're working with React, the [React Router](https://reactrouter.com/) project makes consuming state in the URL, particularly in the form of querystring or search parameters, straightforward. It achieves this with the [`useSearchParams`](https://reactrouter.com/docs/en/v6/hooks/use-search-params) hook:

```ts
import { useSearchParams } from 'react-router-dom';

const [searchParams, setSearchParams] = useSearchParams();

const greeting = searchParams.get('greeting');

// ...

setSearchParams({ greeting: 'bonjour' }); // will set URL like so https://our-app.com?greeting=bonjour - this value will feed through to anything driven by the URL
```

This is a great mechanism for persisting state both locally and in a shareable way.

A significant benefit of this approach is that it doesn't require posting to the server. It's just using browser APIs like the URLSearchParams API. Changing a query string parameter happens entirely locally and instantaneously.

## The `useSearchParamsState` hook

What the `useSearchParams` hook doesn't do, is maintain other query string or search parameters.

If you are maintaining multiple pieces of state in your application, that will likely mean multiple query string or search parameters. What would be quite useful, is a hook which allows us the update state _without_ losing other state. Furthermore, it would be great if we didn't have to first acquire the `searchParams` object and then manipulate it. It's time for our `useSearchParamsState` hook:

```ts
import { useSearchParams } from 'react-router-dom';

export function useSearchParamsState(
  searchParamName: string,
  defaultValue: string
): readonly [
  searchParamsState: string,
  setSearchParamsState: (newState: string) => void
] {
  const [searchParams, setSearchParams] = useSearchParams();

  const acquiredSearchParam = searchParams.get(searchParamName);
  const searchParamsState = acquiredSearchParam ?? defaultValue;

  const setSearchParamsState = (newState: string) => {
    const next = Object.assign(
      {},
      [...searchParams.entries()].reduce(
        (o, [key, value]) => ({ ...o, [key]: value }),
        {}
      ),
      { [searchParamName]: newState }
    );
    setSearchParams(next);
  };
  return [searchParamsState, setSearchParamsState];
}
```

The above hook can roughly be thought of as `useState<string>` but storing that state in the URL.

Let's think about how it works. When initialised, the hook takes two parameters:

- `searchParamName` - this is the name of the querystring parameter where state is persisted.
- `defaultValue` - if there is no value in the querystring, this is the fallback value

The hook then goes on to wrap the `useSearchParams` hook. It interrogates the `searchParams` for the supplied `searchParamName`, and if it isn't present, falls back to the `defaultValue`.

The `setSearchParamsState` method definition looks somewhat complicated but essentially all it does is get the contents of the existing search parameters, and applies the new state for the current property. It's probably worth pausing here a second to observe an opinion that's lurking in this implementation. It is actually valid to have multiple values for the same search parameter. Whilst this is possible, it's somewhat rare for this to be used. This implementation only allows for a single value for any given parameter, as that is quite useful behaviour.

With all this in place, we have a hook that can be used like so:

```ts
const [greeting, setGreeting] = useSearchParamsState('greeting', 'hello');
```

The above code returns back a `greeting` value which is derived from the `greeting` search parameter. It also returns a `setGreeting` function which allows setting the `greeting` value. This is the same API as `useState` and so should feel idiomatic to a user of React. Tremendous!

## Persisting querystring across your site

Now we have this exciting mechanism set up which allows us to store state in our URL and consequently easily share state by sending someone our URL.

What would also be useful is a way to navigate around our site _without_ losing that state. Imagine I've got a date range selected and stored in my URL. As I click around from screen to screen, I want to persist that. I don't want to have to reselect the date range on each screen.

How can we do this? Well, it turns out to be quite easy. All we need is the `useLocation` hook and the corresponding `location.search` property. That represents the querystring, hence every time we render a link we just include that like so:

```ts
const [location] = useLocation();

return (<Link to={`/my-page${location.search}`}>Page</>)
```

Now as we navigate around our site, that state will be maintained.

## Conclusion

In this post we've created a `useSearchParamsState` hook, which allows state to be persisted to URLs for sharing purposes.

[This post was originally published on LogRocket.](https://blog.logrocket.com/use-state-url-persist-state-usesearchparams/)
