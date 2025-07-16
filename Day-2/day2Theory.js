// -------Function----------
/**
 * functions is a block of code .
 * functions use for re-usable of code 
 * A JavaScript function is a block of code designed to perform a particular task.
 * A JavaScript function is executed when "something" invokes it (calls it).
 */
// Type 1
function functionName()
{
    console.log("hello functions...:)")
}

// functionName();

// Type 2  Arrow function 

const variableFun = ()=>
{
    console.log("variable function...:)");
}
// variableFun();

//Self-Invoking Functions

// (function self()
// {
//     console.log("self invoking function");
// })();

// first class citizens functions in js
// that functions which return a functions or get a functions as a parameter or argumenst is called first class citizens functions

/** 
function firstClass()
{
    return (num)=>
    {
        console.log("the returned function");
        return num*num;
    }
}
let outPut = firstClass();
// console.log(outPut(2));
let sum = outPut(10);
console.log(sum);



function firstClassArguments(fun)
{
    return fun
}

let argFun = firstClassArguments(()=>
{
    console.log("functions as a arguments");
    
})

argFun();



function add(a,b)
{
    return a+b;
}

function outPut(a,b,add)
{
    return add(a,b);
}
let ans=outPut(10,12,add);
console.log(ans);

*/

setTimeout((err)=>
{
    console.log("hello set time out");
},2000)