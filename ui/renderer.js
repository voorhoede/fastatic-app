const { ipcRenderer } = require('electron');
const fs = require('fs');

console.log('send ping');
ipcRenderer.send('ping');

window.ondrop = function ondrop(event) {
	event.preventDefault();
	const files = event.dataTransfer.files;
	const file = files[0] || {};
	const fileStats = fs.statSync(file.path);

	console.log('path:', file.path);
	console.log('is folder:', fileStats.isDirectory());
};

function preventDefault(event) {
	event.preventDefault();
}

window.ondragover = preventDefault;
window.ondragleave = preventDefault;
