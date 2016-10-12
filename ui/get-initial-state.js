module.exports = function getInitialState() {
	return {
		app: {
			activeView: 'src',
			srcViewDisplay: true,
			destViewDisplay: false,
			resultViewDisplay: false,
			errorViewDisplay: false,
		},
		dropzoneDest: {
			disabled: false,
			hovering: false,
			isFile: false,
			path: ''
		},
		dropzoneSrc: {
			disabled: false,
			hovering: false,
			isFile: false,
			path: '',
			spinner: false
		},
		errorlist: {
			show: false,
			errors: [{
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
				cwd: './.fastatic-temp/dest'
			}]
		},
		fastatic: {
			isRunning: false,
			copiedFilesToDest: true
		},
		result: {}
	};
};
