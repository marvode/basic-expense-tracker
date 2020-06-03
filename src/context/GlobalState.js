import React, { useReducer, createContext } from "react";

import AppReducer from "./AppReducer";
import { initializeStorage } from "../AppStorage";

const initialState = {
	transactions: initializeStorage(),
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const deleteTransaction = (id) => {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	};

	const addTransaction = (transaction) => {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	};

	const clearTransactions = () => {
		dispatch({
			type: "CLEAR_TRANSACTIONS",
		});
	};

	const addTransactions = (transactions) => {
		dispatch({
			type: "ADD_TRANSACTIONS",
			payload: transactions,
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
				clearTransactions,
				addTransactions,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
