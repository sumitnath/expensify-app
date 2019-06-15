import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getExpensesTotal from '../selectors/expenses_total.js';
import numeral from 'numeral';
import { getVisibleExpenses } from '../selectors/expenses.js';

const ExpensesSummary = (props) => {
	const expenses_count = props.expenses.length;
	const expenses_total = numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00');
	const expenseWord = (expenses_count == 1) ? 'expense' : 'expenses';

	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">Viewing <span>{expenses_count}</span> {expenseWord} totalling <span>{expenses_total}</span></h1>
				<div className="page-header__actions">
					<Link className="button" to="/create">Add Expense</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		expenses: getVisibleExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
