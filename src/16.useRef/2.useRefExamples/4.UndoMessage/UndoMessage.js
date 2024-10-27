import { useRef, useState } from "react";

function UndoMessage(params) {
	const [sending, setSending] = useState(false);
	const ref = useRef();

	function sendHandler() {
		setSending(true);
		const id = setTimeout(() => {
			console.log("hello world");
			setSending(false);
		}, 5000);
		ref.current = id;
	}
	function undoHandler() {
		clearTimeout(ref.current);
		setSending(false);
	}

	return (
		<>
			<h1>UndoMessage</h1>
			<div>
				<input type="text" placeholder="here goes message" />
				<button disabled={sending} onClick={sendHandler}>
					Send
				</button>
			</div>

			{sending && (
				<div>
					<button onClick={undoHandler}>Undo</button>
				</div>
			)}
		</>
	);
}
export default UndoMessage;
