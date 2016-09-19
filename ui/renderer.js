const configureStore = require('./store');
const initialState = require('./initial-state');
const { ipcRenderer } = require('electron');

const store = configureStore(Object.assign({}, initialState()));
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

ipcRenderer.on('stop-fastatic', () => {
	store.dispatch({ type: 'RESET_DROPZONES' });
	store.dispatch({ type: 'STOP_FASTATIC' });
});

module.exports = store;
