import useLocalStorage from "./useLocalStorage";

function Test() {
	const [grades, setGrade] = useLocalStorage("grades", "collageHistory");

	return (
		<>
			<h1>Grade : {grades}</h1>
			<button onClick={() => setGrade(Number(grades) + 1)}>Button</button>
		</>
	);
}

export default Test;
