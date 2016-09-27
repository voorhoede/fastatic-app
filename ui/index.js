const store = require('./store');
const path = require('path');
const { ipcRenderer } = require('electron');

store.subscribe(() => {
	const state = store.getState();
	const srcIsNotAFile = !state.dropzones.src.isFile;
	const srcHasAPath = !!state.dropzones.src.path;
	const fastaticIsNotRunning = !state.fastatic.isRunning;
	const filesAreCopied = state.fastatic.copiedFilesToDest;

	// Run fastatic
	if (srcHasAPath &&
		srcIsNotAFile &&
		fastaticIsNotRunning &&
		filesAreCopied) {
		store.dispatch({ type: 'RUN_FASTATIC' });
		store.dispatch({ type: 'FILES_ARE_NOT_COPIED' });
		ipcRenderer.send('run-fastatic', {
			src: state.dropzones.src.path
		});
	}
});

ipcRenderer.on('stop-fastatic', (event, args) => {
	store.dispatch({ type: 'STOP_FASTATIC' });
	store.dispatch({ type: 'ADD_RESULT', output: args });
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
