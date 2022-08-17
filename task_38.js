function positiveSum(arr) {
    let positiveNumbers = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            positiveNumbers = arr[i]

        }
    }
    /*const result = positiveNumbers.reduce((x, y) => x + y, 0)
    return result*/
    return positiveNumbers
}

console.log(positiveSum([1, -2, 3, 4, 5]))