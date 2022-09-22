/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let int = n.toString(2)
    let count = 0

    for (let i = 0; i < int.length; i++){
        if (int[i] === "1"){count++}
    }
    return count
};