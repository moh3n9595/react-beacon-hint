---
id: "FloatingProps"
title: "Interface: FloatingProps"
sidebar_label: "FloatingProps"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `PropsWithChildren`

  ↳ **`FloatingProps`**

## Properties

### animatePresenceProps

• `Optional` **animatePresenceProps**: `AnimatePresenceProps`

Framer Motion animate presence props (useful when you want to customize the floating component animation)

**`See`**

https://www.framer.com/api/motion/animate-presence/

___

### animateProps

• `Optional` **animateProps**: `MotionProps`

Framer Motion motion props (useful when you want to customize the floating component animation)

**`Default`**

`{initial: {opacity: 0}, animate: {opacity: 1}, exit: {opacity: 0}}`

**`See`**

https://www.framer.com/api/motion/motion/

___

### arrow

• `Optional` **arrow**: [`ArrowProps`](ArrowProps.md) & { `enabled?`: `boolean` ; `padding?`: `number` \| `SideObject`  }

Whether use arrow in middleware or not

___

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

PropsWithChildren.children

___

### clickProps

• `Optional` **clickProps**: `Props`

floating ui useClick props (if floating component is in controlled mode, `enabled` prop will be ignored)

**`See`**

https://floating-ui.com/docs/useClick

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

Whether to disable the portal or not (useful when you want to use the floating component inside a portal)

**`Default`**

`false`

**`See`**

https://reactjs.org/docs/portals.html

___

### dismissProps

• `Optional` **dismissProps**: `Props`

floating ui useDismiss props (if floating component is in controlled mode, `enabled` prop will be ignored)

**`See`**

https://floating-ui.com/docs/useDismiss

___

### floatingComponent

• `Optional` **floatingComponent**: `ReactNode` \| (`props`: [`FloatingChildrenProps`](FloatingChildrenProps.md)) => `Element`

The reference element (can be a ReactNode or a function that returns a JSX element)

___

### floatingStyle

• `Optional` **floatingStyle**: `MotionStyle`

The style of the floating component (useful when you want to customize the floating component style)

**`Default`**

`{}`

___

### focusProps

• `Optional` **focusProps**: `Props`

floating ui useFocus props (if floating component is in controlled mode, `enabled` prop will be ignored)

**`See`**

https://floating-ui.com/docs/useFocus

___

### hoverProps

• `Optional` **hoverProps**: `Props`<`ReferenceType`\>

floating ui useHover props (if floating component is in controlled mode, `enabled` prop will be ignored)

**`See`**

https://floating-ui.com/docs/useHover

___

### initialOpen

• `Optional` **initialOpen**: `boolean`

Whether the floating component is open or not at initial render (uncontrolled mode) (if you want to control the floating component from outside, use the `open` and `setOpen` props)

**`Default`**

`false`

**`See`**

 - https://reactjs.org/docs/uncontrolled-components.html
 - https://reactjs.org/docs/forms.html#controlled-components

___

### middleware

• `Optional` **middleware**: (`undefined` \| ``null`` \| ``false`` \| `Middleware`)[]

floating ui middleware (useful when you want to add custom behaviors to the floating component)

**`See`**

https://floating-ui.com/docs/middlewares

___

### onToggle

• `Optional` **onToggle**: (`open`: `boolean`) => `void`

#### Type declaration

▸ (`open`): `void`

The function to call when the floating component open state changes (uncontrolled mode) (if you want to control the floating component from outside, use the `open` and `setOpen` props)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `open` | `boolean` | Whether the new floating component open state was true or not |

##### Returns

`void`

___

### open

• `Optional` **open**: ``null`` \| `boolean`

Whether the floating component is open or not (controlled mode) (if you want to control the floating component from inside, use the `initialOpen` prop)

**`Default`**

`null`

___

### placement

• `Optional` **placement**: `Placement`

The placement of the floating component relative to the reference element

**`Default`**

`bottom`

**`See`**

https://floating-ui.com/docs/placement

___

### roleProps

• `Optional` **roleProps**: `Partial`<`Props`\>

floating ui useRole props (if floating component is in controlled mode, `enabled` prop will be ignored)

**`See`**

https://floating-ui.com/docs/useRole

___

### root

• `Optional` **root**: `ElementType`<`any`\>

Root element of the reference element

**`Default`**

`div`

___

### setOpen

• `Optional` **setOpen**: (`open`: `boolean`) => `void`

#### Type declaration

▸ (`open`): `void`

The function to call when the floating component open state changes (controlled mode) (if you want to control the floating component from inside, use the `initialOpen` prop)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `open` | `boolean` | Whether the new floating component open state will be open or not |

##### Returns

`void`

___

### strategy

• `Optional` **strategy**: `Strategy`

The strategy to use to position the floating component (useful when you want to change the floating component position when the reference element is out of the viewport)

**`Default`**

`absolute`

**`See`**

https://floating-ui.com/docs/strategies
