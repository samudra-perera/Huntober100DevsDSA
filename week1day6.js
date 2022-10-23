//Goal
// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

function RemoveNthChar(str, n) {
    let clean = '';
    for(let i = 0; i < str.length; i++) {
        if((i + 1) % n == 0) continue
        clean += str[i]
    }
    return clean
}