import { Component } from "react";

class CounterClassComponent extends Component {
	state = {
		count: 0,
	};

	increment() {
		this.setState((oldState) => {
			return {
				...oldState,
				count: oldState.count + 1,
			};
		});
	}

	decrement() {
		this.setState((oldState) => {
			return {
				...oldState,
				count: oldState.count - 1,
			};
		});
	}

	render() {
		return (
			<>
				<h1>{"class coponent"}</h1>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						margin: "20px",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<div id="counter">{this.state.count}</div>
					<div style={{ display: "flex", gap: "10px", margin: "20px" }}>
						<button onClick={this.increment.bind(this)}>+</button>
						<button onClick={this.decrement.bind(this)}>-</button>
					</div>
				</div>
			</>
		);
	}
}

export default CounterClassComponent;
