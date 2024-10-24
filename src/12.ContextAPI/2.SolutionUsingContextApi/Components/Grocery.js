import ProductListPage from "./ProductListPage";

function Grocery(props) {
	return (
		<>
			<div
				style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
				<h1>Grocery</h1>
				<ProductListPage />
			</div>
		</>
	);
}

export default Grocery;
