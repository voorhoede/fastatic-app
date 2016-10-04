const getInitialState = require('../get-initial-state');

const app = (state = {}, action) => {
	switch (action.type) {

		case 'SHOW_SRC':
			return Object.assign(state, {
				srcViewDisplay: true,
				activeView: 'src'
			});

		case 'SHOW_DEST':
			return Object.assign(state, {
				destViewDisplay: true,
				activeView: 'dest'
			});

		case 'SHOW_RESULT':
			return Object.assign(state, {
				resultViewDisplay: true,
				activeView: 'result'
			});

		case 'SHOW_ERROR':
			return Object.assign(state, {
				errorViewDisplay: true,
				activeView: 'error'
			});

		case 'RESET_APP_VIEWS':
			return getInitialState().app;

		default:
			return state;

	}
};

module.exports = app;
