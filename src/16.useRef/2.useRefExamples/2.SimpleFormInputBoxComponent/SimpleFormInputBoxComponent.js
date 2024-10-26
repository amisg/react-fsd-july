import { useEffect, useRef } from "react";

function SimpleFormInputBoxComponent() {
	const ref = useRef();
	useEffect(() => {
		ref.current.focus();
	});
	return (
		<>
			<h1>SimpleFormInputBoxComponent</h1>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<input
					ref={ref}
					id="inputbox"
					type="text"
					placeholder="enter the name"
					onChange={() => {}}
				/>
			</div>
		</>
	);
}
export default SimpleFormInputBoxComponent;
