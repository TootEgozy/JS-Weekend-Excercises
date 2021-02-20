// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H

//The function name is just for fun :D

initiateInitials = (name) => name = name.split(" ").map(word => word.charAt(0)).join(".").toUpperCase(); 





console.log(initiateInitials("toot egozy"));