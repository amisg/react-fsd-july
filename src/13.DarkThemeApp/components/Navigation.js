import { useContext } from "react";
import { NavLink } from "react-router-dom";
import DarkThemeContext from "../context/DarkThemeContext";

function Navigation(params) {
	const { theme, setTheme } = useContext(DarkThemeContext);
	function themeHandler() {
		setTheme((old) => (old === "LIGHT" ? "DARK" : "LIGHT"));
	}
	return (
		<>
			<nav
				style={{
					display: "flex",
					gap: "20px",
					backgroundColor: theme === "LIGHT" ? "yellow" : "black",
					color: theme === "LIGHT" ? "DARK" : "LIGHT",
					width: "100%",
					height: "60px",
					padding: "20px",
				}}>
				<li>
					<NavLink to={"/contact"}>Contacts</NavLink>
				</li>
				<li>
					<NavLink to={"/about"}>About</NavLink>
				</li>
				<button onClick={themeHandler}>Toggle here</button>
			</nav>
		</>
	);
}

export default Navigation;
