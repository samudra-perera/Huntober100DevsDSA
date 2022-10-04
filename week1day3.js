const realKey = {
    'S': ' ', 'p': ' ', 'a': ' ', 'c': ' ', 'e': ' '
}

const exampleKey = {
    'A': ' ', '_': ' ', 'K': ' ', 'E': ' ', 'Y': ' ', '!': ' '
}

let str1 = 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'

function cleanDay3Str(str, key) {
    str = str.split('')
    for(let i = 0; i < str.length; i++) {
        if(key[str[i]]) {
            str[i] = ' '
        }
    }
    return str.join('')
}
