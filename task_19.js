/*
The code provided is supposed replace all the dots . in the specified String str with dashes -
But it's not working properly.
Task
Fix the bug so we can all go home early.
    Notes
String str will never be null.*/

let replaceDots = function (str) {
    /*let pattern = new RegExp('\\.','g')
        return str.replace(pattern,'-');*/
    return str.replace(/\./g, '-');
}

console.log(replaceDots("one.two.three"))