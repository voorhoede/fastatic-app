const { combineReducers } = require('redux');
const dropzones = require('./dropzones');
const fastatic = require('./fastatic');
const result = require('./result');

const fastaticReducers = combineReducers({
	dropzones,
	fastatic,
	result
});

module.exports = fastaticReducers;
