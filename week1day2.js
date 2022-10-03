function cleanString(str) {
    return str.split('c').slice(1).join('c').split('Eek!').reverse().map(elem => elem.split('').reverse().join('')).join('').split('v')
}



