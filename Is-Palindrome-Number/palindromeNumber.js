function isPalindrome(num) {
    // Negative numbers are not palindromes
    if (num < 0) {
        return false;
    }

    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    
    return original === reversed;
}
console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false
