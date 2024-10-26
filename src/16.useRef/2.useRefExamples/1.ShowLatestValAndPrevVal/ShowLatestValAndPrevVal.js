import { useEffect, useRef, useState } from "react";

function ShowLatestValAndPrevVal() {
	const [counterVal, setCouneterVal] = useState(0);
	const ref = useRef("-");
	useEffect(() => {
		ref.current = counterVal;
	});
	return (
		<>
			<h1>ShowLatestValAndPrevVal</h1>
			<h3>PrevVal : {ref.current}</h3>
			<h3>CurrentVal : {counterVal}</h3>
			<button
				onClick={() => {
					setCouneterVal((old) => old + 1);
				}}>
				+
			</button>
		</>
	);
}

export default ShowLatestValAndPrevVal;
