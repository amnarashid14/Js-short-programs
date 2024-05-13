// Task Title: Palindrome Checker

// Description:
// Create a JavaScript function named isPalindrome that takes a string as input and determines whether it is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

function isPalindrome(str){

    //conversion of none alphanumeric character from given str
    // for alpha numeric /[\w\d]/g
let remd=str.replace(/[^a-z0-9]/gi,'').toLowerCase();
//checking of converted and reversed str
return  remd===remd.split('').reverse().join();

}
let str="Hello! 123 This 1 s 2 string.";

console.log(isPalindrome(str));