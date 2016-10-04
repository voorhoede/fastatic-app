const { combineReducers } = require('redux');
const app = require('./app');
const errorlist = require('./errorlist');
const fastatic = require('./fastatic');
const result = require('./result');

const fastaticReducers = combineReducers({
	app,
	errorlist,
	fastatic,
	result
});

module.exports = fastaticReducers;
