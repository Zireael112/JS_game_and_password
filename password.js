function getPasswordChecker(password) {
    return function(passwordCheck) {
        if (password === passwordCheck) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }
}

const mainPassword = getPasswordChecker(123456)

mainPassword(48446515) // false
mainPassword(123456) // true
mainPassword('123456') // false