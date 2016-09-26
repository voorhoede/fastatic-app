module.exports = function getInitialState() {
	return {
		dropzones: {
			src: {
				isFile: false,
				hovering: false,
				path: null
			},
			dest: {
				isFile: false,
				hovering: false,
				path: null
			}
		},
		fastatic: {
			isRunning: false
		},
		result: {
			show: false,
			output: {}
		},
		errorlist: {
			show: false,
			errors: []
		}
	};
};
