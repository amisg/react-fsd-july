import HelloComponent from "./1.Basics/1.HelloComponent/HelloComponent";
import HelloClassComponent from "./1.Basics/1.HelloComponent/HelloClassComponent";
import CounterComponent from "./1.Basics/2.CounterComponent/CounterComponent";
import ListComponent from "./1.Basics/3.ListComponent/ListComponent";
import ConditionalRendering from "./1.Basics/4.ConditionalRendering/ConditionalRendering";
import MultipleState from "./1.Basics/5.MultipleState/MultipleState";

function App() {
	const listStudents = [
		{
			id: 1,
			name: "amith",
			classs: 9,
			color: "red",
		},
		{
			name: "utkarsh",
			classs: 10,
		},
		{
			name: "santhu",
			classs: 11,
		},
	];
	return (
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
		<>
			{/* <HelloComponent name={"amith"} />
			<HelloClassComponent />
			<HelloClassComponent /> */}
			{/* <CounterComponent heading={"counter for add and sub"} /> */}
			{/* <ListComponent students={listStudents} /> */}
			{/* <ConditionalRendering /> */}
			<MultipleState />
		</>
	);
}

export default App;
