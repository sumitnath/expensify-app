// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

// SORT_BY_DATE
const sortByDateFilter = () => ({
	type: 'SORT_BY_DATE',
	date: 'date'
});

// SORT_BY_AMOUNT
const sortByAmountFilter = () => ({
	type: 'SORT_BY_AMOUNT',
	amount: 'amount'
});

// SET_START_DATE
const setStartDateFilter = (startDate = undefined) => ({
	type: 'SET_START_DATE',
	startDate
});

// SET_END_DATE
const setEndDateFilter = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate
});

export { setTextFilter, sortByDateFilter, sortByAmountFilter, setStartDateFilter, setEndDateFilter };
