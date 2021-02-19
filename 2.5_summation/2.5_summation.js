// Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//Pure math way :D

function sumMath(n) {
    return (n*(n+1))/2
}


//Array way:
//First create an array from 1 to n with a for loop
//Reduce the array with a sum function. 
//Return the sum.

function sumUpToNum(n) {
    let tempArr = [];

    for(i = 1; i <= n; i++) {
        tempArr.push(i);
    }

    let sum = tempArr.reduce((acc, val) => acc += val);
    return sum;
}

console.log(sumUpToNum(8));
console.log(sumMath(8));

