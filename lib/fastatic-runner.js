let fastaticPromise = null;

function runFastatic() {
	fastaticPromise = new Promise((resolve, reject) => {
			// setTimeout(resolve, 1000);
			setTimeout(() => reject([
				{
					name: 'GulpUglifyError',
					cause: {
						message: 'SyntaxError: Unexpected character \'`\'',
						filename: 'js/main.js',
						line: 2,
						col: 11,
						pos: 73,
						stack: 'Error\n    at new JS_Parse_Error (eval at <anonymous> (/Volumes/Voorhoede/www/internal-projects/fastatic/node_modules/gulp-uglify/node_modules/uglify-js/tools/node.js:28:1), <anonymous>:1545:18)'
					},
					plugin: 'gulp-uglify',
					fileName: '/Volumes/Voorhoede/www/internal-projects/fastatic/.fastatic-temp/dest/js/main.js',
					showStack: false,
					parser: 'jsmin',
					cwd: './.fastatic-temp/dest'
				},
				{
					name: 'GulpUglifyError',
					cause: {
						message: 'SyntaxError: Unexpected character \'`\'',
						filename: 'js/main.js',
						line: 2,
						col: 11,
						pos: 73,
						stack: 'Error\n    at new JS_Parse_Error (eval at <anonymous> (/Volumes/Voorhoede/www/internal-projects/fastatic/node_modules/gulp-uglify/node_modules/uglify-js/tools/node.js:28:1), <anonymous>:1545:18)'
					},
					plugin: 'gulp-uglify',
					fileName: '/Volumes/Voorhoede/www/internal-projects/fastatic/.fastatic-temp/dest/js/main.js',
					showStack: false,
					parser: 'jsmin',
					cwd: './.fastatic-temp/dest'
				},
				{
					name: 'GulpUglifyError',
					cause: {
						message: 'SyntaxError: Unexpected character \'`\'',
						filename: 'js/main.js',
						line: 2,
						col: 11,
						pos: 73,
						stack: 'Error\n    at new JS_Parse_Error (eval at <anonymous> (/Volumes/Voorhoede/www/internal-projects/fastatic/node_modules/gulp-uglify/node_modules/uglify-js/tools/node.js:28:1), <anonymous>:1545:18)'
					},
					plugin: 'gulp-uglify',
					fileName: '/Volumes/Voorhoede/www/internal-projects/fastatic/.fastatic-temp/dest/js/main.js',
					showStack: false,
					parser: 'jsmin',
					cwd: './.fastatic-temp/dest'
				},
				{
					name: 'GulpUglifyError',
					cause: {
						message: 'SyntaxError: Unexpected character \'`\'',
						filename: 'js/main.js',
						line: 2,
						col: 11,
						pos: 73,
						stack: 'Error\n    at new JS_Parse_Error (eval at <anonymous> (/Volumes/Voorhoede/www/internal-projects/fastatic/node_modules/gulp-uglify/node_modules/uglify-js/tools/node.js:28:1), <anonymous>:1545:18)'
					},
					plugin: 'gulp-uglify',
					fileName: '/Volumes/Voorhoede/www/internal-projects/fastatic/.fastatic-temp/dest/js/main.js',
					showStack: false,
					parser: 'jsmin',
					cwd: './.fastatic-temp/dest'
				},
				{
					name: 'GulpUglifyError',
					cause: {
						message: 'SyntaxError: Unexpected character \'`\'',
						filename: 'js/main.js',
						line: 2,
						col: 11,
						pos: 73,
						stack: 'Error\n    at new JS_Parse_Error (eval at <anonymous> (/Volumes/Voorhoede/www/internal-projects/fastatic/node_modules/gulp-uglify/node_modules/uglify-js/tools/node.js:28:1), <anonymous>:1545:18)'
					},
					plugin: 'gulp-uglify',
					fileName: '/Volumes/Voorhoede/www/internal-projects/fastatic/.fastatic-temp/dest/js/main.js',
					showStack: false,
					parser: 'jsmin',
					cwd: './.fastatic-temp/dest'
				},
				{
					name: 'GulpUglifyError',
					cause: {
						message: 'SyntaxError: Unexpected character \'`\'',
						filename: 'js/main.js',
						line: 2,
						col: 11,
						pos: 73,
						stack: 'Error\n    at new JS_Parse_Error (eval at <anonymous> (/Volumes/Voorhoede/www/internal-projects/fastatic/node_modules/gulp-uglify/node_modules/uglify-js/tools/node.js:28:1), <anonymous>:1545:18)'
					},
					plugin: 'gulp-uglify',
					fileName: '/Volumes/Voorhoede/www/internal-projects/fastatic/.fastatic-temp/dest/js/main.js',
					showStack: false,
					parser: 'jsmin',
					cwd: './.fastatic-temp/dest'
				},
				{
					name: 'GulpUglifyError',
					cause: {
						message: 'SyntaxError: Unexpected character \'`\'',
						filename: 'js/main.js',
						line: 2,
						col: 11,
						pos: 73,
						stack: 'Error\n    at new JS_Parse_Error (eval at <anonymous> (/Volumes/Voorhoede/www/internal-projects/fastatic/node_modules/gulp-uglify/node_modules/uglify-js/tools/node.js:28:1), <anonymous>:1545:18)'
					},
					plugin: 'gulp-uglify',
					fileName: '/Volumes/Voorhoede/www/internal-projects/fastatic/.fastatic-temp/dest/js/main.js',
					showStack: false,
					parser: 'jsmin',
					cwd: './.fastatic-temp/dest'}
				]
			), 1000);
		})
		.then(() => ({
				filesize: {
					src: {
						md: 13749,
						png: 127404,
						css: 244080,
						json: 10375,
						html: 17954,
						js: 3581,
						txt: 1070
					},
					dest: {
						md: 13749,
						png: 107499,
						css: 172528,
						json: 8219,
						html: 13655,
						js: 1490,
						txt: 1070
					}
				},
				src: './examples/microsoft.github.io-master',
				dest: 'some/path/local/to/app'
			}
		));
	return fastaticPromise;
}

function setDestination(args) {
	return fastaticPromise
		.then(() => new Promise((resolve) => {
			// copy files
			setTimeout(() => resolve(args.dest), 1000);
		}));
}

exports.default = {
	runFastatic,
	setDestination
};
