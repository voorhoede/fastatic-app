const fs = require('fs');

const dropzone = {

	preventDefault: (event) => {
		event.preventDefault();
	},

	onDragEnter: (store, name) => {
		const action = {
			type: `dropzone_${name}_hovering`.toUpperCase(),
			value: true
		};
		store.dispatch(action);
	},

	onDragLeave: (store, name) => {
		const action = {
			type: `dropzone_${name}_hovering`.toUpperCase(),
			value: false
		};
		store.dispatch(action);
	},

	onDrop: (event, store, name) => {
		event.preventDefault();
		const files = event.dataTransfer.files;
		const file = files[0] || {};
		const fileStats = fs.statSync(file.path);
		const isFile = fileStats.isFile();
		const actionHover = {
			type: `dropzone_${name}_hovering`.toUpperCase(),
			value: false
		};
		const actionPath = {
			type: `dropzone_${name}_path`.toUpperCase(),
			path: file.path,
			isFile
		};
		store.dispatch(actionHover);
		store.dispatch(actionPath);
	},

	onKeyCommandClick: (name, command) => {
		const action = {
			type: `menu_command`.toUpperCase(),
			value: command
		};

		store.dispatch(action);
	}
};

module.exports = dropzone;
