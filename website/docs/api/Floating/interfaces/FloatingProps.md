# FloatingProps

## Extends

- `PropsWithChildren`

## Properties

### arrow?

> `optional` **arrow**: `Omit`\<`FloatingArrowProps`, `"context"`\> & `object`

The arrow to display in the floating component

#### Type declaration

##### enabled?

> `optional` **enabled**: `boolean`

Whether to render the arrow or not

##### middlewareDataArrowStyles()?

> `optional` **middlewareDataArrowStyles**: (`middlewareData`) => `CSSProperties`

Styles for the arrow based on middleware data

###### Parameters

###### middlewareData

`MiddlewareData`

The middleware data

###### Returns

`CSSProperties`

The styles for the arrow

##### padding?

> `optional` **padding**: `number` \| `SideObject`

The padding of the arrow

***

### children?

> `optional` **children**: `ReactNode`

#### Inherited from

`PropsWithChildren.children`

***

### clickProps?

> `optional` **clickProps**: `UseClickProps`

floating ui useClick props (if floating component is in controlled mode, `enabled` prop will be ignored)

#### See

https://floating-ui.com/docs/useClick

***

### dismissProps?

> `optional` **dismissProps**: `UseDismissProps`

floating ui useDismiss props (if floating component is in controlled mode, `enabled` prop will be ignored)

#### See

https://floating-ui.com/docs/useDismiss

***

### floatingComponent?

> `optional` **floatingComponent**: `ReactNode` \| (`props`) => `ReactNode`

The floating component to render (can be a string, a ReactNode, or a function that returns a ReactNode)

#### Examples

```jsx
<Floating floatingComponent='Hello world' />
```

```jsx
<Floating floatingComponent={(open, placement) => <div>{open ? 'Hello world' : 'Goodbye world'}</div>} />
```

***

### focusProps?

> `optional` **focusProps**: `UseFocusProps`

floating ui useFocus props (if floating component is in controlled mode, `enabled` prop will be ignored)

#### See

https://floating-ui.com/docs/useFocus

***

### hideMiddleware?

> `optional` **hideMiddleware**: `boolean`

Whether to use the hide middleware or not

#### Default

`true`

#### See

https://floating-ui.com/docs/middleware/hide

***

### hoverProps?

> `optional` **hoverProps**: `UseHoverProps`

floating ui useHover props (if floating component is in controlled mode, `enabled` prop will be ignored)

#### See

https://floating-ui.com/docs/useHover

***

### initialOpen?

> `optional` **initialOpen**: `boolean`

Whether the floating component is open or not at initial render (uncontrolled mode) (if you want to control the floating component from outside, use the `open` and `setOpen` props)

#### Default

`false`

#### See

https://reactjs.org/docs/uncontrolled-components.html

***

### middleware?

> `optional` **middleware**: (`undefined` \| `null` \| `false` \| \{ `name`: `string`; `options`: `any`; `fn`: `Promisable`\<`MiddlewareReturn`\>; \})[]

The middleware to use for the floating component (useful when you want to add custom behaviors to the floating component)

#### See

https://floating-ui.com/docs/middleware

***

### middlewareDataFloatingStyles()?

> `optional` **middlewareDataFloatingStyles**: (`middlewareData`) => `CSSProperties`

Styles for the floating component based on middleware data

#### Parameters

##### middlewareData

`MiddlewareData`

The middleware data

#### Returns

`CSSProperties`

The styles for the floating component

***

### onToggle()?

> `optional` **onToggle**: (`open`) => `void`

The function to call when the floating component open state changes (uncontrolled mode) (if you want to control the floating component from outside, use the `open` and `setOpen` props)

#### Parameters

##### open

`boolean`

Whether the new floating component open state was true or not

#### Returns

`void`

***

### open?

> `optional` **open**: `null` \| `boolean`

Whether the floating component is open or not

#### Default

`null`

#### See

https://reactjs.org/docs/forms.html#controlled-components

***

### placement?

> `optional` **placement**: `Placement`

The placement of the floating component relative to the reference element

#### Default

`'bottom'`

***

### portal?

> `optional` **portal**: `boolean`

Whether to render the floating component in a portal

#### Default

`true`

#### See

https://reactjs.org/docs/portals.html

***

### roleProps?

> `optional` **roleProps**: `UseRoleProps`

floating ui useRole props (if floating component is in controlled mode, `enabled` prop will be ignored)

#### See

https://floating-ui.com/docs/useRole

***

### Root?

> `optional` **Root**: `ElementType`

The root element of the floating component

#### Default

`'div'`

***

### setOpen()?

> `optional` **setOpen**: (`open`) => `void`

Manually set the open state of the floating component (useful when the floating component is controlled from outside)

#### Parameters

##### open

`boolean`

The new open state

#### Returns

`void`

***

### strategy?

> `optional` **strategy**: `Strategy`

The strategy to use for positioning the floating component

#### Default

`'absolute'`

***

### transitionProps?

> `optional` **transitionProps**: `UseTransitionStylesProps`

The props for the floating component transition

#### See

https://floating-ui.com/docs/useTransitionStyles
