//Задача 1. Возраст
/* function task1(age) {
    if (age >= 0 && age <= 2) {
        console.log("младенец")
    } else if (age >= 3 && age <= 13) {
        console.log("ребёнок")
    } else if (age >= 14 && age <= 19) {
        console.log("подросток")
    } else if (age >= 20 && age <= 65) {
        console.log("взрослый")
    } else if (age >= 66) {
        console.log("пожилой")
    } else {
        console.log("Некорректное значение возраста!")
    }
}
task1(20)
task1(1)
task1(100)
task1(-55) */

//Задача 2. Округление
/* function task2(n, m) {
    if (m > 15) {
        m = 15
    }
    console.log(parseFloat(n.toFixed(m)))
}
task2(3.1415926535897932384626433832795, 2)
task2(10.5, 3)
task2(12, 20) */

//Задача 3. Делитель
/* function task3(num) {
    if (num % 10 == 0) {
        console.log("Число делится на 10")
    } else if (num % 7 == 0) {
        console.log("Число делится на 7")
    } else if (num % 6 == 0) {
        console.log("Число делится на 6")
    } else if (num % 3 == 0) {
        console.log("Число делится на 3")
    } else if (num % 2 == 0) {
        console.log("Число делится на 2")
    } else {
        console.log("Не делится")
    }
}
task3(30)
task3(15)
task3(12)
task3(1643) */

//Задача 4. Отпуск
/* function task4(group, type, day) {
    switch (day) {
        case "Friday":
            switch (type) {
                case "Students":
                    price = 8.45 * group
                    if (group >= 30) {
                        price = price * 0.85
                    }
                    break
                case "Corporate":
                   if (group >= 100) {
                        price = 10.90 * (group - 10)
                    } else {
                        price = 10.90 * group
                    }
                    break
                case "Regular":
                    price = 15 * group
                    if (group >= 10 && group <= 20) {
                        price = price * 0.95
                    }
                    break 
                default:
                    throw new Error("Unknown type!")   
            }
            break
        case "Saturday":
            switch (type) {
                case "Students":
                    price = 9.50 * group
                    if (group >= 30) {
                        price = price * 0.85
                    }
                    break
                case "Corporate":
                    if (group >= 100) {
                        price = 15.60 * (group - 10)
                    } else {
                        price = 15.60 * group
                    }
                    break
                case "Regular":
                    price = 20 * group
                    if (group >= 10 && group <= 20) {
                        price = price * 0.95
                    }
                    break 
                default:
                    throw new Error("Unknown type!")   
            }
            break
        case "Sunday":
            switch (type) {
                case "Students":
                    price = 10.46 * group
                    if (group >= 30) {
                        price = price * 0.85
                    }
                    break
                case "Corporate":
                    if (group >= 100) {
                        price = 16 * (group - 10)
                    } else {
                        price = 16 * group
                    }
                    break
                case "Regular":
                    price = 22.50 * group
                    if (group >= 10 && group <= 20) {
                        price = price * 0.95
                    }
                    break 
                default:
                    throw new Error("Unknown type!")   
                }
            break
        default:
            throw new Error("Unknown day of week!") 
    }
    console.log(`Total price: ${price.toFixed(2)}`) 
}
task4(30, "Students", "Sunday")
task4(40, "Regular", "Saturday") */

//Задача 5. Високосный год
function task5(num) {
    if (((num % 4) == 0 && (num % 100) != 0) || ((num % 400) == 0)) {
        console.log("yes")
    } else {
        console.log("no")
    }
}
task5(1984)
task5(2003)
task5(4)
task5(2000)