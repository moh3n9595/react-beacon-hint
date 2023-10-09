---
id: "FloatingRef"
title: "Interface: FloatingRef"
sidebar_label: "FloatingRef"
sidebar_position: 0
custom_edit_url: null
---

**`Example`**

```jsx
const floatingRef = useRef<FloatingRef>(null);
return <Floating ref={floatingRef} />;
```

## Properties

### open

• **open**: `boolean`

Open the floating component (if it's not controlled)

___

### update

• **update**: () => `void`

#### Type declaration

▸ (): `void`

Update the floating component position (useful when the reference element position changes)

##### Returns

`void`
