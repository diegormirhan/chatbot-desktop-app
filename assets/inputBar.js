function inputBar() {
    const input = document.getElementById("prompt-input");

  // Execute a function when the user presses a key on the keyboard
  input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.querySelector(".bi-send").click();
    }
  });
}

module.exports = { inputBar }