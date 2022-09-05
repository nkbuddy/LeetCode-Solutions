/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let combos = [1, 1, 2]
    for (let i = 3; i <= n; i++){
         combos[i] = combos[i-1] + combos[i-2]
    }
    return combos[n]
};