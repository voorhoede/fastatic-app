const { ipcRenderer } = require('electron');

console.log('send ping');
ipcRenderer.send('ping');
