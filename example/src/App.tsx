import {useState} from 'react';
import {booboo} from 'react-beacon-hint';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				{booboo('<><><><>')}
			</div>
		</div>
	);
}

export default App;
