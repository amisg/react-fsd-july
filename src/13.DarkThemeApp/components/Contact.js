import { useContext } from "react";
import DarkThemeContext from "../context/DarkThemeContext";
import styles from "./Contact.module.css";

function Contact(params) {
	const contextData = useContext(DarkThemeContext);
	const { theme } = contextData;
	console.log(theme, "contact");

	return (
		<>
			<h1 className={theme === "LIGHT" ? styles.light : styles.dark}>
				Contact Page
			</h1>
		</>
	);
}

export default Contact;
