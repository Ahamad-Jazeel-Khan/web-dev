// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorString(str) {
    // Reverse the string
    let reversedStr = str.split('').reverse().join('');
    // Concatenate the original and reversed strings
    return str + reversedStr;
}

// Test the function
console.log(mirrorString("hello")); // Output: "helloolleh"
console.log(mirrorString("mirror")); // Output: "mirrorrorrim"
