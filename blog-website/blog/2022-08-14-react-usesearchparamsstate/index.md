The React [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate) hook is a great way to persist state inside the context of a component in React. This post demonstrates a simple React hook that stores state in the URL querystring.

## `useState`

Usage of the `useState` hook looks like this:

```ts
const [greeting, setGreeting] = useState('hello world');

// ....

setTotal('hello John'); // will set greeting to 'hello John '
```

However, there is a disadvantage to using `useState`; that state is not persistent and not shareable. So if you want someone else to see what you can see in an application, you're reliant on them carrying out the same actions that got your application into its current state. Doing that can be time consuming and error prone. Wouldn't it be great if there was a simple way to share state? 

## URL and `useState`

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

What it doesn't do 

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

const [tabIndex, setTabIndex] = useSearchParamsState("tabIndex", "0");
```

