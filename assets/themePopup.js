const popupTheme = document.querySelector('.popup-theme');
popupTheme.addEventListener('click', (event) => {
    event.stopPropagation();

})

// Verify if the user clicked outside the popup theme
const closeThemePopup = document.addEventListener('click', (event) => {
    const modal = document.getElementById('theme');
    const popupTheme = document.querySelector('.popup-theme');
    if (event.target !== modal) {
        popupTheme.style.display = 'none';
    }
})

function themePopup() {
  
}

module.exports = {
    themePopup, popupTheme, closeThemePopup
};