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

		default:
			return state;
	}
};

module.exports = result;
