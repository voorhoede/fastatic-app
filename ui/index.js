const store = require('./store');
const path = require('path');
const { ipcRenderer } = require('electron');

store.subscribe(() => {
	const state = store.getState();
	startFastatic(state);
});

function startFastatic(state) {
	const srcIsNotAFile = !state.dropzones.src.isFile;
	const destIsNotAFile = !state.dropzones.dest.isFile;
	const srcHasAPath = !!state.dropzones.src.path;
	const destHasAPath = !!state.dropzones.dest.path;
	const fastaticIsRunning = state.fastatic.isRunning;

	if (
		srcIsNotAFile &&
		destIsNotAFile &&
		srcHasAPath &&
		destHasAPath &&
		!fastaticIsRunning) {
		store.dispatch({ type: 'RUN_FASTATIC' });
		ipcRenderer.send('run-fastatic', {
			src: state.dropzones.src.path,
			dest: state.dropzones.dest.path
		});
	}
}

ipcRenderer.on('stop-fastatic', (event, args) => {
	resetUI();

	store.dispatch({ type: 'ADD_RESULT', output: args });
	store.dispatch({ type: 'SHOW_RESULT' });
});

ipcRenderer.on('stop-fastatic-with-errors', (event, args) => {
	resetUI();
	const errors = (args.length) ? args : [new Error('Something went wrong with the fastatic process')];
	store.dispatch({ type: 'ADD_ERRORS', errors: errors.map(err => formatError(err)) });
	store.dispatch({ type: 'SHOW_ERRORS' });
});

function resetUI() {
	store.dispatch({ type: 'RESET_DROPZONES' });
	store.dispatch({ type: 'STOP_FASTATIC' });
}

function formatError(error) {
	const { cwd, fileName } = error || {};
	const { line, col, message } = error.cause || {};
	const where = (cwd && fileName) ? `${path.relative(cwd, fileName)}:${line}:${col}` : null;

	const format = {
		name: error.name || 'Parser Error',
		parser: error.parser,
		plugin: error.plugin,
		message: message || error.message,
		where: where || error.stack.split('\n    ').slice(1).join('\n\t '),
		show: true
	};

	return format;
}
