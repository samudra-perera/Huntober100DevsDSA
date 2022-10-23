// const reverseString = (str) => {
//     return str.split('').reverse().join('')
// }

//Done using a for loop
const reverseString = (str) => {
    let reverse = ''
    for(let i = str.length; i >= 0; i--) {
        reverse += str.charAt(i)
    }
    return reverse
}

let res = reverseString(' !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs')
//'sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!! '

