import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState.js";
import { deleteItemFromTransactions } from "../AppStorage.js";

const Transaction = ({ id, text, amount }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = amount > 0 ? "+" : "-";
	const isPositive = amount >= 0 ? "border-green-600" : "border-red-600";

	return (
		<li className="mb-3 transaction-item transform duration-500 hover:-translate-y-1">
			<div
				className={`bg-white px-3 py-3 border-r-8 rounded shadow  hover:shadow-lg ${isPositive}`}
			>
				<p className="flex justify-between">
					<span className="capitalize">
						<button
							className="px-2 mr-2 del_button"
							onClick={() => {
								deleteTransaction(id);
								deleteItemFromTransactions(id);
							}}
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
