import { useContext } from "react";
import DarkThemeContext from "../context/DarkThemeContext";
import styles from "./About.module.css";

function About(params) {
	const contextData = useContext(DarkThemeContext);
	const { theme } = contextData;
	console.log(theme, "about");

	return (
		<>
			<h1 className={theme === "LIGHT" ? styles.light : styles.dark}>
				About Page
			</h1>
		</>
	);
}

export default About;
