const { combineReducers } = require('redux');
const getInitialState = require('../get-initial-state');
const app = require('./app');
const dropzoneDest = require('./dropzone-dest');
const dropzoneSrc = require('./dropzone-src');
const errorlist = require('./errorlist');
const fastatic = require('./fastatic');
const result = require('./result');

const fastaticReducers = combineReducers({
	app,
	dropzoneDest,
	dropzoneSrc,
	errorlist,
	fastatic,
	result
});


const rootReducer = (state, action) => {
	switch (action.type) {

		case 'RESET_STATE':
			return getInitialState();

		default:
			return fastaticReducers(state, action);

	}
};

module.exports = rootReducer;
