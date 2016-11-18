const gulp = require('gulp');
const spawn = require('child_process').spawn;
const releaseConfig = require('../release-config.json');
const pkg = require('../package.json');

gulp.task('package', bundle);

function bundle(cb) {
	const packager = spawn('electron-packager', [
		`.`,
		`${pkg.title}`,
		`--app-bundle-id=${releaseConfig.appleBundleId}`,
		`--app-version=${pkg.version}`,
		`--version=${pkg.dependencies.electron}`,
		`--ignore="node_modules/electron-*"`,
		`--out=releases`,
		`--overwrite`,
		`--icon=./releases/icons/app.icns`
	])

	packager.stdout.on('data', (data) => {
		console.log(`${data}`);
	});

	packager.stderr.on('data', (data) => {
		console.log(`${data}`);
	});

	packager.on('close', (code) => {
		cb(code);
	});
}
