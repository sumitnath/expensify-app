import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => {
	return {
		type: 'INCREMENT',
		incrementBy: incrementBy
	};
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
	return {
		type: 'DECREMENT',
		decrementBy: decrementBy
	};
};

const setCount = ({ count } = {}) => {
	return {
		type: 'SET',
		count: count
	};
};

const resetCount = ({ resetBy = 0 } = {}) => {
	return {
		type: 'RESET',
		resetBy: resetBy
	};
};

// Reducers
// 1. Reducers are pure functions

const countReducer = (state = { count: 0 }, action) => {
	if (action.type == 'INCREMENT') {
		return {
			count: state.count + action.incrementBy
		};
	} else if (action.type == 'DECREMENT') {
		return {
			count: state.count - action.decrementBy
		};
	} else if (action.type == 'SET') {
		return {
			count: action.count
		};
	} else if (action.type == 'RESET') {
		return {
			count: action.resetBy
		}
	} else {
		return state;
	}
	return state;
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount({ decrementBy: 1 }));

store.dispatch(setCount({ count: 101 }));

store.dispatch(resetCount());
