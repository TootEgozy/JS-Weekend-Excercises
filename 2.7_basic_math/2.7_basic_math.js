// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7) // Output: 11
// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7


function testOp(oper) {
    const regex = RegExp('[+-/*]');
    return (oper.length === 1) && regex.test(oper);
}

function basicMath(oper, value1, value2) {
    return eval(String(value1)+String(oper)+String(value2));
}

console.log(basicMath("+" , 2, 22));

 