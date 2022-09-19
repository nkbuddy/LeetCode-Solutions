/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let first = 0
    let second = 0
    for (let n of nums){
       let temp = Math.max(first + n, second)
       first = second
       second = temp
    }
    return second
};