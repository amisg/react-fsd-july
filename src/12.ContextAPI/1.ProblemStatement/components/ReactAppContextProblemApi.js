import { useState } from "react";
import Grocery from "./Grocery";
import ProductListPage from "./ProductListPage";
import ReusableComponent from "./ReusableComponent";
import ProductDetails from "./ProductDetails";

function ReactAppContextProblemApi(params) {
	const [productCount, setProductCount] = useState(10);
	return (
		<>
			<h1>ReactAppContextProblemApi</h1>
			<Grocery productCount={productCount} setProductCount={setProductCount} />
			<ProductDetails
				productCount={productCount}
				setProductCount={setProductCount}
			/>
			<ReusableComponent
				productCount={productCount}
				setProductCount={setProductCount}
			/>
		</>
	);
}

export default ReactAppContextProblemApi;
