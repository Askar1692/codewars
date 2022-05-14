function between(a, b) {
    let myArray =[];
    for ( let i =a; i <= b; i++){
        myArray.push(i);
    }
    return myArray;
}
console.log(between(-2, 2));