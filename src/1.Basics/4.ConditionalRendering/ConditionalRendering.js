import { useState } from "react";
import ContainerTime from "./ContainerTime";

function ConditionalRendering() {
	const [value, setvalue] = useState(false);
	// function day() {
	// 	let ele = document.getElementById("container");
	// 	ele.style.backgroundColor = "blue";
	// }
	// function night() {
	// 	let ele = document.getElementById("container");
	// 	ele.style.backgroundColor = "grey";
	// }
	return (
		<>
			{value === false && <ContainerTime color={"black"} />}
			{value === true && <ContainerTime color={"yellow"} />}
			<button
				onClick={() => {
					setvalue(true);
				}}>
				day
			</button>
			<button
				onClick={() => {
					setvalue(false);
				}}>
				night
			</button>
		</>
	);
}

export default ConditionalRendering;
