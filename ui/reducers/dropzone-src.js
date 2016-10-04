const dropzoneSrc = (state = {}, action) => {
	switch (action.type) {

		case 'DROPZONE_SRC_HOVERING':
			return Object.assign(state, {
				hovering: action.value
		});

		case 'DROPZONE_SRC_IS_FILE':
			return Object.assign(state, {
				isFile: action.value
			});

		case 'DROPZONE_SRC_PATH':
			return Object.assign(state, {
				path: action.value
			});

		default:
			return state;

	}
};

module.exports = dropzoneSrc;
