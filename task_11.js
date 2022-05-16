/*
Дан массив целых чисел.
Возвращает массив, где первый элемент - это количество положительных чисел, а второй элемент -
сумма отрицательных чисел.0 не является ни положительным, ни отрицательным.
Если входные данные представляют собой пустой массив или имеют значение null, верните пустой массив
 */
function countPositivesSumNegatives(input) {
    let positiveNumbersCount = 0;
    let sumOfNegative = 0;
    let isHasNull = false;
    if(input.length === 0) return [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) positiveNumbersCount++;
        if (input[i] < 0) sumOfNegative += input[i];
        if (input[i] === null) isHasNull = true;
    }

    return isHasNull ? [] : [positiveNumbersCount, sumOfNegative];
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
