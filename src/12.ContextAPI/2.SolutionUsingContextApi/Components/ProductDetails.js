import { useContext } from "react";
import CartContext from "../context/CartContext";

function ProductDetails(props) {
	const contextData = useContext(CartContext);
	const { productCount } = contextData;
	return (
		<>
			<div style={{ backgroundColor: "yellow" }}>
				<h1>ProductDetails</h1>
				<p>ProductCount: {productCount}</p>
			</div>
		</>
	);
}

export default ProductDetails;
