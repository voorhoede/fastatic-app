/**
 * This module setup a childprocess via a fork of the fastatic-child-process
 * module. The childprocess is needed because the Fastatic module is
 * processor intensive.
 */
const fs = require('fs');
const path = require('path');
const app = require('electron').app;
const childProcess = require('child_process');
const Deferred = require('./deferred');

const userData = app.getPath('userData');
const fastaticWorkingFolder = `${userData}/fastatic-working-folder`;
const fastaticWorkingFolderSrcTemp = `${userData}/fastatic-src-temp`;
const fastaticWorkingFolderDestTemp = `${userData}/fastatic-dest-temp`;

class FastaticRunner {
	constructor(mainWindow) {
		this.copyDeferred = new Deferred();
		this.fastaticDeferred = new Deferred();
		this.mainWindow = mainWindow; // used to log to mainWindow console

		const pathToFork = path.join(__dirname, './fastatic-child-process.js');
		this.childProcess = childProcess.fork(pathToFork);

		this.childProcess.on('message', (message) => {
			switch (message.type) {
				case 'FASTATIC_END':
					this.fastaticEnded(message.result);
					break;

				case 'COPIED_TO_TEMP':
					this.srcCopiedToTempHandler(message.temp);
					break;

				case 'COPIED_TO_DEST':
					this.copiedToDest(message.dest);
					break;

				default:
			}
		});
	}

	/**
	 * First copy the source files to the userData space. Then this is done
	 * fastatic will run
	 *
	 * @param  {String}  src The source directory to run Fastatic against
	 * @return {Promise}     A promise to be resolved when Fastatic finishes.
	 */
	runFastatic(src) {
		this.fastaticDeferred = new Deferred();

		this.childProcess.send({
			type: 'COPY_SRC_TO_TEMP',
			src,
			temp: fastaticWorkingFolderSrcTemp
		});

		return this.fastaticDeferred.promise;
	}

	/**
	 *
	 * Handler for the COPIED_TO_TEMP message. This message is thrown by the
	 * child process when the source files are copied to the userData folder.
	 *
	 * Now tell the child process to run fastatic on the temp source files
	 *
	 * @param  {String} srcTemp The temp dir containing the source files
	 */
	srcCopiedToTempHandler(srcTemp) {
		this.childProcess.send({
			type: 'RUN_FASTATIC',
			src: srcTemp,
			dest: fastaticWorkingFolderDestTemp,
			rootFolder: fastaticWorkingFolder
		});
	}

	/**
	 * Handler for the FASTATIC_END message. This message is thrown by the child
	 * process when Fastatic is completed.
	 *
	 * It resolves / rejects the promise returned by runFastatic
	 *
	 * @param  {Object} result Object containing the output or errors from Fastatic
	 */
	fastaticEnded(result) {
		if (result.err) {
			this.fastaticDeferred.reject(result.err);
			return;
		}

		this.fastaticDeferred.resolve(result.output);
	}

	/**
	 * Tell the childProcess to copy the optimised files to a user chosen directory
	 * @param  {String}  dest The directory chosen by the user
	 * @return {Promise}      A promise to be resolved when the files are copied
	 */
	setDestination(dest) {
		this.fastaticDeferred.promise
			.then(() => this.childProcess.send({
				type: 'SET_DESTINATION',
				temp: fastaticWorkingFolderDestTemp,
				dest
			}));

		return this.copyDeferred.promise;
	}

	/**
	 * Handler for the COPIED_TO_DEST message. This message is thrown by the child
	 * process when the files are copied to the destination folder.
	 *
	 * It resolves the promise retuned by setDestination
	 *
	 * @param  {String} dest The destination folder the files are copied to
	 */
	copiedToDest(dest) {
		this.copyDeferred.resolve(dest);
	}
}

module.exports = FastaticRunner;
