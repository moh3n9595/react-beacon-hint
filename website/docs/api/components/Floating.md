---
id: "Floating"
title: "Component: Floating"
sidebar_label: "Floating"
sidebar_position: 0
custom_edit_url: null
---

▸ **Floating**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

This component is used to create a floating element that can be positioned relative to another element. It uses the `useFloating` hook internally.

**`Example`**

```jsx
<Floating
	floatingComponent={<div>floating</div>}
	placement="bottom-start"
	open={open}
	setOpen={setOpen}
>
	{anchorElement}
</Floating>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FloatingProps`](../interfaces/FloatingProps.md) & `RefAttributes`<[`FloatingRef`](../interfaces/FloatingRef.md)\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>
