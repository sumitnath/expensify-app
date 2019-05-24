import { createStore, combineReducers } from 'redux';
import { expensesReducer } from '../reducers/expenses';
import { filtersReducer } from '../reducers/filters.js';

export default () => {
	// Store Creation and Combinding Reducers Using combineReducers() function
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};
