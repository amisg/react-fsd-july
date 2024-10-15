import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentorPage from "./pages/MentorPage";
import { hover } from "@testing-library/user-event/dist/hover";

function RouterApp(params) {
	return (
		<>
			{/* <h1>Router hello</h1> */}
			{/* <HomePage />
			<MentorPage /> */}

			{/* {registering of routes} */}
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/mentor" element={<MentorPage />}></Route>
			</Routes>
		</>
	);
}

export default RouterApp;
