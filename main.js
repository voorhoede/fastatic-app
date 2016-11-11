require('nodejs-dashboard');
const electron = require('electron');
const devtoolsInstaller = require('electron-devtools-installer');
const { REDUX_DEVTOOLS } = require('electron-devtools-installer');
const FastaticRunner = require('./lib/fastatic-runner');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
let mainWindow;
let fastaticRunnerInstance;

devtoolsInstaller.default(REDUX_DEVTOOLS);

function createWindow() {
	mainWindow = new BrowserWindow({ width: 800, height: 600, x: 0, y: 0, titleBarStyle: 'hidden-inset' });
	mainWindow.loadURL(`file://${__dirname}/ui/index.html`);

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

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

//
// Setup communication between the window and this main process.
// The actual running of the fastatic module is delegated to the fastaticRunner
// module to keep this main module slim.
ipcMain.on('run-fastatic', (event, args) => {
	event.sender.send('fastatic-is-running');
	fastaticRunnerInstance = new FastaticRunner();

	fastaticRunnerInstance.runFastatic(args.src)
		.then(output => event.sender.send('fastatic-is-completed', output))
		.catch(errors => {console.trace(errors); event.sender.send('fastatic-failed', errors)});
});

ipcMain.on('destination-chosen', (event, args) => {
	event.sender.send('destination-accepted');


	fastaticRunnerInstance.setDestination(args.dest)
		.then(dest => event.sender.send('flow-finished', { dest }));
});
