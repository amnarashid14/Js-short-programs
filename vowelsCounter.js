// Task Title : Vowel Counter

// Description:
// Create a JavaScript function that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string.

let str='mjugrdghjdeavnmsvc';
count=0;
for (let value of str){
if(value=== 'a'){
    count++;
}
else if(value=== 'e'){
    count++;
}
else if(value=== 'i'){
    count++;
}
else if(value=== 'o'){
    count++;
}
else if(value=== 'u'){
    count++;
}
else{

    console.log('It is not a vowel');
}
    // console.log(value)
}


console.log('String contains ' , count ,'vowels')





