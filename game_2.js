const rl = require('readline').createInterface(process.stdin, process.stdout)

const numberForGame = 222

async function getUserInput() {
    const promise = new Promise((resolve, reject) => {
        rl.question('Угадайте число: ', (data) => {
            return resolve(data);
        })
    })
    return promise
}

async function play() {
    let counter = 0
    while(true) {
        const input = await getUserInput()
        if (isNaN(input)) {
            console.log('Вы ввели неверное значение\n');
            continue
        }

        counter++
    
        if (input == numberForGame) {
            console.log(`Вы угадали!!!!!!! Попытка номер: ${counter}\n`);
            break
        }
    
        if (input > numberForGame) {
            console.log(`Меньше. Попытка номер: ${counter}\n`);
        } else {
            console.log(`Больше. Попытка номер: ${counter}\n`);
        }
    }
    rl.close()
}

play()