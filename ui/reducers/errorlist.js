const errorlist = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_ERRORS':
			return Object.assign(state, {
				errors: action.errors
			});

		case 'RESET_ERRORS':
			return Object.assign(state, {
				errors: []
			});

		case 'SHOW_ERRORS':
			return Object.assign(state, {
				show: true
			});

		case 'HIDE_ERRORS':
			return Object.assign(state, {
				show: false
			});

		default:
			return state;
	}
};

module.exports = errorlist;
