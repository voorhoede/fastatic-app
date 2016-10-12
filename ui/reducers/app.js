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

		case 'HIDE_DEST':
			return Object.assign(state, {
				destViewDisplay: false
			});

		default:
			return state;

	}
};

module.exports = app;
