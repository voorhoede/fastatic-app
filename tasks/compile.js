const gulp = require('gulp');
const less = require('gulp-less');
const exec = require('child_process').exec;
const sourcemaps = require('gulp-sourcemaps');

gulp.task('compile', ['compile:less', 'compile:riot']);
gulp.task('compile:less', compileLess);
gulp.task('compile:riot', compileRiot);

function compileLess() {
	return gulp.src('./ui/styles.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write({sourceRoot: './ui/'}))
		.pipe(gulp.dest('./ui'))
}

function compileRiot(cb) {
	exec('riot ui/components ui/compiled-tags.js --ext html', (err, stdout, stderr) => {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	})
}
