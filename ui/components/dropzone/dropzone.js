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
		const actionIsFile = {
			type: `dropzone_${name}_is_file`.toUpperCase(),
			value: isFile
		};
		const actionPath = {
			type: `dropzone_${name}_path`.toUpperCase(),
			value: file.path
		};
		store.dispatch(actionHover);
		store.dispatch(actionIsFile);
		store.dispatch(actionPath);
	}
};

module.exports = dropzone;
