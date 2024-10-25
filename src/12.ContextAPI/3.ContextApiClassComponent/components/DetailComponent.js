import { Component } from "react";
import ThemeClassContext from "../context/ThemeClassContext";
import LoginClassContext from "../context/LoginClassContext";

class DetailComponent extends Component {
	render() {
		return (
			<>
				<h1>detail component</h1>
				<LoginClassContext.Consumer>
					{(props) => {
						console.log(props);
						const { user } = props;
						return (
							<>
								<h3>Login user is {user}</h3>
								<ThemeClassContext.Consumer>
									{(props) => {
										const { theme } = props;
										return (
											<>
												<p>Theme: {theme}</p>
											</>
										);
									}}
								</ThemeClassContext.Consumer>
							</>
						);
					}}
				</LoginClassContext.Consumer>
			</>
		);
	}
}

export default DetailComponent;
