// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4


//work process: 
//1. Map the array. The array in index n, should return 2 in the power n.
//2. Reduce the array, sum the integers. 
//3. return the sum.
//***Added: reverse the array. The index power should go from right to left.


function binaryToDecimal(binArr) {

    //Mapping function
    function toInteger(num, index) {
        if (num == 0) return 0;
        else {
            num = Math.pow(2, index);
            return num;
        }
    }

    //Reducing function
    function sumIntegers(acc, val) {
        acc += val;
        return acc;
    }
    let result = binArr.reverse().map(toInteger).reduce(sumIntegers);
    return result;
}


const binArrTest1 = [0, 0, 0, 1]; //==> 1
const binArrTest2 = [0, 0, 1, 0]; //==> 2
const binArrTest3 = [0, 1, 0, 1]; //==> 5
const binArrTest4 = [1, 0, 0, 1]; //==> 9
const binArrTest5 = [0, 0, 1, 0]; //==> 2
const binArrTest6 = [0, 1, 1, 0]; //==> 6
const binArrTest7 = [1, 1, 1, 1]; //==> 15
const binArrTest8 = [1, 0, 1, 1]; //==> 11

console.log(binaryToDecimal(binArrTest7));