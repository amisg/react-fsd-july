import { useState } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeProvider(props) {
	const [theme, setTheme] = useState("LIGHT");
	const { children } = props;
	return (
		<>
			<ThemeContext.Provider value={{ theme: theme }}>
				{children}
			</ThemeContext.Provider>
		</>
	);
}

export default ThemeProvider;
