//Goal
// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

function RemoveNthChar(str, n) {
    let clean = '';
    for(let i = 0; i < str.length; i++) {
        if((i + 1) % n == 0) continue
        clean += str[i]
    }
    return clean
}

RemoveNthChar('sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!! ', 3)
//'sfmglyvi 1 DVVP WLDM. #100wVEH dv tl tvg!!'