// Modules to control application life and create native browser window
const { app, BrowserWindow, screen } = require('electron')
const path = require('path')

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  let mainWindow = new BrowserWindow({
    height: 60,
    width: width,
    fullscreen: false,
    opacity: .5,
    center: true,
    resizable: false,
    alwaysOnTop: true,
    darkTheme: false,
    hasShadow: true,
    movable: false,
    skipTaskbar: true,
    frame: false,
    x: 0,
    y: (height - 60),
    focusable: false,
    transparent: false,
    closable: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.setIgnoreMouseEvents(true);
  //mainWindow.webContents.openDevTools()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
