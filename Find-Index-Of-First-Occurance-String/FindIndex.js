function strStr(haystack, needle) {
    if (needle === "") return 0;

    let needleLength = needle.length;
    let haystackLength = haystack.length;

    for (let i = 0; i <= haystackLength; i++) {
        if (haystack.slice(i, i + needleLength) === needle) {
            return i;
        }
    }
    return -1;
}

// Example usage:
console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1
