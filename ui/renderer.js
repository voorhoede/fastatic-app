const { ipcRenderer } = require('electron');
const fs = require('fs');

const dropzone = document.querySelector('[data-dropzone]');
const dropzoneVisualize = document.querySelector('[data-dropzone-visualize]');

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
	dropzoneVisualize.classList.add('dropzone__visualize--active');
}

function onDragLeave(event) {
	event.preventDefault();
	dropzoneVisualize.classList.remove('dropzone__visualize--active');
}

function preventDefault(event) {
	event.preventDefault();
}

dropzone.ondragover = preventDefault;
dropzone.ondragleave = onDragLeave;
dropzone.ondragenter = onDragEnter;
dropzone.ondrop = ondrop;
