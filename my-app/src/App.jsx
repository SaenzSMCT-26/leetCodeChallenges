import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	async function addToCounter() {
		setCount((c) => c + 1);
	}
	return (
		<div>
			<p>this is a counter: {count}</p>
			<button onClick={addToCounter}>Add Points</button>
		</div>
	);
}

export default App;
