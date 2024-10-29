import React from "react";

function Child(props) {
	const { arr, counterHandler } = props;
	console.log("child rendering");

	return (
		<>
			<h1>Child</h1>
			<button onClick={counterHandler}>click</button>
			{arr.map((item) => item * 2)}
		</>
	);
}
export default React.memo(Child);
