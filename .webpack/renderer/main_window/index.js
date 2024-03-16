/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./renderer/index.js":
/*!***************************!*\
  !*** ./renderer/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { ipcRenderer } = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'electron'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nconst { lightMode, darkMode, systemMode } = __webpack_require__(/*! ./modeSwitcher */ \"./renderer/modeSwitcher.js\");\r\nconst {toggleModal} = __webpack_require__(/*! ./popupOverlay */ \"./renderer/popupOverlay.js\");\r\nconst { themePopup, popupTheme, closeThemePopup } = __webpack_require__(/*! ./themePopup */ \"./renderer/themePopup.js\");\r\nconst { settingsSave, popupSettings, closeSettingsPopup } = __webpack_require__(/*! ./settingsPopup */ \"./renderer/settingsPopup.js\");\r\nconst { inputBar } = __webpack_require__(/*! ./inputBar */ \"./renderer/inputBar.js\");\r\nconst { toggleApiKeyVisibility } = __webpack_require__(/*! ./toggleVisibility */ \"./renderer/toggleVisibility.js\");\r\n\r\n// Custom Frame\r\ncloseBtn.addEventListener(\"click\", () => {\r\n  ipcRenderer.send(\"closeWindow\");\r\n})\r\n\r\nminBtn.addEventListener(\"click\", () => {\r\n  ipcRenderer.send(\"minimizeWindow\");\r\n})\r\n\r\nmaxBtn.addEventListener(\"click\", () => {\r\n  ipcRenderer.send(\"maximizeWindow\");\r\n  if (maxBtn.className == \"bi bi-square\") {\r\n    maxBtn.classList.remove(\"bi-square\");\r\n    maxBtn.classList.add(\"bi-back\");\r\n  } else {\r\n    maxBtn.classList.remove(\"bi-back\");\r\n    maxBtn.classList.add(\"bi-square\");\r\n  }\r\n})\r\n\r\n\r\n\r\n// Local Theme\r\nconst savedTheme = localStorage.getItem(\"theme\");\r\nif (savedTheme == \"light-mode\") {\r\n  lightMode();\r\n} else if (savedTheme == \"dark-mode\") {\r\n  darkMode();\r\n} else if (savedTheme == \"system-mode\") {\r\n  systemMode();\r\n}\r\n\r\n// Local Settings\r\nconst apiKey = localStorage.getItem(\"api-key\");\r\nconst SettingsInput = document.getElementById(\"api-key\");\r\nSettingsInput.value = apiKey;\r\n\r\n\r\n// Get the input field\r\nconst input = document.getElementById(\"prompt-input\");\r\n\r\n// Execute a function when the user presses a key on the keyboard\r\ninput.addEventListener(\"keypress\", function (event) {\r\n  // If the user presses the \"Enter\" key on the keyboard\r\n  if (event.key === \"Enter\") {\r\n    console.log(\"Enter key pressed\");\r\n    // Cancel the default action, if needed\r\n    event.preventDefault();\r\n    // Trigger the button element with a click\r\n    document.querySelector(\".bi-send\").click();\r\n  }\r\n});\r\n\r\ndocument.querySelector(\".bi-send\").addEventListener(\"click\", async function () {\r\n  // Get user input field\r\n  const userInput = document.getElementById(\"prompt-input\").value;\r\n  console.log(userInput);\r\n\r\n  if (userInput.trim() === \"\") {\r\n    return;\r\n  }\r\n\r\n  scrollToBottom();\r\n  // Clear user input field\r\n  document.getElementById(\"prompt-input\").value = \"\";\r\n\r\n  // Display user message\r\n  displayMessageUser(\"Diego\", userInput);\r\n\r\n  // Send user input to chatbot backend\r\n  const ChatBotResponse = await getChatBotResponse(userInput);\r\n  displayMessageIa(\"Personal Assistant\", ChatBotResponse);\r\n});\r\n\r\n// Chat Auto Scroll\r\nfunction scrollToBottom() {\r\n  const chatContainer = document.querySelector(\".chat-container\");\r\n  chatContainer.scrollTop = chatContainer.scrollHeight;\r\n}\r\n\r\nfunction displayMessageUser(sender, message) {\r\n  const chatMessages = document.querySelector(\".chat-container\");\r\n\r\n  // Create user message container\r\n  const messageContainerUser = document.createElement(\"div\");\r\n  messageContainerUser.className = \"msg-container user\";\r\n  messageContainerUser.innerHTML = `\r\n    <i class=\"bi bi-person icon\"></i>\r\n    <div>\r\n        <h2 class=\"sender\">${sender}</h2>\r\n        <p class=\"msg\">${message}</p>\r\n    </div>\r\n`;\r\n  chatMessages.appendChild(messageContainerUser);\r\n}\r\n\r\nfunction displayMessageIa(sender, message) {\r\n  const chatMessages = document.querySelector(\".chat-container\");\r\n\r\n  // Create ia message container\r\n  const messageContainerIa = document.createElement(\"div\");\r\n  messageContainerIa.className = \"msg-container ia\";\r\n  messageContainerIa.innerHTML = `\r\n    <i class=\"bi bi-stars icon\"></i>\r\n    <div>\r\n        <h2 class=\"sender\">${sender}</h2>\r\n        <div class=\"msg\">${message}</div>\r\n    </div>\r\n`;\r\n  chatMessages.appendChild(messageContainerIa);\r\n}\r\n\r\nasync function getChatBotResponse(messageInput) {\r\n  try {\r\n    const response = await ipcRenderer.invoke(\r\n      \"call-chatgpt-api\",\r\n      messageInput\r\n    );\r\n    console.log(\"Response:\", response);\r\n    return response;\r\n  } catch (error) {\r\n    console.log(\"Error getting response:\", error);\r\n    return undefined;\r\n  }\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZW5kZXJlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGNBQWMsRUFBRSxtQkFBTyxDQUFDLHVJQUFVO0FBQzFDLFFBQVEsa0NBQWtDLEVBQUUsbUJBQU8sQ0FBQyxrREFBZ0I7QUFDcEUsT0FBTyxhQUFhLEVBQUUsbUJBQU8sQ0FBQyxrREFBZ0I7QUFDOUMsUUFBUSwwQ0FBMEMsRUFBRSxtQkFBTyxDQUFDLDhDQUFjO0FBQzFFLFFBQVEsa0RBQWtELEVBQUUsbUJBQU8sQ0FBQyxvREFBaUI7QUFDckYsUUFBUSxXQUFXLEVBQUUsbUJBQU8sQ0FBQywwQ0FBWTtBQUN6QyxRQUFRLHlCQUF5QixFQUFFLG1CQUFPLENBQUMsMERBQW9CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQyx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRib3QtZGVza3RvcC1hcHAvLi9yZW5kZXJlci9pbmRleC5qcz8xZjhkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgaXBjUmVuZGVyZXIgfSA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTtcclxuY29uc3QgeyBsaWdodE1vZGUsIGRhcmtNb2RlLCBzeXN0ZW1Nb2RlIH0gPSByZXF1aXJlKFwiLi9tb2RlU3dpdGNoZXJcIik7XHJcbmNvbnN0IHt0b2dnbGVNb2RhbH0gPSByZXF1aXJlKFwiLi9wb3B1cE92ZXJsYXlcIik7XHJcbmNvbnN0IHsgdGhlbWVQb3B1cCwgcG9wdXBUaGVtZSwgY2xvc2VUaGVtZVBvcHVwIH0gPSByZXF1aXJlKFwiLi90aGVtZVBvcHVwXCIpO1xyXG5jb25zdCB7IHNldHRpbmdzU2F2ZSwgcG9wdXBTZXR0aW5ncywgY2xvc2VTZXR0aW5nc1BvcHVwIH0gPSByZXF1aXJlKFwiLi9zZXR0aW5nc1BvcHVwXCIpO1xyXG5jb25zdCB7IGlucHV0QmFyIH0gPSByZXF1aXJlKFwiLi9pbnB1dEJhclwiKTtcclxuY29uc3QgeyB0b2dnbGVBcGlLZXlWaXNpYmlsaXR5IH0gPSByZXF1aXJlKFwiLi90b2dnbGVWaXNpYmlsaXR5XCIpO1xyXG5cclxuLy8gQ3VzdG9tIEZyYW1lXHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaXBjUmVuZGVyZXIuc2VuZChcImNsb3NlV2luZG93XCIpO1xyXG59KVxyXG5cclxubWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaXBjUmVuZGVyZXIuc2VuZChcIm1pbmltaXplV2luZG93XCIpO1xyXG59KVxyXG5cclxubWF4QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaXBjUmVuZGVyZXIuc2VuZChcIm1heGltaXplV2luZG93XCIpO1xyXG4gIGlmIChtYXhCdG4uY2xhc3NOYW1lID09IFwiYmkgYmktc3F1YXJlXCIpIHtcclxuICAgIG1heEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYmktc3F1YXJlXCIpO1xyXG4gICAgbWF4QnRuLmNsYXNzTGlzdC5hZGQoXCJiaS1iYWNrXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtYXhCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJpLWJhY2tcIik7XHJcbiAgICBtYXhCdG4uY2xhc3NMaXN0LmFkZChcImJpLXNxdWFyZVwiKTtcclxuICB9XHJcbn0pXHJcblxyXG5cclxuXHJcbi8vIExvY2FsIFRoZW1lXHJcbmNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xyXG5pZiAoc2F2ZWRUaGVtZSA9PSBcImxpZ2h0LW1vZGVcIikge1xyXG4gIGxpZ2h0TW9kZSgpO1xyXG59IGVsc2UgaWYgKHNhdmVkVGhlbWUgPT0gXCJkYXJrLW1vZGVcIikge1xyXG4gIGRhcmtNb2RlKCk7XHJcbn0gZWxzZSBpZiAoc2F2ZWRUaGVtZSA9PSBcInN5c3RlbS1tb2RlXCIpIHtcclxuICBzeXN0ZW1Nb2RlKCk7XHJcbn1cclxuXHJcbi8vIExvY2FsIFNldHRpbmdzXHJcbmNvbnN0IGFwaUtleSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXBpLWtleVwiKTtcclxuY29uc3QgU2V0dGluZ3NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBpLWtleVwiKTtcclxuU2V0dGluZ3NJbnB1dC52YWx1ZSA9IGFwaUtleTtcclxuXHJcblxyXG4vLyBHZXQgdGhlIGlucHV0IGZpZWxkXHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9tcHQtaW5wdXRcIik7XHJcblxyXG4vLyBFeGVjdXRlIGEgZnVuY3Rpb24gd2hlbiB0aGUgdXNlciBwcmVzc2VzIGEga2V5IG9uIHRoZSBrZXlib2FyZFxyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgLy8gSWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgXCJFbnRlclwiIGtleSBvbiB0aGUga2V5Ym9hcmRcclxuICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRW50ZXIga2V5IHByZXNzZWRcIik7XHJcbiAgICAvLyBDYW5jZWwgdGhlIGRlZmF1bHQgYWN0aW9uLCBpZiBuZWVkZWRcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBUcmlnZ2VyIHRoZSBidXR0b24gZWxlbWVudCB3aXRoIGEgY2xpY2tcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmktc2VuZFwiKS5jbGljaygpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJpLXNlbmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAvLyBHZXQgdXNlciBpbnB1dCBmaWVsZFxyXG4gIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvbXB0LWlucHV0XCIpLnZhbHVlO1xyXG4gIGNvbnNvbGUubG9nKHVzZXJJbnB1dCk7XHJcblxyXG4gIGlmICh1c2VySW5wdXQudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb0JvdHRvbSgpO1xyXG4gIC8vIENsZWFyIHVzZXIgaW5wdXQgZmllbGRcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb21wdC1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gIC8vIERpc3BsYXkgdXNlciBtZXNzYWdlXHJcbiAgZGlzcGxheU1lc3NhZ2VVc2VyKFwiRGllZ29cIiwgdXNlcklucHV0KTtcclxuXHJcbiAgLy8gU2VuZCB1c2VyIGlucHV0IHRvIGNoYXRib3QgYmFja2VuZFxyXG4gIGNvbnN0IENoYXRCb3RSZXNwb25zZSA9IGF3YWl0IGdldENoYXRCb3RSZXNwb25zZSh1c2VySW5wdXQpO1xyXG4gIGRpc3BsYXlNZXNzYWdlSWEoXCJQZXJzb25hbCBBc3Npc3RhbnRcIiwgQ2hhdEJvdFJlc3BvbnNlKTtcclxufSk7XHJcblxyXG4vLyBDaGF0IEF1dG8gU2Nyb2xsXHJcbmZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKCkge1xyXG4gIGNvbnN0IGNoYXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXQtY29udGFpbmVyXCIpO1xyXG4gIGNoYXRDb250YWluZXIuc2Nyb2xsVG9wID0gY2hhdENvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlNZXNzYWdlVXNlcihzZW5kZXIsIG1lc3NhZ2UpIHtcclxuICBjb25zdCBjaGF0TWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXQtY29udGFpbmVyXCIpO1xyXG5cclxuICAvLyBDcmVhdGUgdXNlciBtZXNzYWdlIGNvbnRhaW5lclxyXG4gIGNvbnN0IG1lc3NhZ2VDb250YWluZXJVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZXNzYWdlQ29udGFpbmVyVXNlci5jbGFzc05hbWUgPSBcIm1zZy1jb250YWluZXIgdXNlclwiO1xyXG4gIG1lc3NhZ2VDb250YWluZXJVc2VyLmlubmVySFRNTCA9IGBcclxuICAgIDxpIGNsYXNzPVwiYmkgYmktcGVyc29uIGljb25cIj48L2k+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMiBjbGFzcz1cInNlbmRlclwiPiR7c2VuZGVyfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJtc2dcIj4ke21lc3NhZ2V9PC9wPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcbiAgY2hhdE1lc3NhZ2VzLmFwcGVuZENoaWxkKG1lc3NhZ2VDb250YWluZXJVc2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1lc3NhZ2VJYShzZW5kZXIsIG1lc3NhZ2UpIHtcclxuICBjb25zdCBjaGF0TWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXQtY29udGFpbmVyXCIpO1xyXG5cclxuICAvLyBDcmVhdGUgaWEgbWVzc2FnZSBjb250YWluZXJcclxuICBjb25zdCBtZXNzYWdlQ29udGFpbmVySWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lc3NhZ2VDb250YWluZXJJYS5jbGFzc05hbWUgPSBcIm1zZy1jb250YWluZXIgaWFcIjtcclxuICBtZXNzYWdlQ29udGFpbmVySWEuaW5uZXJIVE1MID0gYFxyXG4gICAgPGkgY2xhc3M9XCJiaSBiaS1zdGFycyBpY29uXCI+PC9pPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJzZW5kZXJcIj4ke3NlbmRlcn08L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtc2dcIj4ke21lc3NhZ2V9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuICBjaGF0TWVzc2FnZXMuYXBwZW5kQ2hpbGQobWVzc2FnZUNvbnRhaW5lcklhKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhdEJvdFJlc3BvbnNlKG1lc3NhZ2VJbnB1dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGlwY1JlbmRlcmVyLmludm9rZShcclxuICAgICAgXCJjYWxsLWNoYXRncHQtYXBpXCIsXHJcbiAgICAgIG1lc3NhZ2VJbnB1dFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2U6XCIsIHJlc3BvbnNlKTtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHJlc3BvbnNlOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./renderer/index.js\n");

