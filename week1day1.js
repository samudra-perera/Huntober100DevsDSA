//OUTPUT
// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."

// //KEY 
// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'
// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

function decoder(str) {
    let map = {'0':'O', '5':'S', '1':'I', '6':'G', '2':'Z', '7':'L', '3':'E', '8':'B', '4':'h', '9':'q',
'O':'0', 'S':'5', 'I':'1', 'G':'6', 'Z':'2', 'L':'7', 'E':'3','B':'8','h':'4','q':'9'}
    let strArr = str.split('')
    for(let i = 0; i < strArr.length; i++) {
        if(map[strArr[i]]) {
            strArr[i] = map[strArr[i]]
        } 
    }
    return strArr.join('')
}

//This is O(n) time complexity and it is o(1) space complexity

decoder("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")

// Some of my web development skills include:
// • Design: UI/UX, Figma/Adobe XD, Adobe Photoshop, Adobe Illustrator, SEO, and more.
// • Frontend: HTML5, CSS3/Sass, JavaScript/jQuery, React, TypeScript, Next.js, and more.
// • Backend: PHP, Node.js, Express.js, Mongoose, MongoDB, MySQL, REST API, and more.
// • Development: WordPress Development, Git, Netlify, NPM, cPanel and more.