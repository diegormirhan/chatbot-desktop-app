const fs = require("fs");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv")

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
