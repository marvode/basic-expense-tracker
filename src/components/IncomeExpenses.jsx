import React from "react";

const IncomeExpenses = () => {
	return (
		<div className="grid grid-cols-2 py-5 mb-8 bg-white rounded shadow">
			<div className="mx-auto tracking-wide">
				<h4 className="uppercase">Income</h4>
				<p className="text-green-500">+$ 0.00</p>
			</div>
			<div className="mx-auto tracking-wide">
				<h4 className="uppercase">Expense</h4>
				<p className="text-red-500">-$ 0.00</p>
			</div>
		</div>
	);
};

export default IncomeExpenses;
