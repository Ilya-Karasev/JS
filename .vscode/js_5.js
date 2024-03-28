// Задача 1. Сотрудники
function task1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let employee = {
            employeeName: arr[i],
            personalNum: arr[i].length
        }
        console.log(`Name: ${employee.employeeName} - Personal Number: ${employee.personalNum}`)
    }
}
//task1(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])

// Задача 2. Города
function task2(arr) {
    for (let i = 0; i < arr.length; i++) {
        data = arr[i].split(" | ")
        let town = {
            name: data[0],
            latitude: Number(data[1]).toFixed(2),
            longitude: Number(data[2]).toFixed(2),
        }
        console.log(`{ town: '${town.name}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`)
    }
}
//task2(['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625'])

// Задача 3. Магазин
function task3(arr1, arr2) {
    products = []
    for (let i = 0; i < arr1.length; i += 2) {
        let good = {
            product: arr1[i],
            quantity: Number(arr1[i + 1])
        }
        products.push(good)
    }
    for (let i = 0; i < arr2.length; i += 2) {
        if (products.some((good) => good.product == arr2[i])) {
            let target = products.find((good) => good.product == arr2[i])
            target.quantity += Number(arr2[i + 1])

        } else {
            let good = {
                product: arr2[i],
                quantity: Number(arr2[i + 1])
            }
            products.push(good)
        }
    }
    for (good of products) {
        console.log(`${good.product} -> ${good.quantity}`)
    }
}
//task3(['Chips', '5', 'CocaCola', '9', 'Bananas',  '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])

// Задача 4. Фильмы
function task4(arr) {
    movies = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('addMovie')) {
            name_string = arr[i].split("addMovie ")[1]
            let movie = {
                name: name_string
            }
            movies.push(movie)
        } else if (arr[i].includes('directedBy')) {
            data = arr[i].split(" directedBy ")
            if (movies.some((movie) => movie.name == data[0])) {
                let target = movies.find((movie) => movie.name == data[0])
                target.director = data[1]
            }
        } else if (arr[i].includes('onDate')) {
            data = arr[i].split(" onDate ")
            if (movies.some((movie) => movie.name == data[0])) {
                let target = movies.find((movie) => movie.name == data[0])
                target.date = data[1]
            }
        }
    }
    for (movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
    }
}
task4(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'])