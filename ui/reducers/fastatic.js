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

		case 'FASTATIC_OUTPUT':
			return Object.assign(state, {
				output: action.output
			});

		default:
			return state;
	}
};

module.exports = fastatic;
