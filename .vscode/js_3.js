// Задача 1. Операции
/* function task1(arr) {
    sum1 = 0
    sum2 = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum1 += arr[i]
            arr[i] += i
            sum2 += arr[i]
        } else {
            sum1 += arr[i]
            arr[i] -= i
            sum2 += arr[i]
        }
    }
    console.log(arr)
    console.log(sum1)
    console.log(sum2)
}
task1([5, 15, 23, 56, 35])
task1([-5, 11, 3, 0, 2]) */

// Задача 2. Общие элементы
/* function task2(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let k = 0; k < arr2.length; k++) {
            if (arr1[i] == arr2[k] && typeof arr1[i] == typeof arr2[k]) {
                console.log(arr1[i])
                break;
            }
        }
    }
}
task2(['Hey', 'hello', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])
task2(['R', 'u', 's', 's', 'i', 'a'],['R', 'u', 't']) */

// Задача 3. Вращение Массива
/* function task3(arr, count) {
    new_arr = []
    for (let i = 0; i < arr.length; i++) {
        k = i - count
        while (k < 0) {
            k += arr.length
        }
        new_arr[k] = arr[i]
    }
    console.log(new_arr.join(" "))
}
task3([51, 47, 32, 61, 21], 2)
task3([32, 21, 61, 1], 4)
task3([2, 4, 15, 31], 5) */

// Задача 4. Чудесная матрица
function task4(matrix) {
    let magic = true;
    sum = null;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            cur_sum = 0
            for (let k = 0; k < matrix.length; k++) {
                cur_sum += matrix[k][i]
            }
            if (sum == null) {
                sum = cur_sum
            } else if (sum != cur_sum) {
                magic = false
                break
            }
            cur_sum = 0
            for (let k = 0; k < matrix[0].length; k++) {
                cur_sum += matrix[j][k]
            }
            if (sum == null) {
                sum = cur_sum
            } else if (sum != cur_sum) {
                magic = false
                break
            }
        }
        if (!magic) {
            break
        }
    }
    console.log(magic)
}
task4([[4, 5, 6],[6, 5, 4],[5, 5, 5]])
task4([[11, 32, 45],[21, 0, 1],[21, 1, 1]])
task4([[1, 0, 0],[0, 0, 1],[0, 1, 0]])