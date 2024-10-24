import { useContext } from "react";
import CartContext from "../context/CartContext";

function ProductListPage(props) {
	const contextData = useContext(CartContext);
	const { productCount, setProductCount } = contextData;
	console.log(contextData);

	return (
		<>
			<div style={{ backgroundColor: "yellow" }}>
				<h1>ProductListPage</h1>
				<button
					onClick={() => {
						setProductCount((old) => old + 1);
					}}>
					+
				</button>
				<p>ProductCount : {productCount}</p>
				<button
					onClick={() => {
						setProductCount((old) => old + 1);
					}}>
					-
				</button>
			</div>
		</>
	);
}

export default ProductListPage;
