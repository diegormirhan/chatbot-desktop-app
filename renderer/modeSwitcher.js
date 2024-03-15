function lightMode() {
    const body = document.body;
    body.classList.remove('dark-mode')
    body.classList.add('light-mode');
    localStorage.setItem("theme", "light-mode");
}

function darkMode() {
    const body = document.body;
    body.classList.remove('light-mode')
    body.classList.add('dark-mode');
    localStorage.setItem("theme", "dark-mode");
}

function systemMode() {
    const body = document.body;
    body.classList.remove('light-mode')
    body.classList.remove('dark-mode');
    localStorage.setItem("theme", "system-mode");
}

module.exports = {
    lightMode,
    darkMode,
    systemMode
}