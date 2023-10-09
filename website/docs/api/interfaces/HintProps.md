---
id: "HintProps"
title: "Interface: HintProps"
sidebar_label: "HintProps"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `PropsWithChildren`

  ↳ **`HintProps`**

## Properties

### autoStart

• `Optional` **autoStart**: `boolean`

Whether to start the hint automatically or not (if false, you can start the hint by calling the start method)

**`Default`**

`true`

___

### beacon

• `Optional` **beacon**: `Element` \| ``"outline"`` \| ``"fill"``

The beacon to display (can be `fill`, `outline` or a JSX element)

**`Default`**

`outline`

___

### beaconProps

• `Optional` **beaconProps**: `Omit`<[`FloatingProps`](FloatingProps.md), ``"initialOpen"`` \| ``"floatingComponent"`` \| ``"open"`` \| ``"setOpen"`` \| ``"hoverProps"`` \| ``"focusProps"`` \| ``"roleProps"`` \| ``"dismissProps"`` \| ``"clickProps"``\> & { `autoOffset?`: `boolean`  }

Props for floating beacon (see FloatingProps)

**`Default`**

`{autoOffset: true, disablePortal: true}`

___

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

PropsWithChildren.children

___

### hit

• `Optional` **hit**: `number` \| ``"always"``

Number of times to show the hint (if set to `always`, it will show the hint on each page load)

**`Default`**

`always`

___

### popover

• **popover**: `string` \| `Element`

The popover to display when the beacon is active (can be a string or a JSX element)

___

### popoverProps

• `Optional` **popoverProps**: `Omit`<[`FloatingProps`](FloatingProps.md), ``"initialOpen"`` \| ``"floatingComponent"``\>

Props for floating popover (see FloatingProps)

**`Default`**

`{arrow: {enabled: true}, hoverProps: {enabled: false}}`

___

### uniqueKey

• `Optional` **uniqueKey**: `string` \| `number`

The unique key of the hint (used to store the hint state in the local storage) (if not provided, the hint create that from the popover prop)
