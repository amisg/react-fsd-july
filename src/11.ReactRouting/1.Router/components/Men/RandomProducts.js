import { useParams } from "react-router-dom";

function RanndomProducts() {
	let params = useParams();
	const { id } = params;
	return (
		<>
			<h1>Randmon Products {id}</h1>
		</>
	);
}

export default RanndomProducts;
