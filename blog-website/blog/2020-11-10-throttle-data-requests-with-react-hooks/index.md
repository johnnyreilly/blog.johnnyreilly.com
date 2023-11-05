---
slug: throttle-data-requests-with-react-hooks
title: 'Throttling data requests with React Hooks'
authors: johnnyreilly
tags: [react]
hide_table_of_contents: false
description: 'A custom React Hook `useThrottleRequests` is used to solve the problem of loading large amounts of data gradually and displaying loading progress.'
---

When an application loads data, typically relatively few HTTP requests will be made. For example, if we imagine we're making a student administration application, then a "view" screen might make a single HTTP request to load that student's data before displaying it.

<!--truncate-->

Occasionally there's a need for an application to make a large number of HTTP requests. Consider a reporting application which loads data and then aggregates it for presentation purposes.

This need presents two interesting problems to solve:

1. how do we load data gradually?
2. how do we present loading progress to users?

This post will talk about how we can tackle these and demonstrate using a custom React Hook.

## Let's bring Chrome to its knees

We'll begin our journey by spinning up a TypeScript React app with [Create React App](https://create-react-app.dev/):

```shell
npx create-react-app throttle-requests-react-hook --template typescript
```

Because we're going to be making a number of asynchronous calls, we're going to simplify the code by leaning on the widely used [`react-use`](https://github.com/streamich/react-use) for a [`useAsync`](https://github.com/streamich/react-use/blob/master/docs/useAsync/index.md) hook.

```shell
cd throttle-requests-react-hook
yarn add react-use
```

We'll replace the `App.css` file with this:

```css
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-labelinput > * {
  margin: 0.5em;
  font-size: 24px;
}

.App-link {
  color: #61dafb;
}

.App-button {
  font-size: calc(10px + 2vmin);
  margin-top: 0.5em;
  padding: 1em;
  background-color: cornflowerblue;
  color: #ffffff;
  text-align: center;
}

.App-progress {
  padding: 1em;
  background-color: cadetblue;
  color: #ffffff;
}

.App-results {
  display: flex;
  flex-wrap: wrap;
}

.App-results > * {
  padding: 1em;
  margin: 0.5em;
  background-color: darkblue;
  flex: 1 1 300px;
}
```

Then we'll replace the `App.tsx` contents with this:

```tsx
import React, { useState } from 'react';
import { useAsync } from 'react-use';
import './App.css';

function use10_000Requests(startedAt: string) {
  const responses = useAsync(async () => {
    if (!startedAt) return;

    // make 10,000 unique HTTP requests
    const results = await Promise.all(
      Array.from(Array(10_000)).map(async (_, index) => {
        const response = await fetch(
          `/manifest.json?querystringValueToPreventCaching=${startedAt}_request-${index}`,
        );
        const json = await response.json();
        return json;
      }),
    );

    return results;
  }, [startedAt]);

  return responses;
}

function App() {
  const [startedAt, setStartedAt] = useState('');
  const responses = use10_000Requests(startedAt);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The HTTP request machine</h1>
        <button
          className="App-button"
          onClick={(_) => setStartedAt(new Date().toISOString())}
        >
          Make 10,000 requests
        </button>
        {responses.loading && <div>{progressMessage}</div>}
        {responses.error && <div>Something went wrong</div>}
        {responses.value && (
          <div className="App-results">
            {responses.value.length} requests completed successfully
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
```

The app that we've built is very simple; it's a button which, when you press it, fires 10,000 HTTP requests in parallel using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). The data being requested in this case is an arbitrary JSON file; the `manifest.json`. If you look closely you'll see we're doing some querystring tricks with our URL to avoid getting cached data.

In fact, for this demo we're not interested in the results of these HTTP requests; rather we're interested in how the browser copes with this approach. (Spoiler: not well!) It's worth considering that requesting a text file from a server running on the same machine as the browser should be fast.

So we'll run `yarn start` and go to [http://localhost:3000](http://localhost:3000) to get to the app. Running with Devtools open results in the following unhappy affair:

