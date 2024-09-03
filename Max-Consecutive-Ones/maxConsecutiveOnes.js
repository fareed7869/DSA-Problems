function maxConsecutiveOnes(arr) {
    let maxCount = 0;
    let count = 0;
    let num = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }

    maxCount = Math.max(maxCount, count);
    return maxCount;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2

