// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


function toCamelCase(str) {
    let tempArr = [];
    str.includes("-")? tempArr = str.split("-") : tempArr = str.split("_");

    function callbackMap(word, index) {
        if (index > 0) {
            let first = word.charAt(0).toUpperCase();
            word = first.concat(word.slice(1));

        }
        return word;
    }
    return tempArr.map(callbackMap).join("");
}

console.log(toCamelCase("hello_my_name_is_toot"));