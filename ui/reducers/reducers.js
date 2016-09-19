const { combineReducers } = require('redux');
const dropzones = require('./dropzones');
const fastatic = require('./fastatic');

const fastaticReducers = combineReducers({
	dropzones,
	fastatic
});

module.exports = fastaticReducers;
