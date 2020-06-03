import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState.js";

const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	const total = amounts.reduce((acc, amount) => acc + amount, 0).toFixed(2);
	const sign = total >= 0 ? "" : "-";
	return (
		<div className="mb-5">
			<h3 className="uppercase">Your Balance</h3>
			<h2 className="text-5xl leading-none tracking-wide">{`${sign}$ ${Math.abs(
				total
			)}`}</h2>
		</div>
	);
};

export default Balance;
