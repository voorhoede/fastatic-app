const getInitialState = require('../initial-state');

const dropzone = (state = {}, action) => {
	switch (action.type) {
		case 'IS_FILE':
			return Object.assign(state, {
				isFile: action.value
			});

		case 'HOVERING':
			return Object.assign(state, {
				hovering: action.value
			});

		case 'PATH':
			return Object.assign(state, {
				path: action.value
			});

		default:
			return state;
	}
};

const dropzones = (state = {}, action) => {
	switch (action.type) {

		case 'SRC_IS_FILE':
			return Object.assign(state, {
				src: dropzone(state.src, Object.assign(action, { type: 'IS_FILE' }))
			});
		case 'DEST_IS_FILE':
			return Object.assign(state, {
				dest: dropzone(state.dest, Object.assign(action, { type: 'IS_FILE' }))
			});

		case 'SRC_HOVERING':
			return Object.assign(state, {
				src: dropzone(state.src, Object.assign(action, { type: 'HOVERING' }))
			});
		case 'DEST_HOVERING':
			return Object.assign(state, {
				dest: dropzone(state.dest, Object.assign(action, { type: 'HOVERING' }))
			});

		case 'SRC_PATH':
			return Object.assign(state, {
				src: dropzone(state.src, Object.assign(action, { type: 'PATH' }))
			});
		case 'DEST_PATH':
			return Object.assign(state, {
				dest: dropzone(state.dest, Object.assign(action, { type: 'PATH' }))
			});

		case 'RESET_DROPZONES':
			return getInitialState().dropzones;

		default:
			return state;
	}
};

module.exports = dropzones;
