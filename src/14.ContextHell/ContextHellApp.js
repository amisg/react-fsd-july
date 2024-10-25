import MainComponent from "./components/MainComponent";
import LanguageProvider from "./Provider/LanguageProvider";
import LoginProvider from "./Provider/LoginProvider";
import ThemeProvider from "./Provider/ThemeProvider";

function ContextHellApp() {
	return (
		<>
			<LoginProvider>
				<ThemeProvider>
					<LanguageProvider>
						<MainComponent />
					</LanguageProvider>
				</ThemeProvider>
			</LoginProvider>
		</>
	);
}
export default ContextHellApp;
