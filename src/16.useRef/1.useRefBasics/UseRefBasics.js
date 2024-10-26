import { useRef } from "react";

const DEFAULT_VALUE = 12;
function UseRefBasics() {
	const ref = useRef(DEFAULT_VALUE);
	const { current } = ref;
	console.log(ref);
	function onClickHandler() {
		console.log("----current value------", ref.current);
		ref.current = ref.current + 1;
		console.log("----updated value------", ref.current);
	}
	return (
		<>
			<h1>useRef</h1>
			<p>CureentValue : {current}</p>
			<button onClick={onClickHandler}>+</button>
		</>
	);
}

export default UseRefBasics;
