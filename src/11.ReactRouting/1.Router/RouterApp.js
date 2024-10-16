import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentorPage from "./pages/MentorPage";
import { hover } from "@testing-library/user-event/dist/hover";
import NoPageFound from "./pages/NoPageFound";
import Animal from "./pages/Animal/Animal";
import Men from "./pages/Men/Men";
import Pants from "./components/Men/Pants";
import Hats from "./components/Men/Hats";
import RanndomProducts from "./components/Men/RandomProducts";
import styles from "./RouterApp.module.css";

function RouterApp(params) {
	return (
		<>
			{/* <h1>Router hello</h1> */}
			{/* <HomePage />
			<MentorPage /> */}

			{/* {registering of routes} */}

			<nav style={{ backgroundColor: "lightblue" }}>
				<ul style={{ listStyleType: "none" }}>
					<li>
						<NavLink
							className={(navLinkProps) => {
								// console.log(navLinkProps, "navlinkprops");
								const { isActive } = navLinkProps;
								return isActive ? `${styles.activeLink}` : "";
							}}
							to="/mentor">
							Mentor link
						</NavLink>
					</li>
					<li>
						<NavLink
							className={(navLinkProps) => {
								// console.log(navLinkProps, "navlinkprops");
								const { isActive } = navLinkProps;
								return isActive ? `${styles.activeLink}` : "";
							}}
							to="/about">
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							className={(navLinkProps) => {
								// console.log(navLinkProps, "navlinkprops");
								const { isActive } = navLinkProps;
								return isActive ? `${styles.activeLink}` : "";
							}}
							to="/animal?q=dog">
							Dog
						</NavLink>
					</li>
					<li>
						<NavLink
							className={(navLinkProps) => {
								// console.log(navLinkProps, "navlinkprops");
								const { isActive } = navLinkProps;
								return isActive ? `${styles.activeLink}` : "";
							}}
							to="/animal?q=cat">
							Cat
						</NavLink>
					</li>
					<li>
						<NavLink
							className={(navLinkProps) => {
								// console.log(navLinkProps, "navlinkprops");
								const { isActive } = navLinkProps;
								return isActive ? `${styles.activeLink}` : "";
							}}
							to="/men"
							end
							reloadDocument>
							Mens collection
						</NavLink>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/mentor" element={<MentorPage />}></Route>
				<Route path="/*" element={<NoPageFound />}></Route>

				<Route path="/animal" element={<Animal />}></Route>
				<Route path="/men" element={<Men />}>
					<Route path="pants" element={<Pants />}></Route>
					<Route path="hats" element={<Hats />}></Route>
					<Route path=":id" element={<RanndomProducts />}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default RouterApp;
