// const reverseString = (str) => {
//     return str.split('').reverse().join('')
// }

//Done using a for loop
const reverseString = (str) => {
    let reverse = ''
    for(let i = str.length; i >= 0; i--) {
        reverse += str.charAt(i)
    }
    return reverse
}

reverseString('Hello')