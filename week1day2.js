function cleanString(str) {
    let clean = str.split('c').slice(1).join('c').split('Eek!').reverse().map(elem => elem.split('').reverse().join('')).join('').split('v').slice(1)
    let key = clean.map(elem => elem.charAt(0))
    return key
}