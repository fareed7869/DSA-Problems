//Solution 1 with XOR both bits same result 0,
// Time Complexity:  O(n)
// Space Complexity: O(1)

function singleNumber(nums) {
    let result = 0;
    for (let num of nums) {
      result ^= num;
    }
    return result;
  }
  
  console.log(singleNumber([1, 2, 3, 4, 2, 1, 4])); // Output 3
  console.log(singleNumber([1])); // Output 1
  
  
// Solution 2 Hash Map
// Time Complexity:  O(n)
// Space Complexity: O(n)

  function singleNumber(nums) {
      const frequency = {};
      for (let num of nums) {
          frequency[num] = (frequency[num] || 0) + 1;
      }
      for (let key in frequency) {
          if (frequency[key] === 1) {
              return parseInt(key);
          }
      }
  }
  
  console.log(singleNumber([1, 2, 3, 4, 2, 1, 4])); // Output 3