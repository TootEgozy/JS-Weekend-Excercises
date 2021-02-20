// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(string) {

    function callBackMap(char, index) {
        return charArr = char.repeat(index+1).split("").map((letter, index) => (index < 1)? letter.toUpperCase() : letter.toLowerCase()).join("");
    }
    return tempArr = string.split("").map(callBackMap).join("-");
}


console.log(accum("abcdEFgH"));