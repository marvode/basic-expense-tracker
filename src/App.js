import React from "react";

import "./css/tailwind.css";

import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
	return (
		<div
			className="flex content-center text-lg"
			style={{ height: "100vh" }}
		>
			<div className="max-w-md mx-auto max-h-64 my-auto px-5">
				<Header />
				<Balance />
				<IncomeExpenses />
				<TransactionList />
				<AddTransaction />
			</div>
		</div>
	);
}

export default App;
