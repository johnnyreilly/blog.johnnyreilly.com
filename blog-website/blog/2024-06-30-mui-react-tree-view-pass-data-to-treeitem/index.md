---
slug: mui-react-tree-view-pass-data-to-treeitem
title: 'MUI React Tree View: pass data to TreeItem'
authors: johnnyreilly
tags: [react]
image: ./title-image.png
hide_table_of_contents: false
description: 'Learn how to pass arbitrary data to individual nodes in the MUI treeview component so individual nodes can be customised; for instance implementing a loader.'
---

I'm a big fan of the Material-UI (MUI) library [treeview component](https://mui.com/x/react-tree-view/). I recently needed to do some customisation of the nodes in the treeview component I was rendering. The application I was working on acquired data for each node in our treeview component asynchronously. I wanted to show a loader for each node that was still loading.

Achieving this required passing data to individual nodes in the treeview component. This appears to not be officially supported by the MUI treeview component. However, it is possible and this post will show you how to do it.

The comment on [this GitHub issue](https://github.com/mui/material-ui/issues/33175#issuecomment-1469725522) suggests that this will be directly supported in MUI v6. Until that time, you'll have to slightly hack the component to achieve this.

I've written previously about [how to check children and uncheck parents in the MUI treeview component](../2024-05-25-mui-react-tree-view-check-children-uncheck-parents/index.md). This post builds on that one. And in fact, the behaviour we're implementing here is related to the behaviour we implemented in that post.

![title image reading "MUI React Tree View: pass data to TreeItem" with the MUI logo](title-image.png)

<!--truncate-->

## The behaviour we want to implement

In the application I'm working on we load data for each node in our treeview that is selected. While a nodes data is loading, we want to show a loader so users know that work is being done. We want to achieve something like this:

![a treeview with a loading spinner](recording-loader.gif)

The labels in the above GIF aren't relevant to this post. The key thing to note is that the treeview is showing a loader for nodes that are still loading. Strictly speaking, the loader is a spinner from the MUI library. The [`CircularProgress`](https://mui.com/material-ui/react-progress/#circular) component to be precise. However, the loader could be anything you like.

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
