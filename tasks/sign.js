const gulp = require('gulp');
const spawn = require('child_process').spawn;
const releaseConfig = require('../release-config.json');
const pkg = require('../package.json');

gulp.task('sign', sign);

function sign(cb) {
	const sign = spawn('electron-osx-sign', [
		`releases/${pkg.title}-darwin-x64/${pkg.title}.app`,
		`--identity=${releaseConfig.appleIdentityApplication}`,
		`--verbose`
	])

	sign.stdout.on('data', (data) => {
		console.log(`${data}`);
	});

	sign.stderr.on('data', (data) => {
		console.log(`${data}`);
	});

	sign.on('close', (code) => {
		cb(code);
	})
}
