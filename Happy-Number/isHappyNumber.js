function isHappy(n) {
    const seen = new Set();  // To detect cycles, if number repeat
    
    function sumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    while (n !== 1) {
        n = sumOfSquares(n);
        // If n is already in the set, a cycle is detected
        if (seen.has(n)) {
            return false;
        }
        seen.add(n);
    }
    // If n becomes 1 then it is happy number
    
    return true;
}
console.log(isHappy(19)); // Output: true
console.log(isHappy(2));  // Output: false
