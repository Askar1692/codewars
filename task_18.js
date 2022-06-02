function sumOfDifferences(arr) {
    let myArr = arr.sort((a,b) => b - a)
    let arrLength = myArr.length;
    return myArr;

}

console.log(sumOfDifferences([-3,-2,-1]));
console.log()