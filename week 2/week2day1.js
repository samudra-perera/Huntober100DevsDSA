
// // each of these arrays have 3 nested arrays of 3 strings each 
const array1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const array2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const array3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const array4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// // if we were to use our function to compare all the possible pairs
// // ONLY arr1 vs arr2 would return true

// checkEquality(arr1, arr2) => true
// checkEquality(arr1, arr3) => false
// checkEquality(arr1, arr4) => false
// // etc.

// Today's task is to write a function that will check equality between 2 arrays with a particular structure.

// The arrays will:

// Be of equal size
// Will each contain some number (X) arrays
// Each inner array will contain that same number (X) primitive elements
// All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

const checkEquality = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr1[i].length; j++) {
            if(arr1[i][j] !== arr2[i][j]) return false
        }
    }
    return true
}

checkEquality(array1, array4)