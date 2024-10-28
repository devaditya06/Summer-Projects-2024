const simpleColors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "black", "white", "gray"];
function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}
function getRandomHexColor() {
    const hexChars = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexChars[getRandomNumber(16)];
    }
    return hexColor;
}
const colorCodeSpan = document.getElementById("color-code");
const flipButton = document.getElementById("flip-btn");
const modeRadios = document.getElementsByName("mode");
flipButton.addEventListener("click", function () {
    let selectedMode;
    for (const radio of modeRadios) {
        if (radio.checked) {
            selectedMode = radio.value;
            break;
        }
    }

    let newColor;
    
    // Switch between simple and hex mode
    if (selectedMode === "simple") {
        newColor = simpleColors[getRandomNumber(simpleColors.length)];
    } else {
        newColor = getRandomHexColor();
    }

    // Apply the new color and update the displayed color code
    document.body.style.backgroundColor = newColor;
    colorCodeSpan.textContent = newColor;
});
