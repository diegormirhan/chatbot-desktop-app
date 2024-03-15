const popupSettings = document.querySelector(".popup-settings");
popupSettings.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Verify if the user clicked outside the popup settings
const closeSettingsPopup = document.addEventListener("click", (event) => {
  const modal = document.getElementById("settings");
  const popupSettings = document.querySelector(".popup-settings");
  if (event.target !== modal) {
    popupSettings.style.display = "none";
  }
});

function settingsSave() {
  const settingsInput = document.getElementById("api-key");
  const settingsValue = settingsInput.value;
  localStorage.setItem("api-key", settingsValue);
  const savedApiKey = localStorage.getItem("api-key");

  fetch("http://localhost:3000/update-api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ apiKey: savedApiKey }),
  })
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
}

module.exports = { settingsSave, popupSettings, closeSettingsPopup };
