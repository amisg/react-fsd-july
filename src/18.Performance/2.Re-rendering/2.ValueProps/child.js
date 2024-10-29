import React from "react";

function Child(props) {
	const { arr } = props;
	console.log("child rendering");

	return (
		<>
			<h1>Child</h1>
			{arr.map((item) => item * 2)}
		</>
	);
}
export default React.memo(Child);
