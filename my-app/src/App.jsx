import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
 const addNumber = setCount((c) => c += 1);

	return (
		<div>
			<p>Number: {count}</p>
    <button onClick="{addNumber}">Add Number<button>
		</div>
	);
}

export default App;
