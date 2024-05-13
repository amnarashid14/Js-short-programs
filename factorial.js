// Task Title : Factorial Calculator

// Description:
// Write a JavaScript function that calculates the factorial of a given non-negative integer. The factorial of a number is the product of all positive integers less than or equal to that number.

function factorial(n){

    // 0!=1
    if (n === 0 ) 
        {
            n === 1 ;
        }

     //n!=n(n-1)!
        let fact=1;
        
    for ( let i=1 ; i<=n ; i++ )   
        {
            fact *= i  ;
        }
        return fact;
 }

console.log(factorial(4));