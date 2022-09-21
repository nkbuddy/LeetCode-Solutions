/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length
    let col = matrix[0].length
    let left = 0
    let right = rows * col -1
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        let midVal = matrix[Math.floor(mid / col)][mid % col]
        
        if (midVal === target) return true
        if (midVal > target){right = mid - 1}
        else {left = mid + 1}
    }
    return false
};