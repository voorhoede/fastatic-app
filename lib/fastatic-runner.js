let fastaticPromise = null;

function runFastatic() {
	fastaticPromise = new Promise((resolve) => {
			setTimeout(resolve, 1000);
		})
		.then(() => ({
				filesize: {
					src: {
						md: 13749,
						png: 127404,
						css: 244080,
						json: 10375,
						html: 17954,
						js: 3581,
						txt: 1070
					},
					dest: {
						md: 13749,
						png: 107499,
						css: 172528,
						json: 8219,
						html: 13655,
						js: 1490,
						txt: 1070
					}
				},
				src: './examples/microsoft.github.io-master',
				dest: 'some/path/local/to/app'
			}
		));
	return fastaticPromise;
}

function setDestination(args) {
	return fastaticPromise
		.then(() => new Promise((resolve) => {
			// copy files
			setTimeout(() => resolve(args.dest), 1000);
		}));
}

exports.default = {
	runFastatic,
	setDestination
};
