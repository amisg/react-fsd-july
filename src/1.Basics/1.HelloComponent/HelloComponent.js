function HelloComponent(props) {
	const { name } = props;
	return (
		<>
			<div>hello {name}</div>
		</>
	);
}
export default HelloComponent;
