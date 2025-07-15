// A string is a sequence of characters enclosed in quotes.
// In JavaScript, we use single or double quotes to create strings.
// For example: "Hello" is a string.
/**
 * String = text ya characters ka group
   Jo " " double quotes ya ' ' single quotes ke andar hota hai
 */
//------Template literals-----
  /**  Template literals are a modern way of writing strings using backticks.
   We can insert variables or expressions inside ${}.
   It's useful for writing dynamic messages and multiline strings.
   */
/*
let srt = "shadab";
let str = 'rahman'
let tStr = `Shadab ${str}`; // Template literals
console.log(tStr);


// escape sequensce char

let eStr = 'shadab\'s' //shadab's // \n for new line
console.log(eStr);


// String methods

let str="Shadab "
console.log(str.length);
console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(2));
console.log(str.concat("hello" +" ", str));
console.log(str.slice(2,4));
console.log(str.slice(3));
console.log(str.trim());
console.log(str);
*/


let str = "Shadab Rahman";

// console.log(str.split(" "));
// console.log(str.substring());
// for(let i=str.length-1; i>=0; i--)
// {
//     console.log(str[i]);
// }


// revers a string

let reversStr = str.split("").reverse().join("");
console.log(reversStr);