/***/ }),

/***/ "./renderer/inputBar.js":
/*!******************************!*\
  !*** ./renderer/inputBar.js ***!
  \******************************/
/***/ ((module) => {

eval("function inputBar() {\r\n    const input = document.getElementById(\"prompt-input\");\r\n\r\n  // Execute a function when the user presses a key on the keyboard\r\n  input.addEventListener(\"keypress\", function (event) {\r\n    // If the user presses the \"Enter\" key on the keyboard\r\n    if (event.key === \"Enter\") {\r\n      // Cancel the default action, if needed\r\n      event.preventDefault();\r\n      // Trigger the button element with a click\r\n      document.querySelector(\".bi-send\").click();\r\n    }\r\n  });\r\n}\r\n\r\nmodule.exports = { inputBar }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZW5kZXJlci9pbnB1dEJhci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRib3QtZGVza3RvcC1hcHAvLi9yZW5kZXJlci9pbnB1dEJhci5qcz83YTRiIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGlucHV0QmFyKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb21wdC1pbnB1dFwiKTtcclxuXHJcbiAgLy8gRXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBhIGtleSBvbiB0aGUga2V5Ym9hcmRcclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyBJZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBcIkVudGVyXCIga2V5IG9uIHRoZSBrZXlib2FyZFxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIC8vIENhbmNlbCB0aGUgZGVmYXVsdCBhY3Rpb24sIGlmIG5lZWRlZFxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvLyBUcmlnZ2VyIHRoZSBidXR0b24gZWxlbWVudCB3aXRoIGEgY2xpY2tcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iaS1zZW5kXCIpLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBpbnB1dEJhciB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./renderer/inputBar.js\n");

/***/ }),

