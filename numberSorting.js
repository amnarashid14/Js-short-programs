//Task Title: Number Sorting

// Task Description: Create a javascript function that takes an array as input and sort it in accending order without using .sort() built in method.


function sortNumbers(num) {
    // new sorted empty array
    const sorted = [];

    for (const n of num) {
        let idx = 0;// index for first element
        while (idx < sorted.length && sorted[idx] < n) {
            idx++;
        }
        //number placement
        sorted.splice(idx, 0, n);
    }
    // new sorted array
    return sorted;
}
console.log(sortNumbers(22,5,7,89));//5,7,22,89
