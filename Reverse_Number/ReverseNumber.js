function reverseNumber(num) {
    const INT_MAX = Math.pow(2, 31) - 1;

    let isNegative = num < 0;
    num = Math.abs(num);
    let reversed = 0;

    while (num !== 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);

        // Check for overflow before updating reversed
        if (reversed > Math.floor(INT_MAX / 10) || (reversed === Math.floor(INT_MAX / 10) && digit > 7)) {
            return 0;
        }

        reversed = reversed * 10 + digit;
    }

    return isNegative ? -reversed : reversed;
}

console.log(reverseNumber(123)); // Output: 321
console.log(reverseNumber(-2147483648)); // Output: 0 (overflows 32-bit integer range)
