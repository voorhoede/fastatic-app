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

class FastaticRunner {
	constructor() {
		this.copyDeferred = new Deferred();
		this.fastaticDeferred = new Deferred();

		// https://github.com/electron/electron/issues/2708#issuecomment-137764698
		let cwd = path.join(__dirname, '../..');
		let cp_path;
		if (fs.existsSync(path.join(cwd, 'app.asar'))) {
		    cp_path = 'app.asar/lib/fastatic-child-process';
		} else {
		    cp_path = './lib/fastatic-child-process';
		    cwd = null;
		}

		this.childProcess = childProcess.fork(cp_path, [], {
		    cwd : cwd
		});

		this.childProcess.on('message', (message) => {
			switch (message.type) {
				case 'FASTATIC_END':
					this.fastaticEnded(message.result);
					break;

				case 'COPIED_TO_DEST':
					this.copiedToDest(message.dest);
					break;

				default:
			}
		});
	}

	/**
	 * Tell the childProcess to run Fastatic.
	 * @param  {String}  src The source directory to run Fastatic against
	 * @return {Promise}     A promise to be resolved when Fastatic finishes.
	 */
	runFastatic(src) {
		this.fastaticDeferred = new Deferred();

		this.childProcess.send({
			type: 'RUN_FASTATIC',
			src,
			dest: fastaticWorkingFolder });

		return this.fastaticDeferred.promise;
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
				temp: fastaticWorkingFolder,
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
