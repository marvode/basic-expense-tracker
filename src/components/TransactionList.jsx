import React from "react";

const TransactionList = () => {
	return (
		<div className="pb-8">
			<h3 className="pb-2 mb-3 border-b border-gray-400">History</h3>
			<ul>
				<li className="bg-white px-3 py-3 border-r-8 border-red-600 rounded shadow">
					<p className="flex justify-between">
						<span>Cash</span>
						<span>-$ 400</span>
					</p>
				</li>
			</ul>
		</div>
	);
};

export default TransactionList;
