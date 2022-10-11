/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = {}
    let col = {}
    let squ = {}
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[0].length; j++){
            if (board[i][j] === '.'){continue}
            if (rows[i] === undefined){rows[i] = []}
            if (col[j] === undefined){col[j] = []}
            if (squ[[Math.floor(i/3), Math.floor(j/3)]] === undefined){squ[[Math.floor(i/3), Math.floor(j/3)]] = []}
            if (rows[i].includes(board[i][j]) || col[j].includes(board[i][j]) || squ[[Math.floor(i/3), Math.floor(j/3)]].includes(board[i][j])){return false}
          rows[i].push(board[i][j]) 
            col[j].push(board[i][j]) 
          squ[[Math.floor(i/3), Math.floor(j/3)]].push(board[i][j]) 
        }
    }
    return true
};