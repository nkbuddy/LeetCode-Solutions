/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let count = []
    while (n > 0 ) {
        let int = n.toString(2)
        count.unshift(int.match(/1/g).length)
        n -= 1
    }
    count.unshift(0)
    return count
};