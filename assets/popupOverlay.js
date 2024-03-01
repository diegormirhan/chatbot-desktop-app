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

module.exports = {
    toggleModal, popupTheme, popupSettings
}