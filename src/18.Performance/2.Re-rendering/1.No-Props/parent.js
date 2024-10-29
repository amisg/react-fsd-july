import { useState } from "react";
import Child from "./child";

function Parent() {
	const [count, setCount] = useState(0);
	console.log("parent rendering");

	return (
		<>
			<h1>Parent : {count}</h1>
			<button onClick={() => setCount((old) => old + 1)}>click</button>
			<Child />
		</>
	);
}

export default Parent;
