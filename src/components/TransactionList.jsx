import React, { useContext } from "react";

import Transaction from "./Transaction.jsx";

import { GlobalContext } from "../context/GlobalState.js";

const TransactionList = () => {
	const { transactions, clearTransactions } = useContext(GlobalContext);

	return (
		<div className="pb-8">
			<div className="flex justify-between pb-2 mb-3 border-b border-gray-400">
				<h3 className="-pb-2">History</h3>
				{transactions.length ? (
					<button
						className=" px-2 py-1 bg-red-600 rounded"
						onClick={() => clearTransactions()}
					>
						Clear
					</button>
				) : (
					""
				)}
			</div>
			<ul>
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} {...transaction} />
				))}
			</ul>
		</div>
	);
};

export default TransactionList;
