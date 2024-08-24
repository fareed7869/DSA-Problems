function pascalsTriangle(numRows) {

    const triangle = [];

    for (let i = 0; i < numRows; i++) {

        const row = [1];

        for (let j = 1; j < i; j++) {
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }

        if (i > 0) {
            row.push(1);
        }

        triangle.push(row);
    }
    
    return triangle;
}

console.log(pascalsTriangle(5));
/* Output:
[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
]
*/
console.log(pascalsTriangle(1)); // Output: [[1]]
