import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import DarkThemeContext from "./context/DarkThemeContext";
import { useState } from "react";
import Navigation from "./components/Navigation";

function DarkThemeApp() {
	const [theme, setTheme] = useState("LIGHT");
	return (
		<>
			<DarkThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
				<Navigation />
				<h1>Dark Theme App</h1>
				<Routes>
					<Route path={"/contact"} element={<Contact />}></Route>
					<Route path={"/about"} element={<About />}></Route>
				</Routes>
			</DarkThemeContext.Provider>
		</>
	);
}

export default DarkThemeApp;
