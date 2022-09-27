/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let triangle = []
    for (let i = 0; i <= rowIndex; i++){
       triangle[i] = []
       triangle[i][0] = triangle[i][i] = 1 
    }
    for (let j = 2; j <= rowIndex; j++ ){
        for (let k = 1; k < j; k++){
            triangle[j][k] = triangle[j -1][k] + triangle[j -1][k - 1]
        }
    }
    return triangle[rowIndex]
};