/***/ "./renderer/modeSwitcher.js":
/*!**********************************!*\
  !*** ./renderer/modeSwitcher.js ***!
  \**********************************/
/***/ ((module) => {

eval("function lightMode() {\r\n    const body = document.body;\r\n    body.classList.remove('dark-mode')\r\n    body.classList.add('light-mode');\r\n    localStorage.setItem(\"theme\", \"light-mode\");\r\n}\r\n\r\nfunction darkMode() {\r\n    const body = document.body;\r\n    body.classList.remove('light-mode')\r\n    body.classList.add('dark-mode');\r\n    localStorage.setItem(\"theme\", \"dark-mode\");\r\n}\r\n\r\nfunction systemMode() {\r\n    const body = document.body;\r\n    body.classList.remove('light-mode')\r\n    body.classList.remove('dark-mode');\r\n    localStorage.setItem(\"theme\", \"system-mode\");\r\n}\r\n\r\nmodule.exports = {\r\n    lightMode,\r\n    darkMode,\r\n    systemMode\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZW5kZXJlci9tb2RlU3dpdGNoZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRib3QtZGVza3RvcC1hcHAvLi9yZW5kZXJlci9tb2RlU3dpdGNoZXIuanM/MGQ1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsaWdodE1vZGUoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJylcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbGlnaHQtbW9kZScpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0LW1vZGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRhcmtNb2RlKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0LW1vZGUnKVxyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrLW1vZGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5c3RlbU1vZGUoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHQtbW9kZScpXHJcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcInN5c3RlbS1tb2RlXCIpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGxpZ2h0TW9kZSxcclxuICAgIGRhcmtNb2RlLFxyXG4gICAgc3lzdGVtTW9kZVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./renderer/modeSwitcher.js\n");

/***/ }),

