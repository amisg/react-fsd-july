import Cart from "./Cart";

function ReusableComponent(props) {
	const { productCount, setProductCount } = props;
	return (
		<>
			<div
				style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
				<h1>ReusableComponent</h1>
				<Cart productCount={productCount} setProductCount={setProductCount} />
			</div>
		</>
	);
}

export default ReusableComponent;
