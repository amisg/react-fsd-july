import StudentItem from "./StudentItem";

function ListComponent(props) {
	const { students = [] } = props;

	return (
		<>
			<h1>List Of Students</h1>
			{students.map((student) => {
				const { id, name, classs, color } = student;
				return (
					<StudentItem key={id} name={name} classs={classs} color={color} />
				);
			})}
		</>
	);
}

export default ListComponent;