/***/ "./renderer/popupOverlay.js":
/*!**********************************!*\
  !*** ./renderer/popupOverlay.js ***!
  \**********************************/
/***/ ((module) => {

eval("function toggleModal(popupType) {\r\n    const popupTheme = document.querySelector('.popup-theme');\r\n    const popupSettings = document.querySelector('.popup-settings');\r\n    \r\n    if (popupType === 'theme') {\r\n        console.log('outside popup');\r\n        if(popupTheme.style.display === 'none') {\r\n            console.log('on popup');\r\n            popupSettings.style.display = 'none';\r\n            popupTheme.style.display = 'flex';\r\n        } else {\r\n            popupTheme.style.display = 'none';\r\n        }\r\n    } else if  (popupType === 'settings') {\r\n        if (popupSettings.style.display === 'none') {\r\n            console.log('on popup');\r\n            popupTheme.style.display = 'none';\r\n            popupSettings.style.display = 'flex';\r\n        } else {\r\n            popupSettings.style.display = 'none';\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = {\r\n    toggleModal,\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZW5kZXJlci9wb3B1cE92ZXJsYXkuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGJvdC1kZXNrdG9wLWFwcC8uL3JlbmRlcmVyL3BvcHVwT3ZlcmxheS5qcz8yY2NhIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRvZ2dsZU1vZGFsKHBvcHVwVHlwZSkge1xyXG4gICAgY29uc3QgcG9wdXBUaGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC10aGVtZScpO1xyXG4gICAgY29uc3QgcG9wdXBTZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1zZXR0aW5ncycpO1xyXG4gICAgXHJcbiAgICBpZiAocG9wdXBUeXBlID09PSAndGhlbWUnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ291dHNpZGUgcG9wdXAnKTtcclxuICAgICAgICBpZihwb3B1cFRoZW1lLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb24gcG9wdXAnKTtcclxuICAgICAgICAgICAgcG9wdXBTZXR0aW5ncy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBwb3B1cFRoZW1lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9wdXBUaGVtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAgKHBvcHVwVHlwZSA9PT0gJ3NldHRpbmdzJykge1xyXG4gICAgICAgIGlmIChwb3B1cFNldHRpbmdzLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb24gcG9wdXAnKTtcclxuICAgICAgICAgICAgcG9wdXBUaGVtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBwb3B1cFNldHRpbmdzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9wdXBTZXR0aW5ncy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICB0b2dnbGVNb2RhbCxcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./renderer/popupOverlay.js\n");

/***/ }),

