# HintProps

## Extends

- `PropsWithChildren`

## Properties

### autoStart?

> `optional` **autoStart**: `boolean`

Whether to start the hint automatically or not (if false, you can start the hint by calling the start method)

#### Default

`true`

***

### beacon?

> `optional` **beacon**: `"fill"` \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\> \| `"outline"`

The beacon to display (can be `fill`, `outline` or a ReactElement)

#### Default

`outline`

***

### beaconProps?

> `optional` **beaconProps**: `Omit`\<[`FloatingProps`](../../Floating/interfaces/FloatingProps.md), `"open"` \| `"initialOpen"` \| `"setOpen"` \| `"floatingComponent"` \| `"hoverProps"` \| `"focusProps"` \| `"roleProps"` \| `"dismissProps"` \| `"clickProps"`\> & `object`

Props for floating beacon (see FloatingProps)

#### Type declaration

##### autoOffset?

> `optional` **autoOffset**: `boolean`

#### Default

`autoOffset: true`

***

### children?

> `optional` **children**: `ReactNode`

#### Inherited from

`PropsWithChildren.children`

***

### hit?

> `optional` **hit**: `number` \| `"always"`

Number of times to show the hint (if set to `always`, it will show the hint on each page load)

#### Default

`always`

***

### popover

> **popover**: `string` \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\>

The popover to display when the beacon is active (can be a string or a JSX element)

***

### popoverProps?

> `optional` **popoverProps**: `Omit`\<[`FloatingProps`](../../Floating/interfaces/FloatingProps.md), `"initialOpen"` \| `"floatingComponent"`\>

Props for floating popover (see FloatingProps)

#### Default

`arrow: {enabled: true, width: 10, height: 5, fill: COLORS.POPOVER}, hoverProps: {enabled: false}`

***

### uniqueKey?

> `optional` **uniqueKey**: `string` \| `number`

The unique key of the hint (used to store the hint state in the local storage) (if not provided, the hint create that from the popover prop)
