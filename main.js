const { app, BrowserWindow } = require('electron')


const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
    })
    win.loadFile('index.html')
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()
})