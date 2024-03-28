// Задача 1. Сумма цифр
/* function task1(num) {
    num = num.toString();
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    console.log(sum)
}
task1(245678)
task1(97561)
task1(543) */

// Задача 2. Символы в строку
/* function task2(a, b, c) {
    console.log(`${a}${b}${c}`)
}
task2('a','b','c')
task2('%','2','o')
task2('1','5','p') */

// Задача 3. Информация о городе
/* function task3(city, population, square) {
    console.log(`Town ${city} has population of ${population} and area ${square} square km.`)
}
task3('Moscow',12636312,2561) */

// Задача 4. Калькулятор
/* function task4(firstNum, operator, secondNum) {
    if (operator == ":" && secondNum == "0") {
        throw new Error("На ноль делить нельзя!")
    }
    switch (operator) {
        case "+":
            result = firstNum + secondNum
            console.log(`${result.toFixed(2)}`)
            break
        case "-":
            result = firstNum - secondNum
            console.log(`${result.toFixed(2)}`)
            break
        case "*":
            result = firstNum * secondNum
            console.log(`${result.toFixed(2)}`)
            break
        case ":":
            result = firstNum / secondNum
            console.log(`${result.toFixed(2)}`)
            break
        case "**":
            result = firstNum ** secondNum
            console.log(`${result.toFixed(2)}`)
            break
    }
}
task4(5,'+',10)
task4(25.5,'-',3)
task4(2,":",0) */

// Задача 5. Двоичное к десятичному
function task5(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]) * (2 ** Number(num.length - 1 - i))
    }
    console.log(sum)
}
task5("00001001")
task5("11110000") 