import { useEffect, useState } from "react";

function PokemanApp() {
	const [pokemonData, setPokemonData] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	console.log(pokemonData);

	useEffect(() => {
		const url = "https://pokeapi.co/api/v2/pokemon/ditto";
		setLoading(true);
		async function fetResults() {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setPokemonData(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		fetResults();
	}, []);

	return (
		<>
			{loading ? (
				<h1 style={{ background: "red", margin: "20px" }}>Loading..</h1>
			) : !error ? (
				<>
					<div>{pokemonData?.name}</div>
					<div>{pokemonData?.id}</div>
				</>
			) : (
				<h1>Error</h1>
			)}
		</>
	);
}

export default PokemanApp;
