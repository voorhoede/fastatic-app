const { createStore } = require('redux');
const getInitialState = require('./get-initial-state');
const reducer = require('./reducers/reducers');

function configureStore(initialState) {
	return createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());
}

module.exports = configureStore(Object.assign({}, getInitialState()));
