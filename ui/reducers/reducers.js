const { combineReducers } = require('redux');
const app = require('./app');
const dropzoneSrc = require('./dropzone-src');
const errorlist = require('./errorlist');
const fastatic = require('./fastatic');
const result = require('./result');

const fastaticReducers = combineReducers({
	app,
	dropzoneSrc,
	errorlist,
	fastatic,
	result
});

module.exports = fastaticReducers;
