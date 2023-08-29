// Character sets
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

// Generate password based on chosen character sets
function generatePassword(length, characters) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

document.getElementById('generate-btn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    
    let allowedCharacters = '';
    if (document.getElementById('lower-case').checked) {
        allowedCharacters += lowercaseLetters;
    }
    if (document.getElementById('upper-case').checked) {
        allowedCharacters += uppercaseLetters;
    }
    if (document.getElementById('numbers').checked) {
        allowedCharacters += numbers;
    }
    if (document.getElementById('symbols').checked) {
        allowedCharacters += specialCharacters;
    }
    
    if (allowedCharacters.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    const newPassword = generatePassword(length, allowedCharacters);
    document.getElementById('password-output').value = newPassword;
});

