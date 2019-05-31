import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { expensesReducer } from '../reducers/expenses';
import { filtersReducer } from '../reducers/filters.js';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
	// Store Creation and Combinding Reducers Using combineReducers() function
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer
		}),
		composeEnhancers(applyMiddleware(ReduxThunk))
	);

	return store;
};
