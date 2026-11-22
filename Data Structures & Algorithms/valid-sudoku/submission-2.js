class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const tempData = new Set()
        //validating rows
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === ".") {
                    continue
                }
                if (tempData.has(board[i][j])) {
                    return false
                }
                tempData.add(board[i][j])
            }
            tempData.clear()
        }
        //validating columns
        for (let col = 0; col < board.length; col++) {
            for (let row = 0; row < board.length; row++) {
                console.log("board[row][col]", board[row][col])
                if (board[row][col] === ".") {
                    continue
                }
                if (tempData.has(board[row][col])) {
                    return false
                }
                tempData.add(board[row][col])
            }
            tempData.clear()
        }
        // validating 3*3 boxes
        for (let startRow = 0; startRow < 9; startRow += 3) {
            for (let startCol = 0; startCol < 9; startCol += 3) {

                for (let r = startRow; r < startRow + 3; r++) {
                    for (let c = startCol; c < startCol + 3; c++) {
                        if (board[r][c] === ".") continue;
                        if (tempData.has(board[r][c])) return false;
                        tempData.add(board[r][c]);
                    }
                }

                tempData.clear();
            }
        }
        return true
    }
}