const fastatic = require('fastatic');
const promisify = require('bluebird').promisify;
const ncp = promisify(require('ncp'));
const remove = promisify(require('rimraf'));

process.on('message', (message) => {
	switch (message.type) {
		case 'RUN_FASTATIC':
			runFastatic(message.src, message.dest);
			break;

		case 'SET_DESTINATION':
			copyToDest(message.temp, message.dest);
			break;

		default:
	}
});

function runFastatic(src, dest) {
	remove(dest)
		.then(() => fastatic({ src, dest }))
		.then(output => process.send({ type: 'FASTATIC_END', result: { output } }))
		.catch(err => process.send({ type: 'FASTATIC_END', result: { err } }));
}

function copyToDest(temp, dest) {
	ncp(temp, dest)
		.then(() => remove(temp))
		.then(() => process.send({ type: 'COPIED_TO_DEST', dest }));
}
