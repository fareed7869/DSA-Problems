//Solution 1 --- with built-in Methods
function lengthOfLastWord(s) {
    s = s.trim();

    const wordsArr = s.split(' ');

    return wordsArr[wordsArr.length - 1].length;
}
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6

//Solution 2 --- without using built in methods

function lengthOfLastWord(s) {
    let length = 0;
    let i = s.length - 1;
    // Step 1: Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    
    return length;
}

//console.log(lengthOfLastWord("Hello World")); // Output: 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
// console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6
