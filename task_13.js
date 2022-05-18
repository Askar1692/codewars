function nextInLine(arr, item) {
    var addItem = arr.push(item);
    var delItem = arr.shift(item);
    return delItem;
}
console.log(nextInLine([5,6,7,8,9],1));