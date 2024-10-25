import { Component } from "react";
import DetailComponent from "./components/DetailComponent";
import ThemeClassContext from "./context/ThemeClassContext";
import LoginClassContext from "./context/LoginClassContext";

class ContextApiClassComponent extends Component {
	render() {
		return (
			<>
				<h1>context class component</h1>
				<LoginClassContext.Provider value={{ user: "amith" }}>
					<ThemeClassContext.Provider value={{ theme: "BLUE" }}>
						<DetailComponent />
					</ThemeClassContext.Provider>
				</LoginClassContext.Provider>
			</>
		);
	}
}

export default ContextApiClassComponent;
