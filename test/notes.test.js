// Nodejs

const { ipcMain } = require('electron');
const { Configuration, OpenAIApi } = require('openai');

const setupChatGptHandler = () => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    ipcMain.on('start-chatgpt-stream', (event, prompt) => {
        const stream = openai.createCompletionStream({
            model: 'gpt-3.5-turbo',
            prompt: prompt,
            temperature: 0.7,
            max_tokens: 150,
            stream: true,
        });

        stream.on('data', (data) => {
            const message = JSON.parse(data);
            if (message.data) {
                event.sender.send('chatgpt-stream-data', message.data.choices[0].text);
            }
        });

        stream.on('error', (error) => {
            console.error('Stream error:', error);
            event.sender.send('chatgpt-stream-error', error.message);
        });

        stream.on('end', () => {
            console.log('Stream ended');
            event.sender.send('chatgpt-stream-end');
        });
    });
};

module.exports = { setupChatGptHandler };


// javascript

const { ipcRenderer } = require('electron');

ipcRenderer.on('chatgpt-stream-data', (event, text) => {
    console.log('Data:', text);
    // Atualize a interface do usuário com o novo texto aqui
});

ipcRenderer.on('chatgpt-stream-error', (event, error) => {
    console.error('Stream error:', error);
    // Trate o erro de streaming aqui
});

ipcRenderer.on('chatgpt-stream-end', () => {
    console.log('Stream ended');
    // Lidar com o fim do stream aqui
});

// Para iniciar o streaming:
ipcRenderer.send('start-chatgpt-stream', 'Olá, tudo bem?');
