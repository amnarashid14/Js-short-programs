// Task Title : Sum of Array Elements

// Description:
// Create a JavaScript function that takes an array of numbers as input and returns the sum of all the elements in the array.
let array=[22,71,12,7,55,88];
count=0;
let sumOfArray=array.reduce((previous,next)=>{
return previous+next + count;
})

console.log(sumOfArray)



