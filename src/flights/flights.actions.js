import { fetchFlights, convertDataBody } from './flightsGateway';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';
export const INPUT_VALUE_CHANGED = 'INPUT_VALUE_CHANGED';
export const PATH_CHANGED = 'PATH_CHANGED';
export const SEARCH_CHANGED = 'SEARCH_CHANGED';

export const flightsListRecieved = flightsList => {
	const action = {
		type: FLIGHTS_LIST_RECIEVED,
		payload: {
			flightsList,
		},
	};

	return action;
};

export const inputValueChanged = value => {
	const action = {
		type: INPUT_VALUE_CHANGED,
		payload: {
			value,
		},
	};

	return action;
};

export const pathChanged = path => {
	const action = {
		type: PATH_CHANGED,
		payload: {
			path,
		},
	};

	return action;
};

export const searchChanged = search => {
	const action = {
		type: SEARCH_CHANGED,
		payload: {
			search,
		},
	};

	return action;
};

export const getFlightsList = (pathType, value) => {
	const thunkAction = function (dispatch) {
		fetchFlights().then(flightsList =>
			dispatch(flightsListRecieved(convertDataBody(flightsList.body, pathType, value))),
		);
	};

	return thunkAction;
};