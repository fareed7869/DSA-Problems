function longestSubstringWithoutRepeatingCharacters(str) {
    let windowStart = 0;
    let maxLength = 0;
    const charIndexMap = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];

        if (rightChar in charIndexMap) {
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }
        charIndexMap[rightChar] = windowEnd;
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}
const str = "abcabcbsbsdr";
console.log(longestSubstringWithoutRepeatingCharacters(str)); // Output: 4
