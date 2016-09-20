const configureStore = require('./store');
const getInitialState = require('./initial-state');
const { ipcRenderer } = require('electron');

const store = configureStore(Object.assign({}, getInitialState()));
store.subscribe(() => {
	const state = store.getState();
	startFastatic(state);
});

function startFastatic(state) {
	const srcIsNotAFile = !state.dropzones.src.isFile;
	const destIsNotAFile = !state.dropzones.src.isFile;
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
	store.dispatch({ type: 'RESET_DROPZONES' });
	store.dispatch({ type: 'STOP_FASTATIC' });
	store.dispatch({ type: 'ADD_RESULT', output: args });
	store.dispatch({ type: 'SHOW_RESULT' });
});

module.exports = store;
