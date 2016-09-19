const { createStore } = require('redux');
const reducer = require('./reducers/reducers');

module.exports = function configureStore(initialState) {
	return createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());
};
