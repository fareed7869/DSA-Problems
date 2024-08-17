function removeDuplicates(nums) {

    if (nums.length === 0){
        return 0;
    } 

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let newLength = removeDuplicates(nums);
console.log(newLength); // Output: 5
console.log(nums.slice(0, newLength)); // Output: [0, 1, 2, 3, 4]
