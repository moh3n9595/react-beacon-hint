# HintRef

## Example

```jsx
const hintRef = useRef<HintRef>(null);
useEffect(() => {
	hintRef.current?.start();
}, []);
return <Hint ref={hintRef} />;
```

## Properties

### start()

> **start**: () => `void`

Start the hint manually if autoStart is false

#### Returns

`void`
