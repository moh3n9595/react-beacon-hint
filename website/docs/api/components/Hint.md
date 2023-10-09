---
id: "Hint"
title: "Component: Hint"
sidebar_label: "Hint"
sidebar_position: 0
custom_edit_url: null
---

▸ **Hint**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Hint component is used to show a popover on hover or click of a beacon. It is used to guide the user through the application.

**`Example`**

```jsx
<Hint popover="Hello World" hit={1}>
	<Button>Hover Me</Button>
</Hint>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`HintProps`](../interfaces/HintProps.md) & `RefAttributes`<[`HintRef`](../interfaces/HintRef.md)\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>
