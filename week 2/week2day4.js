// Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

// Oh, and go ahead and mutate the given array. We're livin' on the wild side!

// myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// // call move up function with 'h' and myGrid
// console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// // call move up function again, same arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// // call move up function again, same arguments
// // Note that 'h' is already as far up as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// // call move down function this time, with 'f' and myGrid as arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// // call move down function again, same arguments
// // Note that 'f' is already as far down as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

const moveUp = (arr, elem) => {
    if(arr[0].includes(elem)) return arr    //If the top array includes the element, it cannot move further up
    //First we have to find the index of the elem
    //Then we need to subtract one from the row indexed Array
    let rowIndex, elemIndex
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].indexOf(elem) >= 0) {//includes 0 since the first index (0) is a falsy value
            [rowIndex, elemIndex] = [i, arr[i].indexOf(elem)] //This gives up the row of the element and the index in that row
            break    
        }
    }
    //Swapping elements now
    //Find the element directly above the parameter Elem
    let topElem = arr[rowIndex - 1][elemIndex]
    arr[rowIndex][elemIndex] = topElem   //Swapping the spots of the top elem with teh param elem
    arr[rowIndex - 1][elemIndex] = elem  //reassigning the top elem as the param elem 
    return arr  //Return array
}

const moveDown = (arr, elem) => {
    if(arr[arr.length - 1].includes(elem)) return arr   //Check if the bottom row contains the elem ...cannot move futher down
    let rowIndex, elemIndex
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].indexOf(elem) >= 0) {//includes 0 since the first index (0) is a falsy value
            [rowIndex, elemIndex] = [i, arr[i].indexOf(elem)]  //This gives up the row of the element and the index in that row
            break  
        }
    }
    let bottomElem = arr[rowIndex + 1][elemIndex]
    arr[rowIndex][elemIndex] = bottomElem
    arr[rowIndex + 1][elemIndex] = elem
    return arr
}

let arr = [[1,2,3],[4,5,6]]