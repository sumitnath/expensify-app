import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses_total.js';
import numeral from 'numeral';
import { getVisibleExpenses } from '../selectors/expenses.js';

const ExpensesSummary = (props) => {
	const expenses_count = props.expenses.length;
	const expenses_total = numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00');
	const expenseWord = (expenses_count == 1) ? 'expense' : 'expenses';

	return (
		<div>
			<h1>Viewing {expenses_count} {expenseWord} totalling {expenses_total}</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		expenses: getVisibleExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
