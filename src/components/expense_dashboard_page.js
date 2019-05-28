import React from 'react';
import ExpenseList from './expense_list.js';
import ExpenseListFilters from './expense_list_filters.js';
import ExpensesSummary from './expenses_summary.js';

const ExpenseDashboardPage = () => (
	<div>
		<ExpensesSummary />
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);

export { ExpenseDashboardPage };
