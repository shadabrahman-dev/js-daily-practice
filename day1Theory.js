// let, var and const

/* 
  ----- VAR ----
    1. var keyword is use to declare the variable in js 
    2. var can re-declare the variable of same name also re-assign the value of variable
    3. var is Global scop and Functions scop
    4. we can use a variabl before declare it if we create a varibale with var 
    Eg:-
*/

var a = "john";
var a = 45;
a=true;
{
    var a = 10;
    // console.log(a);
}
// console.log(a);

function num()
{
    var test="demo";
    // console.log(a);
};
num();
// ❌ console.log(test);

/**
 --------LET---------
 1. let keyword is use to create the variable in js 
 2. let is blockd scop { }
 3. we can not re-declare the same name variable in let but can re-asingi it
 4. let is introduce in ES6 
 5. we can not use any variable before inisilazing 
 */

 let al = "john Do";
// ❌ let al = 45:
al = 45;

{
    let test1 = "hello";
    // console.log(test1);
}
// ❌ console.log(test1);

/**
  --------CONST---------
  1. we can create a constant variable with the help of const like PI etc
  2. we can not change variable after decalaring 
  3. its also a blocked scop 
  4. we can not leave the variable as undifined we need to put value if we use const
 */

  const PI=3.141;
// ❌  PI=5;
// ❌  const PI = 6.5
// ❌  const num;


//  Loops (for, while and Do while)

// FOR LOOPS
/**
 * use of loops for repeated operations performance 
 * for loops me 3 statement hote hai  (st1 ,st2,st3)
 {
    loops body 
 }
    1. st1 bss ek baar run hota hai 
    2. st2 me conditions hote hai(<=,>=,<,>) ye haar baar check hoga jab tak true hai false hote he loops bresk ho jaye ga 
    3. st3 me increment ya decrement hota hai bss
*/

for(let i=0; i<=5; i++)
{
//  console.log(i);
 
}

// let sum = 0;//
// let n = 4;
// for(let i=1; i<=n; i++)
// {
//     //sum = sum+i;
//     sum+=i;
// }
// // console.log(sum);

// let sum1=1;
// for(let i=1; i<=n; i++)
// {
//     sum1=sum1*i;
// }
// console.log(sum1);


// for(i=10; i>=1; i--)
// {
//     console.log(i);
    
// }

// FOR IN LOOPS 

/**
 * its basicaly use in object but we can also use it in array
 * for(let key of object IN object name)
    {
        loops body
    }

    syntax 
    for(let a in obj)
    {
        * its returens keys only 
        * if wants value also then use objectName[keyName] --obj[a] 
    }
 */

    let obj={
        a:10,
        b:20,
        c:30,
        d:40,
        e:50
    }

    for(let k in obj)
    {
        // console.log(k);
        // console.log(obj[k]);
        // console.log(obj[k] + " in "+k);
    }

// FOR OF LOOPS
/**
 * The JavaScript for of statement loops through the values of an iterable object.
   It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

   syntax
   for (variable of iterable) 
   {
         // code block to be executed
    }
    for(a of arry)
    {
    }
*/


// let str="shadab"
let arr=["10","20","30","40"]
for(a of arr)
    {
        // console.log(a); 
    } 

// WHILE LOOPS
/**
 * Jab tak condition true hai, tab tak loop chalega
   Start hone se pehle hi check karega
 */

//    let i = 0;
//    while(i<=10)
//    {
//     console.log(i);
//     i++;
//    }

// DO WHILE LOOP
/**
 * kam se kam ek baar chale ga 
 */

// let i=3;
// do
// {
//     console.log(i);
//     i++;
// }while(i>4)



