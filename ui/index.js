const store = require('./store');
const path = require('path');
const { ipcRenderer } = require('electron');

ipcRenderer.on('fastatic-is-running', () => {
	store.dispatch({ type: 'RUN_FASTATIC' });
	store.dispatch({ type: 'DROPZONE_SRC_DISABLED', value: true });
	store.dispatch({ type: 'DROPZONE_SRC_SHOW_SPINNER' });
	store.dispatch({ type: 'SHOW_DEST' });
});

ipcRenderer.on('fastatic-is-completed', (event, args) => {
	store.dispatch({ type: 'ADD_RESULT', output: args });
	store.dispatch({ type: 'DROPZONE_SRC_HIDE_SPINNER' });
});

ipcRenderer.on('fastatic-failed', (event, args) => {
	store.dispatch({ type: 'ADD_ERRORS', errors: args });
	store.dispatch({ type: 'DROPZONE_SRC_HIDE_SPINNER' });
	store.dispatch({ type: 'HIDE_DEST' });
	store.dispatch({ type: 'SHOW_ERROR' });
});

ipcRenderer.on('destination-accepted', () => {
	store.dispatch({ type: 'DROPZONE_DEST_DISABLED', value: true });
});

ipcRenderer.on('flow-finished', (event, args) => {
	store.dispatch({ type: 'SET_RESULT_DEST_PATH', value: args.dest });
	store.dispatch({ type: 'STOP_FASTATIC' });
	store.dispatch({ type: 'SHOW_RESULT' });
});

ipcRenderer.on('menu-open-source', (event, args) => {
	const actionPath = {
		type: `dropzone_src_path`.toUpperCase(),
		path: args,
		isFile: false
	};
	store.dispatch(actionPath);
});

ipcRenderer.on('menu-open-dest', (event, args) => {
	const actionPath = {
		type: `dropzone_dest_path`.toUpperCase(),
		path: args,
		isFile: false
	};
	store.dispatch(actionPath);
});
