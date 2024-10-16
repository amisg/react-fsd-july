import { NavLink, Outlet } from "react-router-dom";
import styles from "../../RouterApp.module.css";

function Men() {
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "10px",
					backgroundColor: "lightcoral",
				}}>
				<nav>
					<ul>
						<li>
							<NavLink
								className={(navLinkProps) => {
									// console.log(navLinkProps, "navlinkprops");
									const { isActive } = navLinkProps;
									return isActive ? `${styles.activeLink}` : "";
								}}
								to="/men/pants">
								pants
							</NavLink>
						</li>
						<li>
							<NavLink
								className={(navLinkProps) => {
									// console.log(navLinkProps, "navlinkprops");
									const { isActive } = navLinkProps;
									return isActive ? `${styles.activeLink}` : "";
								}}
								to="/men/hats">
								hats
							</NavLink>
						</li>
					</ul>
				</nav>

				<h1>Men Page</h1>
				<div
					style={{
						border: "1px solid black",
						padding: "10px",
						margin: "10px",
						backgroundColor: "lightgrey",
						color: "white",
					}}>
					<Outlet></Outlet>
				</div>
			</div>
		</>
	);
}

export default Men;
