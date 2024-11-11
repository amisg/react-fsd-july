import { useEffect, useState } from "react";

function useFetch(url) {
	const [pokemonData, setPokemonData] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	console.log(pokemonData);

	useEffect(() => {
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
	}, [url]);

	return [loading, error, pokemonData];
}

export default useFetch;
