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

