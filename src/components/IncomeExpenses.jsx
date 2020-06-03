import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState.js";

const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);

	const income = amounts
		.filter((amount) => amount > 0)
		.reduce((acc, amount) => acc + amount, 0)
		.toFixed(2);

	const expense =
		amounts
			.filter((amount) => amount < 0)
			.reduce((acc, amount) => acc + amount, 0)
			.toFixed(2) * -1;

	return (
		<div className="grid grid-cols-2 py-5 mb-8 bg-white rounded shadow">
			<div className="mx-auto tracking-wide">
				<h4 className="uppercase">Income</h4>
				<p className="text-green-500 text-center">${income}</p>
			</div>
			<div className="mx-auto tracking-wide">
				<h4 className="uppercase">Expense</h4>
				<p className="text-red-500 text-center">${expense}</p>
			</div>
		</div>
	);
};

export default IncomeExpenses;
