export const addItemToTransactions = (item) => {
	const transactions = getAllTransactions();
	return transactions
		? setTransactions([...transactions, item])
		: setTransactions([item]);
};

export const clearAllTransactions = () => {
	localStorage.removeItem("transactions");
};

export const deleteItemFromTransactions = (id) => {
	const transactions = getAllTransactions().filter(
		(transaction) => transaction.id !== id
	);
	return setTransactions(transactions);
};

const getAllTransactions = () => {
	return JSON.parse(localStorage.getItem("transactions"));
};

const setTransactions = (items) => {
	localStorage.setItem("transactions", JSON.stringify(items));
};

export const initializeStorage = () => {
	const transactions = getAllTransactions();

	if (transactions) return transactions;
	else {
		setTransactions([]);
		return [];
	}
};
