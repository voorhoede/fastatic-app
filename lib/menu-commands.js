const { dialog, BrowserWindow } = require('electron');

const commands = {
	CmdOrCtrlPlusO: (mainWindow) => {
		dialog.showOpenDialog(mainWindow, { properties: ['openDirectory'] }, (paths) => {
			if (paths && paths[0]) {
				mainWindow.webContents.send('menu-open-source', paths[0]);
			}
		});
	},

	CmdOrCtrlPlusD: (mainWindow) => {
		dialog.showOpenDialog(mainWindow, { properties: ['openDirectory'] }, (paths) => {
			if (paths && paths[0]) {
				mainWindow.webContents.send('menu-open-dest', paths[0]);
			}
		});
	}
}

module.exports = commands;
