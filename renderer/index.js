const { ipcRenderer } = require('electron')
const {lightMode, darkMode, systemMode} = require('../assets/ModeSwitcher')
const { toggleModal, popupTheme, popupSettings } = require('../assets/popupOverlay')
const { inputBar } = require('../assets/inputBar')

// Chat Auto Scroll
const chatContainer = document.querySelector('.chat-container');
function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Get the input field
const input = document.getElementById("prompt-input");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector('.bi-send').click();
  }
});

document.querySelector('.bi-send').addEventListener('click', async function() {
    // Get user input field
    const userInput = document.getElementById('prompt-input').value;
    console.log(userInput)
    // Clear user input field
    document.getElementById('prompt-input').value = '';

    // Display user message
    displayMessageUser('Diego', userInput);

    // Send user input to chatbot backend
    const ChatBotResponse = await getChatBotResponse(userInput);
    displayMessageIa('Personal Assistant', ChatBotResponse);
    scrollToBottom()

})

function displayMessageUser(sender, message) {
    const chatMessages = document.querySelector('.chat-container');

    // Create user message container
    const messageContainerUser = document.createElement('div');
    messageContainerUser.className = 'msg-container user';
    messageContainerUser.innerHTML = `
        <i class="bi bi-person icon"></i>
        <div>
            <h2 class="sender">${sender}</h2>
            <p class="msg">${message}</p>
        </div>
    `
    chatMessages.appendChild(messageContainerUser);
}

function displayMessageIa(sender, message) {
    const chatMessages = document.querySelector('.chat-container');

    // Create ia message container
    const messageContainerIa = document.createElement('div');
    messageContainerIa.className = 'msg-container ia';
    messageContainerIa.innerHTML = `
        <i class="bi bi-stars icon"></i>
        <div>
            <h2 class="sender">${sender}</h2>
            <div class="msg">${message}</div>
        </div>
    `
    chatMessages.appendChild(messageContainerIa);
}

async function getChatBotResponse(messageInput) {
    try {
        const response = await ipcRenderer.invoke('call-chatgpt-api', messageInput + 'Response Format: HTML format without ```html');
        console.log('Response:', response)
        return response
    } catch (error) {
            console.log('Error getting response:', error)
            return undefined;
    }

}