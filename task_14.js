function defineSuit(card) {
    let value1 = 'clubs';
    let value2 = 'diamonds';
    let value3 = 'hearts';
    let value4 = 'spades';
    let cardValueArr = card.split('');
    let lasItem = cardValueArr.pop();
    if (lasItem  === '♣') {
        return value1;
    }
    if (lasItem    === '♦') {
        return value2;
    }
    if (lasItem    === '♥') {
        return value3;
    }
    if (lasItem   === '♠') {
        return value4;
    }
}

console.log(defineSuit("J♥"));