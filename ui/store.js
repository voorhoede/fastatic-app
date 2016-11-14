const { createStore, applyMiddleware } = require('redux');
const getInitialState = require('./get-initial-state');
const reducer = require('./reducers/reducers');
const { mainCommunication } = require('./middleware/main-communication');
const { composeWithDevTools } = require('redux-devtools-extension');

function configureStore(initialState) {
	return createStore(
		reducer,
		initialState,
		composeWithDevTools(
			applyMiddleware(mainCommunication)
		)
	);
}

module.exports = configureStore(Object.assign({}, getInitialState()));
