import useLocalStorage from "./useLocalStorage";

function Forms() {
	const saveKey = "formInput";

	const [name, setName] = useLocalStorage("name", saveKey);
	const [phone, setPhone] = useLocalStorage("phone", saveKey);
	console.log(name);
	console.log(phone);

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
