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
    console.log(a);
}
console.log(a);

function num()
{
    var test="demo";
    console.log(a);
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
    console.log(test1);
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