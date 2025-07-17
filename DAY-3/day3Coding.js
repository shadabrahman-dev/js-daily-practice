//🔁 1. Capitalize First Letter of Each Word
/*
function capitalize(str)
{
    let capitalizeStr=str.split(" ");
    let capitalizeWord=capitalizeStr.map((word)=>
    {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return capitalizeWord.join(" ");
}
let capitalizeWord = capitalize("hii my name is shadab rahman xyz");
console.log(capitalizeWord);

*/
//  2. Count Occurrences of a Specific Element in Array

//3. Sum of Digits in a Number
/** 
let num=12345;

function sumOfElement(num)
{
    let sum = num.toString().split("").reduce((acc,cur)=>{
        return Number(acc)+Number(cur);
    },0)
    return sum;
}
let ans=sumOfElement(num);
console.log(ans);
*/

// 5. Check if Array is Sorted (Ascending)
let arr = [1, 2, 3, 4, 5];

function arrayShorted(arr)
{
    for(let i=0; i<=arr.length; i++)
    {
        if(arr[i]>arr[i + 1])
        {
            return false;
        }
    }
    return true
}
let outPut = arrayShorted(arr);
console.log(outPut);
