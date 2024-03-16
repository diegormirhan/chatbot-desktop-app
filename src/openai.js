const { ipcMain } = require('electron')
const OpenAI = require('openai')
const path = require('path');
const dotenv = require('dotenv');
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