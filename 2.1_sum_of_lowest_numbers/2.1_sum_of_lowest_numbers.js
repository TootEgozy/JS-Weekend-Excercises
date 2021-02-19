// Ex2.1 - Sum of lowest numbers

// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455



////Problem!////
//I can't turn "7" into 7, so the result of "7" + 3
//is "73" insted of 10

function sumOfLowest2(arr) {
    debugger;
    //Functions for the array methods
    function filterArr(num) { if(num >=0 && num % 1 === 0) return num; }

    function sortArr(a, b) { return (a - b); }

    function reduceArr(acc, val) { 
        val = Number(val);
        return acc += val; }

    //create result
    let result = arr.filter(filterArr).sort(sortArr).splice(0, 2).reduce(reduceArr);
    return result;
}

console.log(sumOfLowest2(["1", 19, 5, 42, 2, 6.5, 77]));
