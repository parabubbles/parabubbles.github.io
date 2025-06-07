const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 548,
    height: 677,
    webPreferences: {
      nodeIntegration: true,         // 👈 Needed if you're using require() in renderer
      contextIsolation: false,       // 👈 Allows full DOM access
    }
  });

  win.loadFile(path.join(__dirname, 'src/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});