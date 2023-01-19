const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")
const rangeInput = document.getElementById("range-input")
const passLengthText = document.getElementById("pass-length-text")

rangeInput.addEventListener("input", (event) => {
    passLengthText.textContent = event.target.value
})

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < rangeInput.value; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function copyPassword1() {
    if (passwordOne.textContent) {
        let copiedPassword = passwordOne.textContent;
        navigator.clipboard.writeText(copiedPassword).then(function() {
            alert("Copied successfully!");
        })
    } else {
        alert("You need to create passwords to create!");
    }
}
function copyPassword2() {
    if (passwordTwo.textContent) {
        let copiedPassword = passwordTwo.textContent;
        navigator.clipboard.writeText(copiedPassword).then(function() {
            alert("Copied successfully!");
        })
    } else {
        alert("You need to create passwords to create!");
    }
}

function generatePasswords() {
    passwordOne.textContent = generateRandomPassword()
    passwordTwo.textContent = generateRandomPassword()
}
