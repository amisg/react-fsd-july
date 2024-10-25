import { createPortal } from "react-dom";

function Portals(props) {
	const { title } = props;
	return (
		<>
			{createPortal(
				<>
					<div
						style={{
							position: "fixed",
							top: "25%",
							left: "25%",
							backgroundColor: "red",
							color: "white",
							padding: "10px",
						}}>
						{title}
					</div>
				</>,
				document.getElementById("portal-container")
			)}
		</>
	);
}
export default Portals;
