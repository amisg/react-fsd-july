import useFetch from "./Usefetch";

function PokemanApp() {
	const [loading, error, pokemonData] = useFetch(
		"https://pokeapi.co/api/v2/pokemon/ditto"
	);

	return (
		<>
			{loading ? (
				<h1 style={{ background: "red", margin: "20px" }}>Loading..</h1>
			) : !error ? (
				<>
					<div>Name :{pokemonData?.name}</div>
					<div>Id : {pokemonData?.id}</div>
				</>
			) : (
				<h1>Error</h1>
			)}
		</>
	);
}

export default PokemanApp;
