const app = require('electron').app;
const childProcess = require('child_process').fork('./lib/fastatic-child-process');
const Deferred = require('./deferred');

const userData = app.getPath('userData');
const fastaticWorkingFolder = `${userData}/fastatic-working-folder`;
let fastaticDeferred;
let copyDeferred;

childProcess.on('message', (message) => {
	switch (message.type) {
		case 'FASTATIC_END':
			fastaticEnded(message.result);
			break;

		case 'COPIED_TO_DEST':
			copiedToDest(message.dest);
			break;

		default:
	}
});


function runFastatic(args) {
	fastaticDeferred = new Deferred();

	childProcess.send({
		type: 'RUN_FASTATIC',
		src: args.src,
		dest: fastaticWorkingFolder });

	return fastaticDeferred.promise;
}
function fastaticEnded(result) {
	if (result.err) {
		fastaticDeferred.reject(result.err);
		return;
	}

	fastaticDeferred.resolve(result.output);
}

function setDestination(dest) {
	copyDeferred = new Deferred();

	fastaticDeferred.promise
		.then(() => childProcess.send({
			type: 'SET_DESTINATION',
			temp: fastaticWorkingFolder,
			dest
		}));

	return copyDeferred.promise;
}
function copiedToDest(result) {
	copyDeferred.resolve(result.dest);
}


exports.default = {
	runFastatic,
	setDestination
};
