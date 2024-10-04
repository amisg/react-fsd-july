import Child from "./Child";

function Parent() {
	const bulletPoint = "Hey there someone is going to pass you :: bullet point";
	const childhandler = (information) => {
		console.log(information, "infomation HAS BEEN RECIEVED TO PARENT");
	};
	return (
		<>
			<h1>Parent Body</h1>
			<Child bulletPoint={bulletPoint} childhandler={childhandler} />
		</>
	);
}

export default Parent;
