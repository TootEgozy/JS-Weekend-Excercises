// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


function isIsogram(word) {

    let result = [];
    let arr = word.toLowerCase().split("");

    //Go over the input and check if the current char is in the result array.  
    function callbackForEach (char) {
        if (!result.includes(char)) result.push(char);
    }
    arr.forEach(callbackForEach);
    //If the result arr, that contains only chars that appear once, is equal in length to the original 
    //word, then the word is an isogram
    return (result.length == arr.length); 
}

console.log(isIsogram("hello"));