import { useState } from 'react';

export default function Counter({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}) {
	const [count, setCount] = useState(initialCount);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<div className="counter">
				<button className="button" onClick={subtract}>Decrease</button>
				<pre>{count}</pre>
				<button className="button" onClick={add}>Increase</button>
			</div>
			<div className="counter-message">{children}</div>
		</>
	);
}
