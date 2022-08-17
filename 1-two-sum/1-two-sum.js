/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seenNums = {}
    for (let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if (seenNums[diff] !== undefined) return [i, seenNums[diff]]
        seenNums[nums[i]] = i 
    }
};