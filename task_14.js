function defineSuit(card) {
    let value1 = 'clubs';
    let value2 = 'diamonds';
    let value3 = 'hearts';
    let value4 = 'spades';
    let cardValue = card.split('');
    if (cardValue[1] || cardValue[2] === '♣') {
        return value1;
    }
    if (cardValue[1] || cardValue[2] === '♦') {
        return value2;
    }
    if (cardValue[1] || cardValue[2] === '♥') {
        return value3;
    }
    if (cardValue[1] || cardValue[2] === '♠') {
        return value4;
    }
}

console.log(defineSuit("J♣"));