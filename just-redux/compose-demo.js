function removeSpaces(str) {
  return str.split(' ').join('');
}

function repeatString(str) {
  return str.repeat(2);
}

function makeUpperCase(str) {
  return str.toUpperCase();
}

function makeItalics(str) {
  return str.italics();
}

let str = 'hello there how are you ?';

console.log(makeItalics(makeUpperCase(repeatString(removeSpaces(str)))));

// removeSpaces -> repeatString -> makeUpperCase -> makeItalics

// alternatives


const func = [ removeSpaces, repeatString, makeUpperCase, makeItalics] 

const res = func.reduce((prev, curr) => { 
    return curr(prev)
}, str) 

console.log(res)