The React `useState` hook is a great way to persist state inside the context of a component in React.

However, there is a disadvantage to using `useState`; that state is not shareable. So if you want someone else to see what you can see in an application, you're reliant on them carrying out the same actions that got your current app into that state.

https://reactrouter.com/docs/en/v6/hooks/use-search-params



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

    const setSearchParamsState = (newTotalOrTime: string) => {
        const next = Object.assign(
            {},
            [...searchParams.entries()].reduce(
                (o, [key, value]) => ({ ...o, [key]: value }),
                {}
            ),
            { [searchParamName]: newTotalOrTime }
        );
        setSearchParams(next);
    };
    return [searchParamsState, setSearchParamsState];
}

const [tabIndex, setTabIndex] = useSearchParamsState("tabIndex", "0");
```

