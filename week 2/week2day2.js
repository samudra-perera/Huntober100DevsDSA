// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The given primitive value will only occur once in the array
// The array passed in should be mutated by this function. Scandalous, I know.

// Example:
// myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// // call move left function with 'xyz' and myArray as arguments
// console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// // call move left function again, same arguments
// // Note that 'xyz' is already as far left as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// // call move right function this time, with 2 and myArray as arguments
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// // call move right function again, same arguments
// // Note that 2 is already as far right as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change

const moveLeft = (arr, elem) => {
    //check if element is first elem ...cannot move any further
    if(arr.indexOf(elem) == 0) return arr 
    
    indexElem = arr.indexOf(elem)
    elemLeft = arr[indexElem - 1]   //Storing the element to the left of the target element
    arr[indexElem] = elemLeft   //Swapping the left Element with the target Element
    arr[indexElem - 1] = elem   //Reassigning the left index to the target element
    return arr
}

const moveRight = (arr, elem) => {
    //Check if element is the last element..cannot move right any further
    if(arr.indexOf(elem) == arr.length - 1) return arr

    indexElem = arr.indexOf(elem)
    elemRight = arr[indexElem + 1] // Storing the element to the right
    arr[indexElem] = elemRight
    arr[indexElem + 1] = elem
    return arr
}