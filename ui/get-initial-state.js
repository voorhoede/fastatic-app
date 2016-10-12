module.exports = function getInitialState() {
	return {
		app: {
			activeView: 'src',
			srcViewDisplay: true,
			destViewDisplay: false,
			resultViewDisplay: false,
			errorViewDisplay: false,
		},
		dropzoneDest: {
			disabled: false,
			hovering: false,
			isFile: false,
			path: ''
		},
		dropzoneSrc: {
			disabled: false,
			hovering: false,
			isFile: false,
			path: '',
			spinner: false
		},
		errorlist: {
			show: false,
			errors: []
		},
		fastatic: {
			isRunning: false,
			copiedFilesToDest: true
		},
		result: {}
	};
};
