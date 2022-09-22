/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let count = new Array(n+1).fill(0)
    offset = 1
    for (let i = 1;i <= n; i++){
        if (offset * 2 === i){offset = i}
    
       count[i] = 1 + count[i - offset]

    }
    return count
};