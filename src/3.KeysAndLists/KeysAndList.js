import { useState } from "react";

function KeysAndLists() {
	const [studentList, setStudentLists] = useState([]);

	return (
		<>
			<h1>Keys AND Lists</h1>
			<input id="nameBox" type="text" />
			<input id="numBox" type="number" />

			<button
				onClick={() => {
					const ele = document.getElementById("nameBox");
					const val = ele.value;
					const idValue = document.getElementById("numBox");
					const id = idValue.value;
					setStudentLists((oldval) => {
						const students = {
							val: val,
							id: id,
						};
						return [students, ...oldval];
					});
				}}>
				Add item
			</button>

			{studentList.map((student) => {
				const { id, val } = student;
				return (
					<div
						key={id}
						style={{
							margin: "10px",
							padding: "10px",
							backgroundColor: "green",
						}}>
						{val}
					</div>
				);
			})}
		</>
	);
}

export default KeysAndLists;
