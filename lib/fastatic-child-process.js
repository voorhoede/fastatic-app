try {
	const fastatic = require('fastatic');
	const path = require('path');
	const promisify = require('bluebird').promisify;
	const ncp = promisify(require('ncp'));
	const remove = promisify(require('rimraf'));

	process.on('message', (message) => {
		switch (message.type) {
			case 'COPY_SRC_TO_TEMP':
				copySrcToTemp(message.src, message.temp);
				break;

			case 'RUN_FASTATIC':
				runFastatic(message.src, message.dest, message.rootFolder);
				break;

			case 'SET_DESTINATION':
				copyToDest(message.temp, message.dest);
				break;

			default:
		}
	});

	function copySrcToTemp(src, temp) {
		remove(temp)
			.then(() => ncp(src, temp))
			.then(() => process.send({ type: 'COPIED_TO_TEMP', temp }));
	}

	function runFastatic(src, dest, temp) {
		remove(dest)
			.then(() => fastatic({
				src,
				dest,
				temp: {
					root: temp,
					src: path.join(temp, 'src'),
					dest: path.join(temp, 'dest')
				}
			}))
			.then(output => process.send({ type: 'FASTATIC_END', result: { output } }))
			.catch(err => process.send({ type: 'FASTATIC_END', result: { err } }));
	}

	function copyToDest(temp, dest) {
		ncp(temp, dest)
			.then(() => remove(temp))
			.then(() => process.send({ type: 'COPIED_TO_DEST', dest }));
	}

} catch(err) {
	process.send('fastatic-child-process err:');
	process.send(err);
}
