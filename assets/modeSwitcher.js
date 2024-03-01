function lightMode() {
    const body = document.body;
    body.classList.remove('dark-mode')
    body.classList.add('light-mode');
}

function darkMode() {
    const body = document.body;
    body.classList.remove('light-mode')
    body.classList.add('dark-mode');
}

function systemMode() {
    const body = document.body;
    body.classList.remove('light-mode')
    body.classList.remove('dark-mode');
}

module.exports = {
    lightMode,
    darkMode,
    systemMode
}