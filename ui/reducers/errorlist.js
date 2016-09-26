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

		case 'EXPAND_ERRORS':
			return Object.assign(state, {
				errors: state.errors.map((error) => {
					error.show = true;
					return error;
				})
			});

		case 'COLLAPSE_ERRORS':
			return Object.assign(state, {
				errors: state.errors.map((error) => {
					error.show = false;
					return error;
				})
			});

		case 'TOGGLE_ERROR':
			return Object.assign(state, {
				errors: state.errors.map((error, index) => {
					if (index === action.index) {
						error.show = !error.show;
					}
					return error;
				})
			});

		default:
			return state;
	}
};

module.exports = errorlist;
