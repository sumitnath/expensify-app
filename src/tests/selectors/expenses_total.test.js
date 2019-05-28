import getExpensesTotal from '../../selectors/expenses_total.js';
import { expenses } from '../fixtures/expenses.js';

const expense = [{
	id: '1',
	description: 'Gum',
	note: '',
	amount: 195,
	createdAt: 0
}];

test('should add all expenses in object array', () => {
	const total = getExpensesTotal(expenses);
	expect(total).toEqual(114195);
});

test('should return 0 if no expenses', () => {
	const total = getExpensesTotal();
	expect(total).toEqual(0);
});

test('should correctly add single expense', () => {
	const total = getExpensesTotal(expense);
	expect(total).toEqual(expense[0].amount);
});
