import React from 'react';
import ExpenseList from './expense_list.js';
import ExpenseListFilters from './expense_list_filters.js';

const ExpenseDashboardPage = () => (
	<div>
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);

export { ExpenseDashboardPage };
