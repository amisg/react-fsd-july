import { useEffect, useState } from "react";

function useLocalStorage(field, key) {
	console.log("props", field);

	const [val, setVal] = useState(() => {
		const val = JSON.parse(localStorage.getItem(key))?.[field];
		return val ? val : "";
	});

	useEffect(() => {
		const oldObj = JSON.parse(localStorage.getItem(key));
		localStorage.setItem(
			key,
			JSON.stringify({
				...oldObj,
				[field]: val,
			})
		);
	}, [val, field, key]);

	return [val, setVal];
}
export default useLocalStorage;
