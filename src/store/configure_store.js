import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { expensesReducer } from '../reducers/expenses';
import { filtersReducer } from '../reducers/filters.js';
import authReducer from '../reducers/auth.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	// Store Creation and Combinding Reducers Using combineReducers() function
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer,
			auth: authReducer
		}),
		composeEnhancers(applyMiddleware(ReduxThunk))
	);

	return store;
};
