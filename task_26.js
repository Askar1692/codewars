/*Your task is to make two functions ( max and min, or maximum and minimum, etc.,
    depending on the language ) that receive a list of integers as input, and
return the largest and lowest number in that list, respectively.*/
////////////////////////////////////////////////////
/*const min = function (list) {
    return Math.min(...list)
}

const max = function (list) {
    return Math.max(...list)
}

console.log(min([4, 6, 2, 1, 9, 63, -134, 566]))
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]))*/

/////////////////////////////////////////////////////////////
/*
const min = function (list) {
    let res = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < res) {
            res = list[i];
        }
    }
    return res;
}

const max = function (list) {
    let res = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > res) {
            res = list[i];
        }
    }
    return res;
}

console.log(min([4, 6, 2, 1, 9, 63, -134, 566]))
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]))

*/
/////////////////////////////////////////////////////////

const min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

const max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}

console.log(min([4, 6, 2, 1, 9, 63, -134, 566]))
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]))
