require('nodejs-dashboard');
const { app, Menu, BrowserWindow, ipcMain, dialog } = require('electron');
const devtoolsInstaller = require('electron-devtools-installer');
const { REDUX_DEVTOOLS } = require('electron-devtools-installer');
const FastaticRunner = require('./lib/fastatic-runner');

let mainWindow;
let fastaticRunnerInstance;
let menuTemplate;
let menu;

devtoolsInstaller.default(REDUX_DEVTOOLS);

function createWindow() {
	mainWindow = new BrowserWindow({ width: 800, height: 600, x: 0, y: 0, titleBarStyle: 'hidden-inset' });
	mainWindow.loadURL(`file://${__dirname}/ui/index.html`);
	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	menu = Menu.buildFromTemplate(menuTemplate);
	Menu.setApplicationMenu(menu);
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

	menu.items[1].submenu.items[0].enabled = false;
	menu.items[1].submenu.items[1].enabled = true;

	fastaticRunnerInstance.runFastatic(args.src)
		.then(output => event.sender.send('fastatic-is-completed', output))
		.catch(errors => {console.trace(errors); event.sender.send('fastatic-failed', errors)});
});

ipcMain.on('destination-chosen', (event, args) => {
	event.sender.send('destination-accepted');


	fastaticRunnerInstance.setDestination(args.dest)
		.then(dest => event.sender.send('flow-finished', { dest }))
		.then(() => {
			menu.items[1].submenu.items[0].enabled = true;
			menu.items[1].submenu.items[1].enabled = false;
		});
});


menuTemplate = [
	{
		submenu: [
			{ role: 'about' },
			{ type: 'separator' },
			{ role: 'hide' },
			{ type: 'separator' },
      		{ role: 'quit' }
		]
	},
	{
		label: 'Edit',
		submenu: [
			{
				label: 'Open Source dir',
				accelerator: 'CmdOrCtrl+o',
				click (item, focusedWindow) {
					dialog.showOpenDialog(mainWindow, { properties: ['openDirectory'] }, (paths) => {
						if (paths && paths[0]) {
							focusedWindow.webContents.send('menu-open-source', paths[0]);
						}
					});
				},
				enabled: true
			},
			{
				label: 'Open Dest dir',
				accelerator: 'CmdOrCtrl+d',
				click (item, focusedWindow) {
					dialog.showOpenDialog(mainWindow, { properties: ['openDirectory'] }, (paths) => {
						if (paths && paths[0]) {
							focusedWindow.webContents.send('menu-open-dest', paths[0]);
						}
					});
				},
				enabled: false
			}
		]
	}
];
