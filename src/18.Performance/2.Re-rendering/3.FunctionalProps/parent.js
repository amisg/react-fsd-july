import { useCallback, useMemo, useState } from "react";
import Child from "./child";

function Parent() {
	const [count, setCount] = useState(0);
	console.log("parent rendering");

	const arr = useMemo(() => [1, 2, 3], []);

	const obj = {
		name: "amith",
	};

	const counterHandler = useCallback(() => {
		setCount((old) => old + 1);
	}, []);

	return (
		<>
			<h1>Parent : {count}</h1>
			<Child arr={arr} counterHandler={counterHandler} />
		</>
	);
}

export default Parent;
