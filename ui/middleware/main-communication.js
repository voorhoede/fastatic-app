function triggerFastatic(action) {
	console.log('action', action);
}

const mainCommunication = store => next => (action) => {
	switch (action.type) {

		case 'DROPZONE_SRC_PATH':
				triggerFastatic(action);
			break;

		default:
	}

	return next(action);
};

module.exports = {
	mainCommunication
};
