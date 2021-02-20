// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(strA, strB) {

    let result = [];
    let arr = [];

    (strB)? //Does strB exist?
    arr = strA.concat(strB).toLowerCase().split("") : 
    arr = strA.toLowerCase().split("");
   
    //Go over the input and check if the current char is in the result array.  
    function callbackForEach (char) {
        if (!result.includes(char)) result.push(char);
    }
    arr = arr.forEach(callbackForEach);
    return result.join("");

}
console.log(longest("abb11111bbcccCCC", "abCDe"));