/***/ "./renderer/settingsPopup.js":
/*!***********************************!*\
  !*** ./renderer/settingsPopup.js ***!
  \***********************************/
/***/ ((module) => {

eval("const popupSettings = document.querySelector(\".popup-settings\");\r\npopupSettings.addEventListener(\"click\", (event) => {\r\n  event.stopPropagation();\r\n});\r\n\r\n// Verify if the user clicked outside the popup settings\r\nconst closeSettingsPopup = document.addEventListener(\"click\", (event) => {\r\n  const modal = document.getElementById(\"settings\");\r\n  const popupSettings = document.querySelector(\".popup-settings\");\r\n  if (event.target !== modal) {\r\n    popupSettings.style.display = \"none\";\r\n  }\r\n});\r\n\r\nfunction settingsSave() {\r\n  const settingsInput = document.getElementById(\"api-key\");\r\n  const settingsValue = settingsInput.value;\r\n  localStorage.setItem(\"api-key\", settingsValue);\r\n  const savedApiKey = localStorage.getItem(\"api-key\");\r\n\r\n  fetch(\"http://localhost:3000/update-api\", {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify({ apiKey: savedApiKey }),\r\n  })\r\n    .then((response) => response.text())\r\n    .then((data) => console.log(data))\r\n    .catch((error) => {\r\n      console.error(\"Error:\", error);\r\n    });\r\n}\r\n\r\nmodule.exports = { settingsSave, popupSettings, closeSettingsPopup };\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZW5kZXJlci9zZXR0aW5nc1BvcHVwLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCLHFCQUFxQjtBQUNoRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRib3QtZGVza3RvcC1hcHAvLi9yZW5kZXJlci9zZXR0aW5nc1BvcHVwLmpzP2EzMTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcG9wdXBTZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtc2V0dGluZ3NcIik7XHJcbnBvcHVwU2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG59KTtcclxuXHJcbi8vIFZlcmlmeSBpZiB0aGUgdXNlciBjbGlja2VkIG91dHNpZGUgdGhlIHBvcHVwIHNldHRpbmdzXHJcbmNvbnN0IGNsb3NlU2V0dGluZ3NQb3B1cCA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ3NcIik7XHJcbiAgY29uc3QgcG9wdXBTZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtc2V0dGluZ3NcIik7XHJcbiAgaWYgKGV2ZW50LnRhcmdldCAhPT0gbW9kYWwpIHtcclxuICAgIHBvcHVwU2V0dGluZ3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBzZXR0aW5nc1NhdmUoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ3NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBpLWtleVwiKTtcclxuICBjb25zdCBzZXR0aW5nc1ZhbHVlID0gc2V0dGluZ3NJbnB1dC52YWx1ZTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFwaS1rZXlcIiwgc2V0dGluZ3NWYWx1ZSk7XHJcbiAgY29uc3Qgc2F2ZWRBcGlLZXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFwaS1rZXlcIik7XHJcblxyXG4gIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3VwZGF0ZS1hcGlcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhcGlLZXk6IHNhdmVkQXBpS2V5IH0pLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IHNldHRpbmdzU2F2ZSwgcG9wdXBTZXR0aW5ncywgY2xvc2VTZXR0aW5nc1BvcHVwIH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./renderer/settingsPopup.js\n");

/***/ }),

