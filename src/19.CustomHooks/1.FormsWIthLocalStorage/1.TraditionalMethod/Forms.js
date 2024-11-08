import { useEffect, useState } from "react";

function Forms() {
	// const obj = JSON.parse(localStorage.getItem("formInput"));
	// console.log(obj);
	//lazy initializaion
	const [name, setName] = useState(() => {
		console.log("lazy initializaion");
		const val = JSON.parse(localStorage.getItem("formInput")).name;
		return val ? val : "";
	});
	const [phone, setPhone] = useState(() => {
		const val = JSON.parse(localStorage.getItem("formInput")).phone;
		return val ? val : "";
	});
	console.log(name);
	console.log(phone);

	useEffect(() => {
		return () => {
			localStorage.setItem(
				"formInput",
				JSON.stringify({
					name,
					phone,
				})
			);
		};
	}, [name, phone]);

	return (
		<>
			<h1>Forms</h1>

			<label htmlFor="name">Name : </label>
			<input
				value={name}
				id="name"
				name="name"
				placeholder="enter the name"
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>

			<br />

			<label htmlFor="phoneNumber">PhoneNumber : </label>
			<input
				value={phone}
				id="phoneNumber"
				name="phoneNumber"
				placeholder="enter the phoneNumber"
				onChange={(e) => {
					setPhone(e.target.value);
				}}
			/>

			<br />

			<input type="button" value="Submit" />
		</>
	);
}

export default Forms;
