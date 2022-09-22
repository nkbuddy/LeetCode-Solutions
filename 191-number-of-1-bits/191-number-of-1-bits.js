/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    if (n){
        return n.toString(2).match(/1/g).length
    }
    return 0
};