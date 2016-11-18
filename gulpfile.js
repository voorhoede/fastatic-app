const gulp = require('gulp');
const taskListing = require('gulp-task-listing');

require('./tasks/compile');
require('./tasks/package');
require('./tasks/sign');

gulp.task('default', taskListing.withFilters(null, 'default'));
