//Задача 1. Мульпликатор
/* function solve1(num) {
    console.log(num * 2)
}
solve1(2)
solve1(5)
solve1(20) */

//Задача 2. Отличная оценка
/* function solve2(num) {
    if (num >= 5) {
        console.log("Excellent!")
    } else {
        console.log("Not excellent!")
    }
}
solve2(5.50)
solve2(4.35) */

//Задача 3. Числа от N до 1
/* function solve3(n) {
    while (n >= 1) {
        console.log(n)
        n--
    }
}
solve3(5)
solve3(3) */

//Задача 4. Числа от M до N
/* function solve4(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i)
    }
}
solve4(6, 2)
solve4(4, 1) */

//Задача 5. Информация о студентах
function solve5(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade/*.toFixed(2)*/}`)
}
solve5("John", 21, 4.7854)
solve5("Steve", 20, 2.1426)
solve5("Marry", 22, 5.00)