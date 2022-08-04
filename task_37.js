
/*
Given a string of digits, you should replace any digit below 5 with '0'
    and any digit 5 and above with '1'. Return the resulting string.
*/

function fakeBin(x) {
    const val = Array.from(x)
    const res = val.map(Number)
    for (let i = 0; i < res.length; i++) {
        if (res[i] >= 5) {
            res[i] = 1
        } else {
            res[i] = 0
        }
    }
    return res.join("")
}

console.log(fakeBin('45385593107843568'))

//////////////////
/*
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}*/

/////////////////////////
