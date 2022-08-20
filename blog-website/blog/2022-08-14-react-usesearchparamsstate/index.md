The React [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate) hook is a great way to persist state inside the context of a component in React. This post demonstrates a simple React hook that stores state in the URL querystring.

## `useState`

Usage of the `useState` hook looks like this:

```ts
const [greeting, setGreeting] = useState('hello world');

// ....

setTotal('hello John'); // will set greeting to 'hello John '
```

However, there is a disadvantage to using `useState`; that state is not persistent and not shareable. So if you want someone else to see what you can see in an application, you're reliant on them carrying out the same actions that got your application into its current state. Doing that can be time consuming and error prone. Wouldn't it be great if there was a simple way to share state? 

## A stateful URL

An effective way to share state between users, without needing a backend for persistence, is with the URL. A URL can contain the required state in the form of the route and the querystring / search parameters. The search parameters are particularly powerful as they are entirely generic and hence customisable. As long as the URL limit (around [2000 chars](https://stackoverflow.com/a/417184/761388)) is not exceeded, you're free to persist state in your URL. Imagine:

https://our-app.com?greeting=hi

If you're working with React, the [React Router](https://reactrouter.com/) project makes consuming search parameters straightforward with the [`useSearchParams`](https://reactrouter.com/docs/en/v6/hooks/use-search-params) hook:

```ts
import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams();

const greeting = searchParams.get('greeting');

// ...

setSearchParams({ 'greeting': 'bonjour' }); // will set URL like so https://our-app.com?greeting=bonjour - this value will feed through to anything driven by the URL
```

This is a great mechanism for persisting state both locally and in a shareable way.

A significant benefit of this approach is that it doesn't require posting to the server. It's just using browser APIs like the History API. Changing a query string parameter happens entirely locally and instantaneously.

## The `useSearchParamsState` hook

What the `useSearchParams` hook doesn't do, is maintain other query parameters.

If you are maintaining multiple pieces of state in your application, that will likely mean multiple query string parameters. What would be quite useful, is a hook which allows us the update state *without* losing other state. Furthermore, it would be great if we didn't have to first acquire the `searchParams` object and then manipulate it. It's time for our `useSearchParamsState` hook:

```ts
import { useSearchParams } from "react-router-dom";

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
const [greeting, setGreeting] = useSearchParamsState("greeting", "hello");
```

An exciting bonus of this approach is that routes rendered by React Router.
