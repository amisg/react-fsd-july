import { useEffect, useRef } from "react";
import Input from "./CommomFormUI/Input";

function InputFormComponent(params) {
	const ref = useRef();
	useEffect(() => {
		ref.current.focus();
		console.log(ref, "refinput 1");
	});
	console.log(ref, "ref input 2");

	return (
		<>
			<h1>InputFormComponent</h1>
			<Input ref={ref} />
		</>
	);
}
export default InputFormComponent;
