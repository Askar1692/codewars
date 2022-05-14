/*
У меня есть кошка и собака.
Я получил их одновременно с котенком / щенком.
Верните их соответствующий возраст теперь как [человеческие годы, кошачьи годы, собачьи годы]

человеческие Годы >= 1
человеческие годы - это только целые числа
Кошачьи Годы
15 кошачьих лет за первый год
+9 кошачьих лет на второй год
+4 кошачьих года за каждый последующий год
Собачьи Годы
15 собачьих лет за первый год
+9 собачьих лет за второй год
+5 собачьих лет за каждый последующий год
 */
var humanYearsCatYearsDogYears = function(humanYears) {
    var firstYearHumanCatDog = [1,15,15];
    var secondYearHumanCatDog = [2,24,24];
    if(humanYears ===1){
        return firstYearHumanCatDog;}
    if(humanYears ===2){
        return secondYearHumanCatDog;}
    else {
        return [humanYears,(4*(humanYears-2)) +24, (5*(humanYears-2)) +24]
        }
}
console.log(humanYearsCatYearsDogYears(10));