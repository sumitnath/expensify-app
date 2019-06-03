import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/edit_expense_page.js';
import { expenses } from '../fixtures/expenses.js';

test('should render EditExpensePage', () => {
	const editExpense = jest.fn();
	const wrapper = shallow(<EditExpensePage expense={expenses[0]}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
	const editExpense = jest.fn();
	const history = { push: jest.fn() };
	const wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} expense={expenses[0]}/>);
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle startRemoveExpense', () => {
	const startRemoveExpense = jest.fn();
	const history = { push: jest.fn() };
	const wrapper = shallow(<EditExpensePage startRemoveExpense={startRemoveExpense} history={history} expense={expenses[0]}/>);
	wrapper.find('button').prop('onClick')(expenses[0]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id});
});
