const dropzoneSrc = (state = {}, action) => {
	switch (action.type) {

		case 'DROPZONE_SRC_DISABLED':
			return Object.assign(state, {
				disabled: action.value
			});

		case 'DROPZONE_SRC_HOVERING':
			return Object.assign(state, {
				hovering: action.value
		});

		case 'DROPZONE_SRC_PATH':
			return Object.assign(state, {
				path: action.path,
				isFile: action.isFile
			});

		case 'DROPZONE_SRC_SHOW_SPINNER':
			return Object.assign(state, {
				spinner: true
			});

		case 'DROPZONE_SRC_HIDE_SPINNER':
			return Object.assign(state, {
				spinner: false
			});

		default:
			return state;

	}
};

module.exports = dropzoneSrc;
