const { app, BrowserWindow, ipcMain } = require('electron')
const { setupChatGptHandler } = require('./openai.js')
const { updateApiKey } = require('./updateApiKey.js')
const path = require('path')

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
            devTools: true,
        }
    })
    win.loadFile('./renderer/index.html')

    ipcMain.on('closeWindow', () => {
        win.close();
    })

    ipcMain.on('minimizeWindow', () => {
        win.minimize();
    })

    ipcMain.on("maximizeWindow", () => {
        if (win.isMaximized()) {
            win.restore();
        } else {
            win.maximize();
        }
    })
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()
    setupChatGptHandler()
    updateApiKey()
})

