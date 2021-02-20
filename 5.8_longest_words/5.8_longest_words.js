// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.




//////////////Problem!
//filter is not working

function shortestWord (words) {

    //the length of the longest word. It works
    let longestlength = words.split(" ").reduce((acc, val) => (val.length > acc.length)? val : acc).length;
    
    //Error "filter is not a function". Why?
    return words.filter(word => (word >= longestlength));
}
console.log(shortestWord("George W Washington"));