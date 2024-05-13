// Task Title: Prime Number Checker

// Description:
// Create a web application that checks whether a given number is a prime number or not. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

let num1=parseInt(prompt('Enter a number'));

if (num1 <=1) 
{
    exit();
}
else{
    if(2 <= num1){
        if(num1 % 2 === 0)
            { 
            console.log('Its a composite number')
            }
        else 
            {console.log('Its a prime number');

            }
    }
    else{
        console.log('Its is less than 1 or a -ve integer');
    }
}
