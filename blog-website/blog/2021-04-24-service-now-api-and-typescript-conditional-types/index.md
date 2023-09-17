---
slug: service-now-api-and-typescript-conditional-types
title: 'The Service Now API and TypeScript Conditional Types'
authors: johnnyreilly
tags: [typescript]
image: ./ts-ervice-now.png
hide_table_of_contents: false
description: 'Learn how to model ServiceNow REST API results using TypeScript conditional types to minimise repetition and remain strongly typed.'
---

The [Service Now REST API](https://docs.servicenow.com/bundle/paris-application-development/page/build/applications/concept/api-rest.html) is an API which allows you to interact with Service Now. It produces different shaped results based upon the [`sysparm_display_value` query parameter](https://docs.servicenow.com/bundle/paris-application-development/page/integrate/inbound-rest/concept/c_TableAPI.html#c_TableAPI__table-GET). This post looks at how we can model these API results with TypeScripts conditional types. The aim being to minimise repetition whilst remaining strongly typed. This post is specifically about the Service Now API, but the principles around conditional type usage are generally applicable.

![Service Now and TypeScript](ts-ervice-now.png)

<!--truncate-->

## The power of a query parameter

There is a query parameter which many endpoints in Service Nows Table API support named `sysparm_display_value`. The docs describe it thus:

> Data retrieval operation for reference and choice fields.
> Based on this value, retrieves the display value and/or the actual value from the database.
>
> Valid values:
>
> - `true`: Returns the display values for all fields.
> - `false`: Returns the actual values from the database.
> - `all`: Returns both actual and display value

Let's see what that looks like when it comes to loading a Change Request. Consider the following curls:

```shell
# sysparm_display_value=all
curl "https://ourcompanyinstance.service-now.com/api/now/table/change_request?sysparm_query=number=CHG0122585&sysparm_limit=1&sysparm_display_value=all" --request GET --header "Accept:application/json" --user 'API_USERNAME':'API_PASSWORD' | jq '.result[0] | { state, sys_id, number, requested_by, reason }'

# sysparm_display_value=true
curl "https://ourcompanyinstance.service-now.com/api/now/table/change_request?sysparm_query=number=CHG0122585&sysparm_limit=1&sysparm_display_value=true" --request GET --header "Accept:application/json" --user 'API_USERNAME':'API_PASSWORD' | jq '.result[0] | { state, sys_id, number, requested_by, reason }'

# sysparm_display_value=false
curl "https://ourcompanyinstance.service-now.com/api/now/table/change_request?sysparm_query=number=CHG0122585&sysparm_limit=1&sysparm_display_value=false" --request GET --header "Accept:application/json" --user 'API_USERNAME':'API_PASSWORD' | jq '.result[0] | { state, sys_id, number, requested_by, reason }'
```

When executed, they each load the same Change Request from Service Now with a different value for `sysparm_display_value`. You'll notice there's some [`jq`](https://stedolan.github.io/jq/) in the mix as well. This is because there's a _lot_ of data in a Change Request. Rather than display everything, we're displaying a subset of fields. The first curl has a `sysparm_display_value` value of `all`, the second `false` and the third `true`. What do the results look like?

`sysparm_display_value=all`:

```json
{
  "state": {
    "display_value": "Closed",
    "value": "3"
  },
  "sys_id": {
    "display_value": "4d54d7481b37e010d315cbb5464bcb95",
    "value": "4d54d7481b37e010d315cbb5464bcb95"
  },
  "number": {
    "display_value": "CHG0122595",
    "value": "CHG0122595"
  },
  "requested_by": {
    "display_value": "Sally Omer",
    "link": "https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999",
    "value": "b15cf3ebdbe11300f196f3651d961999"
  },
  "reason": {
    "display_value": null,
    "value": ""
  }
}
```

`sysparm_display_value=true`:

```json
{
  "state": "Closed",
  "sys_id": "4d54d7481b37e010d315cbb5464bcb95",
  "number": "CHG0122595",
  "requested_by": {
    "display_value": "Sally Omer",
    "link": "https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999"
  },
  "reason": null
}
```

`sysparm_display_value=false`:

```json
{
  "state": "3",
  "sys_id": "4d54d7481b37e010d315cbb5464bcb95",
  "number": "CHG0122595",
  "requested_by": {
    "link": "https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999",
    "value": "b15cf3ebdbe11300f196f3651d961999"
  },
  "reason": ""
}
```

As you can see, we have the same properties being returned each time, but with a different shape. Let's call out some interesting highlights:

- `requested_by` is _always_ an object which contains `link`. It may also contain `value` and `display_value` depending upon `sysparm_display_value`
- `state`, `sys_id`, `number` and `reason` are objects containing `value` and `display_value` when `sysparm_display_value` is `all`. Otherwise, the value of `value` or `display_value` is surfaced up directly; not in an object.
- most values are strings, even if they represent another data type. So `state.value` is always a stringified number. The only exception to this rule is `reason.display_value` which can be `null`

## Type Definition time

We want to create type definitions for these API results. We could of course create three different results, but that would involve duplication. Boo! It's worth bearing in mind we're looking at a subset of five properties in this example. In reality, there are many, many properties on a Change Request. Whilst this example is for a subset, if we wanted to go on to create the full type definition the duplication would become very impractical.

What can we do? Well, if all of the underlying properties were of the same type, we could use a generic and be done. But given the underlying types can vary, that's not going to work. We can achieve this though through using a combination of generics and conditional types.

Let's begin by creating a string literal type of the possible values of `sysparm_display_value`:

```ts
export type DisplayValue = 'all' | 'true' | 'false';
```

## Making a `PropertyValue` type

Next we need to create a type that models the object with `display_value` and `value` properties.

:::info a type for state, sys_id, number and reason

- `state`, `sys_id`, `number` and `reason` are objects containing `value` and `display_value` when `sysparm_display_value` is `'all'`. Otherwise, the value of `value` or `display` is surfaced up directly; not in an object.
- most values are strings, even if they represent another data type. So `state.value` is always a stringified number. The only exception to this rule is `reason.display_value` which can be `null`

:::

```ts
export interface ValueAndDisplayValue<TValue = string, TDisplayValue = string> {
  display_value: TDisplayValue;
  value: TValue;
}
```

Note that this is a generic property with a default type of `string` for both `display_value` and `value`. Most of the time, `string` is the type in question so it's great that TypeScript allows us to cut down on the amount of syntax we use.

Now we're going to create our first conditional type:

```ts
export type PropertyValue<
  TAllTrueFalse extends DisplayValue,
  TValue = string,
  TDisplayValue = string,
> = TAllTrueFalse extends 'all'
  ? ValueAndDisplayValue<TValue, TDisplayValue>
  : TAllTrueFalse extends 'true'
  ? TDisplayValue
  : TValue;
```

The `PropertyValue` will either be a `ValueAndDisplayValue`, a `TDisplayValue` or a `TValue`, depending upon whether `PropertyValue` is `'all'`, `'true'` or `'false'` respectively. That's hard to grok. Let's look at an example of each of those cases using the `reason` property, which allows a `TValue` of `string` and a `TDisplayValue` of `string | null`:

```ts
const reasonAll: PropertyValue<'all', string, string | null> = {
  display_value: null,
  value: '',
};
const reasonTrue: PropertyValue<'true', string, string | null> = null;
const reasonFalse: PropertyValue<'false', string, string | null> = '';
```

Consider the type on the left and the value on the right. We're successfully modelling our `PropertyValue`s. I've deliberately picked an edge case example to push our conditional type to its limits.

## Service Now Change Request States

Let's look at another usage. We'll create a type that repesents the possible values of a Change Request's `state` in Service Now. Do take a moment to appreciate these values. Many engineers were lost in the numerous missions to obtain these rare and secret enums. Alas, the Service Now API docs have some significant gaps.

```ts
/** represents the possible Change Request "State" values in Service Now */
export const STATE = {
  NEW: '-5',
  ASSESS: '-4',
  SENT_FOR_APPROVAL: '-3',
  SCHEDULED: '-2',
  APPROVED: '-1',
  WAITING: '1',
  IN_PROGRESS: '2',
  COMPLETE: '3',
  ERROR: '4',
  CLOSED: '7',
} as const;

export type State = (typeof STATE)[keyof typeof STATE];
```

By combining `State` and `PropertyValue`, we can strongly type the `state` property of Change Requests. Consider:

```ts
const stateAll: PropertyValue<'all', State> = {
  display_value: 'Closed',
  value: '3',
};
const stateTrue: PropertyValue<'true', State> = 'Closed';
const stateFalse: PropertyValue<'false', State> = '3';
```

With that in place, let's turn our attention to our other natural type that the `requested_by` property demonstrates.

## Making a `LinkValue` type

:::info a type for requested_by

`requested_by` is _always_ an object which contains `link`. It may also contain `value` and `display_value` depending upon `sysparm_display_value`

:::

```ts
interface Link {
  link: string;
}

/** when TAllTrueFalse is 'false' */
export interface LinkAndValue extends Link {
  value: string;
}

/** when TAllTrueFalse is 'true' */
export interface LinkAndDisplayValue extends Link {
  display_value: string;
}

/** when TAllTrueFalse is 'all' */
export interface LinkValueAndDisplayValue
  extends LinkAndValue,
    LinkAndDisplayValue {}
```

The three types above model the different scenarios. Now we need a conditional type to make use of them:

```ts
export type LinkValue<TAllTrueFalse extends DisplayValue> =
  TAllTrueFalse extends 'all'
    ? LinkValueAndDisplayValue
    : TAllTrueFalse extends 'true'
    ? LinkAndDisplayValue
    : LinkAndValue;
```

This is hopefully simpler to read than the `PropertyValue` type, and if you look at the examples below you can see what usage looks like:

```ts
const requested_byAll: LinkValue<'all'> = {
  display_value: 'Sally Omer',
  link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',
  value: 'b15cf3ebdbe11300f196f3651d961999',
};
const requested_byTrue: LinkValue<'true'> = {
  display_value: 'Sally Omer',
  link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',
};
const requested_byFalse: LinkValue<'false'> = {
  link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',
  value: 'b15cf3ebdbe11300f196f3651d961999',
};
```

## Making our complete type

With these primitives in place, we can now build ourself a (cut-down) type that models a Change Request:

```ts
export interface ServiceNowChangeRequest<TAllTrueFalse extends DisplayValue> {
  state: PropertyValue<TAllTrueFalse, State>;
  sys_id: PropertyValue<TAllTrueFalse>;
  number: PropertyValue<TAllTrueFalse>;
  requested_by: LinkValue<TAllTrueFalse>;
  reason: PropertyValue<TAllTrueFalse, string, string | null>;
  // there are *way* more properties in reality
}
```

This is a generic type which will accept `'all'`, `'true'` or `'false'` and will use that type to drive the type of the properties _inside_ the object. And now we have successfully typed our Service Now Change Request, thanks to TypeScript's conditional types.

To test it out, let's take the JSON responses we got back from our curls at the start, and see if we can make `ServiceNowChangeRequest`s with them.

```ts
const changeRequestFalse: ServiceNowChangeRequest<'false'> = {
  state: '3',
  sys_id: '4d54d7481b37e010d315cbb5464bcb95',
  number: 'CHG0122595',
  requested_by: {
    link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',
    value: 'b15cf3ebdbe11300f196f3651d961999',
  },
  reason: '',
};

const changeRequestTrue: ServiceNowChangeRequest<'true'> = {
  state: 'Closed',
  sys_id: '4d54d7481b37e010d315cbb5464bcb95',
  number: 'CHG0122595',
  requested_by: {
    display_value: 'Sally Omer',
    link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',
  },
  reason: null,
};

const changeRequestAll: ServiceNowChangeRequest<'all'> = {
  state: {
    display_value: 'Closed',
    value: '3',
  },
  sys_id: {
    display_value: '4d54d7481b37e010d315cbb5464bcb95',
    value: '4d54d7481b37e010d315cbb5464bcb95',
  },
  number: {
    display_value: 'CHG0122595',
    value: 'CHG0122595',
  },
  requested_by: {
    display_value: 'Sally Omer',
    link: 'https://ourcompanyinstance.service-now.com/api/now/table/sys_user/b15cf3ebdbe11300f196f3651d961999',
    value: 'b15cf3ebdbe11300f196f3651d961999',
  },
  reason: {
    display_value: null,
    value: '',
  },
};
```

We can! Do take a look at this in the [TypeScript playground](https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBDAnmYcAiBLAzmANgQ0QDV9cBXVAXjgHJTca4AfWmKCxlmgM1K2BoBuAFDDQkWHAwA7GMCi8AxqhLlgAQWkATTDgLFSFADwAVVRTjUsbGQHMANHBO68hc1TjWodgHxwA3sJwwXBa2K6IAPoAbobAAFxOLvruIiFwsWqJZnEiAL6i4tDwSChwAApQECiwBmpGQSEm6ri4JuzAAGJ8qKBy2ljo4Slx9o3BOWqWnjbSDuNJw25x0152wn7Uza3tFN24-HB9wAO09DQLAPxw7po6S3XGkxSOzg-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-qiz86KYKYuxa+pkKb-IwcjQhhVcBO3BFjdOvpdtl2eRPVBv+Psiz+wzcHMR2aIGSOgbApOhakHFpUfSzBTKK06LZTWzlDbTEuL5ZYjxNiRVIbXRKvjvKLHuOsUKlhwHsPdoI9hojKb9RvutSKDtYogA).
