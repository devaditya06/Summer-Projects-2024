// List of simple colors
const simpleColors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

// Function to generate a random number
function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

// Function to generate a random hex color
function getRandomHexColor() {
    const hexChars = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexChars[getRandomNumber(16)];
    }
    return hexColor;
}

// Get DOM elements
const colorCodeSpan = document.getElementById("color-code");
const flipButton = document.getElementById("flip-btn");
const modeRadios = document.getElementsByName("mode");

// Event listener for color flip button
flipButton.addEventListener("click", function () {
    let selectedMode;
    
    // Check which radio button is selected (simple or hex)
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
