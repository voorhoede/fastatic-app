const { combineReducers } = require('redux');
const dropzones = require('./dropzones');
const errorlist = require('./errorlist');
const fastatic = require('./fastatic');
const result = require('./result');

const fastaticReducers = combineReducers({
	dropzones,
	errorlist,
	fastatic,
	result
});

module.exports = fastaticReducers;
