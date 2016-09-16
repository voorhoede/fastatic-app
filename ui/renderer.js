const { ipcRenderer } = require('electron');
const fs = require('fs');
const configureStore = require('./store');
const initialState = require('./initial-state');

const dropzone = document.querySelector('[data-dropzones]');

const store = configureStore(initialState);
store.subscribe(render);
store.dispatch({ type: 'SRC_FOLDER_DROPPED', value: true });
function render() {
	console.log(store.getState());
}

function ondrop(event) {
	event.preventDefault();
	const files = event.dataTransfer.files;
	const file = files[0] || {};
	const fileStats = fs.statSync(file.path);
	const isDir = fileStats.isDirectory();

	console.log('path:', file.path);
	console.log('is folder:', isDir);

	if (isDir) {
		ipcRenderer.send('run-fastatic', { dir: file.path });
	}
}

function onDragEnter(event) {
	event.preventDefault();
	// dropzoneVisualize.classList.add('dropzone__visualize--active');
}

function onDragLeave(event) {
	event.preventDefault();
	// dropzoneVisualize.classList.remove('dropzone__visualize--active');
}

function preventDefault(event) {
	event.preventDefault();
}

dropzone.ondragover = preventDefault;
dropzone.ondragleave = onDragLeave;
dropzone.ondragenter = onDragEnter;
dropzone.ondrop = ondrop;
