function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapST = {};
    const mapTS = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check if there's already a mapping for charS in mapST
        if (mapST[charS] === undefined) { // undefined means not exist
            mapST[charS] = charT;
        } else if (mapST[charS] !== charT) {
            return false;
        }

        // Check if there's already a mapping for charT in mapTS
        if (mapTS[charT] === undefined) {
            mapTS[charT] = charS;
        } else if (mapTS[charT] !== charS) {
            return false;
        }
    }

    return true;
}

console.log(isIsomorphic("egg", "add"));   // Output: true
console.log(isIsomorphic("foo", "bar"));   // Output: false
console.log(isIsomorphic("paper", "title")); // Output: true
