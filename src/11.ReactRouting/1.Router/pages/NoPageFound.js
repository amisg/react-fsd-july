import { useNavigate } from "react-router-dom";

function NoPageFound(params) {
	const navigate = useNavigate();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "10px",
				width: "100%",
			}}>
			<h1>Page Not Found</h1>
			<button
				style={{
					backgroundColor: "lightcyan",
					borderRadius: "8px",
					width: "100px",
					height: "40px",
				}}
				onClick={() => {
					return navigate("/");
				}}>
				GO to Homepage
			</button>
		</div>
	);
}

export default NoPageFound;
