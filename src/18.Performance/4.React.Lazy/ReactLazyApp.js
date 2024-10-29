import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import React, { lazy, Suspense } from "react";

function ReactLazyApp() {
	const ReactLazyAbout = React.lazy(() => import("./About.js"));
	const ReactLazyContact = React.lazy(() => import("./Contact.js"));
	return (
		<>
			<Suspense fallback={<h1 style={{ background: "red" }}>loading</h1>}>
				<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/about"} element={<ReactLazyAbout />} />
					<Route path={"/contact"} element={<ReactLazyContact />} />
				</Routes>
			</Suspense>
		</>
	);
}
export default ReactLazyApp;
