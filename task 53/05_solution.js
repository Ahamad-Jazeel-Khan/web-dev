// The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


function sum(arr) {
    let sum = 0
    for (const num of arr) {
        if (num < 0) break; 
        sum += num;
    }
     return sum ;
}

console.log(sum([1,2,-3,4,]))