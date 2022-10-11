/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = new Set(nums)
    let seq = 0
    let length
    for (let num of nums){
        if (!map.has(num - 1)){
            length = 0
            while (map.has(num++)){
                length++
            }
        }
    if (length > 0) {seq = Math.max(seq, length)}
    }
    return seq
};