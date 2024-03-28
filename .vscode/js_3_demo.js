// Задача 1. Сумма чётных
/* function solve1(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
    }
    let sum = 0
    for (let num of arr) {
        if (num % 2 == 0) {
            sum += num
        }
    }
    console.log(sum)
}
solve1(['1','2','3','4','5','6'])
solve1(['3','5','7','9'] )
solve1(['2','4','6','8','10']) */

// Задача 2. Обратный массив
/* function solve2(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let el = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = arr[i]
        arr[i] = el
    }
    console.log(arr.join(" "))
    //Или проще:
    arr.reverse()
    console.log(arr.join(" "))
}
solve2(['a', 'b', 'c', 'd', 'e'])
solve2(['abc', 'def', 'hig', 'klm', 'nop'])
solve2(['33', '123', '0', 'dd']) */

// Задача 3. Идентичные массивы
function solve3(arr1, arr2) {
    let sum = 0
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i])
        sum += arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i])
    }
    let areEqual = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            areEqual = false;
            break;
        }
    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}
solve3(['10','20','30'], ['10','20','30'])
solve3(['1','2','3','4','5'], ['1','2','4','4','5'])
solve3(['1'], ['10'])