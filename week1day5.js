function punParser(str) {
    str = str.split(',')
    let puns = []
    for(let i = 0; i < str.length; i++) {
        if(checkSpace(str[i])) {
            continue
        }
        if(checkDogWord(str[i])) {
            continue
        }
        if(lengthNotModoluFive(str[i])) {
            continue
        }
        if(unicodeNotOdd(str[i])) {
            continue
        }
        

        puns.push(str[i])
    }
    return puns
}

const example = 'The Dog Boss, Whoops ,abcd,abcde,aa'

//Helper functoions to deal with all the conditions
const checkSpace = (str) => {   //Function to check is there is a space at the beginning or end
    if(str[0] == ' ' || str[str.length-1] == ' ') {
        return true
    }
    return false
}

const checkDogWord = (str) => { //Function to check if bark, dog or bone is included in the string
    if(str.toLowerCase().includes('bark') || str.toLowerCase().includes('dog') || str.toLowerCase().includes('bone')) {
        return true
    }
    return false
}

const lengthNotModoluFive = (str) => {//Checks if the function is not gonna 
    return str.length % 5 == 0 ? true : false
}

const unicodeNotOdd = (str) => {
    return (str.charCodeAt(0) + str.charCodeAt(str.length - 1)) % 2 == 0 ? true : false
}

punParser(example)