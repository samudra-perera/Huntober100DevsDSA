// Today I'd like you to write a function that:

// takes in a given array of strings and move any entries containing the letter 'a' to the front
// then move any remaining entries that have over 3 characters to the back
// please preserve the relative order of entries within their given category
// Example:

// myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// // move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

const arrayChange = (arr) => {
    const containsA = arr.filter(elem => elem.includes('a'))    //Creates Array of just elements that have a
    const noMoreAs = arr.filter(elem => !elem.includes('a'))    //Elements that do not have A anymore
    const longerThanThreee = noMoreAs.filter(elem => elem.length > 3)   //Elements only greater thant length 3
    const remaining = noMoreAs.filter(elem => elem.length <= 3) //Remaining elements
    return containsA.concat(remaining.concat(longerThanThreee)) //concat all elements
}

const myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

arrayChange(myArr)