import HelloComponent from "./1.Basics/1.HelloComponent/HelloComponent";
import HelloClassComponent from "./1.Basics/1.HelloComponent/HelloClassComponent";
import CounterComponent from "./1.Basics/2.CounterComponent/CounterComponent";

function App() {
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
			<CounterComponent heading={"counter for add and sub"} />
		</>
	);
}

export default App;
