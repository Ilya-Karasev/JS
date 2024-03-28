// Задача 1. Наименьшее из трех чисел
function task1(a, b, c) {
    function min(n1, n2) {
        return Math.min(n1, n2)
    }
    console.log(min(min(a, b), min(b, c)))
}
/* task1(2, 5, 3)
task1(600, 342, 123)
task1(25, 21, 4) */

// Задача 2. Сумма и разность
function task2(a, b, c) {
    function subtract(a, b) {
        return (a + b) - c
    }
    console.log(subtract(a, b))
}
/* task2(23, 6, 10)
task2(1, 17, 30)
task2(42, 58, 100) */

// Задача 3. Матрица N*N
function task3(n) {
    function matrix(n) {
        for (let i = 0; i < n; i++) {
            console.log((n + " ").repeat(n))
        }
    }
    matrix(n)
}
/* task3(3)
task3(7)
task3(2) */

// Задача 4. Прогресс бар
function task4(n) {
    function progress_bar(n) {
        if (n < 100) {
            process.stdout.write(n + "%" + " [")
            for (let i = 0; i < n; i += 10) {
                process.stdout.write("%")
            }
            for (let i = n; i < 100; i += 10) {
                process.stdout.write(".")
            }
            console.log("]")
            console.log("Still loading...")
        } else if (n == 100) {
            console.log(n + "% Complete!")
            console.log("[%%%%%%%%%%]")
        } else {
            throw new Error("Incorrect number!")
        }
    }
    progress_bar(n)
}
task4(30)
task4(50)
task4(100)