import { useState } from "react";
import LanguageContext from "../context/LanguageContext";

function LanguageProvider(props) {
	const { children } = props;
	const [language, setLanguage] = useState("English");
	return (
		<>
			<LanguageContext.Provider value={{ language: language }}>
				{children}
			</LanguageContext.Provider>
		</>
	);
}

export default LanguageProvider;
