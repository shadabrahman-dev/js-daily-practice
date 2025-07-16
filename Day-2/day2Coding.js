//1️⃣ Check if a string is palindrome

let str="racecar";
function palindrome(str) {
  if (str === str.split("").reverse().join("")) {
    console.log("is palindrome ");
  }
  else{
    console.log("is not palindrome");
    
  }
}
palindrome(str);

//2️⃣ Factorial of a number

let num = 5;

function Factorial(num)
{   
    let sum =1;
    for(let i=1; i<=num; i++ )
    {
        sum*=i
    }
    return sum
}
let ans=Factorial(num);
console.log(ans);

//3️⃣ Find second largest number in array

let arr = [1,54,58,,8,8,5,9,94,8,8];

let max=0;
let secondMax=0;

for(let i=0; i<arr.length; i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
for(let i=0; i<arr.length; i++)
{
    if(arr[i]>secondMax && arr[i]!==max)
    {
        secondMax=arr[i];
    }
}
console.log(max);
console.log(secondMax);

