/*
Учитывая случайное неотрицательное число, вы должны вернуть
цифры этого числа в массиве в обратном порядке.
348597 => [7,9,5,8,4,3]
0 => [0]

 */
function digitize(n) {
    var x = n.toString().split('').reverse().map(Number);
    return x;
}
console.log(digitize(348597));