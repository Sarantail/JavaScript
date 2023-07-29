// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i < 11; i++) { 
    if (i === 0) {
        return("Это ноль");
    }
    else if(i % 2 == 0) {
        return("Четное число");
    }
    else {
        return("Нечетное число");
    }
}


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const array = [1, 2, 3, 4, 5, 6, 7];
delete array[3, 4];
console.log (array)

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
const arr = [];
function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(10);
    return Math.floor(Math.random() * (10 - 0)) + 0;
}
for (let i = 0; i < 5; i++) {
    arr[i] = getRandomInt();
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

console.log(Math.min(...arr));

console.log(arr.includes(3));