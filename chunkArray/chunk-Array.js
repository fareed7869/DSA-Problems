function chunkArray(arr, size) {
    let chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      // Slice the array from index i to i + size
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  }
 
  let array = [1, 2, 3, 4, 5, 6, 7,8,9];
  let size = 4;
  let chunkedArray = chunkArray(array, size); // Output: [[1,2,3,4], [5,6,7,8], [9]]

  