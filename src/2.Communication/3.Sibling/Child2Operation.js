function Child2Operation(props) {
	const { info } = props;
	return (
		<>
			<div
				style={{ padding: "10px", margin: "10px", border: "1px solid black" }}>
				<h1>Operations</h1>
				<div>{info ? info : "No Operations Yet"}</div>
			</div>
		</>
	);
}

export default Child2Operation;