/***/ "./renderer/themePopup.js":
/*!********************************!*\
  !*** ./renderer/themePopup.js ***!
  \********************************/
/***/ ((module) => {

eval("const popupTheme = document.querySelector('.popup-theme');\r\npopupTheme.addEventListener('click', (event) => {\r\n    event.stopPropagation();\r\n\r\n})\r\n\r\n// Verify if the user clicked outside the popup theme\r\nconst closeThemePopup = document.addEventListener('click', (event) => {\r\n    const modal = document.getElementById('theme');\r\n    const popupTheme = document.querySelector('.popup-theme');\r\n    if (event.target !== modal) {\r\n        popupTheme.style.display = 'none';\r\n    }\r\n})\r\n\r\nfunction themePopup() {\r\n  \r\n}\r\n\r\nmodule.exports = {\r\n    themePopup, popupTheme, closeThemePopup\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZW5kZXJlci90aGVtZVBvcHVwLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRib3QtZGVza3RvcC1hcHAvLi9yZW5kZXJlci90aGVtZVBvcHVwLmpzP2ViMzEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcG9wdXBUaGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC10aGVtZScpO1xyXG5wb3B1cFRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbn0pXHJcblxyXG4vLyBWZXJpZnkgaWYgdGhlIHVzZXIgY2xpY2tlZCBvdXRzaWRlIHRoZSBwb3B1cCB0aGVtZVxyXG5jb25zdCBjbG9zZVRoZW1lUG9wdXAgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUnKTtcclxuICAgIGNvbnN0IHBvcHVwVGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtdGhlbWUnKTtcclxuICAgIGlmIChldmVudC50YXJnZXQgIT09IG1vZGFsKSB7XHJcbiAgICAgICAgcG9wdXBUaGVtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG59KVxyXG5cclxuZnVuY3Rpb24gdGhlbWVQb3B1cCgpIHtcclxuICBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICB0aGVtZVBvcHVwLCBwb3B1cFRoZW1lLCBjbG9zZVRoZW1lUG9wdXBcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./renderer/themePopup.js\n");

/***/ }),

