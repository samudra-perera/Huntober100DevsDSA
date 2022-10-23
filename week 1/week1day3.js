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

let res = cleanDay3Str('e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs', realKey)
//' !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs'