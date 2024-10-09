import { useEffect, useState } from "react";

function DigitalClock(params) {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const intervalID = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		});
		console.log(intervalID);

		return () => {
			clearInterval(intervalID);
		};
	}, []);

	return (
		<>
			<h1>Digital Clock</h1>
			<div>{time}</div>
		</>
	);
}

export default DigitalClock;
