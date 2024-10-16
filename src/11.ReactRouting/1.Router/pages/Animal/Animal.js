import { useSearchParams } from "react-router-dom";
import Dog from "../../components/Animal/Dog";
import Cat from "../../components/Animal/Cat";

function Animal(params) {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams);

	const typeOfAnimal = searchParams.get("q");

	function someAnimal(typeOfAnimal) {
		switch (typeOfAnimal) {
			case "dog":
				return <Dog />;
			case "cat":
				return <Cat />;
			default:
				return <h1>No animal found</h1>;
		}
	}

	return (
		<>
			<h1>Animals</h1>
			{someAnimal(typeOfAnimal)}
		</>
	);
}

export default Animal;
