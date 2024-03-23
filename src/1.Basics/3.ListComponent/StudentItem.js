export default function StudentComponent(props) {
	const { name, classs, color = "lightblue" } = props;
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-around",
				padding: "20px",
				margin: "20px",
				backgroundColor: color,
			}}
			id={name}>
			<div>{name}</div>
			<div>{classs}</div>
		</div>
	);
}
