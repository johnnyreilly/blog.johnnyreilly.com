---
slug: from-react-window-to-react-virtual
title: 'From react-window to react-virtual'
authors: johnnyreilly
tags: [react]
hide_table_of_contents: false
description: 'Switch from `react-window` to `react-virtual` for simpler code, TypeScript support and improved perceived performance.'
---

The tremendous [Tanner Linsley](https://twitter.com/tannerlinsley) recently released [`react-virtual`](https://github.com/tannerlinsley/react-virtual). `react-virtual` provides "hooks for virtualizing scrollable elements in React".

<!--truncate-->

I was already using the (also excellent) [`react-window`](https://github.com/bvaughn/react-window) for this purpose. `react-window` does the virtualising job and does it very well indeed However, I was both intrigued by the lure of the new shiny thing. I've also never been the biggest fan of `react-window`'s API. So I tried switching over from `react-window` to `react-virtual` as an experiment. To my delight, the experiment went so well I didn't look back!

What did I get out of the switch?

- Simpler code / nicer developer ergonomics. The API for `react-virtual` allowed me to simplify my code and lose a layer of components.
- TypeScript support in the box
- Improved perceived performance. I didn't run any specific tests to quantify this, but I can say that the same functionality now feels snappier.

I tweeted my delight at this and Tanner asked if there was commit diff I could share. I couldn't as it's a private codebase, but I thought it could form the basis of a blogpost.

> Nice! Do you have a commit diff we could see?
>
> — Tanner Linsley ⚛️ (@tannerlinsley) [May 10, 2020](https://twitter.com/tannerlinsley/status/1259503283103608832?ref_src=twsrc%5Etfw)

In case you hadn't guessed, this is that blog post...

## Make that change

So what does the change look like? Well first remove `react-window` from your project:

```
yarn remove react-window @types/react-window
```

Add the dependency to `react-virtual`:

```
yarn add react-virtual
```

Change your imports from:

```ts
import { FixedSizeList, ListChildComponentProps } from 'react-window';
```

to:

```ts
import { useVirtual } from 'react-virtual';
```

Change your component code from:

```ts
type ImportantDataListProps = {
  classes: ReturnType<typeof useStyles>;
  importants: ImportantData[];
};

const ImportantDataList: React.FC<ImportantDataListProps> = React.memo(
  (props) => (
    <FixedSizeList
      height={400}
      width={'100%'}
      itemSize={80}
      itemCount={props.importants.length}
      itemData={props}
    >
      {RenderRow}
    </FixedSizeList>
  ),
);

type ListItemProps = {
  classes: ReturnType<typeof useStyles>;
  importants: ImportantData[];
};

function RenderRow(props: ListChildComponentProps) {
  const { index, style } = props;
  const { importants, classes } = props.data as ListItemProps;
  const important = importants[index];

  return (
    <ListItem button style={style} key={index}>
      <ImportantThing classes={classes} important={important} />
    </ListItem>
  );
}
```

Of the above you can delete the `ListItemProps` type and the associate `RenderRow` function. You won't need them again! There's no longer a need to pass down data to the child element and then extract it for usage; it all comes down into a single simpler component.

Replace the `ImportantDataList` component with this:

```ts
const ImportantDataList: React.FC<ImportantDataListProps> = React.memo(
  (props) => {
    const parentRef = React.useRef<HTMLDivElement>(null);

    const rowVirtualizer = useVirtual({
      size: props.importants.length,
      parentRef,
      estimateSize: React.useCallback(() => 80, []), // This is just a best guess
      overscan: 5,
    });

    return (
      <div
        ref={parentRef}
        style={{
          width: `100%`,
          height: `500px`,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.totalSize}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.virtualItems.map((virtualRow) => (
            <div
              key={virtualRow.index}
              ref={virtualRow.measureRef}
              className={props.classes.hoverRow}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <ImportantThing
                classes={props.classes}
                important={props.importants[virtualRow.index]}
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
);
```

And you are done! Thanks Tanner for this tremendous library!
