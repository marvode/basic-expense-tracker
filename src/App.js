import React from "react";

import "./css/tailwind.css";

import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
	return (
		<GlobalProvider>
			<div
				className="flex content-center text-lg text-gray-800"
				style={{ height: "100vh" }}
			>
				<div
					className="max-w-md mx-auto my-auto pb-5 px-5 shadow-md rounded"
					style={{ backgroundColor: "#f7f7f7" }}
				>
					<Header />
					<Balance />
					<IncomeExpenses />
					<TransactionList />
					<AddTransaction />
				</div>
			</div>
		</GlobalProvider>
	);
}

export default App;
