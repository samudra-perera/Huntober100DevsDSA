// Please create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. The inner primitive values can move to any of the inner arrays, but the length of those inner arrays must always remain X. Other than that, shuffle away! Do your best to have a thorough, random shuffle in a single call of your function.

//Egs
// myArray = [[1,2,3],[4,5,6],[7,8,9]]
// // shuffle shuffle
// => [[8,3,5],[2,4,9],[6,7,1]]

const shuffle = (arr) => {
    let flatArray = [].concat(...arr)
    //Use the fisher Yate Algo to randomly Shuffle the flatten Array
    flatArray = fisherYates(flatArray) //Returns a randomly sorted flattened array
    //Pop off the elemeents of the shuffled array and put into the original array
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
        //Pops off the top value in the array and stores in temp
            arr[i][j] = flatArray.pop() 
        }
    }
    return arr
}

const fisherYates = (arr) => {
    for(let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}

shuffle([[1,2,3],[4,5,6],[7,8,9]])