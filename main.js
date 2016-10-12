// const fastatic = require('fastatic');
const electron = require('electron');
const promisify = require('bluebird').promisify;
const ncp = promisify(require('ncp'));
const remove = promisify(require('rimraf'));
const devtoolsInstaller = require('electron-devtools-installer');
const { REDUX_DEVTOOLS } = require('electron-devtools-installer');
const fastaticRunner = require('./lib/fastatic-runner').default;
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
// Module to communicate between the window and app
const ipcMain = electron.ipcMain;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

devtoolsInstaller.default(REDUX_DEVTOOLS);

function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({ width: 800, height: 600, x: 0, y: 0, titleBarStyle: 'hidden-inset' });

	// and load the index.html of the app.
	mainWindow.loadURL(`file://${__dirname}/ui/index.html`);

	// Open the DevTools.
	mainWindow.webContents.openDevTools();

	// Emitted when the window is closed.
	mainWindow.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('run-fastatic', (event, args) => {
	console.log('src:', args.src);
	event.sender.send('fastatic-is-running');

	fastaticRunner.runFastatic()
		.then(output => event.sender.send('fastatic-is-completed', output))
		.catch((errors) => {
			console.log('errors');
			event.sender.send('fastatic-failed', errors);
		});
});

ipcMain.on('destination-chosen', (event, args) => {
	console.log('dest:', args.dest);
	event.sender.send('destination-accepted');

	fastaticRunner.setDestination(args)
		.then(destination => event.sender.send('flow-finished', { dest: destination }));
});
