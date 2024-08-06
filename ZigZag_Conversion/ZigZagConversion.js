
function ZigZag_Convertion(str, numRows) {
    if (numRows === 1 || numRows >= str.length) {
        return str;
    }

    const rows = new Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;

    for (let i = 0; i < str.length; i++) {
        rows[currentRow] += str[i];
    
        if (currentRow === 0 || currentRow === numRows - 1) { 
            goingDown = !goingDown;                            
        } 

        currentRow += goingDown ? 1 : -1;
    }
    return rows.join("");
}

console.log(ZigZag_Convertion("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
