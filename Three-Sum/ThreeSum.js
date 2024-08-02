function threeSum(numsArr, target) {
    numsArr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < numsArr.length - 2; i++) {
        if (i > 0 && numsArr[i] === numsArr[i - 1]) {
            continue;   // Skip duplicates for the first element
        }

        let left = i + 1;
        let right = numsArr.length - 1;

        while (left < right) {
            let sum = numsArr[i] + numsArr[left] + numsArr[right];

            if (sum === target) {
                result.push([numsArr[i], numsArr[left], numsArr[right]]);
                // Skip duplicates for the second and third elements
                while (left < right && numsArr[left] === numsArr[left + 1]) left++;
                while (left < right && numsArr[right] === numsArr[right - 1]) right--;
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}
let numsArr = [-1, 0, 1, 2, -1, -4];
let target = 0;
console.log(...threeSum(numsArr, target)); // Output: [[-1, -1, 2], [-1, 0, 1]]
