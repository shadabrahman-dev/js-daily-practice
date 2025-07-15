// Q1: Swap two numbers without third variable
/** 
let a = 10;
let b = 30;
let c = 60
a = a + c; //70
c = a - c ; //10
a = a - c; //60
console.log(a,b,c);


let a = 10;
let b = 20;

a = a+b;
b = a-b;
a = a-b;
console.log(a,b);
*/

// Q2: Check if number is even or odd
/** 
let num = 10;
if(num%2 ===0)
{
    console.log(`${num} is Even`);
}else
{
    console.log(`${num} is odd`);
}
// using ternary oprator

let num = 9;
console.log(num%2===0 ? "even":"odd");


// Q3: Reverse a string

let str = "Mumbai";

let newStr = str.split("").reverse().join("");
console.log(newStr);


// Q4: Find largest number in array
let arr = [99, 10, 5, 60, 80, 1, 5];

// console.log(Math.max(...arr));

// let num=[0];
// for(let i=1; i<=arr.length;i++)
// {
//     if(arr[i]>num)
//     {
//         num = arr[i]
//     }
// }
// console.log(num);

function maxArr() {
  let num = [0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  return num;
}
console.log(maxArr());


// Q5: Count vowels in a string

let str =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a";
let count = 0;

for(let val of str)
{
    if("aeiou".includes(val))
    {
        count++;
    }
}
console.log(count);
*/





