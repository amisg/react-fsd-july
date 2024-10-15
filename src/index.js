import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RouterApp from "./11.ReactRouting/1.Router/RouterApp";

import { BrowserRouter } from "react-router-dom";
import MultipleState from "./1.Basics/5.MultipleState/MultipleState";
import SingleUseState from "./1.Basics/5.MultipleState/SingleUseState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<BrowserRouter>
			<RouterApp />
		</BrowserRouter>
		{/* <MultipleState /> */}
		{/* <SingleUseState /> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
