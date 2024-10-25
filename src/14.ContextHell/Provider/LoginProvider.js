import { useState } from "react";
import LoginContext from "../context/LoginContext";

function LoginProvider(props) {
	const [login, setLogin] = useState("amith");
	const { children } = props;
	return (
		<>
			<LoginContext.Provider value={{ login: login }}>
				{children}
			</LoginContext.Provider>
		</>
	);
}

export default LoginProvider;
