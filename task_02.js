/*
Создайте функцию, которая принимает целое число в качестве аргумента
и возвращает "Четное" для четных чисел или "Нечетное" для нечетных чисел.
 */
function even_or_odd(number) {
    if (number%2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(even_or_odd(5));
