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

		default:
			return state;
	}
};

module.exports = fastatic;
