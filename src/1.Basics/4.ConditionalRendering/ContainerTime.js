function ContainerTime(props) {
	const { color } = props;
	return (
		<div
			id="container"
			style={{
				backgroundColor: color,
				height: "200px",
				width: "200px",
			}}></div>
	);
}

export default ContainerTime;
