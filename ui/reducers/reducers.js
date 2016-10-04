const { combineReducers } = require('redux');
const app = require('./app');
const dropzones = require('./dropzones');
const errorlist = require('./errorlist');
const fastatic = require('./fastatic');
const result = require('./result');

const fastaticReducers = combineReducers({
	app,
	dropzones,
	errorlist,
	fastatic,
	result
});

module.exports = fastaticReducers;
