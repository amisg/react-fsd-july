import { useState } from "react";

function Child1Counter(props) {
	const { handler } = props;
	const [count, setCount] = useState(0);
	return (
		<>
			<div
				style={{
					margin: "10px",
					padding: "10px",
					border: "1px solid black",
				}}>
				<h1>Counter</h1>
				<div>{count}</div>
				<button
					onClick={() => {
						setCount((oldValue) => {
							return oldValue + 1;
						});
						handler("Increment");
					}}>
					+
				</button>
				<button
					onClick={() => {
						setCount((oldValue) => {
							return oldValue - 1;
						});
						handler("Decrement");
					}}>
					-
				</button>
			</div>
		</>
	);
}

export default Child1Counter;
