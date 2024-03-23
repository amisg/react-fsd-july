import { useState } from "react";

function MultipleState() {
	const [state, setState] = useState({
		counter: 0,
		name: "utkarsh",
	});

	return (
		<>
			<div style={{ margin: "20px", border: "1px solid black" }}>
				{state.name}
			</div>
			<div style={{ margin: "20px", border: "1px solid black" }}>
				{state.counter}
			</div>
			<button
				onClick={() => {
					setState((prevState) => ({
						...prevState,
						name: "Amith",
					}));
				}}>
				amith
			</button>
			<button
				onClick={() => {
					setState((prevState) => ({
						...prevState,
						counter: prevState.counter + 1,
					}));
				}}>
				clap
			</button>
		</>
	);
}

export default MultipleState;
