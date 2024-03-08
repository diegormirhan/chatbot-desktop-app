const { app, BrowserWindow } = require('electron')
const { setupChatGptHandler } = require('./openai.js')
const { updateApiKey } = require('./updateApiKey.js')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        center: true,
        minWidth: 800,
        minHeight: 600,
        title: 'ChatBot App',
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    win.loadFile('./renderer/index.html')
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()
    setupChatGptHandler()
    updateApiKey()
})

