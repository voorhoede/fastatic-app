const result = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_RESULT':
			return Object.assign(state, {
				output: action.output
			});

		case 'RESET_RESULT':
			return Object.assign(state, {
				output: {}
			});

		case 'SHOW_RESULT':
			return Object.assign(state, {
				show: true
			});

		case 'HIDE_RESULT':
			return Object.assign(state, {
				show: false
			});

		case 'SET_RESULT_DEST_PATH':
			return Object.assign(state, {
				output: Object.assign(state.output, { dest: action.value })
			});

		default:
			return state;
	}
};

module.exports = result;
