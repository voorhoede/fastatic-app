/**
 * This module setup a childprocess via a fork of the fastatic-child-process
 * module. The childprocess is needed because the Fastatic module is
 * processor intensive.
 */

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


/**
 * Tell the childProcess to run Fastatic.
 * @param  {String}  src The source directory to run Fastatic against
 * @return {Promise}     A promise to be resolved when Fastatic finishes.
 */
function runFastatic(src) {
	fastaticDeferred = new Deferred();

	childProcess.send({
		type: 'RUN_FASTATIC',
		src,
		dest: fastaticWorkingFolder });

	return fastaticDeferred.promise;
}

/**
 * Handler for the FASTATIC_END message. This message is thrown by the child
 * process when Fastatic is completed.
 *
 * It resolves / rejects the promise returned by runFastatic
 *
 * @param  {Object} result Object containing the output or errors from Fastatic
 */
function fastaticEnded(result) {
	if (result.err) {
		fastaticDeferred.reject(result.err);
		return;
	}

	fastaticDeferred.resolve(result.output);
}

/**
 * Tell the childProcess to copy the optimised files to a user chosen directory
 * @param  {String}  dest The directory chosen by the user
 * @return {Promise}      A promise to be resolved when the files are copied
 */
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

/**
 * Handler for the COPIED_TO_DEST message. This message is thrown by the child
 * process when the files are copied to the destination folder.
 *
 * It resolves the promise retuned by setDestination
 *
 * @param  {String} dest The destination folder the files are copied to
 */
function copiedToDest(dest) {
	copyDeferred.resolve(dest);
}


exports.default = {
	runFastatic,
	setDestination
};
