const store = require('./store');
const path = require('path');
const { ipcRenderer } = require('electron');

store.subscribe(() => {
	const state = store.getState();
});

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

function formatError(error) {
	const { cwd, fileName } = error || {};
	const { line, col, message } = error.cause || {};
	const where = (cwd && fileName) ? `${path.relative(cwd, fileName)}:${line}:${col}` : null;
	const stack = (error.stack) ? error.stack.split('\n    ').slice(1).join('\n\t ') : '';

	const format = {
		name: error.name || 'Parser Error',
		parser: error.parser,
		plugin: error.plugin,
		message: message || error.message,
		where: where || stack,
		show: true
	};

	return format;
}
