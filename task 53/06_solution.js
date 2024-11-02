// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowelsCounter(str) {
    let vowels = ['a','e','i','o','u']
    let count = 0

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(vowelsCounter("how are you"))