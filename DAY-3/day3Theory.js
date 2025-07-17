// // Array is collection of elements 

// // let arr=[1,2,3,4,5,6];

// // Arry constructer 

// let arr = new Array(1,2,2,3,4,5,'shadab',true);
// // console.log(arr);
// // console.log(arr.length);
// // arr.splice(1,2,"yoyo");
// // console.log(arr);

// console.log(arr.slice(4,7));
let arr = [4,9,2,0,3,5];
/**
 * .push() array ke end me ek ya zyada values add karta hai.

        let arr = [1,2,3,8,9];
        arr.push("name");
        console.log(arr);
 */
/**
 * .pop() array ke last value ko hata deta hai.

    arr.pop();
    console.log(arr);
*/
/**
 * .shift() array ke first element ko remove karta hai.
    
    arr.shift();
    console.log(arr);
*/
/***
 * .unshift() array ke start me value add karta hai.
 * 
    arr.unshift("name");
    console.log(arr);
 */
/**
 * .indexOf() value ka position (index) batata hai. Nahi mila to -1 deta hai.
    
    console.log(arr.indexOf(9));
*/
/**
 *  .includes() check karta hai ki value array me hai ya nahi.
    
    let ans=arr.includes(8);
    console.log(ans);

    // return True || Fasle value
*/
    
/**
 * .slice() array ka part nikalta hai, original array change nahi hota.
 *  shylow copy done by slice only reference the origanl value
    
        
    let ans=arr.slice(1,3)// last index was not inluded
    console.log(ans);
 */

/**
 * .splice() array se elements delete/add karta hai. Original array change hota hai.
 * create deep copy 
 
    console.log(arr);
    arr.splice(1,2,"new data");
    arr.splice(1,0,"new data");// not want to remove any value from arry 
    console.log(arr);
    
 */

/**
 * .map() array ke har element pe kaam karke ek naya array banata hai.
 
    let ans=arr.map((value)=>
    {
        return value+value;
    })
    console.log(ans);
 */
/**
 * .filter() array me se sirf condition match karne wale items return karta hai.

Interview: "Specific condition wale elements ka array kaise banega?"

      let even=arr.filter((val)=>
      {
         if(val%2===0)
         {
            return val
         }
      })
      console.log(even);

 */

/**
 * .reduce() array ke elements ko combine karke ek single value banata hai.
Interview: "Sum, multiplication, average ya combined value kaise nikaloge?"
   
   let sumOfElement = arr.reduce((acc,cur)=>
   {
      let sum = acc+cur;
      return sum
   },0)

   console.log(sumOfElement);

 */
/** .sort() method sorts an array alphabetically || ascending order
 *  .reverse() method reverses the elements in an array:
 *  By combining sort() and reverse(), you can sort an array in descending order:
 

      console.log(arr.sort());
      console.log(arr.reverse());
   
 */




