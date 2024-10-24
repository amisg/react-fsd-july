function ProductListPage(props) {
	const { productCount, setProductCount } = props;
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
						setProductCount((old) => old - 1);
					}}>
					-
				</button>
			</div>
		</>
	);
}

export default ProductListPage;
