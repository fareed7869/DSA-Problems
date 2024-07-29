function twoSum(numsArr, target) {
  let map = new Map();

  for (let i = 0; i < numsArr.length; i++) {
    let complement = target - numsArr[i];

    if (map.has(complement)) {
      // If the complement exists in the map, return the index of both
      return [map.get(complement), i];
    }
    // Otherwise, add the current element and its index in map
    map.set(numsArr[i], i);
  }
  // If no solution is found, return an empty array
  return [];
}
let numsArr = [1, 9, 12, 8];
let target = 13;
console.log(twoSum(numsArr, target)); // Result : [0, 2]
