const OpenAI = require('openai')
require('dotenv').config()

const setupChatGptHandler = async () => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{
                    role: 'user',
                    content: 'me conte uma pequena historia separada por dois paragrafos'
                }],
                temperature: 0.7,
            })
            return response.choices[0].message
        } catch (error) {
            return error
        }
}

setupChatGptHandler()
    .then(response => console.log(response))
    .catch(error => console.error(error));