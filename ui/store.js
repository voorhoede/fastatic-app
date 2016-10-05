const { createStore, applyMiddleware } = require('redux');
const getInitialState = require('./get-initial-state');
const reducer = require('./reducers/reducers');
const { triggerFastatic } = require('./middleware/communicate-to-main');
const { composeWithDevTools } = require('redux-devtools-extension');

function configureStore(initialState) {
	return createStore(
		reducer,
		initialState,
		composeWithDevTools(
			applyMiddleware(triggerFastatic),
			window.devToolsExtension && window.devToolsExtension()
		)
	);
}

module.exports = configureStore(Object.assign({}, getInitialState()));