/***/ "./renderer/toggleVisibility.js":
/*!**************************************!*\
  !*** ./renderer/toggleVisibility.js ***!
  \**************************************/
/***/ ((module) => {

eval("function toggleApiKeyVisibility() {\r\n    const apiKeyInput = document.getElementById(\"api-key\");\r\n    const showKey = document.getElementById(\"show-key\");\r\n    const showKeyLabel = document.getElementById(\"show-key-label\");\r\n    if (showKey.checked) {\r\n        apiKeyInput.type = \"text\";\r\n        showKeyLabel.textContent = \"Hide key\";\r\n    } else {\r\n        apiKeyInput.type = \"password\";\r\n        showKeyLabel.textContent = \"Show key\";\r\n    }\r\n}\r\n\r\nmodule.exports = { toggleApiKeyVisibility };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZW5kZXJlci90b2dnbGVWaXNpYmlsaXR5LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Ym90LWRlc2t0b3AtYXBwLy4vcmVuZGVyZXIvdG9nZ2xlVmlzaWJpbGl0eS5qcz9jY2I4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRvZ2dsZUFwaUtleVZpc2liaWxpdHkoKSB7XHJcbiAgICBjb25zdCBhcGlLZXlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBpLWtleVwiKTtcclxuICAgIGNvbnN0IHNob3dLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3cta2V5XCIpO1xyXG4gICAgY29uc3Qgc2hvd0tleUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LWtleS1sYWJlbFwiKTtcclxuICAgIGlmIChzaG93S2V5LmNoZWNrZWQpIHtcclxuICAgICAgICBhcGlLZXlJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgc2hvd0tleUxhYmVsLnRleHRDb250ZW50ID0gXCJIaWRlIGtleVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhcGlLZXlJbnB1dC50eXBlID0gXCJwYXNzd29yZFwiO1xyXG4gICAgICAgIHNob3dLZXlMYWJlbC50ZXh0Q29udGVudCA9IFwiU2hvdyBrZXlcIjtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IHRvZ2dsZUFwaUtleVZpc2liaWxpdHkgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./renderer/toggleVisibility.js\n");

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
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main_window." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("00dd0f43d6bd40535a15")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "chatbot-desktop-app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main_window": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatechatbot_desktop_app"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./renderer/index.js");
/******/ 	
/******/ })()
;