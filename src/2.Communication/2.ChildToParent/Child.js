function Child(props) {
	const { bulletPoint, childhandler } = props;
	return (
		<>
			<div style={{ margin: "20px", backgroundColor: "yellow" }}>
				Child Body
				{bulletPoint}
				<div>
					<button
						onClick={() => {
							childhandler("Hey there I am safe!!");
						}}>
						Emergency Infomation{" "}
					</button>
				</div>
			</div>
		</>
	);
}

export default Child;
