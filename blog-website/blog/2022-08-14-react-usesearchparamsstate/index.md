The React [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate) hook is a great way to persist state inside the context of a component in React.

```ts
const [total, setTotal] = useState(0);

// ....

setTotal(42); // will set total to 42
```

However, there is a disadvantage to using `useState`; that state is not shareable. So if you want someone else to see what you can see in an application, you're reliant on them carrying out the same actions that got your app into its current state. This can be time consuming and error prone.

An effective way to share state between users, without needing a backend for persistence, is with the URL. A URL can contain the required state in the form of the route and the query or search parameters. The search parameters are particularly powerful as they are entirely generic and hence customisable. As long as the URL limit (around [2000 chars](https://stackoverflow.com/a/417184/761388)) is not exceeded, you're free to persist state in your URL. Imagine:

https://our-app.com?total=42

If you're working with React, the [React Router](https://reactrouter.com/) project makes consuming search parameters straightforward with the [`useSearchParams`](https://reactrouter.com/docs/en/v6/hooks/use-search-params) hook:

```ts
import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams();

const total = searchParams.get('total');

// ...

setSearchParams({ 'total': 42 }); // will set URL like so https://our-app.com?total=42 - this value will feed through to anything driven by the URL
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

