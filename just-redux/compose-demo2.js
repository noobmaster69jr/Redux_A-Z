import { compose } from "redux";


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

 const composedFuction = compose(removeSpaces, repeatString, makeUpperCase, makeItalics) 

console.log(composedFuction(str))