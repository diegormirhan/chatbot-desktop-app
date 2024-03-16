/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/openai.js":
/*!***********************!*\
  !*** ./src/openai.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { ipcMain } = __webpack_require__(/*! electron */ "electron")
const OpenAI = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'openai'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
const path = __webpack_require__(/*! path */ "path");
const dotenv = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'dotenv'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
dotenv.config({ path: path.join(__dirname, '.env') });

const setupChatGptHandler = () => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    ipcMain.removeHandler('call-chatgpt-api');

    ipcMain.handle('call-chatgpt-api', async (event, prompt) => {
        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{
                    role: 'user',
                    content: prompt
                }],
                temperature: 0.7,
            })


            return response.choices[0].message.content
        } catch (error) {
            return error
        }
    })
}

module.exports = { setupChatGptHandler }

/***/ }),

/***/ "./src/updateApiKey.js":
/*!*****************************!*\
  !*** ./src/updateApiKey.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const express = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'express'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const dotenv = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'dotenv'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

function updateApiKey() {
  const app = express();
  app.use(express.json());

  app.listen(2000, () => {
    console.log("--> API KEY UPDATE SERVER RUNNING ON PORT 3000");
  });

  app.post("/update-api", (req, res) => {
    const apiKey = req.body.apiKey;
    const envPath = path.join(__dirname, '..', '.env');
    let envContent = fs.readFileSync(envPath, "utf-8");
    envContent = envContent.replace(
      /OPENAI_API_KEY=.*/,
      `OPENAI_API_KEY=${apiKey}`
    );
    fs.writeFileSync(envPath, envContent, "utf-8");
    dotenv.config({ path: envPath });
    res.send("API KEY UPDATED");
    console.log("--> API KEY UPDATED");
  });
}

module.exports = { updateApiKey };


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
const { app, BrowserWindow, ipcMain } = __webpack_require__(/*! electron */ "electron")
const { setupChatGptHandler } = __webpack_require__(/*! ./openai.js */ "./src/openai.js")
const { updateApiKey } = __webpack_require__(/*! ./updateApiKey.js */ "./src/updateApiKey.js")
const path = __webpack_require__(/*! path */ "path")

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


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map