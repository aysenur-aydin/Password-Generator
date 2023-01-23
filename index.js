const passwordOne = document.getElementById('password-one')
const passwordTwo = document.getElementById('password-two')

const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateBtn = document.getElementById('generate-btn')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Generate event listen
lengthEl.addEventListener('input', (e) => {
    document.getElementById('length-text').textContent = e.target.value
})

generateBtn.addEventListener('click', () => {
    const length = +lengthEl.value     // '+' makes length value's type number //
    const hasUpper = uppercaseEl.checked
    const hasLower = lowercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    passwordOne.textContent = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
    passwordTwo.textContent = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})

// Switch On - Off text
document.querySelectorAll('input[type=checkbox]').forEach(function(item){
    item.addEventListener('input', function(e) {
        if (e.target.id === 'uppercase'){
            if (uppercaseEl.checked){
                document.getElementById('uppercase-switch').textContent = "on"
            } else {
                document.getElementById('uppercase-switch').textContent = "off"
            }
        }
        else if (e.target.id === 'lowercase'){
            if (lowercaseEl.checked){
                document.getElementById('lowercase-switch').textContent = "on"
            } else {
                document.getElementById('lowercase-switch').textContent = "off"
            }
        }
        else if (e.target.id === 'numbers'){
            if (numbersEl.checked){
                document.getElementById('numbers-switch').textContent = "on"
            } else {
                document.getElementById('numbers-switch').textContent = "off"
            }
        }
        else if (e.target.id === 'symbols'){
            if (symbolsEl.checked){
                document.getElementById('symbols-switch').textContent = "on"
            } else {
                document.getElementById('symbols-switch').textContent = "off"
            }
        }
    })
})

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,._-+`~;?:|'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

// Generate password function
function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = ''

    const typesCount = upper + lower + number + symbol

    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter
        (item => Object.values(item)[0])

    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]

            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

// Copy password to clipboard
document.addEventListener('click', function (e) {
    if (e.target.dataset.passwordOne) {
        copyPassword(passwordOne)
    }
    else if (e.target.dataset.passwordTwo) {
        copyPassword(passwordTwo)
    }
})

function copyPassword(passwordId) {
    if (passwordId.textContent) {
        let copiedPassword = passwordId.textContent;
        navigator.clipboard.writeText(copiedPassword).then(function () {
            alert("Copied successfully!");
        })
    } else {
        alert("You need to create passwords to create!")
    }
}