const { combineReducers } = require('redux');
const dropzones = require('./dropzones');

const fastaticReducers = combineReducers({
	dropzones,
});

module.exports = fastaticReducers;
