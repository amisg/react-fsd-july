export function reducerFunction(state, action) {
	const { type } = action;
	if (type === "INCREMENT") {
		return {
			...state,
			count: state.count + 1,
		};
	} else if (type === "DECREMENT") {
		return {
			...state,
			count: state.count - 1,
		};
	} else if (type === "RESET") {
		return {
			...state,
			count: 0,
		};
	} else if (type === "CHANGENAME") {
		return {
			...state,
			name: "S G",
		};
	} else {
		return state;
	}
}
