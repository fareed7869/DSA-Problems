function intersectionOfTwoArray(arr1, arr2) {
    //  First convert both arrays to sets
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    // Then find the intersection of both sets
    const intersectionSet = new Set([...set1].filter(num => set2.has(num)));
    // Convert the set back to an array
    return [...intersectionSet];
  }
  const arr1 = [3,6,8,4,5,1,3];
  const arr2 = [2,3,9,0,4,3];
  console.log(intersectionOfTwoArray(arr1, arr2));  // Result: [3, 4]
