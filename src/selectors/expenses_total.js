const getExpensesTotal = (expenses = 0) => {
	let i;
	let total;

	i = 0;
	total = 0;
	while (i < expenses.length) {
		total += expenses[i++].amount;
	}
	return total;
};

export default getExpensesTotal;
