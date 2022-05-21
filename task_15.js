/*
Найти максимальное число из массива используя циклы.
 */

function sumOfDifferences(arr) {
    let newArr = [];
    for( let i =0; i < arr.length; i++){
        newArr[i] = arr[i];
    }
    let max  = newArr[0];
    for(let i = 0; i < arr.length; i++) {
        if (newArr[i] > max) {
            max = newArr[i];
        }
    }
    return max;
}

console.log(sumOfDifferences([101, 10, 15]));
