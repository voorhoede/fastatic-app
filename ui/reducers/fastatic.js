const fastatic = (state = {}, action) => {
	switch (action.type) {

		case 'RUN_FASTATIC':
			return Object.assign(state, {
				isRunning: true
			});

		case 'STOP_FASTATIC':
			return Object.assign(state, {
				isRunning: false
			});

		case 'FILES_ARE_NOT_COPIED':
			return Object.assign(state, {
				copiedFilesToDest: false
			});

		case 'FILES_ARE_COPIED':
			return Object.assign(state, {
				copiedFilesToDest: true
			});

		default:
			return state;
	}
};

module.exports = fastatic;
