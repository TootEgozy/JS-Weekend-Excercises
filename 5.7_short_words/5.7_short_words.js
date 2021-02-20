// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

shortestWord = (words) => words.split(" ").reduce((acc, val) => (val.length < acc.length)? val : acc).length;

console.log(shortestWord("George W Washington"));