![](i-want-it-all.gif)

The GIF above has been edited significantly for length. In reality it took 20 seconds for the first request to be fired, prior to that Chrome was unresponsive. When requests did start to fire, a significant number failed with `net::ERR_INSUFFICIENT_RESOURCES`. Further to that, those requests that were fired sat in "Stalled" state prior to being executed. This is a consequence of [Chrome limiting the number of connections - all browsers do this](https://developers.google.com/web/tools/chrome-devtools/network/reference#timing):

> There are already six TCP connections open for this origin, which is the limit. Applies to HTTP/1.0 and HTTP/1.1 only.

In summary, the problems with the current approach are:

1. the browser becoming unresponsive
2. failing HTTP requests due to insufficient resources
3. no information displayed to the user around progress

## Throttle me this

Instead of hammering the browser by firing all the requests at once, we could instead implement a throttle. A throttle is a mechanism which allows you to limit the rate at which operations are performed. In this case we want to limit the rate at which HTTP requests are made. A throttle will tackle problems 1 and 2 - essentially keeping the browser free and easy and ensuring that requests are all successfully sent. We also want to keep our users informed around how progress is going. It's time to unveil the `useThrottleRequests` hook:

```ts
import { useMemo, useReducer } from 'react';
import { AsyncState } from 'react-use/lib/useAsync';

/** Function which makes a request */
export type RequestToMake = () => Promise<void>;

/**
 * Given an array of requestsToMake and a limit on the number of max parallel requests
 * queue up those requests and start firing them
 * - inspired by Rafael Xavier's approach here: https://stackoverflow.com/a/48007240/761388
 *
 * @param requestsToMake
 * @param maxParallelRequests the maximum number of requests to make - defaults to 6
 */
async function throttleRequests(
  requestsToMake: RequestToMake[],
  maxParallelRequests = 6,
) {
  // queue up simultaneous calls
  const queue: Promise<void>[] = [];
  for (let requestToMake of requestsToMake) {
    // fire the async function, add its promise to the queue,
    // and remove it from queue when complete
    const promise = requestToMake().then((res) => {
      queue.splice(queue.indexOf(promise), 1);
      return res;
    });
    queue.push(promise);

    // if the number of queued requests matches our limit then
    // wait for one to finish before enqueueing more
    if (queue.length >= maxParallelRequests) {
      await Promise.race(queue);
    }
  }
  // wait for the rest of the calls to finish
  await Promise.all(queue);
}

/**
 * The state that represents the progress in processing throttled requests
 */
export type ThrottledProgress<TData> = {
  /** the number of requests that will be made */
  totalRequests: number;
  /** the errors that came from failed requests */
  errors: Error[];
  /** the responses that came from successful requests */
  values: TData[];
  /** a value between 0 and 100 which represents the percentage of requests that have been completed (whether successfully or not) */
  percentageLoaded: number;
  /** whether the throttle is currently processing requests */
  loading: boolean;
};

function createThrottledProgress<TData>(
  totalRequests: number,
): ThrottledProgress<TData> {
  return {
    totalRequests,
    percentageLoaded: 0,
    loading: false,
    errors: [],
    values: [],
  };
}

/**
 * A reducing function which takes the supplied `ThrottledProgress` and applies a new value to it
 */
function updateThrottledProgress<TData>(
  currentProgress: ThrottledProgress<TData>,
  newData: AsyncState<TData>,
): ThrottledProgress<TData> {
  const errors = newData.error
    ? [...currentProgress.errors, newData.error]
    : currentProgress.errors;

  const values = newData.value
    ? [...currentProgress.values, newData.value]
    : currentProgress.values;

  const percentageLoaded =
    currentProgress.totalRequests === 0
      ? 0
      : Math.round(
          ((errors.length + values.length) / currentProgress.totalRequests) *
            100,
        );

  const loading =
    currentProgress.totalRequests === 0
      ? false
      : errors.length + values.length < currentProgress.totalRequests;

  return {
    totalRequests: currentProgress.totalRequests,
    loading,
    percentageLoaded,
    errors,
    values,
  };
}

type ThrottleActions<TValue> =
  | {
      type: 'initialise';
      totalRequests: number;
    }
  | {
      type: 'requestSuccess';
      value: TValue;
    }
  | {
      type: 'requestFailed';
      error: Error;
    };

/**
 * Create a ThrottleRequests and an updater
 */
export function useThrottleRequests<TValue>() {
  function reducer(
    throttledProgressAndState: ThrottledProgress<TValue>,
    action: ThrottleActions<TValue>,
  ): ThrottledProgress<TValue> {
    switch (action.type) {
      case 'initialise':
        return createThrottledProgress(action.totalRequests);

      case 'requestSuccess':
        return updateThrottledProgress(throttledProgressAndState, {
          loading: false,
          value: action.value,
        });

      case 'requestFailed':
        return updateThrottledProgress(throttledProgressAndState, {
          loading: false,
          error: action.error,
        });
    }
  }

  const [throttle, dispatch] = useReducer(
    reducer,
    createThrottledProgress<TValue>(/** totalRequests */ 0),
  );

  const updateThrottle = useMemo(() => {
    /**
     * Update the throttle with a successful request
     * @param values from request
     */
    function requestSucceededWithData(value: TValue) {
      return dispatch({
        type: 'requestSuccess',
        value,
      });
    }

    /**
     * Update the throttle upon a failed request with an error message
     * @param error error
     */
    function requestFailedWithError(error: Error) {
      return dispatch({
        type: 'requestFailed',
        error,
      });
    }

    /**
     * Given an array of requestsToMake and a limit on the number of max parallel requests
     * queue up those requests and start firing them
     * - based upon https://stackoverflow.com/a/48007240/761388
     *
     * @param requestsToMake
     * @param maxParallelRequests the maximum number of requests to make - defaults to 6
     */
    function queueRequests(
      requestsToMake: RequestToMake[],
      maxParallelRequests = 6,
    ) {
      dispatch({
        type: 'initialise',
        totalRequests: requestsToMake.length,
      });

      return throttleRequests(requestsToMake, maxParallelRequests);
    }

    return {
      queueRequests,
      requestSucceededWithData,
      requestFailedWithError,
    };
  }, [dispatch]);

  return {
    throttle,
    updateThrottle,
  };
}
```

The `useThrottleRequests` hook returns 2 properties:

- `throttle` \- a `ThrottledProgress&lt;TData&gt;` that contains the following data:

  - `totalRequests` \- the number of requests that will be made
  - `errors` \- the errors that came from failed requests
  - `values` \- the responses that came from successful requests
  - `percentageLoaded` \- a value between 0 and 100 which represents the percentage of requests that have been completed (whether successfully or not)
  - `loading` \- whether the throttle is currently processing requests

- `updateThrottle` \- an object which exposes 3 functions:

  - `queueRequests` \- the function to which you pass the requests that should be queued and executed in a throttled fashion
  - `requestSucceededWithData` \- the function which is called if a request succeeds to provide the data
  - `requestFailedWithError` \- the function which is called if a request fails to provide the error

That's a lot of words to describe our `useThrottleRequests` hook. Let's look at what it looks like by migrating our `use10_000Requests` hook to (no pun intended) use it. Here's a new implementation of `App.tsx`:

```tsx
import React, { useState } from 'react';
import { useAsync } from 'react-use';
import { useThrottleRequests } from './useThrottleRequests';
import './App.css';

function use10_000Requests(startedAt: string) {
  const { throttle, updateThrottle } = useThrottleRequests();
  const [progressMessage, setProgressMessage] = useState('not started');

  useAsync(async () => {
    if (!startedAt) return;

    setProgressMessage('preparing');

    const requestsToMake = Array.from(Array(10_000)).map(
      (_, index) => async () => {
        try {
          setProgressMessage(`loading ${index}...`);

          const response = await fetch(
            `/manifest.json?querystringValueToPreventCaching=${startedAt}_request-${index}`,
          );
          const json = await response.json();

          updateThrottle.requestSucceededWithData(json);
        } catch (error) {
          console.error(`failed to load ${index}`, error);
          updateThrottle.requestFailedWithError(error);
        }
      },
    );

    await updateThrottle.queueRequests(requestsToMake);
  }, [startedAt, updateThrottle, setProgressMessage]);

  return { throttle, progressMessage };
}

function App() {
  const [startedAt, setStartedAt] = useState('');

  const { progressMessage, throttle } = use10_000Requests(startedAt);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The HTTP request machine</h1>
        <button
          className="App-button"
          onClick={(_) => setStartedAt(new Date().toISOString())}
        >
          Make 10,000 requests
        </button>
        {throttle.loading && <div>{progressMessage}</div>}
        {throttle.values.length > 0 && (
          <div className="App-results">
            {throttle.values.length} requests completed successfully
          </div>
        )}
        {throttle.errors.length > 0 && (
          <div className="App-results">
            {throttle.errors.length} requests errored
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
```

Looking at the new `use10_000Requests` hook, there's a few subtle differences to our prior implementation. First of all, we're now exposing the `throttle`; a `ThrottleProgress&lt;TData&gt;`. Our updated hook also exposes a `progressMessage` which is a simple `string` stored with `useState` that we update as our throttle runs. In truth the information being surfaced here isn't that interesting. The `progressMessage` is in place just to illustrate that you could capture some data from your requests as they complete for display purposes; a running total for instance.

So, how does our new hook approach perform?

![](i-want-it-all-with-hook.gif)

Very well indeed! Please note that the above GIF has again been edited for brevity. If we look back at the problems we faced with the prior approach, how do we compare?

1. ~~the browser becoming unresponsive~~ \- the browser remains responsive.
2. ~~failing HTTP requests due to insufficient resources~~ \- the browser does not experience failing HTTP requests.
3. ~~no information displayable to the user around progress~~ \- details of progress are displayed to the user throughout.

Tremendous!

## What shall we build?

Our current example is definitely contrived. Let's try and apply our `useThrottleRequests` hook to a more realistic scenario. We're going to build an application which, given a repo on GitHub, lists all the contributors blogs. (You can specify a blog URL on your GitHub profile; many people use this to specify their Twitter profile.)

We can build this thanks to the excellent [GitHub REST API](https://docs.github.com/en/free-pro-team@latest/rest). It exposes two endpoints of interest given our goal.

### 1\. List repository contributors

[List repository contributors](https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repository-contributors) lists contributors to the specified repository at this URL: `GET https://api.github.com/repos/{owner}/{repo}/contributors`. The response is an array of objects, crucially featuring a `url` property that points to the user in question's API endpoint:

```js
[
  // ...
  {
    // ...
    url: 'https://api.github.com/users/octocat',
    // ...
  },
  // ...
];
```

### 2\. Get a user

[Get a user](https://docs.github.com/en/free-pro-team@latest/rest/reference/users#get-a-user) is the API that the `url` property above is referring to. When called it returns an object representing the publicly available information about a user:

```js
{
  // ...
  "name": "The Octocat",
  // ...
  "blog": "https://github.blog",
  // ...
}
```

## Blogging devs v1.0

We're now ready to build our blogging devs app; let's replace the existing `App.tsx` with:

```tsx
import React, { useCallback, useMemo, useState } from 'react';
import { useAsync } from 'react-use';
import { useThrottleRequests } from './useThrottleRequests';
import './App.css';

type GitHubUser = { name: string; blog?: string };

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function useContributors(contributorsUrlToLoad: string) {
  const { throttle, updateThrottle } = useThrottleRequests<GitHubUser>();
  const [progressMessage, setProgressMessage] = useState('');

  useAsync(async () => {
    if (!contributorsUrlToLoad) return;

    setProgressMessage('loading contributors');

    // load contributors from GitHub
    const contributorsResponse = await fetch(contributorsUrlToLoad);
    const contributors: { url: string }[] = await contributorsResponse.json();

    setProgressMessage(`loading ${contributors.length} contributors...`);

    // For each entry in result, retrieve the given user from GitHub
    const requestsToMake = contributors.map(({ url }, index) => async () => {
      try {
        setProgressMessage(
          `loading ${index} / ${contributors.length}: ${url}...`,
        );

        const response = await fetch(url);
        const json: GitHubUser = await response.json();

        // wait for 1 second before completing the request
        // - makes for better demos
        await timeout(1000);

        updateThrottle.requestSucceededWithData(json);
      } catch (error) {
        console.error(`failed to load ${url}`, error);
        updateThrottle.requestFailedWithError(error);
      }
    });

    await updateThrottle.queueRequests(requestsToMake);

    setProgressMessage('');
  }, [contributorsUrlToLoad, updateThrottle, setProgressMessage]);

  return { throttle, progressMessage };
}

function App() {
  // The owner and repo to query; we're going to default
  // to using DefinitelyTyped as an example repo as it
  // is one of the most contributed to repos on GitHub
  const [owner, setOwner] = useState('DefinitelyTyped');
  const [repo, setRepo] = useState('DefinitelyTyped');
  const handleOwnerChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setOwner(event.target.value),
    [setOwner],
  );
  const handleRepoChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setRepo(event.target.value),
    [setRepo],
  );

  const contributorsUrl = `https://api.github.com/repos/${owner}/${repo}/contributors`;

  const [contributorsUrlToLoad, setUrlToLoad] = useState('');
  const { progressMessage, throttle } = useContributors(contributorsUrlToLoad);

  const bloggers = useMemo(
    () => throttle.values.filter((contributor) => contributor.blog),
    [throttle],
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blogging devs</h1>

        <p>
          Show me the{' '}
          <a
            className="App-link"
            href={contributorsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            contributors for {owner}/{repo}
          </a>{' '}
          who have blogs.
        </p>

        <div className="App-labelinput">
          <label htmlFor="owner">GitHub Owner</label>
          <input
            id="owner"
            type="text"
            value={owner}
            onChange={handleOwnerChange}
          />
          <label htmlFor="repo">GitHub Repo</label>
          <input
            id="repo"
            type="text"
            value={repo}
            onChange={handleRepoChange}
          />
        </div>

        <button
          className="App-button"
          onClick={(e) => setUrlToLoad(contributorsUrl)}
        >
          Load bloggers from GitHub
        </button>

        {progressMessage && (
          <div className="App-progress">{progressMessage}</div>
        )}

        {throttle.percentageLoaded > 0 && (
          <>
            <h3>Behold {bloggers.length} bloggers:</h3>
            <div className="App-results">
              {bloggers.map((blogger) => (
                <div key={blogger.name}>
                  <div>{blogger.name}</div>
                  <a
                    className="App-link"
                    href={blogger.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {blogger.blog}
                  </a>
                </div>
              ))}
            </div>
          </>
        )}

        {throttle.errors.length > 0 && (
          <div className="App-results">
            {throttle.errors.length} requests errored
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
```

The application gives users the opportunity to enter the organisation and repository of a GitHub project. Then, when the button is clicked, it:

- loads the contributors
- for each contributor it loads the individual user (separate HTTP request for each)
- as it loads it communicates how far through the loading progress it has got
- as users are loaded, it renders a tile for each user with a listed blog

Just to make the demo a little clearer we've artificially slowed the duration of each request by a second. What does it look like when you put it together? Well like this:

![](blogging-devs.gif)

We have built a React Hook which allows us to:

- gradually load data
- without blocking the UI of the browser
- and which provides progress data to keep users informed.

[This post was originally published on LogRocket.](https://blog.logrocket.com/throttling-data-requests-with-react-hooks/)

<head>
    <link rel="canonical" href="https://blog.logrocket.com/throttling-data-requests-with-react-hooks/" />
</head>
