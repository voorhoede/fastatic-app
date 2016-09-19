const configureStore = require('./store');
const initialState = require('./initial-state');
const { ipcRenderer } = require('electron');

const store = configureStore(initialState);
store.subscribe(() => {
	const state = store.getState();
});

module.exports = store;
