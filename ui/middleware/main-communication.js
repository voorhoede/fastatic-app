const { ipcRenderer } = require('electron');

function triggerFastatic(action) {
	if (action.path && !action.isFile) {
		ipcRenderer.send('run-fastatic', { src: action.path });
	}
}

function chooseDestination(action) {
	if (action.path && !action.isFile) {
		ipcRenderer.send('destination-chosen', { dest: action.path });
	}
}

function menuCommand(action) {
	ipcRenderer.send('menu', action.value);
}

const mainCommunication = store => next => (action) => {
	switch (action.type) {

		case 'DROPZONE_SRC_PATH':
				triggerFastatic(action);
			break;

		case 'DROPZONE_DEST_PATH':
				chooseDestination(action);
			break;

		case 'MENU_COMMAND':
				menuCommand(action);
			break;

		default:
	}

	return next(action);
};

module.exports = {
	mainCommunication
};
