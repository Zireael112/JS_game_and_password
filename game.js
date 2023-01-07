const rl = require('readline').createInterface(process.stdin, process.stdout)

const numberForGame = 222
let attempts = 1

function quest() {
    rl.question(`Угадайте число(попытка номер ${attempts}) `, (data) => {
        if (data < numberForGame) {
            console.log('Больше')
            attempts += 1
        } else if (data > numberForGame) {
            console.log('Меньше')
            attempts += 1
        } else if (data == numberForGame) {
            rl.close()
            console.log('Вы угадали!!!')
            return console.log(`Количество попыток - ${attempts}`);;
        } else if (data === 'q') {
            rl.close()
            return console.log('Игра закончена!')
        } else {
            console.log('Введено не понятное значение, повторите попытку!');
        }
        quest()
    })
}

quest()