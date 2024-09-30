function Child(props) {
	const { information } = props;
	return (
		<>
			<div style={{ margin: "20px", backgroundColor: "yellow" }}>
				Child Body
				{information}
			</div>
		</>
	);
}

export default Child;
