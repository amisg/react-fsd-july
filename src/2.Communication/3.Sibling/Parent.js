import { useState } from "react";
import Child1Counter from "./Child1Counter";
import Child2Operation from "./Child2Operation";

function Parent() {
	const [info, setInfo] = useState();
	function ChildCommunicatorHandler(infomation) {
		console.log("Parent received:::::", infomation);
		setInfo(infomation);
	}
	return (
		<>
			<h1 style={{ margin: "10px", backgroundColor: "red" }}>Welcome</h1>
			<div
				style={{
					display: "flex",
					gap: "10px",
					justifyContent: "space-between",
					width: "100%",
				}}>
				<Child1Counter handler={ChildCommunicatorHandler} />
				<Child2Operation info={info} />
			</div>
		</>
	);
}

export default Parent;
