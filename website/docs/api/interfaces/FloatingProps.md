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

___

### animateProps

• `Optional` **animateProps**: `MotionProps`

___

### arrow

• `Optional` **arrow**: [`ArrowProps`](ArrowProps.md) & { `enabled?`: `boolean` ; `padding?`: `number` \| `SideObject`  }

___

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

PropsWithChildren.children

___

### clickProps

• `Optional` **clickProps**: `Props`

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

___

### dismissProps

• `Optional` **dismissProps**: `Props`

___

### floatingComponent

• `Optional` **floatingComponent**: `ReactNode` \| (`props`: [`FloatingChildrenProps`](FloatingChildrenProps.md)) => `Element`

___

### floatingStyle

• `Optional` **floatingStyle**: `MotionStyle`

___

### focusProps

• `Optional` **focusProps**: `Props`

___

### hoverProps

• `Optional` **hoverProps**: `Props`<`ReferenceType`\>

___

### initialOpen

• `Optional` **initialOpen**: `boolean`

___

### middleware

• `Optional` **middleware**: (`undefined` \| ``null`` \| ``false`` \| `Middleware`)[]

___

### onToggle

• `Optional` **onToggle**: (`open`: `boolean`) => `void`

#### Type declaration

▸ (`open`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `open` | `boolean` |

##### Returns

`void`

___

### open

• `Optional` **open**: ``null`` \| `boolean`

___

### placement

• `Optional` **placement**: `Placement`

___

### roleProps

• `Optional` **roleProps**: `Partial`<`Props`\>

___

### root

• `Optional` **root**: `ElementType`<`any`\>

___

### setOpen

• `Optional` **setOpen**: (`open`: `boolean`) => `void`

#### Type declaration

▸ (`open`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `open` | `boolean` |

##### Returns

`void`

___

### strategy

• `Optional` **strategy**: `Strategy`
