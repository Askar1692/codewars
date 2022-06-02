/*
Complete the function that calculates the area of the red square,
    when the length of the circular arc A is given as the input.
    Return the result rounded to two decimals.
*/

function squareArea(A){
    let roundLength = A * 4;
    let radius = roundLength/(2*Math.PI)
    let squareArea = Math.pow(radius, 2)
    return (Math.floor(squareArea * 100)/100)
}

console.log(squareArea(14.05));