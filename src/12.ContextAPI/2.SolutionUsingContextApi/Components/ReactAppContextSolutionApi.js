import { useState } from "react";
import Grocery from "./Grocery";
import ReusableComponent from "./ReusableComponent";
import ProductDetails from "./ProductDetails";

import CartContext from "../context/CartContext";

function ReactAppContextSolutionApi(params) {
	const [productCount, setProductCount] = useState(10);
	return (
		<>
			<h1>ReactAppContextProblemApi</h1>
			<CartContext.Provider
				value={{
					productCount: productCount,
					setProductCount: setProductCount,
				}}>
				<Grocery />
				<ProductDetails />
				<ReusableComponent />
			</CartContext.Provider>
		</>
	);
}

export default ReactAppContextSolutionApi;
