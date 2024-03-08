function toggleApiKeyVisibility() {
    const apiKeyInput = document.getElementById("api-key");
    const showKey = document.getElementById("show-key");
    const showKeyLabel = document.getElementById("show-key-label");
    if (showKey.checked) {
        apiKeyInput.type = "text";
        showKeyLabel.textContent = "Hide key";
    } else {
        apiKeyInput.type = "password";
        showKeyLabel.textContent = "Show key";
    }
}

module.exports = { toggleApiKeyVisibility };