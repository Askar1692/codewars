/*
Завершите функцию, которая принимает два целых числа (a, b, где a < b)
и возвращает массив всех целых чисел между входными параметрами, включая их.
Например:
a = 1
b = 4
--> [1, 2, 3, 4]
 */
function between(a, b) {
    let myArray =[];
    for ( let i =a; i <= b; i++){
        myArray.push(i);
    }
    return myArray;
}
console.log(between(-2, 2));