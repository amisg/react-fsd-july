import { useState } from "react";

export default function MentorPage() {
	const [mentorlist] = useState(["akash", "animesh", "bharat", "prabhu"]);

	return (
		<>
			<h4>Mentors</h4>
			{mentorlist.map((mentor) => {
				return (
					<div
						key={mentor}
						style={{
							width: "100px",
							height: "100px",
							margin: "5px",
							backgroundColor: "yellow",
						}}>
						{mentor}
					</div>
				);
			})}
		</>
	);
}
