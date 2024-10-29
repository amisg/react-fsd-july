import { useMemo, useState } from "react";
import Child from "./child";

function Parent() {
	const [count, setCount] = useState(0);
	console.log("parent rendering");

	const arr = useMemo(() => [1, 2, 3], []);

	const obj = {
		name: "amith",
	};

	return (
		<>
			<h1>Parent : {count}</h1>
			<button onClick={() => setCount((old) => old + 1)}>click</button>
			<Child arr={arr} />
		</>
	);
}

export default Parent;
