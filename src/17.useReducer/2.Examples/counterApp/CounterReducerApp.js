import { useReducer } from "react";
import {
	ChangeName,
	ChangeNameAction,
	DecrementAction,
	IncrementAction,
	ResetAction,
} from "../ActionObjects/ActionObject";
import { reducerFunction } from "../reducers/ReducerFuntion";

const defaultVal = {
	name: "Amith",
	age: "25",
	count: 0,
};

function CounterReducerApp() {
	const [state, dispatch] = useReducer(reducerFunction, defaultVal);
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<h1>CounterReducerApp</h1>
				<p>Name : {state.name}</p>
				<p>Age : {state.age}</p>
				<p>Count : {state.count}</p>
				<br />
				<div style={{ display: "flex", gap: "10px" }}>
					<button
						onClick={() => {
							dispatch(IncrementAction);
						}}>
						Increment
					</button>
					<button
						onClick={() => {
							dispatch(DecrementAction);
						}}>
						Decrement
					</button>
					<button
						onClick={() => {
							dispatch(ResetAction);
						}}>
						Reset
					</button>
					<button
						onClick={() => {
							dispatch(ChangeNameAction);
						}}>
						ChangeName
					</button>
				</div>
				<br />
			</div>
		</>
	);
}
export default CounterReducerApp;
