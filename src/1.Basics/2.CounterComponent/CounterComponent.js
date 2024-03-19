import { useState } from "react";

function CounterComponent(props) {
	const { heading } = props;
	const [count, setCount] = useState(0);
	function increment() {
		setCount(count + 1);
	}
	function decrement() {
		setCount(count - 1);
	}
	return (
		<>
			<h1>{heading}</h1>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					margin: "20px",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<div id="counter">{count}</div>
				<div style={{ display: "flex", gap: "10px", margin: "20px" }}>
					<button onClick={increment}>+</button>
					<button onClick={decrement}>-</button>
				</div>
			</div>
		</>
	);
}

export default CounterComponent;
