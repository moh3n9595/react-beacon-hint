# Floating

> `const` **Floating**: `NamedExoticComponent`\<[`FloatingProps`](../interfaces/FloatingProps.md) & `RefAttributes`\<[`FloatingRef`](../interfaces/FloatingRef.md)\>\>

This component is used to create a floating element that can be positioned relative to another element. It uses the `useFloating` hook internally.

## Example

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
