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
			hovering: false,
			isFile: false,
			path: ''
		},
		dropzoneSrc: {
			hovering: false,
			isFile: false,
			path: ''
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
		result: {
			show: false,
			output: {
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
				dest: 'build/examples/microsoft'
			}
		}
	};
};
