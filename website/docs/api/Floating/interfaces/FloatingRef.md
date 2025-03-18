# FloatingRef

## Example

```jsx
const floatingRef = useRef<FloatingRef>(null);
return <Floating ref={floatingRef} />;
```

## Properties

### setOpen

> **setOpen**: `undefined` \| (`open`) => `void`

Manually set the open state of the floating component

#### Param

The new open state

#### Example

```jsx
floatingRef.current?.setOpen(true);
```

***

### update()

> **update**: () => `void`

Update the floating component position (useful when the reference element position changes)

#### Returns

`void`
