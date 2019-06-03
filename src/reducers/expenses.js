// Expenses Reducer

// Default State
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	if (action.type == 'ADD_EXPENSE') {
		return [
			...state,
			action.expense
		];
	} else if (action.type == 'REMOVE_EXPENSE') {
		return state.filter(({ id }) => {
			return id !== action.id;
		})
	} else if (action.type == 'EDIT_EXPENSE') {
		return state.map((expense) => {
			if (expense.id == action.id) {
				return {
					...expense,
					...action.updates
				};
			} else {
				return expense;
			};
		});
	} else if (action.type == 'SET_EXPENSES') {
		return action.expenses;
	}
	return state;
};

export { expensesReducer };
