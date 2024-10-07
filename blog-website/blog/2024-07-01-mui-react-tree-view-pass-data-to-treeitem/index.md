---
slug: mui-react-tree-view-pass-data-to-treeitem
title: 'MUI React Tree View: pass data to TreeItem'
authors: johnnyreilly
tags: [react, mui]
image: ./title-image.png
hide_table_of_contents: false
description: 'Learn how to pass arbitrary data to individual nodes in the MUI treeview component so individual nodes can be customised; for instance implementing a loader.'
---

I'm a big fan of the Material-UI (MUI) library [treeview component](https://mui.com/x/react-tree-view/). I recently needed to do some customisation of the nodes in the treeview component I was rendering. The application I was working on acquired data for each node in our treeview component asynchronously. I wanted to show a loader for each node that was still loading.

Achieving this required passing data to individual nodes in the treeview component. This appears to not be officially supported by the MUI treeview component. However, it is possible and this post will show you how to do it.

The comment on [this GitHub issue](https://github.com/mui/material-ui/issues/33175#issuecomment-1469725522) suggests that this will be directly supported in MUI v6. Until that time, you'll have to slightly hack the component to achieve this.

I've written previously about [how to check children and uncheck parents in the MUI treeview component](../2024-05-25-mui-react-tree-view-check-children-uncheck-parents/index.md). This post builds on that one. But, you need not be using multiselect / checkboxes etc to use the approach in this post. It applies generally to usage of the treeview component.

![title image reading "MUI React Tree View: pass data to TreeItem" with the MUI logo](title-image.png)

<!--truncate-->

## The behaviour we want to implement

In the application I'm working on, we load data for each node in our treeview that is selected. While a nodes data is loading, we want to show a loader so users know that work is being done. We want to achieve something like this:

![a treeview with a loading spinner](recording-loader.gif)

The labels in the above GIF aren't relevant to this post. The key thing to note is that the treeview is showing a loader for nodes that are still loading. Strictly speaking, the loader is a spinner from the MUI library. The [`CircularProgress`](https://mui.com/material-ui/react-progress/#circular) component to be precise. However, the loader could be anything you like.

The question is: how do we pass data to individual nodes in the treeview component so we can customise them?

## The code

We can achieve this by using the `slots` and `slotProps` props on the `RichTreeView` component. (If you're using the `SimpleTreeView` that should work the same.) The `slots` prop allows us to customise the rendering of the treeview components. The `slotProps` prop allows us to pass data to the customised components. "Slots" is a MUI approach to customising components. You can read more about it [here](https://mui.com/base-ui/getting-started/usage/#slots).

The code below demonstrates how to pass data to individual nodes in the treeview component:

```tsx
function OurComponent() {
  // ...
  return (
    <RichTreeView
      defaultExpandedItems={initialExpandedItems}
      multiSelect={true}
      checkboxSelection={true}
      selectedItems={selectedIds}
      onSelectedItemsChange={handleSelectedItemsChange}
      items={treeViewNodes}
      // note that we're using the TreeItemWithLoading component here
      slots={{ item: TreeItemWithLoading }}
      slotProps={{
        item: {
          //@ts-expect-error this works but MUI doesn't officially support this prior to v6 - see https://github.com/mui/material-ui/issues/33175#issuecomment-1469725522
          'data-still-to-load-ids': data.stillToLoad,
        },
      }}
    />
  );
}
```

The two key parts of the code above are the `slots` and `slotProps` props. In `slots`, we're passing a `TreeItemWithLoading` component to customise the rendering - we'll implement that component in moment. We're also passing a `data-still-to-load-ids` prop to the `TreeItemWithLoading` component. This is the data we want to pass to the individual nodes in the treeview component. In our case, it's a list of node ids that we're still loading the data for. You could pass any data you like here.

The thing that's probably (hopefully) setting off alarm bells in your head is the `//@ts-expect-error` comment. This is in place because MUI doesn't officially support passing data to individual nodes in the treeview component, and consequently TypeScript shouts about it. However, passing arbitrary data does work. It will be received by the rendering component and so can be used. The comment is there to acknowledge that this is a hack and to get TypeScript to stop complaining about it.

Now let's look at the `TreeItemWithLoading` component:

```tsx
const TreeItemWithLoading = forwardRef(function TreeItemWithLoadingInternal(
  props: TreeItem2Props,
  ref: React.Ref<HTMLLIElement>,
) {
  return (
    <TreeItem2
      ref={ref}
      {...props}
      slots={{
        label: TreeItemLabelWithLoading,
      }}
      slotProps={{
        label: {
          //@ts-expect-error this works but MUI doesn't officially support this prior to v6 - see https://github.com/mui/material-ui/issues/33175#issuecomment-1469725522
          'data-is-loading': props['data-still-to-load-ids'].includes(
            props.itemId,
          ),
        },
      }}
    />
  );
});
```

The `TreeItemWithLoading` component is a wrapper around the `TreeItem2` component. You'll note in our code we're using the [`TreeItem2` component](https://mui.com/x/react-tree-view/#tree-item-components). I won't explicitly discuss this, but it's worth noting that the `TreeItem2` component is intended to replace the `TreeItem` component in a future version of MUI; the `TreeItem2` component is more flexible and allows for more customisation.

Anyway, the `TreeItemWithLoading` component is where the magic happens. For every node in the treeview, this component will be rendered. All it does is render a `TreeItem2` component, but with some customisation. Again using the `slots` / `slotProps` properties, it customises the underlying label component that is rendered. It replaces the default label component (`TreeItem2Label`) with a custom one that shows a loader if the node is still loading, that component is named `TreeItemLabelWithLoading`. We'll implement it in a moment.

The `TreeItemWithLoading` component is also responsible for passing the `data-is-loading` prop to the `TreeItemLabelWithLoading` component. You'll note that we're just passing a `boolean` this time which we construct by comparing the id of the node to the list of ids that are still loading.

Finally, let's look at the `TreeItemLabelWithLoading` component:

```tsx
function TreeItemLabelWithLoading(props: {
  children: string;
  className: string;
  'data-is-loading': boolean;
}) {
  const { children, 'data-is-loading': isLoading, ...other } = props;
  return (
    <TreeItem2Label {...other}>
      {children}
      {isLoading && <CircularProgress size="1em" sx={{ marginLeft: 0.5 }} />}
    </TreeItem2Label>
  );
}
```

This is just a wrapper of the `TreeItem2Label` component that would have been rendered by default. The only difference being: if the `data-is-loading` value passed is truthy, a loader (`CircularProgress`) component is rendered next to the label to indicate the loading state.

Consider the image below:

![screenshot of the treeview](screenshot-with-loader.webp)

Notice that there are three nodes in this picture. Two without a loader, one with. This is the result of the logic in our `TreeItemLabelWithLoading` component.

## Putting it all together

Now we've walked through how it works, let's put all the code together in one place:

```tsx
function OurComponent() {
  // ...
  return (
    <RichTreeView
      defaultExpandedItems={initialExpandedItems}
      multiSelect={true}
      checkboxSelection={true}
      selectedItems={selectedIds}
      onSelectedItemsChange={handleSelectedItemsChange}
      items={treeViewNodes}
      // note that we're using the TreeItemWithLoading component here
      slots={{ item: TreeItemWithLoading }}
      slotProps={{
        item: {
          //@ts-expect-error this works but MUI doesn't officially support this prior to v6 - see https://github.com/mui/material-ui/issues/33175#issuecomment-1469725522
          'data-still-to-load-ids': data.stillToLoad,
        },
      }}
    />
  );
}

function TreeItemLabelWithLoading(props: {
  children: string;
  className: string;
  'data-is-loading': boolean;
}) {
  const { children, 'data-is-loading': isLoading, ...other } = props;
  return (
    <TreeItem2Label {...other}>
      {children}
      {isLoading && <CircularProgress size="1em" sx={{ marginLeft: 0.5 }} />}
    </TreeItem2Label>
  );
}

const TreeItemWithLoading = forwardRef(function TreeItemWithLoadingInternal(
  props: TreeItem2Props,
  ref: React.Ref<HTMLLIElement>,
) {
  return (
    <TreeItem2
      ref={ref}
      {...props}
      slots={{
        label: TreeItemLabelWithLoading,
      }}
      slotProps={{
        label: {
          //@ts-expect-error this works but MUI doesn't officially support this prior to v6 - see https://github.com/mui/material-ui/issues/33175#issuecomment-1469725522
          'data-is-loading': props['data-still-to-load-ids'].includes(
            props.itemId,
          ),
        },
      }}
    />
  );
});
```

The above will allow you to pass data to the components rendering the elements that make up your treeview, and allow you to customise accordingly.

I'm not completely certain this is "the way" that is advised. But it is a way that works. I'm going to follow up with the MUI team to ensure this is good advice.
