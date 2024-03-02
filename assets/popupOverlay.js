function toggleModal(popupType) {
    const popupTheme = document.querySelector('.popup-theme');
    const popupSettings = document.querySelector('.popup-settings');
    
    if (popupType === 'theme') {
        console.log('outside popup');
        if(popupTheme.style.display === 'none') {
            console.log('on popup');
            popupSettings.style.display = 'none';
            popupTheme.style.display = 'flex';
        } else {
            popupTheme.style.display = 'none';
        }
    } else if  (popupType === 'settings') {
        if (popupSettings.style.display === 'none') {
            console.log('on popup');
            popupTheme.style.display = 'none';
            popupSettings.style.display = 'flex';
        } else {
            popupSettings.style.display = 'none';
        }
    }
}

const popupTheme = document.querySelector('.popup-theme');
popupTheme.addEventListener('click', (event) => {
    event.stopPropagation();

})

const popupSettings = document.querySelector('.popup-settings');
popupSettings.addEventListener('click', (event) => {
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

// Verify if the user clicked outside the popup settings
const closeSettingsPopup = document.addEventListener('click', (event) => {
    const modal = document.getElementById('settings');
    const popupSettings = document.querySelector('.popup-settings');
    if (event.target !== modal) {
        popupSettings.style.display = 'none';
    }
})


module.exports = {
    toggleModal, popupTheme, popupSettings, closeThemePopup, closeSettingsPopup
}