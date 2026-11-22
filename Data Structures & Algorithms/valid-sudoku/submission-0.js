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
        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {

                for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
                    for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
                        if (board[r][c] === ".") continue
                        if (tempData.has(board[r][c])) return false
                        tempData.add(board[r][c])
                    }
                }
                tempData.clear()
            }
        }
        return true
    }
}