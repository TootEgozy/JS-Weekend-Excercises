// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers

//After sorting the array the different number will be either in the 
//first or in the last place of the array.
//Compare number in index 0 with the number in index 1: 
//if they are equal, return the last number.
//if they are not equal, return the first number.

function findUnique (arr) {
    let tempArr = arr.sort(function(a, b) {return (a - b);});

    if(tempArr[0] == tempArr[1]) { return tempArr[tempArr.length -1];}
    else return tempArr[0];
}

console.log(findUnique([ 0, 1, 0, 0, 0 ]));
