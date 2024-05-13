// Task Title : Reverse String

// Description:
// Implement a JavaScript function that takes a string as input and returns a new string with the characters reversed. For example, if the input is "hello", the output should be "olleh".

let str=prompt('Enter a string')
function ReverseString(){
    let Split=str.split('');
    let Reverse=Split.reverse();
    let newStr=Reverse.join('')
    console.log(newStr)
}

ReverseString(str);



