const { remote } = require("electron");
const currentWindow = remote.getCurrentWindow();

function closeWindow () {
    currentWindow.close()
}

function minimizeWindow () {
    cuurentWindow.minimize()
}

function maximizeWindow () {
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize();
    } else {
        currentWindow.maximize();
    }
}

module.exports = { closeWindow, minimizeWindow, maximizeWindow };
