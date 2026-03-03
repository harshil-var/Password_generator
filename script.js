let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

// Showing input slider value 
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
    passBox.value = generatePassword();
});

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

// Auto-generate password on page load
window.addEventListener('load', () => {
    passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

// Function to generate Password
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

// Update password when checkboxes change
lowercase.addEventListener('change', () => {
    passBox.value = generatePassword();
});

uppercase.addEventListener('change', () => {
    passBox.value = generatePassword();
});

numbers.addEventListener('change', () => {
    passBox.value = generatePassword();
});

symbols.addEventListener('change', () => {
    passBox.value = generatePassword();
});

// Copy to clipboard with visual feedback
copyIcon.addEventListener('click', () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        
        // Visual feedback
        const originalIcon = copyIcon.innerText;
        const originalTitle = copyIcon.title;
        
        copyIcon.innerText = "check";
        copyIcon.title = "✓ Copied!";
        copyIcon.style.color = "#10b981";

        setTimeout(() => {
            copyIcon.innerHTML = originalIcon;
            copyIcon.title = originalTitle;
            copyIcon.style.color = "#3b82f6";
        }, 2000)
    }
});
