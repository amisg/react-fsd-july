function ProductDetails(props) {
	const { productCount, setProductCount } = props;
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
