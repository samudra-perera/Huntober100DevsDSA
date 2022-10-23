// Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

function flippaLetta(str) {
    const dictionary = {
        'a': 'Z', 'A': 'z', 'b': 'Y', 'B': 'y',
        'c': 'X', 'C': 'x', 'd': 'W', 'D': 'w',
        'e':'V', 'E':'v', 'f': 'U', 'F':'u', 
        'g':'T', 'G':'t', 'h': 'S', 'H': 's',
        'I':'r', 'i':'R', 'J': 'q', 'j': 'Q',
        'K': 'p', 'k':'P', 'L':'o', 'l':'O',
        'M':'n', 'm':'N', 
        'z':'A', 'Z':'a', 'y':'B', 'Y':'b',
        'x':'C', 'X':'c', 'w':'D', 'W': 'd',
        'v':'E', 'V':'e', 'u':'F', 'U':'f',
        't':'G', 'T':'g', 's':'H', 'S':'h',
        'r':'I', 'R':'i', 'q': 'J', 'Q':'j',
        'p':'K', 'P':'k', 'o':'L', 'O':'l',
        'n':'M', 'N':'m'
    }
    let clean = '';
    for(let i = 0; i < str.length; i++) {
        if(dictionary[str[i]]) {
            clean+=dictionary[str[i]]
        } else {
            clean+=str[i]
        }
    }
    return clean
}

flippaLetta('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH')