
// Count the Number of Vowel Strings in Range

function isVowel(char) {
    return 'aeiouAEIOU'.includes(char);
}

var vowelStrings = function(words, left, right) {
     let count = 0;
    
    for (let i = left; i <= right; i++) {
        let word = words[i];
        if (isVowel(word[0]) && isVowel(word[word.length - 1])) {
            count++;
        }
    }
    
    return count;
};

console.log(vowelStrings(["are","amy","u"],0,2)) // output 2

console.log(vowelStrings(["hey","aeo","mu","ooo","artro"],1,4)) // output 3
