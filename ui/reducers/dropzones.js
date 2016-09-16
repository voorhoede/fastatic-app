const dropzone = (state = {}, action) => {
	switch (action.type) {
		case 'FOLDER_DROPPED':
			return Object.assign(state, {
				dropped: action.value
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

		case 'SRC_FOLDER_DROPPED':
			return Object.assign(state, {
				src: dropzone(state.src, Object.assign(action, { type: 'FOLDER_DROPPED' }))
			});
		case 'DEST_FOLDER_DROPPED':
			return Object.assign(state, {
				dest: dropzone(state.dest, Object.assign(action, { type: 'FOLDER_DROPPED' }))
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

		default:
			return state;
	}
};

module.exports = dropzones;
