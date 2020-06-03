import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState.js";

const Transaction = ({ id, text, amount }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = amount > 0 ? "+" : "-";
	const isPositive = amount >= 0 ? "border-green-600" : "border-red-600";

	return (
		<li className="mb-3">
			<div
				className={`bg-white px-3 py-3 border-r-8 rounded shadow  hover:shadow-lg ${isPositive}`}
			>
				<p className="flex justify-between">
					<span className="capitalize transaction-item">
						<button
							className="px-2 mr-2 hover:bg-red-600"
							onClick={() => deleteTransaction(id)}
						>
							&times;
						</button>
						{text}
					</span>
					<span>{`${sign} $ ${Math.abs(amount)}`}</span>
				</p>
			</div>
		</li>
	);
};

export default Transaction;
