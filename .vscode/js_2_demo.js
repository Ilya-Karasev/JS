// Задача 1. Конкатенация 
/* function solve1(first, second, del) {
    console.log(`${first}${del}${second}`)
}
solve1('John','Smith','->')
solve1('Jan','White','<->')
solve1('Linda','Terry','=>') */

// Задача 2. Сравнение 
/* function solve2(str, char, result) {
    let res = str.replace("_", char)
    let output = res === result ? "Соответствует" : "Не соответствует"
    console.log(output) 
}
solve2('Str_ng', 'I', 'Strong')
solve2('Str_ng', 'i', 'String') */

// Задача 3. Целое или с плавающей точкой
/* function solve3(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum
    sum % 1 === 0 ? sum += " - Integer" : sum += " - Float"
    console.log(sum) 
}
solve3(9, 100, 1.1)
solve3(100, 200, 303) */

// Задача 4. Потрясающие числа
/* function solve4(num) {
    num = num.toString()
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    let result = sum.toString().includes("9")
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`)
}
solve4(1233)
solve4(999) */

// Задача 5. Граммофон
/* function solve5(bandName, albumName, songName) {
    let time = (bandName.length * albumName.length * songName.length / 2)
    let rotations = Math.ceil(time / 2.5)
    console.log(`The plate was rotated ${rotations} times.`)
}
solve5('Black Sabbath', 'Paranoid', 'War Pigs') */

// Задача 6. Столетия в минуты
/* function solve6(centuries) {
    let years = centuries * 100
    let days = Math.trunc(years * 365.2422)
    let hours = 24 * days
    let minutes = 60 * hours
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}
solve6(1)
solve6(5) */