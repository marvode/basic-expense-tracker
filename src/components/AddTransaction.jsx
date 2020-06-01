import React, { useState } from "react";

const AddTransaction = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);
	return (
		<div>
			<h3 className="pb-2 mb-3 border-b border-gray-400">
				Add new transaction
			</h3>
			<form>
				<div className="pb-2">
					<label className="mb-2">Text</label>
					<input
						className="w-full px-3 py-2 rounded focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Enter text..."
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className="pb-4">
					<label className="mb-2">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						className="w-full px-3 py-2 rounded focus:outline-none focus:shadow-outline"
						type="number"
						placeholder="Enter amount..."
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<button
					className="bg-teal-600 w-full py-3 text-center text-gray-200 rounded"
					type="submit"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					Add transaction
				</button>
			</form>
		</div>
	);
};

export default AddTransaction;
